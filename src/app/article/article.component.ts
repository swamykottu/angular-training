import { Component, Directive, HostBinding, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Directive({selector: '[ngModel]'})
class NgModelStatus {
  constructor(public control: NgModel) {}
  @HostBinding('class.valid') get valid() { return this.control.valid; }
  @HostBinding('class.invalid') get invalid() { return this.control.invalid; }
}


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-6';
  prop = '123'
  constructor() { }

  ngOnInit(): void {
  }

}
