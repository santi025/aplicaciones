document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const patientApellido = document.getElementById('patientApellido').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const doctor = document.getElementById('doctor').value;
  
    const appointment = {
      patientName: patientName,
      patientApellido:patientApellido,
      appointmentDate: appointmentDate,
      doctor: doctor
    };
  
    const listItem = document.createElement('li');
    listItem.textContent = `${appointment.patientName}-${appointment.patientApellido} - ${appointment.appointmentDate} - ${appointment.doctor}`;
  
    document.getElementById('appointmentList').appendChild(listItem);
  
    
    document.getElementById('patientName').value = '';
    document.getElementById('patientApellido').value = '';
    document.getElementById('appointmentDate').value = '';
    document.getElementById('doctor').value = '';
  });
  