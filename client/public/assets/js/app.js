$(document).ready(function(){

    "use strict";
  
    /******************************/
  
    /* PRELOADER JS */
  
    /******************************/
    
    $(window).on("load", function () {
        $('.ps_spinner').fadeOut();
        $('.ps_preloader').delay(100000).fadeOut(250);
    });
  
    /******************************/
  
    /* NAV COLLAPSE JS */
  
    /******************************/
    
    menuToggle();
    subMenuToggle();
    searchToggle();  
    smoothScroll();  
  
  });
  
  function menuToggle(){
    $('.io-sidebar_content').on('click', function(e){
      e.stopPropagation();
    });
  
    $('.io-sidebar_trigger, #off-sidebar').on("click", function () {
      $('html').toggleClass('nav_opened');
    });
  }
  
  function subMenuToggle(){
  
    $('li.menu-item-has-children').on("click", function () {
      $(this).children('.sub-menu').slideToggle(250);
    });
  
  }
  
  function searchToggle(){
    $('.search-box').on('click', function(e){
      e.stopPropagation();
    });
  
    $('.io-search_box, .search-flex_centered').on("click", function () {
      $('.search_container').slideToggle(150);
      $('.search-box').slideToggle(250);
    });
  
  }
  
  function flexSlider(){
  
    $('.flexslider').flexslider({
      animation: "slide"
    });
  
  }
  
  function smoothScroll() {
  
    $('a.scroll_to__section').on("click", function (e) {
        var anchor = $(this);
        
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        
        e.preventDefault();
    });
  
  }
  
  
  
  
  