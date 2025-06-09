package edu.co.el2.back_ferreteria.Providers;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "PROVEEDORES")
@Data
@lombok.NoArgsConstructor
@lombok.AllArgsConstructor
public class ProviderEntity {

    @Id
    @Column(nullable = false, length = 6)
    private int codigo;
    @Column(nullable = false, length = 20)
    private String nombre;
    @Column(nullable = false, length = 6)
    private int telefono;

    @Override
    public String toString() {
        return "Provider [codigo=" + codigo + ", nombre=" + nombre + ", telefono=" + telefono + "]";
    }

}
