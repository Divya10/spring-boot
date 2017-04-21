package org.internship.controller;

import java.sql.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpSession;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.internship.models.userdet;
import org.internship.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.internship.services.userservices;

@CrossOrigin(origins = "http://localhost", maxAge=3600)
@Controller
@RequestMapping("/user")
public class usercontroller {

	private SessionFactory sessionFactory;
	@Autowired
	private userservices userservices;
	
	 private userdet user;
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView indexpage() {

		ModelAndView model = new ModelAndView("index");
		return model;
}	
	

	/**
	 * controller for signup
	 * @return
	 */
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public userdet signup(@RequestBody userdet user){
		
		
		userdet user1 = userservices.findByEmailAsUser(user.getEmail());

		if (user1 == null) {
			return userservices.save(user);
		}
		
		return null;


	}
	


	
	/**
	 * controller for login
	 * @param httpSession
	 * @param emailid
	 * @param password
	 * @return
	 * @throws ServletException 
	 */

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody userdet user) throws ServletException {
		
		String jwtToken = "";

		if (user.getEmail() == null || user.getPass() == null) {
			throw new ServletException("Please fill in username and password");
		}

		String email = user.getEmail();
		String password = user.getPass();

		userdet user1 = userservices.findByEmailAsUser(email);

		if (user == null) {
			throw new ServletException("User name not found.");
		}

		String pwd = user1.getPass();

		if (!password.equals(pwd)) {
			throw new ServletException("Invalid login. Please check your name and password.");
		}

		jwtToken = Jwts.builder().setSubject(user1.getName()).claim("roles", "user").setIssuedAt(null)
				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();

		return jwtToken;
	}
	
	
	/**
	 * controller for login
	 * @param httpSession
	 * @return
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String LogoutController(HttpSession httpSession) {
		httpSession.invalidate();
				return "Successfully Logged Out";
	}
	
	
}



