package com.app.rest;

import com.app.dto.ProductDTO;
import com.app.model.security.User;
import com.app.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

/**
 * Created by harsh on 19/3/17.
 */
@RestController
public class ProductRestService {


    @Autowired
    ProductService productService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/products", method = RequestMethod.POST,produces = MediaType.APPLICATION_JSON_VALUE)
    public void add(@Valid @RequestBody ProductDTO productDTO,
                                 HttpServletRequest httpServletRequest,
                                 HttpServletResponse response) throws IOException {
        productService.add(productDTO);

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/products", method = RequestMethod.GET)
    public List<ProductDTO> list() throws IOException {
        return productService.list();

    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/products/{productId}", method = RequestMethod.DELETE,produces = MediaType.APPLICATION_JSON_VALUE)
    public void delete(@PathVariable Long productId) throws IOException {
        productService.delete(productId);

    }



}
