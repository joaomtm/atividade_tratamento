import { Injectable } from '@angular/core';
import { ApiconnectService } from './apiconnect.service';
import { map } from 'rxjs/operators';
import { Stiba } from './DTOs/Stiba';

@Injectable({
  providedIn: 'root'
})
export class NoteStibaService {


  constructor(private apiConnectService: ApiconnectService) {}

  getAverageScore() {
    return this.apiConnectService.getStibaAnswers().pipe(
      map((responses: Stiba[]) => {
        let totalScore = 0;
        let count = 0;
        responses.forEach(response => {
          const score = parseFloat(response.notaStiba);
          if (!isNaN(score)) {
            totalScore += score;
            count++;
          }
        });
        return count > 0 ? totalScore / count : 0;
      })
    );
  }
}
