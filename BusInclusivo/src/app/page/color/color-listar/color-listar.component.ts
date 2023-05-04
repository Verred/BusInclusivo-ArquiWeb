import { Component, OnInit, ViewChild } from '@angular/core';
import { Color } from 'src/app/model/Color';
import { ColorService } from 'src/app/service/color.service';
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog';
import { ColorDialogoComponent } from './color-dialogo/color-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-color-listar',
  templateUrl: './color-listar.component.html',
  styleUrls: ['./color-listar.component.css']
})

export class ColorListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  lista: Color[] = [];

  dataSource: MatTableDataSource<Color> = new MatTableDataSource();

  displayedColumns: string[] = ['id','color','acciones']

  private idMayor: number = 0;

  constructor(private cS: ColorService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.cS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

    this.cS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.cS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });

  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(ColorDialogoComponent);
  }

  eliminar(id: number) {
    this.cS.eliminar(id).subscribe(() => {
      this.cS.list().subscribe(data => {
        this.cS.setList(data);/* se ejecuta la línea 27 */
      });
    });
  }
  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  page = 1;
  pageSize = 10;
  collectionSize = 100;
  items = [5]; // Aquí debes reemplazar "..." con los elementos que quieres paginar
}
