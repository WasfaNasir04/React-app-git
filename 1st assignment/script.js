// script.js
document.getElementById('addButton').addEventListener('click', function() {
    const textInput = document.getElementById('textInput');
    const textList = document.getElementById('textList');

    if (textInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = textInput.value;
        textList.appendChild(listItem);
        textInput.value = '';
    }
});
