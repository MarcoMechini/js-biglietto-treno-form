const userForm = document.getElementById("user-form");
const userName = document.getElementById("username");
const userDistance = document.getElementById("distance");
const userAge = document.getElementById("age");
const userCard = document.getElementById("user-card");
const detName = document.querySelector("#detName span:nth-child(2)");
const detSc = document.querySelector("#detSc span:nth-child(2)");
const detTar = document.querySelector("#detTar span:nth-child(2)");



userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = userName.value.trim()
    const distance = parseInt(userDistance.value);
    const age = parseInt(userAge.value);
    const ticketPrice = calculateTicketPrice(age, distance).toFixed(2);

    userCard.classList.remove("d-none")

    detName.innerHTML = name;
    detSc.innerHTML = 'Lo sconto è: ', 'SCONTO DA INSERIRE';
    detTar.innerHTML = ticketPrice;
})


/**
 * Description placeholder
 *
 * @param {number} eta
 * @param {number} kilometri
 * @returns {number}
 */
const calculateTicketPrice = (eta, kilometri) => {
    let costoAlKm = 0.21;
    let sconto = 0;

    if (eta < 18) {
        sconto = 20;
    } else if (eta >= 65) {
        sconto = 40;
    }

    return kilometri * costoAlKm * (100 - sconto) / 100;
}
