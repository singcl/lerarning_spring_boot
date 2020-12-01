package com.singcl.learning;

import com.singcl.learning.Model.Customer;
import com.singcl.learning.Model.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;


@SpringBootApplication
public class LearningApplication {
	private static final Logger log = LoggerFactory.getLogger(LearningApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(LearningApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return  builder.build();
	}

	/**
	 * 先./gradlew build生成jar包，再执行 java -jar build/libs/learning-0.0.1-SNAPSHOT.jar
	 * 直接在idea debug不会生效
	 *
	 * @param restTemplate
	 * @return
	 * @throws Exception
	 */
	@Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
			Quote quote = restTemplate.getForObject("https://gturnquist-quoters.cfapps.io/api/random", Quote.class);
			log.info(quote.toString());
		};
	}

	@Bean
	public CommandLineRunner jpa(CustomerRepository repository) {
		return args -> {
			// save a few customers
			repository.save(new Customer("Jack", "Bauer"));
			repository.save(new Customer("Chloe", "O'Brian"));
			repository.save(new Customer("Kim", "Bauer"));
			repository.save(new Customer("David", "Palmer"));
			repository.save(new Customer("Michelle", "Dessler"));

			// fetch all customers
			log.info("Customers found with findAll():");
			log.info("-------------------------------");
			for (Customer customer : repository.findAll()) {
				log.info(customer.toString());
			}
			log.info("");

			// fetch an individual customer by ID
			Customer customer = repository.findById(1L);
			log.info("Customer found with findById(1L):");
			log.info("--------------------------------");
			log.info(customer.toString());
			log.info("");

			// fetch customers by last name
			log.info("Customer found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			repository.findByLastName("Bauer").forEach(bauer -> {
				log.info(bauer.toString());
			});
			// for (Customer bauer : repository.findByLastName("Bauer")) {
			//  log.info(bauer.toString());
			// }
			log.info("");
		};
	}
}