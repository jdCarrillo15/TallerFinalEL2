package edu.co.el2.back_ferreteria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.co.el2.back_ferreteria.Brand.Brand;
import edu.co.el2.back_ferreteria.Brand.BrandEntity;
import edu.co.el2.back_ferreteria.service.BrandService;

@RestController
@RequestMapping("/api/brands")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping("/get")
    public ResponseEntity<List<Brand>> getMethodName(@RequestParam String param) {
        List<Brand> brands = brandService.getAllBrands();
        if (brands.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(brands);
        }
    }

    @PostMapping("/add")
    public BrandEntity postMethodName(@RequestBody Brand brand) {
        BrandEntity entity = new BrandEntity(brand.getId_marca(), brand.getNombre_marca());
        return brandService.createBrand(entity);
    }

}
