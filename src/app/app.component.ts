import { Component } from '@angular/core';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining';
  titleValue = ''
  
  constructor(private settingsService: SettingsService) {
      console.log(settingsService.pdfSize)
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(title.value)
    console.log(link.value)
    console.log(this.titleValue)
    return false
  }
}
