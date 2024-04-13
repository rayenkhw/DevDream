package tn.esprit.devdream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class DevDreamApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(DevDreamApplication.class, args);
	}
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/api/**")
				.allowedOrigins("http://localhost:4200")
				.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
				.allowedHeaders("*")
				.allowCredentials(true);
	}
}
