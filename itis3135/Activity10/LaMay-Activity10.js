
// preload the image for each link

// set up the event handlers for each link

// get the image URL and caption for each image and animate the caption

// cancel the default action of each link


// move the focus to the first link
$(document).ready(function () {
    $('#image_list a').on('click', function (e) {
        e.preventDefault();
        var link;
        if (e.target.tagName == 'a') {
            link = $(e.target);
        } else {
            link = $(e.target).closest('a');
        }
        if (!link.hasClass('active') && !link.hasClass('fade')) {
            $('#image_list a').addClass('fade');
            $('#image_list a').removeClass('active');
            link.addClass('active');
            $('#caption').fadeOut(1000, function () {
                $('#caption').animate({
                    'font-size': '120%'
                });
                $('#caption').text(link.attr('title'));
                $('#caption').fadeIn(1000, function () {
                    $('#caption').animate({
                        'font-size': '2em'
                    }, 1000);
                    $('#image_list a').removeClass('fade');
                });
            });
            $('#image').fadeOut(1000, function () {
                $('#image').attr('src', link.attr('href'));
                $('#image').fadeIn(1000);
            });
        }
    });
}); // end ready