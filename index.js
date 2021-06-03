let travelAgency = {
    countTravelNumbers: function () {
        return document.querySelectorAll(".travel").length;
    },
    addBadges: function () {
        let promoCards = document.querySelectorAll(".promo");
        promoCards.forEach((promoCard) => {
            promoCard.insertAdjacentHTML("afterbegin", `<div>Hot Deal</div>`);
            promoCard.firstChild.classList.add(
                "badge",
                "bg-danger",
                "text-white",
                "badge-text",
                "position-absolute"
            );
            promoCard.firstChild.style.top = "0.5 rem";
            promoCard.firstChild.style.right = "0.5rem";
        });
    },
    removeAllCards: function () {
        let allCards = document.querySelectorAll(".card");
        allCards.forEach((card) => {
            card.remove();
        });
    },
};

console.log("All Travels", travelAgency.countTravelNumbers());
