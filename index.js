
const submitButton = document.querySelector('#submit_button')

const enableButton = () => {
    if(document.querySelector('#name').value && document.querySelector('#email').value && document.querySelector('#subject').value && document.querySelector('#message').value)
    {
    document.querySelector('#submit_button').setAttribute('style', 'display: flex')
    } else {
        document.querySelector('#submit_button').setAttribute('style', 'display: none')
    }
}


const setMessage = (text) => {
    document.querySelector('.validationMessage').setAttribute('style', 'display: flex')
    document.querySelector('.validationMessage').textContent = text;
    setTimeout(() => {
        document.querySelector('.validationMessage').setAttribute('style', 'display: none')
    }, 5000)
}



const validateFields = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const nameInput = document.querySelector('#name').value
    const emailInput = document.querySelector('#email').value
    const subjectInput = document.querySelector('#subject').value
    const messageInput = document.querySelector('#message').value
    if(!nameInput || !emailInput || !subjectInput || !messageInput)
    {
        setMessage('Error: All fields must me filled!')

    } else if(nameInput.length > 50) {
        setMessage('Error: Field "Name" must be shorter than 50 characters!')
    }
    else if(!regex.test(emailInput)) {
        setMessage('Error: Field "Email" must be of type "****@domain.com"')
    }
    else if(subjectInput.length > 50) {
        setMessage('Error: Field "Subject Line" must be shorter than 50 characters!')
    }
    else if(messageInput.length > 300)
    {
        setMessage('Error: Field "Message" must be shorter than 300 characters!')
    } else {
        window.open(`mailto:johann.osnaya@gmail.com?subject=${subjectInput}&body=Hello Johann Osnaya, my name is ${nameInput}.%0D%0A%0D%0A${messageInput}`);
    }

}
