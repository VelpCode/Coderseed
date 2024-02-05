document.addEventListener('DOMContentLoaded', function() {
    const generatesec = document.querySelector('.generatesec');
    const clickDiv = document.querySelector('.click');

    // Function to load questions and answers from qanda.json
    async function loadFlashcards() {
        try {
            const response = await fetch('qanda.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const flashcards = await response.json();

            let currentCard = 0;

            // Initially load the first question
            if (flashcards.flashcards.length > 0) {
                clickDiv.textContent = flashcards.flashcards[currentCard].question;
            }

            generatesec.addEventListener('click', function() {
                // Check if showing question or answer
                if (clickDiv.textContent === flashcards.flashcards[currentCard].question) {
                    // Show answer
                    clickDiv.textContent = flashcards.flashcards[currentCard].answer;
                } else {
                    // Move to next question or loop back to the first question
                    currentCard = (currentCard + 1) % flashcards.flashcards.length;
                    clickDiv.textContent = flashcards.flashcards[currentCard].question;
                }
            });
        } catch (error) {
            console.error("Could not load flashcards:", error);
            clickDiv.textContent = "Failed to load content, please check the console for more information.";
        }
    }

    loadFlashcards();
});