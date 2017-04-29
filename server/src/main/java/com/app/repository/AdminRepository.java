package com.app.repository;

import com.app.model.security.Admin;
import com.app.model.security.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by chunmun on 25-04-2017.
 */
public interface AdminRepository extends JpaRepository<Admin,Long> {

}
