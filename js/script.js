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

    //DESCTRUCTURING ritorna un array e assegno in conlo stesso ordine di ritorno alle variabili che ho dichiarato 
    //ed ognuna ha il suo tipo es[numero, stringa] e sia la dichiarazione che il ritorno devono essere tra parentesi quadre
    const [ticketPrice, message] = calculateTicketPrice(age, distance);

    userCard.classList.remove("d-none")

    detName.innerHTML = name;
    detSc.innerHTML = `La tariffa che ti è stata applicata è: tariffa ${message}`;
    detTar.innerHTML = ticketPrice;
})

/**
 * Description placeholder
 *
 * @param {number} eta
 * @param {number} kilometri
 * @returns {number, string}
 */
const calculateTicketPrice = (eta, kilometri) => {
    let costoAlKm = 0.21;
    let sconto = 0;
    let mes = 'standard'
    if (eta < 18) {
        sconto = 20;
        mes = 'scontata'
    } else if (eta >= 65) {
        sconto = 40;
        mes = 'scontata'
    }

    return [(kilometri * costoAlKm * (100 - sconto) / 100).toFixed(2), mes];
}
