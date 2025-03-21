$(document).ready(function () {
    // Initialize the vertical carousel
    $('#vertical-carousel').bind('mousewheel DOMMouseScroll', function (e) {
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
        e.preventDefault();
    });

    $("#vertical-carousel").on("touchstart", function (event) {
        var yTouchPointStart = event.originalEvent.touches[0].pageY;
        $(this).on("touchmove", function (event) {
            var yTouchPointEnd = event.originalEvent.touches[0].pageY;
            if (Math.floor(yTouchPointStart - yTouchPointEnd) > 1) {
                $(".carousel").carousel('next');
            } else if (Math.floor(yTouchPointStart - yTouchPointEnd) < -1) {
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
        event.preventDefault();
    });

    // Initialize the news carousel
    const newsCarousel = new bootstrap.Carousel(document.getElementById('newsCarousel'), {
        interval: false,
        wrap: false
    });

    const newsIndicators = document.querySelectorAll('#newsCarousel .carousel-indicators li');
    newsIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            newsCarousel.to(index);
        });
    });

    const prevButton = document.querySelector('#newsCarousel .carousel-control-prev');
    const nextButton = document.querySelector('#newsCarousel .carousel-control-next');

    prevButton.addEventListener('click', () => {
        newsCarousel.prev();
    });

    nextButton.addEventListener('click', () => {
        newsCarousel.next();
    });
});