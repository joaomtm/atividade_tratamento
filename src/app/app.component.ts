import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';
import { HomeComponent } from './components/screens/home/home.component';
import { ApiconnectService } from './services/apiconnect.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'kombi-dashboard';
  apiUrl: string | undefined;

  
  constructor(private apiConnectService: ApiconnectService){
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);   
  }
ngOnInit(): void{
    this.apiConnectService.getStibaAnswers().subscribe(response=>{
      console.log(response)
      return response
    })
  }
}  
