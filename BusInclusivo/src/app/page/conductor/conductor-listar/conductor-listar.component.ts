import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Conductor } from 'src/app/model/Conductor';
import { ConductorService } from 'src/app/service/conductor.service';
import { ConductorDialogoComponent } from './conductor-dialogo/conductor-dialogo.component';

@Component({
  selector: 'app-conductor-listar',
  templateUrl: './conductor-listar.component.html',
  styleUrls: ['./conductor-listar.component.css']
})
export class ConductorListarComponent implements OnInit{
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Conductor [] = [];
  dataSource: MatTableDataSource<Conductor> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'ususario','licencia','horas', 'Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : ConductorService, private dialog: MatDialog) {}

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
    this.dialog.open(ConductorDialogoComponent);
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
