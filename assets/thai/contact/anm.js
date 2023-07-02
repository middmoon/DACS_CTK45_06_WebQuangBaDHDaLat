$('.button').click(function(){
    $('.alert').removeClass("hide")
    $('.alert').addClass("show")
    $('.alert').addClass("showAlert")
    setTimeout(function(){
        $('.alert').addClass("hide")
    $('.alert').removeClass("show")
    },5000)
})

$('.close-btn').click(function(){
    $('.alert').addClass("hide")
    $('.alert').removeClass("show")
})