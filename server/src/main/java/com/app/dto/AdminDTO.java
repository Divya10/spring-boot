package com.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Created by divya
 */
public class AdminDTO {

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
