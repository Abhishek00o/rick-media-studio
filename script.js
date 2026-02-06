function sendData(e){
  e.preventDefault();

  const msg =
`New Booking:
Name: ${name.value}
Email: ${email.value}
Service: ${service.value}
Details: ${details.value}`;

  window.open(
    `mailto:abhisheksharm789@gmail.com?subject=New Booking&body=${encodeURIComponent(msg)}`
  );
}
