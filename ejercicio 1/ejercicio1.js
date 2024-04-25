
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const patientApellido = document.getElementById('patientApellido').value;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value; 
    const doctor = document.getElementById('doctor').value;
  
    const appointment = {
      patientName: patientName,
      patientApellido: patientApellido,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime, 
      doctor: doctor
    };
  
    const listItem = document.createElement('li');
    listItem.textContent = `${appointment.patientName} ${appointment.patientApellido} - ${appointment.appointmentDate} - ${appointment.appointmentTime} - ${appointment.doctor}`; // Mostrar la hora de la cita
  
    document.getElementById('appointmentList').appendChild(listItem);
  
    
    document.getElementById('patientName').value = '';
    document.getElementById('patientApellido').value = '';
    document.getElementById('appointmentDate').value = '';
    document.getElementById('appointmentTime').value = ''; 
});

