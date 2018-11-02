import {Component, Injectable, OnInit} from '@angular/core';
import {Todo} from '../Models/todo';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})

export class ToDoComponent implements OnInit {
  todolist:  Array<Todo> = [];
  toDoListt = new Todo();
  toDoListtt = new Todo();
  k: any;
  constructor(private http: HttpClient ) { }
  public showw: Boolean = false;
  public show: Boolean = false;
  public update: any = 'update';
  public addTask: any = 'Add task';
  ngOnInit() {
    this.http.get('http://localhost:18080/jaxrs_crude/rest/entreprise/toDooS/')
      .subscribe(
        (data: Todo[]) => {this.todolist = data ; } );

    this.http.get('http://localhost:18080/jaxrs_crude/rest/entreprise/toDooS/')
      .subscribe(
        (data: Todo[]) => {console.log(this.todolist); } );
  }
  addToDo( d) {
    console.log(d);
    this.http.post('http://localhost:18080/jaxrs_crude/rest/entreprise/toDoo/',
      d)
      .subscribe(
        (data: Todo[]) => {console.log(d); } );
    location.reload();
}
  deleteToDo(indexToDO) {
    console.log(indexToDO);
   this.k = this.todolist[indexToDO].title;
    this.http.post('http://localhost:18080/jaxrs_crude/rest/entreprise/toDooR/' + this.k, this.k)
      .subscribe(
        (data: Todo[]) => {console.log(this.k); } );
    location.reload();
  }
  toggle() {
    this.showw = !this.showw;


    if (this.showw) {
      this.addTask = 'Hide'; }
    else {
      this.addTask = 'Add Task'; }
  }
  getToDO(indexxx) {
    this.toDoListtt = this.todolist[indexxx] ;
    this.show = !this.show;


    if (this.show) {
      this.update = 'Hide'; }
    else {
      this.update = 'Update'; }
    return  this.toDoListtt;
  }
  updateToDO(TODO) {
    console.log(TODO);
    this.http.put('http://localhost:18080/jaxrs_crude/rest/entreprise/toDooU/',
      TODO)
      .subscribe(
        (data: Todo[]) => {console.log(TODO); } );
    location.reload();
  }
}
