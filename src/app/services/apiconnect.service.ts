import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stiba } from './DTOs/Stiba';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {
  /*
  BASE_URL = environment.apiUrl
  constructor(private http: HttpClient) { }
  
  getStiba(): Observable<HttpResponse<Stiba[]>>{
    return this.http.get<any>(`${this.BASE_URL}`, {observe:'response'})
  }
  */
 
  private apiUrl = 'http://localhost:5058/api/Stiba/stiba'; // Ajuste para a URL da sua API

  constructor(private http: HttpClient) {}

  getStibaAnswers(): Observable<any[]> {
    let response = this.http.get<any[]>(this.apiUrl);
    return response;
  } 
}