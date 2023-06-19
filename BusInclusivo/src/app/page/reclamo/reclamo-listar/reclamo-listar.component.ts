import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator';
import { Reclamo } from 'src/app/model/Reclamo';
import { ReclamoDialogoComponent } from './reclamo-dialogo/reclamo-dialogo.component';
import { ReclamoService } from 'src/app/service/reclamo.service';

@Component({
  selector: 'app-reclamo-listar',
  templateUrl: './reclamo-listar.component.html',
  styleUrls: ['./reclamo-listar.component.css']
})
export class ReclamoListarComponent implements OnInit{
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  lista: Reclamo [] = [];
  dataSource: MatTableDataSource<Reclamo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'evidencia','comentario','fecha','viaje'];
  private idMayor: number = 0;

  constructor(private serv : ReclamoService, private dialog: MatDialog) {}

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
    this.dialog.open(ReclamoDialogoComponent);
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
