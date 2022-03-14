document.querySelector('#btn').onclick = () => {
    const email = document.form.email;
    ValidateEmail(email)
}

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        return true
    }
    showError()
    setInterval(function () {
        normalStatus()
    }, 3000)
    return false;
}

const errorIcon = document.querySelector('#error');
const errorTxt = document.querySelector('#error-txt');

const showError = () => {
    errorIcon.style.display = 'block'
    errorTxt.style.display = 'block'
    email.style.border = '1px solid red';
}

const normalStatus = () => {
    errorIcon.style.display = 'none'
    errorTxt.style.display = 'none'
    email.style.border = '1px solid black';
}
