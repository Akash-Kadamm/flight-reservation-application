package com.flight.demo;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableJpaRepositories("com.flight.repository")
@SpringBootApplication(scanBasePackages = "com.flight")
@EntityScan("com.flight.pojo")
@EnableCaching
public class FeedbackServiceApiApplication {
  static Logger logger=Logger.getLogger(FeedbackServiceApiApplication.class);
	public static void main(String[] args) {
		SpringApplication.run(FeedbackServiceApiApplication.class, args);
        logger.setLevel(Level.INFO);
		
		logger.debug("Debug Message....");
		logger.info("Info Message....");
		logger.warn("Warn Message....");
		logger.error("Error Message....");
		logger.fatal("fatal Message....");
		
	
	}

}
