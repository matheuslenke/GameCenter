package br.ufes.gamecenter.apirest.repository;

import br.ufes.gamecenter.apirest.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository  extends MongoRepository<User, String> {

    public Optional<User> findByLogin(String login);
}
