import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  showForm=false;
  editForm=false;
  tasks: Task[]=[];

   myTask: Task = {
    label: '',
    completed: false
  };


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
     this.taskService.findall()
     .subscribe(tasks=>this.tasks= tasks );
  }

  deleteTask(id){
    this.taskService.delete(id)
    .subscribe(()=>{
      this.tasks= this.tasks.filter(task=> task.id != id)
    });
  }

  persistTask(){
    if(this.myTask.label!=''){
    this.taskService.persist(this.myTask)
    .subscribe((task)=>{
      this.tasks=[task,...this.tasks]
    })
    this.resetTask();
  }
  }
  resetTask(){
    this.myTask={
      label: '',
      completed: false
    };
    this.showForm=false;
    this.editForm=false;
  }
  togglecompleted(task){
    this.taskService.Completed(task.id,task.completed)
    .subscribe(()=>{
      task.completed = !task.completed
    })
  }

  editTask(task){
    this.myTask=task;
    this.editForm=true;
    this.showForm=true;
  }
  updateTask(){
    this.taskService.update(this.myTask).subscribe(task=>{
        this.resetTask();
    })
  }

}
