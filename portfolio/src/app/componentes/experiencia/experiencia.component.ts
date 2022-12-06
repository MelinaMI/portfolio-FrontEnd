import { Component, OnInit } from '@angular/core'; 
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  dataExp: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.dataExp = data.experiencias;        
    
  });
  }

}
