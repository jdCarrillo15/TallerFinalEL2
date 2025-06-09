package edu.co.el2.back_ferreteria.Providers;

public class Provider {

    private int codigo;
    private String nombre;
    private int telefono;

    public Provider() {
    }

    public Provider(int codigo, String nombre, int telefono) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Provider{");
        sb.append("codigo=").append(codigo);
        sb.append(", nombre=").append(nombre);
        sb.append(", telefono=").append(telefono);
        sb.append('}');
        return sb.toString();
    }

}
