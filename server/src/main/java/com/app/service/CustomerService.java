package com.app.service;

import com.app.dto.CustomerDTO;


import java.util.List;

/**
 * Created by harsh on 19/3/17.
 */
public interface CustomerService {

    public void add(CustomerDTO productDTO);
    public List<CustomerDTO> list();
    public void delete(Long id);

}
