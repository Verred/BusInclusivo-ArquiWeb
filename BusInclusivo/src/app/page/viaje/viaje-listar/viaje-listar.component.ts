import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Viaje } from 'src/app/model/Viaje';
import { ViajeService } from 'src/app/service/viaje.service';
import { ViajeDialogoComponent } from './viaje-dialogo/viaje-dialogo.component';


@Component({
  selector: 'app-viaje-listar',
  templateUrl: './viaje-listar.component.html',
  styleUrls: ['./viaje-listar.component.css']
})
export class ViajeListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Viaje [] = [];
  dataSource: MatTableDataSource<Viaje> = new MatTableDataSource();
  displayedColumns: string[] = ['id','conductor','vehiculo','pasajero','calificacion','pago','ruta','fecha','Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : ViajeService, private dialog: MatDialog) {}

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
    this.dialog.open(ViajeDialogoComponent);
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
