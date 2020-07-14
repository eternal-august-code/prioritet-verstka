document.querySelector(".profile__edit").onclick = () => {
    document.querySelector('.modal').style.display = "";
    document.querySelector("#username").value = document.querySelector('.profile__username').innerHTML;
    document.querySelector("#status").value = document.querySelector('.profile__status').innerHTML;
}
document.querySelector(".modal__close-button").onclick = () => {
    document.querySelector('.modal').style.display = "none";
}
document.querySelector(".modal__save-button").onclick = () => {
    document.querySelector('.profile__username').innerHTML = document.querySelector("#username").value;
    document.querySelector('.profile__status').innerHTML = document.querySelector("#status").value;
    document.querySelector('.modal').style.display = "none";
}