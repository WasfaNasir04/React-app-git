// script.js
const textInput = document.getElementById('textInput');
const textList = document.getElementById('textList');
const wordCountDiv = document.getElementById('wordCount');
const wordCounts = {};

document.getElementById('addButton').addEventListener('click', function() {
    const text = textInput.value.trim();
    if (text !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = text;
        textList.appendChild(listItem);

        updateWordCounts(text);

        textInput.value = '';
    }
});

function updateWordCounts(text) {
    const words = text.split(/\s+/);
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            wordCounts[word] = 1;
        }
    });
    displayWordCounts();
}

function displayWordCounts() {
    wordCountDiv.innerHTML = '<h2>Word Counts</h2>';
    const wordList = document.createElement('ul');
    for (const word in wordCounts) {
        const listItem = document.createElement('li');
        listItem.textContent = `${word}: ${wordCounts[word]}`;
        wordList.appendChild(listItem);
    }
    wordCountDiv.appendChild(wordList);
}
