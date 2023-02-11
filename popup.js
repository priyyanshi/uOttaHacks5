// Popup includes list of frontend bugs and button redirects.

document.addEventListener('DOMContentLoaded', function() {
  var DetailsButton = document.getElementById('Details');
  var MessageButton = document.getElementById('Message');

  // Button to redirect to eClean website.
  DetailsButton.addEventListener('click', function() {
    alert("This is where redirect to website occurs.");
    console.log("This is where redirect to website occurs.");
  }, false);

  // Button to redirect to Twilio API calls.
  MessageButton.addEventListener('click', function() {
    alert("This is where call to Twilio occurs.");
    console.log("This is where call to Twilio occurs.");
  }, false);
}, false);
