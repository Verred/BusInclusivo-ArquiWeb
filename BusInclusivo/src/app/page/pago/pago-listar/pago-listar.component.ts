import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pago } from 'src/app/model/Pago';
import { PagoService } from 'src/app/service/pago.service';
import { MatDialog } from '@angular/material/dialog'
import { PagoDialogoComponent } from './pago-dialogo/pago-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pago-listar',
  templateUrl: './pago-listar.component.html',
  styleUrls: ['./pago-listar.component.css']
})
export class PagoListarComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Pago [] = [];
  dataSource: MatTableDataSource<Pago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'precio','metodo','Actualizar'];
  private idMayor: number = 0;

  constructor(private serv : PagoService, private dialog: MatDialog) {}

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
    this.dialog.open(PagoDialogoComponent);
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
