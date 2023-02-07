package com.yhjun.shopmall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ShopMallApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopMallApplication.class, args);
	}

}
