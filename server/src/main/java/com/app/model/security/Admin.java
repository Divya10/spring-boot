package com.app.model.security;

import javax.persistence.Entity;

/**
 * Created by chunmun on 25-04-2017.
 */
@Entity
public class Admin {

    private String loginid;
    private String password;


    public String getLoginid() {
        return loginid;
    }

    public String getPassword() {
        return password;
    }

    public void setLoginid(String loginid) {
        this.loginid = loginid;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
