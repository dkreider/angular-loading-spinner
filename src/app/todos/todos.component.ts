import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
