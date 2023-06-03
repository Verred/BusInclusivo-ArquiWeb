import { Component, OnInit, ViewChild } from '@angular/core';
import { Calificacion } from 'src/app/model/calificacion';
import { CalificacionService } from 'src/app/service/calificacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { CalificacionDialogoComponent } from './calificacion-dialogo/calificacion-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-calificacion-listar',
  templateUrl: './calificacion-listar.component.html',
  styleUrls: ['./calificacion-listar.component.css']
})

export class CalificacionListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  page = 1;
  pageSize = 10;
  collectionSize = 100;
  items = [5]; // Aquí debes reemplazar "..." con los elementos que quieres paginar






  lista: Calificacion[] = [];

  dataSource: MatTableDataSource<Calificacion> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'valoracion','comentario','accion01']
  private idMayor: number = 0;
  constructor(private pS: CalificacionService, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}




}

