const cards = document.querySelectorAll(".card");
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        const wonderName = card.querySelector("h2").textContent;
        const wonderDate = card.querySelector("p").textContent;
        alert(
            "🌍 Seven Wonders of the World\n\n" +
            "Wonder: " + wonderName + "\n" +
            wonderDate
        );
    });

});
cards.forEach(function(card) {
    card.addEventListener("mouseover", function() {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", function() {
        card.style.transform = "scale(1)";
    });
});
console.log("Welcome to The Seven Wonders of the World!");
