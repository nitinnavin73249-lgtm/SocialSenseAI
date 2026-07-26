// Screen Time Analysis
function checkUsage() {

    let hours = parseFloat(document.getElementById("hours").value);

    let result = "";

    if (isNaN(hours)) {
        alert("Please enter your daily screen time.");
        return;
    }

    if (hours <= 2) {
        result =
            "🟢 Excellent! Your screen time is healthy. Keep maintaining a balanced digital lifestyle.";
    }
    else if (hours <= 4) {
        result =
            "🟡 Moderate Usage. Try reducing your screen time slightly and spend more time on offline activities.";
    }
    else if (hours <= 6) {
        result =
            "🟠 High Usage. Your social media usage may begin affecting productivity and sleep.";
    }
    else {
        result =
            "🔴 Very High Usage! Excessive social media use can negatively impact mental health, sleep, and academic performance.";
    }

    document.getElementById("usageResult").innerHTML = result;
}

// Quiz Analysis
function calculateScore() {

    let q1 = Number(document.getElementById("q1").value);
    let q2 = Number(document.getElementById("q2").value);
    let q3 = Number(document.getElementById("q3").value);
    let q4 = Number(document.getElementById("q4").value);

    if (q1 === 0 || q2 === 0 || q3 === 0 || q4 === 0) {
        alert("Please answer all questions.");
        return;
    }

    let score = q1 + q2 + q3 + q4;

    let message = "";
    let tips = "";

    if (score <= 5) {

        message = "🟢 Low Impact";
        tips =
            "You have healthy social media habits. Continue maintaining a good balance between online and offline life.";

    }
    else if (score <= 8) {

        message = "🟡 Moderate Impact";
        tips =
            "Your social media usage is moderate. Consider taking regular breaks and limiting screen time.";

    }
    else {

        message = "🔴 High Impact";
        tips =
            "Your responses indicate that social media may be affecting your mental well-being. Consider setting daily usage limits, avoiding social media before sleep, and engaging in physical or outdoor activities.";

    }

    let hours = document.getElementById("hours").value;

    let finalText = `
        <h3>Your Report</h3>

        <p><strong>Daily Screen Time:</strong> ${hours} Hours</p>

        <p><strong>Quiz Score:</strong> ${score} / 12</p>

        <p><strong>Status:</strong> ${message}</p>

        <hr>

        <h3>Recommendation</h3>

        <p>${tips}</p>

        <hr>

        <h3>Healthy Habits</h3>

        <ul>
            <li>📵 Avoid using social media before bedtime.</li>
            <li>📚 Read books or learn a new skill.</li>
            <li>🏃 Exercise for at least 30 minutes daily.</li>
            <li>👨‍👩‍👧 Spend quality time with family and friends.</li>
            <li>⏰ Set daily screen time limits.</li>
        </ul>
    `;

    document.getElementById("finalResult").innerHTML = finalText;

    // Save report locally
    localStorage.setItem("ScreenTime", hours);
    localStorage.setItem("QuizScore", score);
    localStorage.setItem("Status", message);
}

// Load previous report when the page opens
window.onload = function () {

    let hours = localStorage.getItem("ScreenTime");
    let score = localStorage.getItem("QuizScore");
    let status = localStorage.getItem("Status");

    if (hours) {

        document.getElementById("hours").value = hours;

        document.getElementById("finalResult").innerHTML = `
            <h3>Previous Report</h3>

            <p><strong>Daily Screen Time:</strong> ${hours} Hours</p>

            <p><strong>Quiz Score:</strong> ${score}</p>

            <p><strong>Status:</strong> ${status}</p>
        `;
    }
};