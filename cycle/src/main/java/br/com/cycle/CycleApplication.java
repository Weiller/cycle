package br.com.cycle;

import br.com.cycle.property.CycleProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@EntityScan(
		basePackageClasses = {CycleApplication.class, Jsr310JpaConverters.class}
)
@SpringBootApplication
@EnableConfigurationProperties(CycleProperty.class)
public class CycleApplication {

	public static void main(String[] args) {
		SpringApplication.run(CycleApplication.class, args);
	}
}
