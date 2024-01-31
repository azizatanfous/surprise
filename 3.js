function spinBottle() {
    var resultElement = document.getElementById("result");
    var heartElement = document.getElementById("heart");

    var truths = [
    "What's the most heartwarming thing I've done for you that made you feel loved?",
    "Can you recall a specific moment when you felt my love the strongest?",
    "In your opinion, what's my most endearing way of expressing love?",
    "On a scale of 1 to 10, how awesome is my love for you, and why?"
];

    var dares = [
    "Send me a funny selfie right now.",
    "Record a 30-second video confessing your secret celebrity crush.",
    "Text me your cheesiest pickup line.",
    "Do your best impression of me.",
    "Write a short poem about our relationship and read it out loud.",
];

    var choice = Math.random() < 0.5 ? "truth" : "dare";
    var selectedOption = choice === "truth" ? getRandomElement(truths) : getRandomElement(dares);

    resultElement.innerHTML = choice.toUpperCase() + ": " + selectedOption;

    if (choice === "truth") {
        // If it's a truth, show the heart
        heartElement.classList.remove("hidden");
    } else {
        // If it's a dare, hide the heart
        heartElement.classList.add("hidden");
    }
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
