
const submitButton = document.querySelector('#submit_button')

const enableButton = () => {
    if(document.querySelector('#name').value && document.querySelector('#email').value && document.querySelector('#subject').value && document.querySelector('#message').value)
    {
    document.querySelector('#submit_button').setAttribute('style', 'display: flex')
    } else {
        document.querySelector('#submit_button').setAttribute('style', 'display: none')
    }
}




const validateFields = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const subjectInput = document.querySelector('#subject').value
    const messageInput = document.querySelector('#message').value
    if(!nameInput || !emailInput || !subjectInput || !messageInput)
    {
        document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
        document.querySelector('.validationMessage').textContent = 'Error: All fields must me filled!';
        setTimeout(() => {
            document.querySelector('.validationMessage').setAttribute('style', 'display: none')
        }, 5000)
    } else if(nameInput.length > 50) {
        document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
        document.querySelector('.validationMessage').textContent = 'Error: Field "Name" must be shorter than 50 characters!';
        setTimeout(() => {
            document.querySelector('.validationMessage').setAttribute('style', 'display: none')
        }, 5000)
    }
    else if(!regex.test(emailInput)) {
        document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
        document.querySelector('.validationMessage').textContent = 'Error: Field "Email" must be of type "****@domain.com"';
        setTimeout(() => {
            document.querySelector('.validationMessage').setAttribute('style', 'display: none')
        }, 5000)
    }
    else if(subjectInput.length > 50) {
        document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
        document.querySelector('.validationMessage').textContent = 'Error: Field "Subject Line" must be shorter than 50 characters!';
        setTimeout(() => {
            document.querySelector('.validationMessage').setAttribute('style', 'display: none')
        }, 5000)
    }
    else if(messageInput.length > 300)
    {
        document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
        document.querySelector('.validationMessage').textContent = 'Error: Field "Message" must be shorter than 300 characters!';
        setTimeout(() => {
            document.querySelector('.validationMessage').setAttribute('style', 'display: none')
        }, 5000)
    } else {
        window.open(`mailto:johann.osnaya@gmail.com?subject=${subjectInput}&body="Hello Johann Osnaya, my name is ${nameInput}.\n\n${messageInput}`);
    }
}
