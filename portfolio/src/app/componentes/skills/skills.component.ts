import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  dataSkills: any;
  
  constructor(private datosJson:ServicioService) { }

  ngOnInit(): void {
    this.datosJson.getDatos().subscribe(data =>{
    this.dataSkills = data.skills;        
    
  });
  }

}
