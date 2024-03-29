import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaudeService {
  private baseUrl: string = 'http://localhost:5058/';

  constructor(private http: HttpClient) { }

  getTopDiseases(): Observable<any[]> {
      const url = `${this.baseUrl}api/Saude/diseases/top`; 
      return this.http.get<any[]>(url);
  }
}
