package org.internship.controller;

import org.internship.services.userservices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class resourcescontroller {

	@Autowired
	private userservices userService;

	@RequestMapping("/user/users")
	public String loginSuccess() {
		return "Login Successful!";
	}

	
}
