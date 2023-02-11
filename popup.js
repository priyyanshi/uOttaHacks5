// JavaScript code to call the server
const xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:5000/find_typos', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    const typos = JSON.parse(xhr.responseText).typos;
    // Use the typos in your JavaScript code
  }
};
xhr.addEventListener("load", function () {
  console.log(xhr.responseText);
});


var el = document.body; 
var text = el.innerText || el.textContent;
text = String(text)
console.log("working")

var inc = 10;
var pos = 0;
while (text.length > 0) {
  if (pos+inc >= text.length) {
    xhr.send(JSON.stringify({ text: text.substring(pos,text.length-1) }));
  }
  xhr.send(JSON.stringify({ text: text.substring(pos,pos+inc) }));
  pos += inc;
}
console.log("hellow here???")