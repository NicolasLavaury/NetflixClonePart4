// right event
function rightScroll(carousel, rightArrow) {

    const scroll = document.querySelector(carousel);

    const right = document.querySelector(rightArrow);

        scroll.scrollLeft += scroll.offsetWidth;
    

}

// left event
function leftScroll(carousel, leftArrow) {

    const scroll = document.querySelector(carousel);

    const left = document.querySelector(leftArrow);
        scroll.scrollLeft -= scroll.offsetWidth;
    

}