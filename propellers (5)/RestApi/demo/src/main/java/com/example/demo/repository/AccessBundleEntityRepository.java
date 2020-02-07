package com.example.demo.repository;

import com.example.demo.model.AccessBundle;
import com.example.demo.model.AccessBundleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessBundleEntityRepository extends JpaRepository<AccessBundleEntity, Long> {

}
