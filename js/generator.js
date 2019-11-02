generateLink.addEventListener('submit', function(e) {
	var phoneNumber = document.getElementById('phoneNumber').value;
	var userMessage = document.getElementById('userMessage').value;
	var generatedLink = 'https://api.whatsapp.com/send?phone='+phoneNumber+'&text='+userMessage;
	var link = document.getElementById('generatedLink');
	link.innerHTML = generatedLink;
	link.setAttribute('href', generatedLink);
	link.setAttribute('href', generatedLink);
e.preventDefault();
});