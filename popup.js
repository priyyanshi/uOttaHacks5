// Popup includes list of frontend bugs and button redirects.

document.addEventListener('DOMContentLoaded', function() {
	//Create list of errors/bugs
	(async () => {
		const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
		const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
		if (response.metadata == 0){
		   var node = document.createElement('li');
		   const no_meta = document.createTextNode('ERROR - NO METADATA DESCRIPTION FOR PLATFORM FOUND');
		   node.appendChild(no_meta)
		   var errors_list = document.querySelector('ul');
		   errors_list.appendChild(node);

		}
		for (var i = 0; i < response.typos.length; i++) {
			var node = document.createElement('li');
			node.appendChild(document.createTextNode('TYPO - ' + response.typos[i]));
			var errors_list = document.querySelector('ul');
			errors_list.appendChild(node);
		}
		for (var i = 0; i < response.images.length; i++) {
			var node = document.createElement('li');
			node.appendChild(document.createTextNode('ERROR - NO ALT TEXT ON IMAGE ' + response.images[i]));
			var errors_list = document.querySelector('ul');
			errors_list.appendChild(node);
		}
   })();
   var MessageButton = document.getElementById('Message');

 
	// Button to redirect to eClean website.
	var DetailsButton = document.getElementById('Details');

	DetailsButton.onclick = function () {
	chrome.tabs.create({
		url: "https://patelpriyanshi.wixsite.com/eclean"
	});
	};
  
  // Button to redirect to Twilio API calls.
  MessageButton.addEventListener('click', function() {
    alert("This is where call to Twilio occurs.");
    console.log("This is where call to Twilio occurs.");
  }, false);
}, false);
