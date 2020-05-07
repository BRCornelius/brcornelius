import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() instructions: string[];
}
