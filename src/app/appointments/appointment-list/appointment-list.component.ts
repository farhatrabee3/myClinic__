import { Component, OnInit } from '@angular/core';
 
import { AppointmentService } from '../shared/appointment.service'
import { Appointment } from '../shared/appointment.model';
import { ToastrService } from 'ngx-toastr';    
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
 
  constructor(private appointmentService: AppointmentService,private toastr : ToastrService) { }
 
  ngOnInit() {
    this.appointmentService.getAppointmentList();
  }
 
  showForEdit(emp: Appointment) {
    this.appointmentService.selectedAppointment = Object.assign({}, emp);;
  }
 
 
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.appointmentService.deleteAppointment(id)
      .subscribe(x => {
        this.appointmentService.getAppointmentList();
        this.toastr.warning("Deleted Successfully","Employee Register");
      })
    }
  }
}