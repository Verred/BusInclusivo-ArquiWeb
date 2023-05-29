package pe.edu.upc.bus.dtos;

public class CalificacionDTO {
    private int PK_idCalificacion;
    private int valoracion;

    private String comentario;

    public int getPK_idCalificacion() {
        return PK_idCalificacion;
    }

    public void setPK_idCalificacion(int PK_idCalificacion) {this.PK_idCalificacion = PK_idCalificacion;}

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
