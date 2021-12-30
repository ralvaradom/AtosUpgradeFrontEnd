var form = document.getElementById('addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter');

for(var i = 0; i < itemList.children.length; i++) {
    itemList.children[i].querySelector("button").onclick = removeItem;
}

form.onsubmit = function(e) {
    e.preventDefault();

    
    // Get input value
    var newItem = document.getElementById('item');

    // new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // set input text to li text
    li.appendChild(document.createTextNode(newItem.value));

    var deleteButton = document.createElement('delete');
    deleteButton.className = 'btn btn-danger btn-sm float-right delete ms-1';

    deleteButton.onclick = removeItem;

    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);

    // add li to list
    itemList.appendChild(li);
}

function removeItem(e) {
    if(confirm('Are you sure?')) {
        itemList.removeChild(e.target.parentElement);
    }
}

filter.onkeyup = function(e) {
    var text = e.target.value.toLowerCase();

    Array.from(itemList.children).forEach((item) => {
        if(item.firstChild.textContent.toLocaleLowerCase().indexOf(text) > -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}