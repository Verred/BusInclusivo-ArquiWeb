import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { ViajeService } from 'src/app/service/viaje.service';
import { ConductorCountDTO } from 'src/app/model/ConductorCountDTO';
declare var google: any

@Component({
  selector: 'app-reporte-conductores',
  templateUrl: './reporte-conductores.component.html',
  styleUrls: ['./reporte-conductores.component.css']
})
export class ReporteConductoresComponent implements OnInit{
  
  conductorcounts: ConductorCountDTO[] = []; //para el reporte de tabla 
  dataSource: MatTableDataSource<ConductorCountDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['conductor', 'Horas']
  chartData: any[][] = [];
  constructor(private servi: ViajeService) { 
  }


  ngOnInit(): void {
    //Reporte tabla
    this.servi.getCountCondutores().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
       //Carga data para el grafico
       this.chartData = this.dataSource.data.map(row => [row.name, row.horas]);
    })
    //Reporte grafico
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);

  }

  //Reporte grafico

  drawChart= () => {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'conductor');
    data.addColumn('number', 'Horas');
    data.addRows(this.chartData);
    var options ={
      title: "Reporte de Conductores"
    }

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  //Reporte en tabla 
  getCountCondutores(): void {
    this.servi.getCountCondutores()
      .subscribe((data: ConductorCountDTO[]) => {
        this.conductorcounts = data;
      });
  }
}
