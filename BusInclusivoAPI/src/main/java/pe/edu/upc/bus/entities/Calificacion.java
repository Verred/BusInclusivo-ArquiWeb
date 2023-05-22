package pe.edu.upc.bus.entities;

import javax.persistence.*;

@Entity
@Table(name= "calificacion")

public class Calificacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  PK_idCalificacion;

    @Column(name = "valoracion", length = 2, nullable = false)
    private int valoracion;

    @Column(name = "comentario", length = 12, nullable = false)

    private String comentario;

    public Calificacion() {
    }

    public Calificacion(int PK_idCalificacion, int valoracion, String comentario) {
        this.PK_idCalificacion = PK_idCalificacion;
        this.valoracion = valoracion;
        this.comentario = comentario;
    }

    public int getPK_idCalificacion() {
        return PK_idCalificacion;
    }

    public void setPK_idCalificacion(int PK_idCalificacion) {
        this.PK_idCalificacion = PK_idCalificacion;
    }

    public int getValoracion() {
        return valoracion;
    }

    public void setValoracion(int valoracion) {
        this.valoracion = valoracion;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}
