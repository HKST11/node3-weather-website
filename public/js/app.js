console.log("Client side javascript file is loaded")

const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const searchAddress = searchTerm.value

    const url = 'http://localhost:3000/weather?address=' + searchAddress

    message1.textContent = "Loading..."
    message2.textContent = ""

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast

            }
        })
    })
})