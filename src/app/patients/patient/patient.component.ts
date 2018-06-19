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
 
  constructor(public patientService: PatientService, private toastr: ToastrService) { }
 
  ngOnInit() {
    this.resetForm();
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.patientService.selectedPatient = {
      id: '',
      fisrtName: '',
      lastName: '',
      lastVisit: '',
      doctorId: '',
	    courtesyTitle :  '' ,
	    country :  '' ,
	    dob :  '' ,
	    maritalStatus :  '' ,
	    gender :  '' ,
	    nationality :  '' ,
	    secondNationality : '',
	   email :  '' ,
	   mobile :  '' ,
	   phone : '',
	   hasInsurance :  '' ,
	   doctor : null,
	   description :  '',
	   parentInfo : null
    }
  }
 
  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.patientService.postPatient(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.patientService.getPatientList();
          this.toastr.success('New Record Added Succcessfully', 'Patient Register');
        })
    }
    else {
      this.patientService.putPatient(form.value.id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.patientService.getPatientList();
        this.toastr.info('Record Updated Successfully!', 'Patient Register');
      });
    }
  }
}

