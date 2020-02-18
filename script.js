var form = document.getElementById("form");

function checkValue(input){
    var value = input && input.value;
    if (value === ''){
        input.style.borderBottom = '5px solid red';
        return false;
    } else {
        input.style.borderBottom = '5px solid rgba(0, 0, 0, 0.3)';
        return true;
    }
}

function validate(event) {
    event.preventDefault();
    var myName = document.getElementById("name");
    var myEmail = document.getElementById("email");
    var mySubject = document.getElementById("subject");
    var myMessage = document.getElementById("message");

    var isCorrectForm = checkValue(myName) && checkValue(myEmail) && checkValue(mySubject) && checkValue(myMessage);

    if (isCorrectForm) {
        var successElement = document.getElementById('successMessage');
        successElement.innerHTML = 'Спасибо, ваша заявка отправлена';
    }
}

form.addEventListener('submit', validate);
