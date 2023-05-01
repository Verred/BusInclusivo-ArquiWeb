import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/service/modelo.service';
import { MatDialog } from '@angular/material/dialog'
import { ModeloDialogoComponent } from './modelo-dialogo/modelo-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-modelo-listar',
  templateUrl: './modelo-listar.component.html',
  styleUrls: ['./modelo-listar.component.css']
})
export class ModeloListarComponent  implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  lista: Modelo[] = [];
  dataSource: MatTableDataSource<Modelo> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'descripcion','Actualizar'];
  private idMayor: number = 0;

  constructor(private mS: ModeloService, private dialog: MatDialog) {}

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
     this.dialog.open(ModeloDialogoComponent);
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
