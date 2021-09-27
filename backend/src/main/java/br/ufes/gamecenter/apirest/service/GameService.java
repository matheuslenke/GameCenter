package br.ufes.gamecenter.apirest.service;

import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.model.User;
import br.ufes.gamecenter.apirest.repository.GameRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class GameService {

    private final GameRepository gameRepository;

    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public List<Game> getAllGamesByUser(User user) {
        List<Game> games = gameRepository.findAll();
        return games.stream().filter(game -> Objects.equals(game.getUserId().getId(), user.getId())).collect(Collectors.toList());
    }

    public void addGame(Game game) {
        System.out.println(game.toString());
        gameRepository.insert(game);
    }

    public Game updateGame(Game game, String gameId) {
        Game savedGame = gameRepository.findById(gameId)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot find Game by ID %s", gameId)));

        System.out.println(savedGame);
        if(game.getGameStartedPlayingDate() != null) {
            savedGame.setGameStartedPlayingDate(game.getGameStartedPlayingDate());
        }
        if(game.getGameFinishedPlayingDate() != null) {
            savedGame.setGameFinishedPlayingDate(game.getGameFinishedPlayingDate());
        }
        if (game.getGameStatus() != null) {
            savedGame.setGameStatus(game.getGameStatus());
        }

        gameRepository.save(savedGame);
        return savedGame;
    }

    public void deleteGame(String id) {
        gameRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot find Game by ID %s", id)));
        gameRepository.deleteById(id);
    }
}
