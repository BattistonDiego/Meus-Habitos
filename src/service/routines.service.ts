import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutineEntry } from 'src/interfaces/routine-entry.model';

@Injectable({
  providedIn: 'root',
})
export class RoutineService {
  private readonly URL = 'http://localhost:8080/api/routines/today';

  constructor(private http: HttpClient) {}

  getTodayRoutines(userId: number): Observable<RoutineEntry[]> {
    return this.http.get<RoutineEntry[]>(`${this.URL}?userId=${userId}`);
  }

  saveRoutine(routine: RoutineEntry): Observable<RoutineEntry> {
    return this.http.post<RoutineEntry>(
      'http://localhost:8080/api/routines/today',
      routine
    );
  }
}
