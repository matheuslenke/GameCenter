package br.ufes.gamecenter.apirest;

import br.ufes.gamecenter.apirest.repository.ExpenseRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@EnableMongoRepositories(basePackageClasses = ExpenseRepository.class)
public class ApirestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApirestApplication.class, args);
	}

}
