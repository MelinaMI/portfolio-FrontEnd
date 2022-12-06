import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  dataSobreMi: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.dataSobreMi = data;        
    
  });
  }

}
