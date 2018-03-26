import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm ='';
  isCollapased = true;

  get token(){
    return  localStorage.getItem('token');
  }

  collapse(){
    this.isCollapased = true;
  }

  closeDropdown(dropdown){
    dropdown.close();
  }

  logout(){

  }

  search(){
    
  }
}
