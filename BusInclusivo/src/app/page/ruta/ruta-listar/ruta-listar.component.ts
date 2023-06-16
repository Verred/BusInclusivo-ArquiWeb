import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Ruta } from 'src/app/model/Ruta';
import { RutaService } from 'src/app/service/ruta.service';
import { RutaDialogoComponent } from './ruta-dialogo/ruta-dialogo.component';

@Component({
  selector: 'app-ruta-listar',
  templateUrl: './ruta-listar.component.html',
  styleUrls: ['./ruta-listar.component.css']
})
export class RutaListarComponent implements OnInit{
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Ruta [] = [];
  dataSource: MatTableDataSource<Ruta> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'start','end','descripcion','Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : RutaService, private dialog: MatDialog) {}

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
    this.dialog.open(RutaDialogoComponent);
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
