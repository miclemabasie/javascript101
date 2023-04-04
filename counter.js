function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;
}
let counter = 0;
document.addEventListener("DOMContentLoaded", function () {
    console.log("The dom content has just loaded")
    document.querySelector("button").onclick = count;
})