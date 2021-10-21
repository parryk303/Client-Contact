package com.parryk303.springh2.repository;

import com.parryk303.springh2.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
