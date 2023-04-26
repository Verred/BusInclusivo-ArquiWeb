import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/model/Marca';
import { MarcaService } from 'src/app/service/marca.service';
import { MatDialog } from '@angular/material/dialog'
import { MarcaDialogoComponent } from './marca-dialogo/marca-dialogo.component';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.css']
})
export class MarcaListarComponent implements OnInit {
  lista: Marca[] = [];
  dataSource: MatTableDataSource<Marca> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'descripcion','Actualizar'];
  private idMayor: number = 0;

  constructor(private mS: MarcaService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });

    this.mS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
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
}
