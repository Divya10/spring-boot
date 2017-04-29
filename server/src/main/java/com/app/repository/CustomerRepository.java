package com.app.repository;

import com.app.model.product.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by harsh on 19/3/17.
 */
public interface CustomerRepository  extends JpaRepository<Customer, Long>  {
}
