package tn.esprit.devdream.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Order(Ordered.HIGHEST_PRECEDENCE)
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/DevDream/application/**") // Adjust the mapping to match your endpoint path
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow the methods you need
                .allowedHeaders("*"); // You can restrict specific headers if needed
    }
}

