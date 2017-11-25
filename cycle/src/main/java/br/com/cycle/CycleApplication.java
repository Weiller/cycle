package br.com.cycle;

import br.com.cycle.property.CycleProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(CycleProperty.class)
public class CycleApplication {

	public static void main(String[] args) {
		SpringApplication.run(CycleApplication.class, args);
	}
}
