import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  appUrl="http://localhost:4000/tasks";
  constructor(private http:HttpClient) { }

  findall(){
    return this.http.get<Task[]>(this.appUrl);
  }
  delete(id){
    return this.http.delete(`${this.appUrl}/${id}`);
  }
  persist(task){
    return this.http.post<Task>(this.appUrl,task);
  }
  Completed(id,completed){
    return this.http.patch(`${this.appUrl}/${id}`,{completed: !completed});
  }

  update(task){
    return this.http.put(`${this.appUrl}/${task.id}`,task);
  }
}
