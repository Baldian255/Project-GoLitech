const submitButton = document.getElementById
('submit-btn')

submitButton.addEventListener('click', () => {
    const Name = document.getElementById('Name').value
    const Email = document.getElementById('Email').value
    const Phone = document.getElementById('Phone').value
    const Address = document.getElementById('Address').value
    const Gender = document.getElementById('Gender').value

    if(Name === '' || Email === '' || Phone === '' || Address === '' || Gender === '' ) {
        alert('Please fill all of the information before submit')
        return
    }
    if(phone.length < 13) {
        alert('you have to fill minimum 12 characters phone number!')
        return
    }

    alert('Submit Succeed!')
})