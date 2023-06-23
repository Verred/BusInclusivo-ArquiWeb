import { Component, OnInit } from '@angular/core';
import { ModeloCountDTO } from 'src/app/model/ModeloCountDTO';
import { MatTableDataSource } from '@angular/material/table'
import { TarjetapropiedadService } from 'src/app/service/tarjetapropiedad.service';
import { switchMap } from 'rxjs/operators';

declare var google: any
@Component({
  selector: 'app-reporte-modelo',
  templateUrl: './reporte-modelo.component.html',
  styleUrls: ['./reporte-modelo.component.css']
})
export class ReporteModeloComponent implements OnInit {
  modelocounts: ModeloCountDTO[] = []; //para el reporte de tabla 
  dataSource: MatTableDataSource<ModeloCountDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['modelo', 'cantidad']

  constructor(private servi: TarjetapropiedadService) { 
  }


  ngOnInit(): void {
    //Reporte tabla
    this.servi.getCountModelos().subscribe(data => {
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
    var datosFormateados = this.formatearDatosParaGrafico();

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(datosFormateados, options);
  }

  //Reporte en tabla 
  getCountModelos(): void {
    this.servi.getCountModelos()
      .subscribe((data: ModeloCountDTO[]) => {
        this.modelocounts = data;
      });
  }

   formatearDatosParaGrafico() {
    var datos = this.servi.getCountModelos().pipe(
    switchMap(datos => {
      // Utilizar map() para crear un nuevo arreglo con los datos requeridos por el gráfico
      var datosFormateados = datos.map(objeto => [objeto.modeloName, objeto.modeloCount]);
      return datosFormateados;
    })
  );;
  
    // Utilizar map() para crear un nuevo arreglo con los datos requeridos por el gráfico
    // var datosFormateados = datos.map(function(objeto) {
    //   return [objeto.nombre, objeto.cantidad];
    // });
  
    return datos;
  }
}
