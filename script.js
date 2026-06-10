let selectedUnit = "C";
const facts = [
    "The Sun's surface temperature is approximately 5500°C.",
    "Absolute Zero is 0 Kelvin.",
    "Liquid Nitrogen boils at -196°C.",
    "Water freezes at 0°C.",
    "Water boils at 100°C.",
    "The Earth's core is hotter than the Sun's surface.",
    "Venus is hotter than Mercury.",
    "Human body temperature is around 37°C.",
    "The coldest temperature recorded on Earth was -89.2°C.",
    "The hottest temperature recorded on Earth was 56.7°C."
];

let history =
    JSON.parse(
        localStorage.getItem("tempHistory")
    ) || [];

let score = 0;

const quizQuestions = [
    {
        question: "Water freezes at 0°C.",
        answer: true
    },
    {
        question: "Absolute Zero equals 0 Kelvin.",
        answer: true
    },
    {
        question: "Water boils at 50°C.",
        answer: false
    },
    {
        question: "Human body temperature is 37°C.",
        answer: true
    },
    {
        question: "Kelvin is mainly used in scientific research.",
        answer: true
    }
];

let currentQuestion = 0;

function setUnit(unit,button){

    selectedUnit = unit;

    document
        .querySelectorAll(".unit-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    button.classList.add("active");
}

function convertTemperature() {

    let temp = parseFloat(
        document.getElementById("temperature").value
    );

    let unit = selectedUnit;

    if (isNaN(temp)) {
        alert("Please enter a valid temperature.");
        return;
    }

    let celsius;
    let fahrenheit;
    let kelvin;

    if (unit === "C") {

        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;

    }

    else if (unit === "F") {

        fahrenheit = temp;
        celsius = (temp - 32) * 5/9;
        kelvin = celsius + 273.15;

    }

    else {

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    displayResults(
        celsius,
        fahrenheit,
        kelvin
    );

    updateComfort(celsius);

    updateThermometer(celsius);

    addToHistory(
        temp,
        unit,
        celsius,
        fahrenheit,
        kelvin
    );
}

function displayResults(c, f, k) {

    document.getElementById("results").innerHTML = `

        <div class="result-card">
            <h3>🌡 Celsius</h3>
            <p>${c.toFixed(2)}°C</p>
        </div>

        <div class="result-card">
            <h3>🔥 Fahrenheit</h3>
            <p>${f.toFixed(2)}°F</p>
        </div>

        <div class="result-card">
            <h3>⚛ Kelvin</h3>
            <p>${k.toFixed(2)}K</p>
        </div>

    `;
}

function updateComfort(celsius) {

    let message = "";

    if (celsius < 0) {

        message = `
        ❄ <strong>Freezing Weather</strong><br><br>
        ✔ Heavy winter clothing<br>
        ✔ Limit outdoor exposure
        `;

    }

    else if (celsius <= 15) {

        message = `
        🧥 <strong>Cold Weather</strong><br><br>
        ✔ Carry a jacket<br>
        ✔ Warm drinks recommended
        `;

    }

    else if (celsius <= 25) {

        message = `
        😊 <strong>Pleasant Weather</strong><br><br>
        ✔ Great for outdoor activities<br>
        ✔ Comfortable conditions
        `;

    }

    else if (celsius <= 35) {

        message = `
        ☀ <strong>Warm Weather</strong><br><br>
        ✔ Stay hydrated<br>
        ✔ Wear light clothing
        `;

    }

    else {

        message = `
        🔥 <strong>Very Hot</strong><br><br>
        ✔ Avoid direct sunlight<br>
        ✔ Drink plenty of water
        `;
    }

    document.getElementById(
        "comfortBox"
    ).innerHTML = message;
}

function updateThermometer(celsius) {

    let level =
        ((celsius + 50) / 150) * 100;

    level = Math.max(
        5,
        Math.min(level,100)
    );

    document.getElementById(
        "thermoFill"
    ).style.height =
        `${level}%`;
}

function generateFact() {

    const randomFact =
        facts[
            Math.floor(
                Math.random() * facts.length
            )
        ];

    document.getElementById(
        "factBox"
    ).innerHTML =
        randomFact;
}

function checkQuiz(userAnswer) {

    const question =
        quizQuestions[currentQuestion];

    if(userAnswer === question.answer){

        score++;

        document.getElementById(
            "quizResult"
        ).innerHTML =
            "✅ Correct";

    }

    else {

        document.getElementById(
            "quizResult"
        ).innerHTML =
            "❌ Incorrect";
    }

    document.getElementById(
        "score"
    ).innerHTML =
        `Score: ${score}`;

    currentQuestion++;

    if(
        currentQuestion >=
        quizQuestions.length
    ){
        currentQuestion = 0;
    }

    setTimeout(() => {

        document.getElementById(
            "quizQuestion"
        ).innerHTML =
            quizQuestions[
                currentQuestion
            ].question;

        document.getElementById(
            "quizResult"
        ).innerHTML = "";

    },1000);
}

function addToHistory(
    input,
    unit,
    c,
    f,
    k
) {

    history.unshift(
        `${input}°${unit}
        → ${c.toFixed(1)}°C |
        ${f.toFixed(1)}°F |
        ${k.toFixed(1)}K`
    );

    if(history.length > 5){
        history.pop();
    }

    localStorage.setItem(
        "tempHistory",
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory(){

    let html = "";

    history.forEach(item => {

        html += `
            <li>${item}</li>
        `;

    });

    document.getElementById(
        "historyList"
    ).innerHTML =
        html;
}

document.getElementById(
    "quizQuestion"
).innerHTML =
    quizQuestions[0].question;

generateFact();

renderHistory();

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        themeToggle.textContent =
            document.body.classList.contains(
                "light-mode"
            )
            ? "☀️"
            : "🌙";
    }
);