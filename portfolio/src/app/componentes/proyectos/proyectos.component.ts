import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  dataProy: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.dataProy = data.proyectos;        
    
  });

}
}
