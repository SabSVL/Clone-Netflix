
document.addEventListener('DOMContentLoaded', function () {

    const controls = document.querySelectorAll(".control");
    let currentItem = 0;
    const items = document.querySelectorAll(".item");
    const maxItems = items.length;

    controls.forEach((control) => {
        control.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left");

            if (isLeft) {
                currentItem -= 4;
            } else {
                currentItem += 4;
            }

            if (currentItem >= maxItems) {
                currentItem = 0;
            }

            if (currentItem < 0) {
                currentItem = maxItems - 1;
            }

            items.forEach((item) => item.classList.remove("current-item"));

            items[currentItem].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });


    const controls2 = document.querySelectorAll(".control2");
    let currentItem2 = 0;
    const items2 = document.querySelectorAll(".item2");
    const maxItems2 = items2.length;

    controls2.forEach((control2) => {
        control2.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left2");

            if (isLeft) {
                currentItem2 -= 4;
            } else {
                currentItem2 += 4;
            }

            if (currentItem2 >= maxItems2) {
                currentItem2 = 0;
            }

            if (currentItem2 < 0) {
                currentItem2 = maxItems2 - 1;
            }

            items2.forEach((item2) => item2.classList.remove("current-item2"));

            items2[currentItem2].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });

    
    const controls3 = document.querySelectorAll(".control3");
    let currentItem3 = 0;
    const items3 = document.querySelectorAll(".item3");
    const maxItems3 = items3.length;

    controls3.forEach((control3) => {
        control3.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left3");

            if (isLeft) {
                currentItem3 -= 4;
            } else {
                currentItem3 += 4;
            }

            if (currentItem3 >= maxItems3) {
                currentItem3 = 0;
            }

            if (currentItem3 < 0) {
                currentItem3 = maxItems3 - 1;
            }

            items3.forEach((item3) => item3.classList.remove("current-item3"));

            items3[currentItem3].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });

    
    const controls4 = document.querySelectorAll(".control4");
    let currentItem4 = 0;
    const items4 = document.querySelectorAll(".item4");
    const maxItems4 = items4.length;

    controls4.forEach((control4) => {
        control4.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left4");

            if (isLeft) {
                currentItem4 -= 4;
            } else {
                currentItem4 += 4;
            }

            if (currentItem4 >= maxItems4) {
                currentItem4 = 0;
            }

            if (currentItem4 < 0) {
                currentItem4 = maxItems4 - 1;
            }

            items4.forEach((item4) => item4.classList.remove("current-item4"));

            items4[currentItem4].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });

    
    
    const controls5 = document.querySelectorAll(".control5");
    let currentItem5 = 0;
    const items5 = document.querySelectorAll(".item5");
    const maxItems5 = items5.length;

    controls5.forEach((control5) => {
        control5.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left5");

            if (isLeft) {
                currentItem5 -= 4;
            } else {
                currentItem5 += 4;
            }

            if (currentItem5 >= maxItems5) {
                currentItem5 = 0;
            }

            if (currentItem5 < 0) {
                currentItem5 = maxItems5 - 1;
            }

            items5.forEach((item5) => item5.classList.remove("current-item5"));

            items5[currentItem5].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });

    
    
    const controls6 = document.querySelectorAll(".control6");
    let currentItem6 = 0;
    const items6 = document.querySelectorAll(".item6");
    const maxItems6 = items6.length;

    controls6.forEach((control6) => {
        control6.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left6");

            if (isLeft) {
                currentItem6 -= 4;
            } else {
                currentItem6 += 4;
            }

            if (currentItem6 >= maxItems6) {
                currentItem6 = 0;
            }

            if (currentItem6 < 0) {
                currentItem6 = maxItems6 - 1;
            }

            items6.forEach((item6) => item6.classList.remove("current-item6"));

            items6[currentItem6].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });

    const controls7 = document.querySelectorAll(".control7");
    let currentItem7 = 0;
    const items7 = document.querySelectorAll(".item7");
    const maxItems7 = items7.length;

    controls7.forEach((control7) => {
        control7.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left7");

            if (isLeft) {
                currentItem7 -= 4;
            } else {
                currentItem7 += 4;
            }

            if (currentItem7 >= maxItems7) {
                currentItem7 = 0;
            }

            if (currentItem7 < 0) {
                currentItem7 = maxItems7 - 1;
            }

            items7.forEach((item7) => item7.classList.remove("current-item7"));

            items7[currentItem7].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });


    const controls8 = document.querySelectorAll(".control8");
    let currentItem8 = 0;
    const items8 = document.querySelectorAll(".item8");
    const maxItems8 = items8.length;

    controls8.forEach((control8) => {
        control8.addEventListener("click", (e) => {
            isLeft = e.target.classList.contains("arrow-left8");

            if (isLeft) {
                currentItem8 -= 4;
            } else {
                currentItem8 += 4;
            }

            if (currentItem8 >= maxItems8) {
                currentItem8 = 0;
            }

            if (currentItem8 < 0) {
                currentItem8 = maxItems8 - 1;
            }

            items8.forEach((item8) => item8.classList.remove("current-item8"));

            items8[currentItem8].scrollIntoView({
                behavior: 'smooth', block: 'nearest', inline: 'start' 
            });
        });
    });


    
});

