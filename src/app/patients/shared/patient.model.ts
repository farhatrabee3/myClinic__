export class IPatient {
    id : string;
    fisrtName :  string ;
    lastName :  string ;
    courtesyTitle :  string ;
    country :  string ;
    dob :  string ;
    maritalStatus :  string ;
    gender :  string ;
    nationality :  string ;
    secondNationality : string;
    email :  string ;
    mobile :  string ;
    phone : string;
    hasInsurance :  string ;
    lastVisit : string;
    doctor : string;
    doctorId : string;
    description :  string ;
    parentInfo? : IParentInfo[];
}

export class IParentInfo {
Id : string;
FatherName : string;
MotherName : string;
PatientId : string;
}
