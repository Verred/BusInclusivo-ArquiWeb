import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TarjetaPropiedad } from 'src/app/model/TarjetaPropiedad';
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { MatDialog } from '@angular/material/dialog'
import { TarjetaPropiedadDialogoComponent } from './tarjetapropiedad-dialogo/tarjetapropiedad-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-tarjetapropiedad-listar',
  templateUrl: './tarjetapropiedad-listar.component.html',
  styleUrls: ['./tarjetapropiedad-listar.component.css']
})
export class TarjetapropiedadListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: TarjetaPropiedad [] = [];
  dataSource: MatTableDataSource<TarjetaPropiedad> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'marca','modelo','color','placa','tarjeta','anio','descripcion','cantidad','Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : TarjetapropiedadService, private dialog: MatDialog) {}

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
    this.dialog.open(TarjetaPropiedadDialogoComponent);
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
