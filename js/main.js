$(window).on('load resize', function(){
  // navbarの高さを取得し、bodyのpaddingにnavbarの高さを設定する
  let height = $('.navbar').height();
  $('body').css('padding-top',height); 

  //isotopeライブラリの初期化
  var grid = $('.pj-container').isotope({
    itemSelector: '.project',
    layoutMode: 'fitRows'
  });

  //isotopeを使ったカテゴリ別フィルタ
  const category = document.getElementsByClassName('filter');
  $(".filter").on("click",function(e){
    let target = e.currentTarget;
    if(target.innerText == "Show All") {
      console.log("all");
      grid.isotope({ filter: '*' });
    }else if(target.innerText == "UI/UX") {
      console.log("uiux");
      grid.isotope({ filter: '.uiux' });
    }else if(target.innerText == "Physical Computing"){
      console.log("physical");
      grid.isotope({ filter: '.physical' });
    }else if(target.innerText == "Machine Learning"){
      console.log("ml");
      grid.isotope({ filter: '.ml' });
    }else if(target.innerText == "Design Concept"){
      console.log("concept");
      grid.isotope({ filter: '.concept' });
    }
  }) 
});