import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
 
import { PatientService } from '../shared/patient.service'
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
 
  constructor(private patientService: PatientService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.patientService.selectedPatient = {
      Id: null,
      FisrtName:'',
      DoctorId:1,
      LastName: '',
      Description: '',
      Mobile: ''
    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.Id == null) {
      this.patientService.postPatient(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.patientService.getPatientList();
          this.toastr.success('New Record Added Succcessfully', 'Patient Register');
        })
    }
    else {
      this.patientService.putPatient(form.value.PatientID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatientList();
        this.toastr.info('Record Updated Successfully!', 'Patient Register');
      });
    }
  }
}