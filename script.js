


document.addEventListener('DOMContentLoaded', function() {


    const clickSelection = document.querySelector('.click') //selection .click class from HTML DOM


    async function fetchTipsAndDisplay() {

        try {
                //fetch tips from the json file
            const response = await fetch('tips.json');
            if(!response.ok) {
                throw new Error('Network response was not ok')
            }
            const tips = await response.json();
            const randomTip = tips[Math.floor(Math.random() * tips.length)];

            clickSelection.textContent = randomTip;

        } catch(error) {
            console.error("failed to fetch tips:", error);
            clickSelection.textContent = "Failed to load a tip. Try again!"
        }

    }

    clickSelection.addEventListener('click', fetchTipsAndDisplay);
});