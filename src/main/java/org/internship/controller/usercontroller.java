package org.internship.controller;

import javax.servlet.http.HttpSession;


import org.internship.models.userdet;
import org.internship.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.internship.services.userservices;
@Controller
public class usercontroller {
	
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
	

	

	
	/**
	 * controller for login
	 * @param httpSession
	 * @param emailid
	 * @param password
	 * @return
	 */

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login(HttpSession httpSession, @RequestParam("id") String email,
			@RequestParam("pass") String password) {
	    ModelAndView model =  new ModelAndView("login");
	if(userservices.findByEmailAsUser(email)!=null)
		{
		model.addObject("invalid", "successfully logged in");
		}
	else
	    {
		
			model.addObject("invalid", "invalid id or password");
			
	    }
		return model;
	}
	
	
	/**
	 * controller for login
	 * @param httpSession
	 * @return
	 */
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView LogoutController(HttpSession httpSession) {
		httpSession.invalidate();
		ModelAndView model = new ModelAndView("index");
		model.addObject("invalid", "successfully logged out");
		return model;
	}
	
	
}



