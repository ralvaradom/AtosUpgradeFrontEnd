document.getElementById('getUsers').onclick = function() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
        var output = '';

        for(var i in users) {
            output += 
                `<div class="user">
                    <img src=${users[i].avatar_url} with="70" height="70">
                    <ul>
                        <li>ID: ${users[i].id}</li>
                        <li>Login: ${users[i].login}</li>
                    </ul>
                </div>`;
        }

        document.getElementById('output').innerHTML = output;
    });
}

document.getElementById('getPosts').onclick = function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        var output = '';

        for(var i in posts) {
            output += 
                `<div class="posts">
                    <h3>${posts[i].title}</h3>
                    <p>${posts[i].body}</p>
                </div>`;
        }

        document.getElementById('output').innerHTML = output;
    });
}