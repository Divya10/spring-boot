package com.app.rest;

import com.app.dto.UserDTO;
import com.app.model.security.User;
import com.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;

/**
 * Created by harsh on 15/3/17.
 */
@RestController
public class UserRestService {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/user", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public void registerCustomer(@Valid @RequestBody UserDTO userDTO,
                                                    HttpServletRequest httpServletRequest,
                                                    HttpServletResponse response) throws IOException {
        User user = userService.registerUser(userDTO);


    }
}
