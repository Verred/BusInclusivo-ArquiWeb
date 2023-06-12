import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoDocumentoService } from 'src/app/service/tipodocumento.service';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDocumentoDialogoComponent } from './tipodocumento-dialogo/tipodocumento-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { TipoDocumento } from 'src/app/model/TipoDocumento';

@Component({
  selector: 'app-tipodocumento-listar',
  templateUrl: './tipodocumento-listar.component.html',
  styleUrls: ['./tipodocumento-listar.component.css']
})

export class TipoDocumentoListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  page = 1;
  pageSize = 10;
  collectionSize = 100;
  items = [5]; // Aquí debes reemplazar "..." con los elementos que quieres paginar






  lista: TipoDocumento[] = [];

  dataSource: MatTableDataSource<TipoDocumento> = new MatTableDataSource();

  displayedColumns: string[] = ['id','descripcion','accion01']
  private idMayor: number = 0;
  constructor(private pS: TipoDocumentoService, private dialog:MatDialog) { }

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
    this.dialog.open(TipoDocumentoDialogoComponent);
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
