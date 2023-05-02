let notification = document.getElementById('notification');
function shownotification() {
    let notifi = document.createElement('div')
    notifi.classList.add('notifi');
    notifi.innerHTML = 'Added to cart';
    notification.appendChild(notifi);

    setTimeout(() => {
        notifi.remove()
    }, 1500)

}

let DropDownMenu = document.getElementById("DropDownMenu");
function DropMenu() {
    DropDownMenu.classList.toggle('open-DropMenu');
}

document.querySelector("#checkout-btn").addEventListener("click", function () {
    document.querySelector(".black-screen").classList.add("active");
});

document.querySelector("#submit").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("thankYou");

});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("thankYou");

});

document.querySelector("#close").addEventListener("click", function () {
    document.querySelector(".black-screen").classList.remove("active");

});

document.querySelector("#close-checkout").addEventListener("click", function () {
    document.querySelector(".black-screen").classList.remove("active");

});

