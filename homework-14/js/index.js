$(document).ready(function(){
    let linkName;
    $('.tabs-content li').first().css('display', 'block')
    $('.tabs-title').click(function(){
        $('.tabs-title.active').removeClass('active');
        $(this).addClass('active');
        linkName = $(this).attr("data-tab-link");
        console.log(linkName)
        $('.tabs-content li').css('display', 'none');
        $('#'+linkName).css('display', 'block ');
    })
})