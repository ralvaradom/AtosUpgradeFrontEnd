var animalContainer = document.getElementById('animal-info');

document.getElementById('button').onclick = function() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json', true);

    xhr.onload = function() {
        var data = JSON.parse(this.responseText);
        renderHTML(data);
    }

    xhr.send();
}

function renderHTML(data) {
    var htmlString = '';
    for(var i = 0; i < data.length; i++) {
        htmlString += '<p>' + data[i].name + 'is a ' + data[i].species + ' that likes to eat: </p>';
        htmlString += '<ul>';

        for(var j = 0; j < data[i].foods.likes.length; j++) {
            htmlString += '<li>' + data[i].foods.likes[j] + '</li>';
        }

        htmlString += '</ul>';
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}