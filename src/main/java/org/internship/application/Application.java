package org.internship.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import org.internship.configuration.JwtFilter;;

@SpringBootApplication
public class Application {

	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/internship/*");

		return registrationBean;
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}