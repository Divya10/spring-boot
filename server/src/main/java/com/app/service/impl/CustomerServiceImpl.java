package com.app.service.impl;

import com.app.dto.CustomerDTO;
import com.app.model.product.Customer;
import com.app.repository.CustomerRepository;
import com.app.service.CustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by harsh on 19/3/17.
 */
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public void add(CustomerDTO productDTO) {
        Customer p = new Customer();
        BeanUtils.copyProperties(productDTO,p, "id", "status");
        customerRepository.save(p);
    }

    @Override
    public List<CustomerDTO> list() {

        return copy(customerRepository.findAll());

    }

    @Override
    public void delete(Long id) {
        customerRepository.delete(id);

    }

    private List<CustomerDTO> copy(List<Customer> list ){
        List<CustomerDTO> products = new ArrayList<>();
        for (Customer p : list){
            CustomerDTO product = new CustomerDTO();
            BeanUtils.copyProperties(p, product);
            products.add(product);

        }
        return products;


    }
}
