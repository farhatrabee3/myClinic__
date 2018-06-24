import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { AppointmentService } from '../shared/appointment.service'

import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.appointmentService.selectedAppointment = {
      Id: null,
      Date: '',
      DoctorId: '',
      ExistingPatient: '',
      Time: '',
      VisitReason: '',
      VisitType:''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.Id == null) {
      this.appointmentService.postAppointment(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.appointmentService.getAppointmentList();
          this.toastr.success('New Record Added Succcessfully', 'Employee Register');
        })
    }
    else {
      this.appointmentService.putAppointment(form.value.Id, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.appointmentService.getAppointmentList();
        this.toastr.info('Record Updated Successfully!', 'Employee Register');
      });
    }
  }
}