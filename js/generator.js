generateLink.addEventListener('submit', function(e) {
	var phoneNumber = document.getElementById('phoneNumber');
	var userMessage = document.getElementById('userMessage');
	var link = 'https://api.whatsapp.com/send?phone='+phoneNumber+'&text='+userMessage;
	document.getElementById('generatedLink').innerHTML = link;
e.preventDefault();
});