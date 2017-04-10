package org.internship.services;

import org.internship.models.userdet;
import org.internship.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userservices {
     
	 @Autowired
     userrepository userrepository;
     
     public String findByEmailAsUser(String email){
 		userdet user = userrepository.getByEmail(email);
 		return user.getEmail();
 	}
     
     
}
