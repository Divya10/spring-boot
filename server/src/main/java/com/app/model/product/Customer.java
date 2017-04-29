package com.app.model.product;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by harsh on 19/3/17.
 */
@Entity
public class Customer {


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Id
    @Column(name = "ID")
    private Long id;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Column(name = "NAME", length = 50, unique = true)
    @NotNull


    private String name;

    @Column(name = "DETAILS")
    @NotNull
    private String deatils;

    public String getDeatils() {
        return deatils;
    }

    public void setDeatils(String deatils) {
        this.deatils = deatils;
    }

    @Column(name = "STATUS")

    @NotNull
    private Boolean status = true;



}
