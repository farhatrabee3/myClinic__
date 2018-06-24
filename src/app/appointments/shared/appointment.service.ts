import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Appointment} from'./appointment.model'
 
@Injectable()
export class AppointmentService {
  selectedAppointment : Appointment;
  appointmentList : Appointment[];
  constructor(private http : Http) { }
 
  postAppointment(emp : Appointment){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:27837/api/Appointments',body,requestOptions).map(x => x.json());
  }
 
  putAppointment(id, emp) {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:27837/api/Appointments/' + id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getAppointmentList(){
    this.http.get('http://localhost:27837/api/Appointments')
    .map((data : Response) =>{
      return data.json() as Appointment[];
    }).toPromise().then(x => {
      this.appointmentList = x;
    })
  }
 
  deleteAppointment(id: number) {
    return this.http.delete('http://localhost:27837/api/Appointments/' + id).map(res => res.json());
  }
}