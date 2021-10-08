package br.ufes.gamecenter.apirest;

import br.ufes.gamecenter.apirest.controller.UserController;
import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.model.GameStatus;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.Date;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class ApirestApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	private ObjectMapper mapper = new ObjectMapper();

	private String userLogin = "";
	private String userPassword = "";

	private CountDownLatch lock = new CountDownLatch(1);

	@Autowired
	private UserController userController;

	@Test
	@Order(1)
	public void contextLoads() throws Exception {
		assertThat(userController).isNotNull();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
	}

	@Test
	@Order(2)
	public void createUserShouldReturnUser() throws Exception {
		this.userLogin = UUID.randomUUID().toString();
		this.userPassword = UUID.randomUUID().toString();
		String requestJson = "{\"login\": \""+ this.userLogin + "\", \"password\": \""+ this.userPassword + "\"}";

		this.mockMvc.perform(post("/api/user").contentType(MediaType.APPLICATION_JSON).content(requestJson))
				.andDo(print())
				.andExpect(status().isOk());
	}

	@Test
	@Order(3)
	public void userShouldLogin() throws Exception {
		String requestJson = "{\"login\": \"matheuslenke@gmail.com\", \"password\": \"Liikiito\"}";

		this.mockMvc.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(requestJson)).andDo(print()).andExpect(status().isOk());
	}

	@Test
	@Order(4)
	public void userShouldCreateAndUpdateGame() throws Exception {
		String requestJson = "{\"login\": \"matheuslenke@gmail.com\", \"password\": \"Liikiito\"}";

		MvcResult response = this.mockMvc
				.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(requestJson))
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
		String token = response.getResponse().getContentAsString();

		Game game = new Game();
		game.setGameIgdbId("2");
		game.setGameStatus(GameStatus.WISHLIST);
		ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
		String requestJsonGame = ow.writeValueAsString(game);

		MvcResult response2 = this.mockMvc.perform(
						post("/api/games").contentType(MediaType.APPLICATION_JSON).content(requestJsonGame)
								.header("Authorization", "Bearer " + token))
				.andDo(print())
				.andExpect(status().is2xxSuccessful()).andReturn();
		Game returnedGame = mapper.readValue(response2.getResponse().getContentAsString(), Game.class);

		returnedGame.setGameStatus(GameStatus.PLAYING);
		returnedGame.setGameStartedPlayingDate(new Date());
		requestJsonGame = ow.writeValueAsString(returnedGame);

		this.mockMvc.perform(
						put("/api/games/" + returnedGame.getId()).contentType(MediaType.APPLICATION_JSON).content(requestJsonGame)
								.header("Authorization", "Bearer " + token))
				.andDo(print())
				.andExpect(status().is2xxSuccessful())
				.andExpect(jsonPath("$.gameStatus").value("PLAYING"));
	}

	@Test
	@Order(5)
	public void userShouldCreateAndDeleteGame() throws Exception {
		String requestJson = "{\"login\": \"matheuslenke@gmail.com\", \"password\": \"Liikiito\"}";


		MvcResult response = this.mockMvc
				.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(requestJson))
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
		String token = response.getResponse().getContentAsString();

		Game game = new Game();
		game.setGameIgdbId("2");
		game.setGameStatus(GameStatus.WISHLIST);
		ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
		String requestJsonGame = ow.writeValueAsString(game);

		MvcResult response2 = this.mockMvc.perform(
						post("/api/games").contentType(MediaType.APPLICATION_JSON).content(requestJsonGame)
								.header("Authorization", "Bearer " + token))
				.andDo(print())
				.andExpect(status().is2xxSuccessful()).andReturn();
		Game returnedGame = mapper.readValue(response2.getResponse().getContentAsString(), Game.class);

		returnedGame.setGameStatus(GameStatus.PLAYING);
		returnedGame.setGameStartedPlayingDate(new Date());
		requestJsonGame = ow.writeValueAsString(returnedGame);

		this.mockMvc.perform(
						delete("/api/games/" + returnedGame.getId()).contentType(MediaType.APPLICATION_JSON).content(requestJsonGame)
								.header("Authorization", "Bearer " + token))
				.andDo(print())
				.andExpect(status().is2xxSuccessful());
	}


	@Test
	public void shouldReturnUserInfo() throws Exception {
		String requestJson = "{\"login\": \"matheuslenke@gmail.com\", \"password\": \"Liikiito\"}";


		MvcResult response = this.mockMvc
				.perform(post("/login").contentType(MediaType.APPLICATION_JSON).content(requestJson))
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
		String token = response.getResponse().getContentAsString();

		this.mockMvc
				.perform(get("/api/user/@me")
						.header("Authorization", "Bearer " + token))
				.andDo(print())
				.andExpect(status().is2xxSuccessful())
				.andExpect(jsonPath("$.id").isNotEmpty());
	}

}
