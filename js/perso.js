
$(document).ready(function() {

        $('.button').on('click', function() {
            var price = $('<p>From $399.99</p>');
            $('.vacation').append(price);
            $('.button').remove();
        });
    });