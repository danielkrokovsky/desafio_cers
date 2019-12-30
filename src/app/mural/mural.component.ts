import { Component, OnInit } from '@angular/core';
import { Mural } from './mural';
import { MuralService } from './mural.service';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { Pagination } from './pagination';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  mural: Mural;
  listmural: Mural[];
  page: Pagination;

  constructor(private muralService: MuralService) {}

  ngOnInit() {

    this.mural = new Mural();
    this.page = new Pagination();
    this.loadPagination();
    this.data(0);
  }


  loadPagination() {
    this.muralService.getAllPagination().subscribe(pipe(value => {
      this.page = value["page"];
      this.page.arrayPages = this.arrayOne(this.page.totalPages)
    }));
  }

  save() {
    this.muralService.save(this.mural).subscribe(

      (res) => {
        this.data(0);
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
      'description': mural.description,
      'status': mural.status = true
    }
    this.muralService.save(this.mural).subscribe();
  }

  remove(mural: Mural) {

    this.muralService.remove(mural.id).subscribe(
      () => {

        this.listmural.forEach(function (item, index, object) {
          if (item.id === mural.id) {
            object.splice(index, 1);
          }
        });

        if (this.listmural.length === 0) {
          this.data(0);
          this.loadPagination();
        }
      }
    );
  }

  data(page: number) {

    this.muralService.getAll(page).subscribe(pipe(value => {

      this.listmural = value["content"];

      console.log(this.listmural);
    }));
  }

  private arrayOne(n: number): any[] {
    return Array(n);
  }

}