
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from 'src/app/model/MetodoPago';
import { MetodopagoService } from 'src/app/service/metodopago.service';
import { MatDialog } from '@angular/material/dialog';
import { MetodopagoDialogoComponent} from './metodopago-dialogo/metodopago-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-metodopago-listar',
  templateUrl: './metodopago-listar.component.html',
  styleUrls: ['./metodopago-listar.component.css']
})
export class MetodopagoListarComponent implements OnInit{

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  lista: MetodoPago[] = [];
  dataSource: MatTableDataSource<MetodoPago> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'descripcion','Actualizar'];
  private idMayor: number = 0;

  constructor(private mS: MetodopagoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.mS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.mS.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
     this.dialog.open(MetodopagoDialogoComponent);
  }
  eliminar(id: number) {
    this.mS.eliminar(id).subscribe(() => {
      this.mS.list().subscribe(data => {
        this.mS.setList(data);//vuelve a cargar la pagina
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
