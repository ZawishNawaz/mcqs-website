// script.js
function checkAnswers() {
    const mcqs = document.querySelectorAll('.mcq');

    mcqs.forEach(mcq => {
        const correctAnswer = mcq.getAttribute('data-answer');
        const options = mcq.querySelectorAll('input[type="radio"]');
        let selectedOption = "";

        options.forEach(option => {
            if (option.checked) {
                selectedOption = option.value;
            }
        });

        const result = mcq.querySelector('.result');

        if (selectedOption === correctAnswer) {
            result.textContent = "Correct!";
            result.style.color = "green";
        } else {
            result.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
            result.style.color = "red";
        }
    });
}
