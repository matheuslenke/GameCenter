package br.ufes.gamecenter.apirest.repository;

import br.ufes.gamecenter.apirest.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GameRepository extends MongoRepository<Game, String> {
    @Query("{'user_id' : ?0")
    Optional<List<Game>> findByUser(String user);
}
