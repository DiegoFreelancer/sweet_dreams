// Función para pegar el menú a la parte de arriba del navegador
$(document).ready(function()
{
    let altura = $('.nav-container').offset().top;

    $(window).on('scroll', function()
    {
        if ( $(window).scrollTop() > altura)
        {
            $('.nav-container').addClass('menu-fixed');
        }
        else 
        {
            $('.nav-container').removeClass('menu-fixed');
        }
    });
});