package org.internship.configuration;


	import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
     import org.springframework.boot.orm.jpa.EntityScan;
     import org.springframework.boot.autoconfigure.*;
	import org.springframework.context.annotation.Configuration;
	import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
	import org.springframework.transaction.annotation.EnableTransactionManagement;

	@Configuration
	@EnableAutoConfiguration
	@EntityScan(basePackages = {"org.internship.models"})
	@EnableJpaRepositories(basePackages = {"org.internship.repositories"})
	@EnableTransactionManagement
	public class repositoryconfiguration {
	}

