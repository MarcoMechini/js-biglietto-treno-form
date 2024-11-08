const userForm = document.getElementById("user-form");
const userName = document.getElementById("username");
const userDistance = document.getElementById("distance");
const userAge = document.getElementById("age");



userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = userName.value.trim()
    const distance = parseInt(userDistance.value);
    const age = parseInt(userAge.value);

    console.log(calculateTicketPrice(age, distance))
})











const calculateTicketPrice = (eta, kilometri) => {
    let costoAlKm = 0.21;
    let sconto = 0;
    let prezzo = 0;

    if (eta < 18) {
        sconto = 20;
    } else if (eta >= 65) {
        sconto = 40;
    }

    return prezzo = kilometri * costoAlKm * (100 - sconto) / 100;
}
