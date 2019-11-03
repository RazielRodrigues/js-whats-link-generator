generateLink.addEventListener('submit', function(e) {
	var phoneNumber = document.getElementById('phoneNumber').value;
	var userMessage = document.getElementById('userMessage').value;
	var hide = document.getElementById('hide');
	var generatedLink = 'https://api.whatsapp.com/send?phone=+'+phoneNumber+'&text='+userMessage;
	var link = document.getElementById('generatedLink');
	var validate = isNaN(phoneNumber);

	if (validate == true) {

		link.innerHTML = "Telefone invalido";
		if (hide.className == 'hide') {
			hide.className = 'show';
		}

	}else{
		link.innerHTML = generatedLink;
		link.setAttribute('href', generatedLink);
		if (hide.className == 'hide') {
			hide.className = 'show';
		}
	}
e.preventDefault();
});