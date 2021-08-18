$('.consult').on('click', function() {
    $('.overlay, #modal').fadeIn();
});

$('.btn').on('click', function(){
    $('.overlay, #modal').fadeIn();
});

$('.confid').on('click', function(){
    $('.overlay, #modal-confid').fadeIn();
});

$('.modal__close').on('click', function(){
    $('.overlay, #modal, #modal-mini, #modal-confid').fadeOut();
    $('#modal').find('input').val('');
});

$('#phone').mask("+7 (999) 999-99-99");

$('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/send.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find('input').val('');
        $('#modal').fadeOut();
        $('#modal-mini').fadeIn();
        $('form').trigger('reset');
    });
    return false;
});

$('.burger__btn').on('click', function() {
    $('.burger__menu').toggle('.burger__menu');
    $('.burger').toggleClass('open');   
}); 

window.addEventListener('orientationchange', function() {
    $('.burger__menu').hide();
    $('.burger').removeClass('open');   
    }, 
    false
);

$('body').on('click', (e) => {
    if($(e.target).closest('.header').length == 0 && window.innerWidth > 480) {
        $('.burger__menu').hide(400);
        $('.burger').removeClass('open');
    }        
});

$(function(){
    $("a[href^='#']").on('click', function(e){
            const _href = $(this).attr("href");
            $heightHeader = $('header').height();
            $("html, body").animate({scrollTop: $(_href).offset().top - $heightHeader},1000);
            return false;
    });
});





    

    
