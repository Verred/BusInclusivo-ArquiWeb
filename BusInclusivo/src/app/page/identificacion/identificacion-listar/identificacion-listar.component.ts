import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Identificacion } from 'src/app/model/Identificacion';
import { IdentificacionService } from 'src/app/service/identificacion.service';
import { IdentificacionDialogoComponent } from './identificacion-dialogo/identificacion-dialogo.component';

@Component({
  selector: 'app-identificacion-listar',
  templateUrl: './identificacion-listar.component.html',
  styleUrls: ['./identificacion-listar.component.css']
})
export class IdentificacionListarComponent {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Identificacion [] = [];
  dataSource: MatTableDataSource<Identificacion> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'numdocumento','tipo','user','vencimiento','Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : IdentificacionService, private dialog: MatDialog) {}

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
    this.dialog.open(IdentificacionDialogoComponent);
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
