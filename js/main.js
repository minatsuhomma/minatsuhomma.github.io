$(window).on('load resize', function(){
  // navbarの高さを取得し、bodyのpaddingにnavbarの高さを設定する
  let height = $('.navbar').height();
  $('body').css('padding-top',height); 
  
  const category = document.getElementsByClassName('filter');

  $(".filter").on("click",function(){
    if (category[0].innerText == "UI/UX") {
      console.log("uiux");
      $(".project").filter(".uiux").show();
    }   
  }) 
});