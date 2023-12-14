
document.addEventListener('DOMContentLoaded', function() {
    // Multiplication tables from 2 to 10
    const tables = [];
    for (let i = 2; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(`${i} x ${j} = ${i * j}`);
        }
        tables.push(row);
    }

    let currentIndex = 0;

    function displayTable() {
        // Get the container element
        const container = document.body;

        // Clear previous content
        container.innerHTML = '';

        // Get the current row
        const currentRow = tables[currentIndex];

        // Create a new div for each entry in the row
        currentRow.forEach((entry, index) => {
            const div = document.createElement('div');
            div.textContent = entry;
            div.style.color = getRandomColor();
            div.style.fontSize = `${16 + index}px`; // Increase font size for each entry
            container.appendChild(div);
        });

        // Increment the index for the next row
        currentIndex = (currentIndex + 1) % tables.length;
    }

    // Helper function to get a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Display the first row immediately
    displayTable();

    // Set interval to update the display every 5 seconds
    setInterval(displayTable, 5000);
});
