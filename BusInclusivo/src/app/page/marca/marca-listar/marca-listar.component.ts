import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/model/Marca';
import { MarcaService } from 'src/app/service/marca.service';
import { MatDialog } from '@angular/material/dialog'
import { MarcaDialogoComponent } from './marca-dialogo/marca-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.css']
})
export class MarcaListarComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  role:string="";

  lista: Marca[] = [];
  dataSource: MatTableDataSource<Marca> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'descripcion','Actualizar'];
  private idMayor: number = 0;

  constructor(private mS: MarcaService, private dialog: MatDialog, private ls:LoginService) {}

  ngOnInit(): void {
    
    this.role=this.ls.showRole();
    console.log(this.role);

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
    this.dialog.open(MarcaDialogoComponent);
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
