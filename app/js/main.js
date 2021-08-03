$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #modal').fadeIn();
});

$('.btn').on('click', function(){
    $('.overlay, #modal').fadeIn();
});

$('.modal__close').on('click', function(){
    $('.overlay, #modal, #modal-mini, #modal-confid').fadeOut();

});

$('#phone').mask("+7 (999) 999-99-99");

$('form').submit(function(e){
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
    



    

    
