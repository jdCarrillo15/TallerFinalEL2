package edu.co.el2.back_ferreteria.Concept;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "CONCEPTOS")
@Data
@lombok.NoArgsConstructor
@lombok.AllArgsConstructor
public class ConceptEntity {

    @Id
    @Column(nullable = false, length = 6)
    private int id;
    @Column(nullable = false, length = 30)
    private String nombre;
    @Column(nullable = false, length = 1)
    private String obligatoriedad;
    @Column(nullable = false, length = 1)
    private String tipo;
    @Column(nullable = true, length = 6, precision = 3)
    private double porcentaje;

    @Override
    public String toString() {
        return "Concept [id=" + id + ", nombre=" + nombre + ", obligatoriedad=" + obligatoriedad + ", tipo=" + tipo
                + ", porcentaje=" + porcentaje + "]";
    }

}
