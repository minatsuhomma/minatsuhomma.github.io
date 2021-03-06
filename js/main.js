$(window).on('load resize', function(){
  // navbarの高さを取得し、bodyのpaddingにnavbarの高さを設定する
  let height = $('.navbar').height();
  $('body').css('padding-top',height); 

  //isotopeライブラリの初期化
  var grid = $('.pj-container').isotope({
    itemSelector: '.project',
    layoutMode: 'fitRows'
  });

  //フィルターステータスチェック
  let filtercheck0 = false;
  let filtercheck1 = false;
  let filtercheck2 = false;
  let filtercheck3 = false;
  let filtercheck4 = false;

  //isotopeを使ったカテゴリ別フィルタ
  const category = document.getElementsByClassName('filter');
  $(".filter").on("click",function(e){
    let target = e.currentTarget;
    if(target.innerText == "Show All") {
      console.log("all");
      grid.isotope({ filter: '*' });
      if(filtercheck0===false){
      document.getElementsByClassName("filter")[0].classList.toggle("filteron")
      filtercheck0 = true;
      }
      if(filtercheck1){
        document.getElementsByClassName("filter")[1].classList.toggle("filteron")
        filtercheck1 = false;
        }
      if(filtercheck2){
        document.getElementsByClassName("filter")[2].classList.toggle("filteron")
        filtercheck2 = false;
        }
      if(filtercheck3){
        document.getElementsByClassName("filter")[3].classList.toggle("filteron")
        filtercheck3 = false;
        }
      if(filtercheck4){
        document.getElementsByClassName("filter")[4].classList.toggle("filteron")
        filtercheck4 = false;
        }
    }else if(target.innerText == "UI/UX") {
      console.log("uiux");
      grid.isotope({ filter: '.uiux' });
      if(filtercheck1===false){
        document.getElementsByClassName("filter")[1].classList.toggle("filteron")
        filtercheck1 = true;
        }
        if(filtercheck0){
          document.getElementsByClassName("filter")[0].classList.toggle("filteron")
          filtercheck0 = false;
          }
        if(filtercheck2){
          document.getElementsByClassName("filter")[2].classList.toggle("filteron")
          filtercheck2 = false;
          }
        if(filtercheck3){
          document.getElementsByClassName("filter")[3].classList.toggle("filteron")
          filtercheck3 = false;
          }
        if(filtercheck4){
          document.getElementsByClassName("filter")[4].classList.toggle("filteron")
          filtercheck4 = false;
          }
    }else if(target.innerText == "Physical Computing"){
      console.log("physical");
      grid.isotope({ filter: '.physical' });
      if(filtercheck2===false){
        document.getElementsByClassName("filter")[2].classList.toggle("filteron")
        filtercheck2 = true;
        }
        if(filtercheck0){
          document.getElementsByClassName("filter")[0].classList.toggle("filteron")
          filtercheck0 = false;
          }
        if(filtercheck1){
          document.getElementsByClassName("filter")[1].classList.toggle("filteron")
          filtercheck1 = false;
          }
        if(filtercheck3){
          document.getElementsByClassName("filter")[3].classList.toggle("filteron")
          filtercheck3 = false;
          }
        if(filtercheck4){
          document.getElementsByClassName("filter")[4].classList.toggle("filteron")
          filtercheck4 = false;
          }
    }else if(target.innerText == "Machine Learning"){
      console.log("ml");
      grid.isotope({ filter: '.ml' });
      if(filtercheck3===false){
        document.getElementsByClassName("filter")[3].classList.toggle("filteron")
        filtercheck3 = true;
        }
        if(filtercheck0){
          document.getElementsByClassName("filter")[0].classList.toggle("filteron")
          filtercheck0 = false;
          }
        if(filtercheck1){
          document.getElementsByClassName("filter")[1].classList.toggle("filteron")
          filtercheck1 = false;
          }
        if(filtercheck2){
          document.getElementsByClassName("filter")[2].classList.toggle("filteron")
          filtercheck2 = false;
          }
        if(filtercheck4){
          document.getElementsByClassName("filter")[4].classList.toggle("filteron")
          filtercheck4 = false;
          }
    }else if(target.innerText == "Design Concept"){
      console.log("concept");
      grid.isotope({ filter: '.concept' });
      if(filtercheck4===false){
        document.getElementsByClassName("filter")[4].classList.toggle("filteron")
        filtercheck4 = true;
        }
        if(filtercheck0){
          document.getElementsByClassName("filter")[0].classList.toggle("filteron")
          filtercheck0 = false;
          }
        if(filtercheck1){
          document.getElementsByClassName("filter")[1].classList.toggle("filteron")
          filtercheck1 = false;
          }
        if(filtercheck2){
          document.getElementsByClassName("filter")[2].classList.toggle("filteron")
          filtercheck2 = false;
          }
        if(filtercheck3){
          document.getElementsByClassName("filter")[3].classList.toggle("filteron")
          filtercheck3 = false;
          }
    }
  }) 

  //モーダル
  $(function(){
    $('.js-modal-open').on('click',function(){
      let target = $(this).data('target');
      let modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
    $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
    });
});
});

//カルーセル
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
