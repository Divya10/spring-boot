package com.app.service;

import com.app.dto.UserDTO;
import com.app.model.security.User;

/**
 * Created by harsh on 15/3/17.
 */
public interface UserService {

    public User registerUser(UserDTO userDTO) ;

    public User loadUserByUsernameAndPassword(String identifier,String password) ;

    public User getUserByEmail(String email);
}
