let buttonteleporter = document.createElement("button");
buttonteleporter.innerHTML = "Button";
buttonteleporter.id = "buttontid";
document.body.appendChild(buttonteleporter);

const buttonHeight = 20;
const buttonWidth = 100;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('buttontid');
    button.addEventListener('click', () => alert("Winner"));

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth * 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight * 1)) + 'px';
    })
buttonteleporter.style.position = "absolute";
})