package tn.esprit.devdream.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:2400" )
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
               .exposedHeaders("Authorization") // Expose any custom headers here
                .allowCredentials(true);
    }
}
