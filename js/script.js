window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.section-work__link').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.section-work__link').forEach(function(btn){
        btn.classList.remove('section-work__link-stepone')});
      event.currentTarget.classList.add('section-work__link-stepone');
      document.querySelectorAll('.section-work__blocks').forEach(function(tabscontent){
        tabscontent.classList.remove('section-work__block-one--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work__block-one--active')
    })
  })

  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  $( function() {
    $("#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  })

  $(document).ready(function() {
    $('.header-container__burger-menu').click(function() {
      $('.header-container__burger-menu').toggleClass('open-menu');
      $('.header-container__burger-nav').toggleClass('open-menu');
    });
  });

  const search = document.querySelector('.header-container__search');
  const search_close = document.querySelector('.header-container__search-btn-close');
  search.addEventListener('click', function(e){
    e.stopPropagation();
    this.classList.add('search--active');
  })

})
