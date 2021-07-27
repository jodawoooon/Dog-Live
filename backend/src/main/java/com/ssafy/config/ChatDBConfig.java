package com.ssafy.config;

import com.google.common.collect.ImmutableMap;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.LazyConnectionDataSourceProxy;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;

import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

@Configuration
@ConfigurationProperties(prefix = "datasource.chat")                                //application.yaml에서 어떤 properties를 읽을지 지정
@EnableJpaRepositories(                                                             //Jpa에 관한 설정 및 파일의 위치 명시
        entityManagerFactoryRef = "chatEntityManagerFactory",
        transactionManagerRef = "chatTransactionManager",
        basePackages = {"com.ssafy.db.entity.chat"})                                                          //파일의 위치
public class ChatDBConfig extends HikariConfig {

    @Bean
    public DataSourceProperties chatDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource chatDataSource(@Qualifier("chatDataSourceProperties") DataSourceProperties dataSourceProperties) {
        return dataSourceProperties.initializeDataSourceBuilder().type(HikariDataSource.class).build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean chatEntityManagerFactory(EntityManagerFactoryBuilder builder,
                                                                            @Qualifier("chatDataSource") DataSource dataSource) {
        return builder
                .dataSource(dataSource)
                .packages("com.ssafy.db.entity.chat")
                .persistenceUnit("chatEntityManager")
                .build();
    }

    @Bean
    public PlatformTransactionManager chatTransactionManager(@Qualifier("chatEntityManagerFactory") EntityManagerFactory entityManagerFactory) {
        return new JpaTransactionManager(entityManagerFactory);
    }
}