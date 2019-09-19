import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import {NavigationComponent} from './navigation/navigation.component';
import { FetchOperatorComponent } from './fetch-operator/fetch-operator.component';
import { LohinComponent } from './lohin/lohin.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ShowToursComponent } from './show-tours/show-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LohinComponent,
    SearchComponent,
    FetchOperatorComponent,
    ShowToursComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
