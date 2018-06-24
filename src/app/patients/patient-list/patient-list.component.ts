import { Component, OnInit } from '@angular/core';
 
import { PatientService } from '../shared/patient.service'
import { Patient } from '../shared/patient.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
 
  constructor(private patientService: PatientService,private toastr : ToastrService) { }
 
  ngOnInit() {
    this.patientService.getPatientList();
  }
 
  showForEdit(emp: Patient) {
    this.patientService.selectedPatient = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.patientService.deletePatient(id)
      .subscribe(x => {
        this.patientService.getPatientList();
        this.toastr.warning("Deleted Successfully","Patient Register");
      })
    }
  }
}