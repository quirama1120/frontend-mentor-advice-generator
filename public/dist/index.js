"use strict";
const diceDivHt = document.getElementById('diceDiv');
const fetchingData = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
        return response.json();
    })
        .then(data => {
        const adviceText = data.slip.advice;
        const idTittle = `${data.slip.id.toString()}`;
        printAdvice(adviceText, idTittle);
    })
        .catch(error => {
        console.error('Error fetching the advice', error);
    });
};
document.addEventListener('DOMContentLoaded', fetchingData);
const printAdvice = (adviceText, idTittle) => {
    let advice = document.getElementById('adviseP');
    let idTittleH1 = document.getElementById('adviseT');
    if (advice) {
        advice.textContent = `"${adviceText}"`;
    }
    else {
        console.error('no se encuentra elmento P advise');
    }
    if (idTittleH1) {
        idTittleH1.textContent = `ADVICE #${idTittle}`;
    }
    else {
        console.error('no se encuentra elmento H1 advise');
    }
};
if (diceDivHt) {
    diceDivHt.addEventListener('click', () => {
        fetchingData();
    });
}
else {
    console.error('no se encuentra elment diceDivHt dice');
}
