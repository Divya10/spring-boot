package com.app.repository;

import com.app.model.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 * Created by Harsh
 */
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    public User findByEmail(String email);
    public User findByEmailAndPassword(String email,String password);
    public User findById(Long id);

    @Query(value="select count(id) from user where email=:email",nativeQuery =true )
    public int checkUserByEmail(@Param("email") String email);

}
