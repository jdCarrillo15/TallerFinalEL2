package edu.co.el2.back_ferreteria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.el2.back_ferreteria.Concept.ConceptEntity;
import edu.co.el2.back_ferreteria.Concept.ConceptRepository;

@Service
public class ConceptService {

    @Autowired
    private ConceptRepository conceptRepository;

    public void createConcept(ConceptEntity concept) {
        conceptRepository.save(concept);
    }

    public ConceptEntity getConceptById(Integer id) {
        return conceptRepository.findById(id).orElse(null);
    }

    public void updateConcept(ConceptEntity concept) {
        if (conceptRepository.existsById(concept.getId())) {
            conceptRepository.save(concept);
        }
    }

    public void deleteConcept(Integer id) {
        if (conceptRepository.existsById(id)) {
            conceptRepository.deleteById(id);
        }
    }

    public List<ConceptEntity> getAllConcepts() {
        return conceptRepository.findAll();
    }
}
