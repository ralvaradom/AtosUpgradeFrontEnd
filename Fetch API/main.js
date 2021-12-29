document.getElementById('getUsers').onclick = function() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => {
        var output = '';
        
        console.log(users);

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

        document.getElementById('users').innerHTML = output;
    });
}