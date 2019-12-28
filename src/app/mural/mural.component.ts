import { Component, OnInit } from '@angular/core';
import { Mural } from './mural';
import { MuralService } from './mural.service';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {
  
  mural: Mural;

  ngOnInit() {
    this.mural  = new Mural();
  }

  constructor(private muralService: MuralService) { 
      
  }

  save(){
    this.muralService.save(this.mural).subscribe(

      (res) => console.log(this.mural)
    );
  }

}
