import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';




import { MarcaComponent } from './marca/marca.component';
import { MarcaCreaeditaComponent } from './marca/marca-creaedita/marca-creaedita.component';
import { MarcaDialogoComponent } from './marca/marca-listar/marca-dialogo/marca-dialogo.component';
import { MarcaListarComponent } from './marca/marca-listar/marca-listar.component';

@NgModule({
  declarations: [
    MarcaComponent,
    MarcaCreaeditaComponent,
    MarcaDialogoComponent,
    MarcaListarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
