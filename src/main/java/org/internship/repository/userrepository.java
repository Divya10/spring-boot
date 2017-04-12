package org.internship.repository;

import java.util.List;

import org.internship.models.userdet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface userrepository extends CrudRepository<userdet,Long>
{
     public userdet save(userdet userdet);
     
	 public userdet findByEmail(String email);
	
}
