var phoneNumber = document.getElementById('phoneNumber');
var userMessage = document.getElementById('userMessage');

function func_link_generator() {
	document.getElementById('generatedLink') = 'https://api.whatsapp.com/send?phone='+phoneNumber.value+'text='+userMessage.value';
}
