import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'

import { Coordenada } from 'src/app/model/Coordenada';
import { CoordenadaService } from 'src/app/service/coordenada.service';
import { CoordenadaDialogoComponent } from './coordenada-dialogo/coordenada-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-coordenada-listar',
  templateUrl: './coordenada-listar.component.html',
  styleUrls: ['./coordenada-listar.component.css']
})
export class CoordenadaListarComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Coordenada [] = [];
  dataSource: MatTableDataSource<Coordenada> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'longitud','latitud','referencia', 'Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : CoordenadaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.serv.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.serv.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.serv.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(CoordenadaDialogoComponent);
  }
  eliminar(id: number) {
    this.serv.eliminar(id).subscribe(() => {
      this.serv.list().subscribe(data => {
        this.serv.setList(data);//vuelve a cargar la pagina
      });
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  page = 1;
  pageSize = 10;
  collectionSize = 100;
  items = [5]; // Aquí debes reemplazar "..." con los elementos que quieres paginar
}
