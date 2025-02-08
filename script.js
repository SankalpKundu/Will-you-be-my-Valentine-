const messages = [
    "you clicked the wrong button loser",
    "wrong AGAIN.",
    "THE AUDACITY-",
    "so u hate me basically?",
    "pingu please...",
    "HEAR ME OUT-",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will literally kms",
    "picture me as a sad orange cat",
    "Ok fine, I will stop asking...",
    "SIKE LOSER, say yes (last chance frr)! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
