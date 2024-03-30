
package tn.esprit.devdream.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.springframework.web.servlet.config.annotation.CorsRegistry;

import static org.springframework.http.CacheControl.maxAge;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/api/**")

                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .exposedHeaders("Authorization") // Expose any custom headers here
                .allowCredentials(true)// Allow credentials (e.g., cookies)
               .maxAge(3600);
    }
}