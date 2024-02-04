
async function fetchTips() {
    try {

        const response = await fetch('tips.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
    }
    const tips = await response.json();
    const randomTip = tips[Math.floor(Math.random * tips.length)];

    clickSection.textContent = randomTip;

} catch(error) 