package edu.co.el2.back_ferreteria.Brand;

public class Brand {

    private int id_marca;
    private String nombre_marca;

    public Brand() {
    }

    public Brand(int id_marca, String nombre_marca) {
        this.id_marca = id_marca;
        this.nombre_marca = nombre_marca;
    }

    public int getId_marca() {
        return id_marca;
    }

    public void setId_marca(short id_marca) {
        this.id_marca = id_marca;
    }

    public String getNombre_marca() {
        return nombre_marca;
    }

    public void setNombre_marca(String nombre_marca) {
        this.nombre_marca = nombre_marca;
    }

    // @Override
    // public String toString() {
    //     return "Brand{"
    //             + "id_marca=" + id_marca
    //             + ", nombre_marca='" + nombre_marca + '\''
    //             + '}';
    // }
}
