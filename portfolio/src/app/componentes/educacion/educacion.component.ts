import { Component, OnInit } from '@angular/core'; 
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  dataEdu: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.dataEdu = data.educacion;        
    
  });
  }

}
