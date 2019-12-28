import { Component, OnInit } from '@angular/core';
import { Mural } from './mural';
import { MuralService } from './mural.service';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators'; 

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  mural: Mural;
  listmural: Mural[];

  constructor(private muralService: MuralService) {

  }

  ngOnInit() {

    this.mural = new Mural();
    this.loadData();
  }

  loadData() {

    this.muralService.getAll().subscribe(pipe(value => {

      this.listmural = value["_embedded"].mural;
    }));
  }

  save() {
    this.muralService.save(this.mural).subscribe(

      (res) => {
        this.loadData()
        this.mural = new Mural();
      }
    );
  }

  visibility(mural: Mural) {

    this.mural = {
      'id': mural.id,
      'publish': mural.publish,
      'title': mural.title,
      'visualization': mural.visualization,
      'description': mural.description
    }

  }


  remove(mural: Mural) {

    this.muralService.remove(mural.id).subscribe(
      () => {

        this.listmural.forEach(function(item, index, object) {
          if (item.id === mural.id) {
            object.splice(index, 1);
          }
        });
      } 
    );
  }

}
