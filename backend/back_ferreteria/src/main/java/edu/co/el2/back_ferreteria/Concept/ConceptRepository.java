package edu.co.el2.back_ferreteria.Concept;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConceptRepository extends JpaRepository<ConceptEntity, Integer> {
    
}
