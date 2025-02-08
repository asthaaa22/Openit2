document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yay! You said YES! 🎉❤️";
});

let noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
