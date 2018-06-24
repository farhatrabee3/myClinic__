import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppointmentService } from './shared/appointment.service'

declare const $: any;
declare const moment: any;

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers :[AppointmentService],
  encapsulation: ViewEncapsulation.None
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointmentService : AppointmentService) { }
  ngOnInit() {
    $('.boxs-close').on('click', function(){
        var element = $(this);
        var cards = element.parents('.card');
        cards.addClass('closed').fadeOut();
    });

    $('.form-control').on('focus', function() {
        $(this).parent('.input-group').addClass('input-group-focus');
    }).on('blur', function() {
        $(this).parent('.input-group').removeClass('input-group-focus');
    });

    
    $(function () {
      $('#datetimepicker1').datetimepicker();
    });
            



    $('.datetimepicker').bootstrapMaterialDatePicker({
        format: 'dddd DD MMMM YYYY - HH:mm',
        clearButton: true,
        weekStart: 1
    });  
}
}