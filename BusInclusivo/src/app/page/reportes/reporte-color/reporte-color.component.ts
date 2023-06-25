import { Component, OnInit } from '@angular/core';
import { ColorCountDTO } from 'src/app/model/ColorCountDTO';
import { MatTableDataSource } from '@angular/material/table'
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';

declare var google: any

@Component({
  selector: 'app-reporte-color',
  templateUrl: './reporte-color.component.html',
  styleUrls: ['./reporte-color.component.css']
})
export class ReporteColorComponent implements OnInit{

  colorcounts: ColorCountDTO[] = []; //para el reporte de tabla 
  dataSource: MatTableDataSource<ColorCountDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['color', 'cantidad']

  constructor(private servi: TarjetapropiedadService) { 
  }


  ngOnInit(): void {
    //Reporte tabla
    this.servi.getCountColores().subscribe(data => {
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
    data.addColumn('string', 'Modelo');
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
  getCountColores(): void {
    this.servi.getCountColores()
      .subscribe((data: ColorCountDTO[]) => {
        this.colorcounts = data;
      });
  }



}
