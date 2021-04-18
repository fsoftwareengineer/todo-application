package com.example.demo.persistence;

import com.example.demo.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

	UserEntity findByEmail(String email);
	Boolean existsByEmail(String email);
	UserEntity findByEmailAndPassword(String email, String password);

}
