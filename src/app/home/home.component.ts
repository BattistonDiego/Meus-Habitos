import { Component, OnInit } from '@angular/core';
import { RoutineEntry } from 'src/interfaces/routine-entry.model';
import { RoutineService } from 'src/service/routines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dateFormated: string = '';

  routineList!: RoutineEntry[];

  constructor(private routineService: RoutineService) {}

  ngOnInit(): void {
    this.dateFormated = this.formatarDataCompleta(new Date());

    this.routineService.getTodayRoutines(1).subscribe({
      next: (routines) => {
        this.routineList = routines;
        console.log(this.routineList);
      },
    });
  }

  formatarDataCompleta(data: Date): string {
    const diasSemana = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ];
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    // Capitaliza primeira letra do dia da semana
    const diaSemanaCapitalizado =
      diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

    return `${diaSemanaCapitalizado}, ${dia} de ${mes} de ${ano}`;
  }

  onCheckboxChange(routine: RoutineEntry, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    const updatedRoutine: RoutineEntry = {
      ...routine,
      value: checked,
      iconName: routine.iconName, // <- importante manter aqui!
    };

    this.routineService.saveRoutine(updatedRoutine).subscribe({
      next: () => console.log('Rotina atualizada com sucesso'),
      error: (err) => console.error('Erro ao atualizar rotina:', err),
    });
  }
}
