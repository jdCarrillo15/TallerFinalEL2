package edu.co.el2.back_ferreteria.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.co.el2.back_ferreteria.Brand.Brand;
import edu.co.el2.back_ferreteria.Brand.BrandEntity;
import edu.co.el2.back_ferreteria.Brand.BrandRepository;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public BrandEntity createBrand(BrandEntity brand) {
        return brandRepository.save(brand);
    }

    public BrandEntity getBrandById(Integer id) {
        return brandRepository.findById(id).orElse(null);
    }

    public void updateBrand(BrandEntity brand) {
        if (brandRepository.existsById(brand.getId_marca())) {
            brandRepository.save(brand);
        }
    }

    public void deleteBrand(Integer id) {
        if (brandRepository.existsById(id)) {
            brandRepository.deleteById(id);
        }
    }

    public List<Brand> getAllBrands() {
        return EntityToBrand(brandRepository.findAll());
    }

    private List<Brand> EntityToBrand (List<BrandEntity> brandEntities) {
        List<Brand> brands = new ArrayList<>();
        for (BrandEntity entity : brandEntities) {
            brands.add(new Brand(entity.getId_marca(), entity.getNombre_marca()));
        }
        return brands;
    }

}
