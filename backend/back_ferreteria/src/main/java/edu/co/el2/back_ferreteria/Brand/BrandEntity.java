package edu.co.el2.back_ferreteria.Brand;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "MARCAS")
@Data
@lombok.NoArgsConstructor
@lombok.AllArgsConstructor
public class BrandEntity {

    @Id
    @Column(nullable = false, length = 6)
    private int id_marca;

    @Column(nullable = false, length = 20)
    private String nombre_marca;

    @Override
    public String toString() {
        return "BrandEntity [id_marca=" + id_marca + ", nombre_marca=" + nombre_marca + "]";
    }
}
