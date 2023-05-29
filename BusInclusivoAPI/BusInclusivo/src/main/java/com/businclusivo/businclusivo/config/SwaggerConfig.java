package com.businclusivo.businclusivo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket apiDocket(){
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                //No olvidar configurar esto si por error pusieron otro nombre al proyecto
                .apis(RequestHandlerSelectors.basePackage("com.businclusivo.businclusivo.controllers"))
                .paths(PathSelectors.any())
                .build();
    }
}
