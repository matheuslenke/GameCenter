package br.ufes.gamecenter.apirest.controller;

import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.model.User;
import br.ufes.gamecenter.apirest.repository.GameRepository;
import br.ufes.gamecenter.apirest.repository.UserRepository;
import br.ufes.gamecenter.apirest.service.GameService;
import br.ufes.gamecenter.apirest.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;
    private final GameService gameService;
    private final PasswordEncoder encoder;

    public UserController(UserRepository repository, PasswordEncoder encoder, GameService service) {
        this.userRepository = repository;
        this.gameService = service;
        this.encoder = encoder;
    }

    @GetMapping("/@me")
    public ResponseEntity<Object> listOne(Authentication authentication) {
        Optional<User> user = userRepository.findByLogin(authentication.getPrincipal().toString());


        if (!user.isEmpty()) {
            List<Game> games = gameService.getAllGamesByUser(user.get());
            user.get().setGames(games);
            return ResponseEntity.ok(user.get());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário não encontrado!");
        }
    }

    @GetMapping("/listall")
    public ResponseEntity<List<User>> listAll() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PostMapping()
    public ResponseEntity<Object> saveUser(@RequestBody User usuario) {

        Optional<User> userExists = userRepository.findByLogin(usuario.getLogin());

        if (!userExists.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário já existe!");
        }
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        return ResponseEntity.ok(userRepository.save(usuario));
    }

    @GetMapping("/validarSenha")
    public ResponseEntity<Boolean> validarSenha(@RequestParam String login,
                                                @RequestParam String password) {

        Optional<User> optUsuario = userRepository.findByLogin(login);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        User usuario = optUsuario.get();
        boolean valid = encoder.matches(password, usuario.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);
    }
}
