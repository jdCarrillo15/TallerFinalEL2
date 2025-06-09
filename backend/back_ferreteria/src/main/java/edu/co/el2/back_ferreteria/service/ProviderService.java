package edu.co.el2.back_ferreteria.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.el2.back_ferreteria.Providers.ProviderEntity;
import edu.co.el2.back_ferreteria.Providers.ProviderRepository;

@Service
public class ProviderService {

    @Autowired
    private ProviderRepository providerRepository;

    public void createProvider(ProviderEntity provider) {
        providerRepository.save(provider);
    }

    public ProviderEntity getProviderById(Integer id) {
        return providerRepository.findById(id).orElse(null);
    }

    public void updateProvider(ProviderEntity provider) {
        if (providerRepository.existsById(provider.getCodigo())) {
            providerRepository.save(provider);
        }
    }

    public void deleteProvider(Integer id) {
        if (providerRepository.existsById(id)) {
            providerRepository.deleteById(id);
        }
    }

    public List<ProviderEntity> getAllProviders() {
        return providerRepository.findAll();
    }
}
