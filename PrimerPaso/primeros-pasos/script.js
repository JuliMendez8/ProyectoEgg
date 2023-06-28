function showAlert(){
    alert('¡Hola, esta es una alerta de JavaScript!')
}

const form = document.getElementById("myForm")

form.addEventListener("submit", function(lala){
    lala.preventDefault();
    validateForm();
})

function validateForm(){
    const input = document.getElementById("email");
    const inputValue = input.value;

    if(!validateEmail(inputValue)){
        alert('Por favor ingrese un correo electrónico válido.');
    }
    else{
        alert('Correo electrónico enviado correctamente');
    }
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
}

function suma(){
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    var resultado;
    resultado = num1+num2;
    alert("El resultado es " + resultado)
}