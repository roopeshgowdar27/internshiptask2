const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
];

const appointments = [];

// Function to display available time slots
function displayAvailableTimeSlots() {
  const calendarDiv = document.getElementById('calendar');
  calendarDiv.innerHTML = '<h2>Available Time Slots</h2>';
  
  timeSlots.forEach((slot) => {
    const button = document.createElement('button');
    button.textContent = `Book ${slot}`;
    button.addEventListener('click', () => bookAppointment(slot));
    calendarDiv.appendChild(button);
  });
}

// Function to book an appointment
function bookAppointment(timeSlot) {
  appointments.push(timeSlot);
  displayAvailableTimeSlots();
  displayAppointments();
  // You can also send reminders here (e.g., using notifications or emails)
}

// Function to display booked appointments
function displayAppointments() {
  const appointmentsDiv = document.getElementById('appointments');
  appointmentsDiv.innerHTML = '<h2>Your Appointments</h2>';
  
  appointments.forEach((appointment) => {
    const p = document.createElement('p');
    p.textContent = `You have an appointment at ${appointment}`;
    appointmentsDiv.appendChild(p);
  });
}

// Initialize the application
displayAvailableTimeSlots();
displayAppointments();