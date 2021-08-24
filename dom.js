
function style(f){
    f.style.padding = '10px';
    f.style.borderRadius = '10px'
}

document.getElementById('add-border').addEventListener('click', function(){
    const friends = document.getElementById('friends-container');
    friends.style.border = '2px solid lime';
    style(friends)
});

document.getElementById('add-bgc').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lime';
        friend.style.margin = '10px';
        style(friend);
    }
});

document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friends-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3 class="friend-name">New friend</h3>
    <p>Nurul, deleniti!</p>
    `
    container.appendChild(friendDiv);
});

document.getElementById('add-color').addEventListener('click', function(){
    const color = document.getElementsByClassName('name');
    for(const name of color){
        name.style.color = 'red';
    }
})