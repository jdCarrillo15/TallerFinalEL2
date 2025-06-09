package edu.co.el2.back_ferreteria.model;

public class Concept {

    private short id;
    private String nombre;
    private String obligatoriedad;
    private String tipo;
    private String porcentaje;

    public Concept() {
    }

    public Concept(short id, String nombre, String obligatoriedad, String tipo, String porcentaje) {
        this.id = id;
        this.nombre = nombre;
        this.obligatoriedad = obligatoriedad;
        this.tipo = tipo;
        this.porcentaje = porcentaje;
    }

    public short getId() {
        return id;
    }

    public void setId(short id) {
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

    public String getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(String porcentaje) {
        this.porcentaje = porcentaje;
    }

    @Override
    public String toString() {
        return "Concept [id=" + id + ", nombre=" + nombre + ", obligatoriedad=" + obligatoriedad + ", tipo=" + tipo
                + ", porcentaje=" + porcentaje + "]";
    }

}
