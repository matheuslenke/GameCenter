package br.ufes.gamecenter.apirest.service;

import br.ufes.gamecenter.apirest.model.Game;
import br.ufes.gamecenter.apirest.model.User;
import br.ufes.gamecenter.apirest.repository.GameRepository;
import br.ufes.gamecenter.apirest.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


}
