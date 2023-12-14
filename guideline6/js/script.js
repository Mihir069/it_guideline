function submitForm() {
    const pet = {
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value),
        weight: parseFloat(document.getElementById('weight').value),
        type: document.getElementById('type').value,
        likes: document.getElementById('likes').value,
    };

    console.log('Pet Object:', pet);

    const petJSON = JSON.stringify(pet, null, 2);
    console.log('Pet JSON:', petJSON);
}