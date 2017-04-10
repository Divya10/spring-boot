package org.internship.repository;

import java.util.List;

import org.internship.models.userdet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Transactional
@Repository
public class userrepository
{

	
	
	 public void create(userdet user) {
		    entityManager.persist(user);
		    return;
		  }
		  
		  /**
		   * Delete the user from the database.
		   */
		  public void delete(userdet user) {
		    if (entityManager.contains(user))
		      entityManager.remove(user);
		    else
		      entityManager.remove(entityManager.merge(user));
		    return;
		  }
		  
		  /**
		   * Return all the users stored in the database.
		   */
		  @SuppressWarnings("unchecked")
		  public List<userdet> getAll() {
		    return entityManager.createQuery("from userdet").getResultList();
		  }
		  
		  /**
		   * Return the user having the passed email.
		   */
		  public userdet getByEmail(String email) {
		    return (userdet) entityManager.createQuery(
		        "from User where email = :email")
		        .setParameter("email", email)
		        .getSingleResult();
		  }

		  
		  /**
		   * Update the passed user in the database.
		   */
		  public void update(userdet user) {
		    entityManager.merge(user);
		    return;
		  }

		  // ------------------------
		  // PRIVATE FIELDS
		  // ------------------------
		  
		  // An EntityManager will be automatically injected from entityManagerFactory
		  // setup on DatabaseConfig class.
		  @PersistenceContext
		  private EntityManager entityManager;
}
