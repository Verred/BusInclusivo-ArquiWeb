import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { CalificacionDialogoComponent } from './calificacion-dialogo/calificacion-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})

export class CalificacionListarComponent implements OnInit {

  lista: Calificacion[] = [];

  dataSource: MatTableDataSource<Calificacion> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'valoracion','comentario','accion01']
  private idMayor: number = 0;
  constructor(private pS: CalificacionService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.pS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.pS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CalificacionDialogoComponent);
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe(() => {
      this.pS.list().subscribe(data => {
        this.pS.setList(data);
      });
    });
  }

}

