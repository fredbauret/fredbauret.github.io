
$(document).ready(function() {

        $('.button').on('click', function() {
            var price = $('<p>Rien à dire ici</p>');
            $('.vacation').append(price);
            $('.button').remove();
        });
    });