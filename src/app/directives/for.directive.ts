import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { InitialNavigation } from '@angular/router';

@Directive({
  selector: "[myFor]"
})
export class ForDirective implements OnInit {
  @Input("myForNo") numbers!: number[]

  constructor(
    private container: ViewContainerRef, 
    private template: TemplateRef<any>
  ) {}

  
  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, {$implicit: number})
    }
  }
}