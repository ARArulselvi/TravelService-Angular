import { Component } from '@angular/core';
import { NavigationLinks } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Arulselvi travelService';
  subHeading='Chennai';

  //links=['home','catalog','payment','contact'];
  links: NavigationLinks[] =[{text:'Home',link:'home.html'},{text:'Catalog',link:'catalog.html'},{text:'Payment',link:'payment.html'},{text:'Contact',link:'contact.html'}]
}
