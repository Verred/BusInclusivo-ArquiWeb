import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Pasajero } from 'src/app/model/Pasajero';
import { PasajeroService } from 'src/app/service/pasajero.service';
import { PasajeroDialogoComponent } from './pasajero-dialogo/pasajero-dialogo.component'; 



@Component({
  selector: 'app-pasajero-listar',
  templateUrl: './pasajero-listar.component.html',
  styleUrls: ['./pasajero-listar.component.css']
})
export class PasajeroListarComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Pasajero [] = [];
  dataSource: MatTableDataSource<Pasajero> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'ususario', 'Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : PasajeroService, private dialog: MatDialog) {}

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
    this.dialog.open(PasajeroDialogoComponent);
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
