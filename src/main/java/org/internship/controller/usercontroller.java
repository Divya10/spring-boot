package org.internship.controller;

import javax.servlet.http.HttpSession;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.internship.models.userdet;
import org.internship.repository.userrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.internship.services.userservices;

@CrossOrigin(origins = "http://localhost:8080", maxAge=3600)
@RestController
@RequestMapping("/internship")
public class usercontroller {

	private SessionFactory sessionFactory;
	@Autowired
	private userservices userservices;
	
	 private userdet user;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView indexpage() {

		ModelAndView model = new ModelAndView("index");
		return model;
}	
	

	/**
	 * controller for signup
	 * @return
	 */
	
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public ModelAndView signup(@ModelAttribute("user") org.internship.models.userdet user){
		Session session = sessionFactory.openSession();
		ModelAndView model = new ModelAndView("signup");
			if (session.get(userdet.class, user.getEmail()) == null) {
			session.beginTransaction();
			userservices.save(user);
			session.getTransaction().commit();
			model.addObject("invalid", "Successfully registered, login to proceed!");

		} else
			model.addObject("invalid", "This email is already registered.");
		session.close();
		return model;

	}
	


	
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
	    userdet user=userservices.findByEmailAsUser(email);
	if(user!=null)
		{
		   if(user.getPass().equals(password))
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
		ModelAndView model = new ModelAndView("logout");
		model.addObject("invalid", "successfully logged out");
		return model;
	}
	
	
}



