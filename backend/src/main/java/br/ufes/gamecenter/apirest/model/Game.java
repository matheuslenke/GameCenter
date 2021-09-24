package br.ufes.gamecenter.apirest.model;

import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.format.annotation.DateTimeFormat;

import br.ufes.gamecenter.apirest.model.User;
import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity(name="Game")
public class Game {

    @Id
    private String id;

    @Field(name="game_igdb_id")
    @Indexed(unique = true)
    private String gameIgdbId;

    @Field(name="game_started_playing_date")
    private Date gameStartedPlayingDate;

    @Field(name="game_finished_playing_date")
    private Date gameFinishedPlayingDate;

    @Field(name="game_status")
    private GameStatus gameStatus;

    @ManyToOne
    private User user;

    public Game() {
    }

    public User getUserId() {
        return this.user;
    }

    public void setUserId(User user) {
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGameIgdbId() {
        return gameIgdbId;
    }

    public void setGameIgdbId(String gameIgdbId) {
        this.gameIgdbId = gameIgdbId;
    }

    public Date getGameStartedPlayingDate() {
        return gameStartedPlayingDate;
    }

    public void setGameStartedPlayingDate(Date gameStartedPlayingDate) {
        this.gameStartedPlayingDate = gameStartedPlayingDate;
    }

    public Date getGameFinishedPlayingDate() {
        return gameFinishedPlayingDate;
    }

    public void setGameFinishedPlayingDate(Date gameFinishedPlayingDate) {
        this.gameFinishedPlayingDate = gameFinishedPlayingDate;
    }

    public GameStatus getGameStatus() {
        return gameStatus;
    }

    public void setGameStatus(GameStatus gameStatus) {
        this.gameStatus = gameStatus;
    }
}
