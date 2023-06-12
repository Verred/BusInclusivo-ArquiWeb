import { Component, OnInit, ViewChild } from '@angular/core';
import { EstadoVehiculo } from 'src/app/model/EstadoVehiculo';
import { EstadoVehiculoService } from 'src/app/service/estadovehiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { EstadoVehiculoDialogoComponent } from './estadovehiculo-dialogo/estadovehiculo-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-estadovehiculo-listar',
  templateUrl: './estadovehiculo-listar.component.html',
  styleUrls: ['./estadovehiculo-listar.component.css']
})

export class EstadoVehiculoListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  page = 1;
  pageSize = 10;
  collectionSize = 100;
  items = [5]; // Aquí debes reemplazar "..." con los elementos que quieres paginar






  lista: EstadoVehiculo[] = [];

  dataSource: MatTableDataSource<EstadoVehiculo> = new MatTableDataSource();

  displayedColumns: string[] = ['id', 'situacion','descripcion','accion01']
  private idMayor: number = 0;
  constructor(private pS: EstadoVehiculoService, private dialog:MatDialog) { }

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
    this.dialog.open(EstadoVehiculoDialogoComponent);
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
