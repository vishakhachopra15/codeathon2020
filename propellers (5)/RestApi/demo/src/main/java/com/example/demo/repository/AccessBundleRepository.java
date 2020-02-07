package com.example.demo.repository;

import com.example.demo.model.AccessBundle;
import com.example.demo.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccessBundleRepository extends JpaRepository<AccessBundle, Long> {

}
