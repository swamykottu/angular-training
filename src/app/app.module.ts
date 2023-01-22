import { APP_INITIALIZER, inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from './settings.service';
import { environment } from 'src/environments/environment';
import { catchError, of, tap } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ 
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: () => {
    //     const settingsService = inject(SettingsService);
    //      const http = inject(HttpClient);
    //     //https://github.com/profanis/codeShotsWithProfanis/blob/44/environmental_variables_app_initializer/src/app/app.module.ts
    //     return () =>
    //       new Promise((resolve) => {
    //         // load settings for a deployed app
    //         if (environment.production) {
    //           http
    //             .get('./config.json')
    //             .pipe(
    //               tap((data: any) => {
    //                 //settingsService.baseUrl = data.baseUrl;
    //                 resolve(true);
    //               }),
    //               catchError((error) => {
    //                 // settingsService.baseUrl = 'http://default.api';
    //                 resolve(true);
    //                 return of(null);
    //               })
    //             )
    //             .subscribe();
    //         } else {
    //           // load settings for a local app
    //           const settings = require('../../config.json');
    //           settingsService.pdfSize = settings.pdfSize;
    //           resolve(true);
    //         }
    //       });
    //   },
    //   multi: true
    //  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
