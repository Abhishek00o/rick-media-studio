function sendData(e){
  e.preventDefault();

  const message =
`New Booking Request:
Name: ${name.value}
Email: ${email.value}
Service: ${service.value}
Details: ${details.value}`;

  const phone = "91XXXXXXXXXX"; // apna number yahan daalo
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
