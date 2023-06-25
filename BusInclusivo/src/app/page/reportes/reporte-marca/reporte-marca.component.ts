import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { MarcaCountDTO } from 'src/app/model/MarcaCountDTO';
declare var google: any

@Component({
  selector: 'app-reporte-marca',
  templateUrl: './reporte-marca.component.html',
  styleUrls: ['./reporte-marca.component.css']
})
export class ReporteMarcaComponent implements OnInit {
  marcacounts: MarcaCountDTO[] = []; //para el reporte de tabla 
  dataSource: MatTableDataSource<MarcaCountDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['marca', 'cantidad']

  constructor(private servi: TarjetapropiedadService) { 
  }


  ngOnInit(): void {
    //Reporte tabla
    this.servi.getCountMarcas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    //Reporte grafico
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);

  }

  //Reporte grafico

  drawChart() {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Marca');
    data.addColumn('number', 'Numero');
    data.addRows([
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 2],
      ['Zucchini', 4],
      ['Pepperoni', 2]
    ]);
    var options ={
      title: "Reporte de modelos"
    }

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  //Reporte en tabla 
  getCountMarcas(): void {
    this.servi.getCountMarcas()
      .subscribe((data: MarcaCountDTO[]) => {
        this.marcacounts = data;
      });
  }
}
