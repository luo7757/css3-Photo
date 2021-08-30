$(function(){
    setTimeout(() => {
        $('#wrp ul').removeClass('init');
    },200)

    $('#wrp li').on('click',function(){
            $(this).addClass('active');
            $('#wrp ul').attr('id','selector');
        })
  
    $('.close').on('click',function(e){
        e.stopPropagation()
        $('#wrp li.active').removeClass();
        $('#wrp ul').attr('id','');
    })

})