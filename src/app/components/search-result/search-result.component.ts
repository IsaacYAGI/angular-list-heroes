import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  heroes: Heroe[];
  constructor(
    private _serviceHeroes: HeroesService, 
    private activatedRoute:ActivatedRoute) { 
      this.activatedRoute.params.subscribe((params) => {
        this.heroes = this._serviceHeroes.buscarHeroes(params['termino']);
      });
    }

  ngOnInit(): void {

  }

}
