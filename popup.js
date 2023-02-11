// console.log("hello")

// Simple alert:
// Reference: https://medium.com/tech-tajawal/build-a-simple-google-chrome-extension-in-few-minutes-1f13b600e83e
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('clickit');
  checkPageButton.addEventListener('click', function() {

    alert("Hello! This is a list of frontend bugs!")

  }, false);
}, false);
