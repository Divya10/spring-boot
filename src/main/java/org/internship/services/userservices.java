package org.internship.services;

import org.internship.models.userdet;
import org.internship.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userservices {
     
	 @Autowired
     userrepository userrepository;
	 
	 public userdet save(userdet user){
		 
	 		return userrepository.save(user);
	 	}
	     
     
     public userdet findByEmailAsUser(String email){
 		userdet user = userrepository.findByEmail(email);
 		return user;
 	}
     
     
}
