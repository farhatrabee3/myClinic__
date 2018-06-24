import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
 
import {Patient} from'./patient.model'
 
@Injectable()
export class PatientService {
  selectedPatient : Patient;
  patientList : Patient[];
  constructor(private http : Http) { }
 
  postPatient(emp : Patient){
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:58802/api/Patients/',body,requestOptions).map(x => x.json());
  }
 
  putPatient(id, emp) {
    var body = JSON.stringify(emp);
    console.log(emp.Id);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:58802/api/Patients/' + emp.id,
      body,
      requestOptions).map(res => res.json());
  }
 
  getPatientList(){
    this.http.get('http://localhost:58802/api/Patients/')
    .map((data : Response) =>{
      return data.json() as Patient[];
    }).toPromise().then(x => {
      this.patientList = x;
    })
  }
 
  deletePatient(id: number) {
    return this.http.delete('http://localhost:58802/api/Patients/' + id).map(res => res.json());
  }
}