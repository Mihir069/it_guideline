document.addEventListener('DOMContentLoaded', function() {
    const petContainer = document.getElementById('petContainer');

    // Fetch data from pets.json using AJAX
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const pets = JSON.parse(xhr.responseText);
            displayPets(pets);
        }
    };
    xhr.open('GET', 'pets.json', true);
    xhr.send();

    // Display pets in a presentable way
    function displayPets(pets) {
        pets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.classList.add('petCard');

            const petName = document.createElement('p');
            petName.classList.add('petProperty');
            petName.textContent = `Name: ${pet.name}`;

            const petAge = document.createElement('p');
            petAge.classList.add('petProperty');
            petAge.textContent = `Age: ${pet.age}`;

            const petWeight = document.createElement('p');
            petWeight.classList.add('petProperty');
            petWeight.textContent = `Weight: ${pet.weight} kg`;

            const petType = document.createElement('p');
            petType.classList.add('petProperty');
            petType.textContent = `Type: ${pet.type}`;

            const petLikes = document.createElement('p');
            petLikes.classList.add('petProperty');
            petLikes.textContent = `Likes: ${pet.likes}`;

            petCard.appendChild(petName);
            petCard.appendChild(petAge);
            petCard.appendChild(petWeight);
            petCard.appendChild(petType);
            petCard.appendChild(petLikes);

            petContainer.appendChild(petCard);
        });
    }
});
