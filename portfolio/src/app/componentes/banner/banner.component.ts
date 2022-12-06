import { Component, OnInit } from '@angular/core'; 
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  data: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.data = data;        
    
  });
  }

}
