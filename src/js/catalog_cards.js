//first collection cards
const firstCollection_1 = document.querySelector('#collection-first .first');
const firstCollection_2 = document.querySelector('#collection-first .second');
//second collection cards
const secondCollection_1 = document.querySelector('#collection-second .first');
const secondCollection_2 = document.querySelector('#collection-second .second');


let start = true;

function changeCard(toAddClass, toRemoveClass) {
        toRemoveClass.classList.remove("switchCard");
        start == true ? toAddClass.classList.remove("switchCard") : toAddClass.classList.add("switchCard");
        start = !true;
}

//first collection
firstCollection_1.addEventListener("mouseover", function () {
    changeCard(firstCollection_1, firstCollection_2);
});
firstCollection_2.addEventListener("mouseover", () => {
    changeCard(firstCollection_2, firstCollection_1);
});


//second collection
secondCollection_1.addEventListener("mouseover", function () {
    changeCard(secondCollection_1, secondCollection_2);
});
secondCollection_2.addEventListener("mouseover", function () {
    changeCard(secondCollection_2, secondCollection_1);
});



