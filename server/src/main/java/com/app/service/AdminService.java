package com.app.service;

import com.app.dto.UserDTO;
import com.app.model.security.User;

/**
 * Created by chunmun on 25-04-2017.
 */
public interface AdminService {

    public User registerUser(UserDTO UserDTO);
}
