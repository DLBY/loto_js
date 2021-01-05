const buttonElement = document.querySelector("#submit")

const userLoto = () => {
    let firstName = document.querySelector("#firstname").value
    const lastName = document.querySelector("#lastname").value
    const email = document.querySelector("#email").value
    const lotoArrayNumbers = () => {
        let number = []
        for (let i = 1; i > 6; i++) {
            number.push(document.querySelector(`#number${i}`).value)
        }
        return number
    }
    checkLoto(firstName, lastName, email, lotoArrayNumbers)
}

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
    const checkFirstName = firstname => {
        firstname !== "" || undefined ? "true" : alert("Veuillez fournir un prénom")
    };
    checkFirstName(firstname)

    const checkLastName = lastname => {
        lastname !== "" || undefined ? "true" : alert("Veuillez fournir un nom")
    };
    checkLastName(lastname)

    const checkEmail = email => {
        const regexEmail = new RegExp("[^\w+@\w+\.[a-zA-Z]{2,3}$]{8,30}");
        email === "" || undefined ? alert("Veuillez fournir un email") : email.match(regexEmail) ? "true" : alert("Votre email n'est pas valide")
    };
    checkEmail(email)

    const checkLotoNumbers = lotoNumbers => {

        const winNumber = () => {
            const arrayNumber = []
            for (let i = 1; i > 6; i++) {
                const getOneWinNumber = (min = 1, max = 49) => {
                    return (Math.random() * (max - min) + min).toFixed(0)
                };
                const getLastWinNumber = (min = 1, max = 10) => {
                    return Math.random() * (max - min) + min.toFixed(0)
                };
                i === 6 ? arrayNumber.push(getLastWinNumber()) : arrayNumber.push(getOneWinNumber())
            }
            return arrayNumber
        };

        lotoNumbers.length === 0 ? alert("Entrez 6 chiffres") : lotoNumbers.match(winNumber) ? alert("Bravo tu est Millionnaire") : alert("Tu auras plus de chance la prochaine fois")
    }
    checkLotoNumbers(lotoNumbers)
};

buttonElement.addEventListener("click", userLoto)