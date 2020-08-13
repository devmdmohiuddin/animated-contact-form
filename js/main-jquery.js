$(document).ready(function(){
    $('li.fields').filter(':nth-child(n+4)').addClass('hide');
  
    $('ul').on('click', 'li.title', function(){
        $(this).next().slideDown(300).siblings('li.fields').slideUp(300);
    });
});

