package br.ufes.gamecenter.apirest.service;

import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public void addGame(Game game) {
        System.out.println(game.toString());
        gameRepository.insert(game);
    }
}
