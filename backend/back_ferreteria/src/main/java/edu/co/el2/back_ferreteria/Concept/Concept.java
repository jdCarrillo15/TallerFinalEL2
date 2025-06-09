package edu.co.el2.back_ferreteria.Concept;

public class Concept {

    private int id;
    private String nombre;
    private String obligatoriedad;
    private String tipo;
    private double porcentaje;

    public Concept() {
    }

    public Concept(int id, String nombre, String obligatoriedad, String tipo, double porcentaje) {
        this.id = id;
        this.nombre = nombre;
        this.obligatoriedad = obligatoriedad;
        this.tipo = tipo;
        this.porcentaje = porcentaje;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getObligatoriedad() {
        return obligatoriedad;
    }

    public void setObligatoriedad(String obligatoriedad) {
        this.obligatoriedad = obligatoriedad;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public double getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(double porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Override
    public String toString() {
        return "Concept [id=" + id + ", nombre=" + nombre + ", obligatoriedad=" + obligatoriedad + ", tipo=" + tipo
                + ", porcentaje=" + porcentaje + "]";
    }

}
