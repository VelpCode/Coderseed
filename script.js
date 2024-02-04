

document.addEventListener('DOMContentLoaded', function() {

    const clickSelect = document.querySelector('.click');

})

async function fetchTips() {
    try {

        const response = await fetch('tips.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
    }
    const tips = await response.json();
    const randomTip = tips[Math.floor(Math.random * tips.length)];
    clickSection.textContent = randomTip;

} catch(error) {

    console.error('Failed to fetch tips: ', error);
    clickSection.textContent = 'Failed to load a tip. Try again';

    }
}

clickSection.addEventListener('click', fetchTipsAndDisplay);

