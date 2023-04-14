import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/model/Marca';
import { MarcaService } from 'src/app/service/marca.service';

@Component({
  selector: 'app-marca-listar',
  templateUrl: './marca-listar.component.html',
  styleUrls: ['./marca-listar.component.css']
})
export class MarcaListarComponent implements OnInit {
  lista: Marca[] = [];
  dataSource: MatTableDataSource<Marca> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'descripcion'];
  constructor(private mS: MarcaService) {}
  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
