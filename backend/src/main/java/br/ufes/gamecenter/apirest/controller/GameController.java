package br.ufes.gamecenter.apirest.controller;

import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.model.User;
import br.ufes.gamecenter.apirest.repository.UserRepository;
import br.ufes.gamecenter.apirest.service.GameService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/games")
public class GameController {

    private final GameService gameService;
    private final UserRepository userRepository;

    public GameController(GameService gameService, UserRepository userRepository) {
        this.gameService = gameService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Game>> getAllGames() {
        return ResponseEntity.ok(gameService.getAllGames());
    }

    @PostMapping
    public ResponseEntity<Game> addGame(@RequestBody Game game, Authentication authentication) throws Exception {
        Optional<User> user = userRepository.findByLogin(authentication.getPrincipal().toString());

        if (user.isEmpty()) {
            throw new Exception("Usuário não encontrado");
        }
        game.setUserId(user.get());
        gameService.addGame(game);
        return new ResponseEntity<>(game, HttpStatus.CREATED);
    }
}
