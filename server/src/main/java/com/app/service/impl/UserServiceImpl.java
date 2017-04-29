package com.app.service.impl;

import com.app.dto.UserDTO;
import com.app.model.security.Authority;
import com.app.model.security.AuthorityName;
import com.app.model.security.User;
import com.app.repository.UserRepository;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by harsh on 15/3/17.
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User registerUser(UserDTO userDTO) {

        User user = new User();

        setProperties(user, userDTO);
        Authority authority = new Authority();
        authority.setName(AuthorityName.ROLE_ADMIN);
        user.getAuthorities().add(authority);
        userRepository.save(user);
        return user;

    }

    @Override
    public User loadUserByUsernameAndPassword(String identifier, String password) {
        return userRepository.findByEmailAndPassword(identifier, password);
    }

    @Override
    public User getUserByEmail(String email) {
        return null;
    }

    private User setProperties(User temp, UserDTO params){
        if(params.getFirstName() != null){
            temp.setFirstname(params.getFirstName());
        }
        if(params.getLastName() != null){
            temp.setLastname(params.getLastName());
        }
        if(params.getPassword() != null){
            temp.setPassword(new BCryptPasswordEncoder().encode(params.getPassword()));
        }
        if(params.getEmail() != null){
            temp.setEmail(params.getEmail());
            temp.setUsername(params.getEmail());
        }
        temp.setEnabled(true);


        return temp;
    }
}
