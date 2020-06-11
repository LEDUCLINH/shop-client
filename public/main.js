$(document).ready(function(){
  $(window).scroll(function(){
     if ($(this).scrollTop() >100){
         $('.navbar').addClass('sticky');
         $('#upTop').show();
     }
     else{
         $('.navbar').removeClass('sticky');
         $('#upTop').hide();
     }
  })
  $('#login').click(function() {
     $('.mymodal').modal('show'); 
   setTimeout(() =>$('.modal-backdrop').remove(),150)    
  })
  $('#register__submit').click(function() {
    setTimeout(() =>$('.modal-backdrop').remove(),150) 
  //  setTimeout(() =>$('.modal-backdrop').remove(),150)    
  })

  $('.navbar .nav-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
})