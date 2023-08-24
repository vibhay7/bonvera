!function(e){"use strict";window.themeFrontCore={initialize:function(){var t=this;e(document).ready(function(){t.build(),t.events()})},build:function(){this.setupDocumentClasses(),this.initPreloader(),this.wrapFormInputs(),this.setupHeader(),this.setupHomeSections(),this.setupAnimations(),this.setupSlider(),this.setupHeroSections(),this.setupMenu(),this.setupCarousels(),this.setupTabs(),this.setupFooter(),this.setupOnePage(),this.setupGoTop(),this.setupVideos(),this.setupPortfolio(),this.setupLightbox(),this.bindContactForm()},events:function(){var t=this;e(window).on("beforeunload",function(){e(window).scrollTop(0)}),e(window).resize(function(){t.setupHeroSections(),t.setupFooter(),t.setupHomeSections()}),e("#skip-intro").click(function(){return e("html, body").animate({scrollTop:e("#content").offset().top-80},800),!1}),e(".reply-link").click(function(){return e("html, body").animate({scrollTop:e("#comment-form").offset().top},2e3),!1})},initPreloader:function(){e(window).load(function(){e("body.preloader").length&&(e("body").waitForImages({waitForAll:!0,finished:function(){e("#preloader").fadeOut(1200,function(){e("body.preloader").removeClass("preloader"),e(this).remove()})}}),e(".ie7, .ie8, .ie9, .ie10").length&&(e("#preloader").remove(),e("body").removeClass("preloader")))})},setupDocumentClasses:function(){if(e("html").removeClass("no-js"),(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.platform))&&e("html").addClass("mobile"),-1!=navigator.userAgent.indexOf("Safari")&&-1!=navigator.userAgent.indexOf("Mac")&&-1==navigator.userAgent.indexOf("Chrome")&&e("html").addClass("mac"),"Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(null!=i.exec(t)){var a=parseInt(RegExp.$1);e("html").addClass("ie"+a)}}},wrapFormInputs:function(){var t=e("input[type=text], input[type=number], input[type=password], input[type=email], input[type=search], input[type=tel], input[type=url], textarea, select");t.wrap('<div class="input-wrapper"></div>'),t.focus(function(){e(this).parents(".input-wrapper").addClass("hovered")}),t.focusout(function(){e(this).parents(".input-wrapper").removeClass("hovered")})},setupHeader:function(){e(".fixed-header #header, .transparent-header #header").headroom({offset:200,tolerance:0,classes:{initial:"animated",pinned:"headroom--pinned",unpinned:"headroom--unpinned"}})},setupSlider:function(){e("#slider").sequence({pagination:!0}),e(".skip-slider").click(function(){return e("html, body").animate({scrollTop:e(window).height()},800),!1})},setupHomeSections:function(){var t=e(window).height();e(".home .section").css("min-height",t+"px")},setupAnimations:function(){var t=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(t){var i=e(t);i.hasClass("animationNuminate")&&i.each(function(){var t=e(this),i=t.data("to");t.numinate({format:"%counter%",from:1,to:i,runningInterval:2e3,stepUnit:5})})}});t.init()},setupHeroSections:function(){var t=e("#hero");if(t.length){var i=(t.height(),t.find(".intro-text")),a=i.height();i.css("margin-top","-"+a/2+"px")}},setupMenu:function(){var t=e("#header-nav");t.dlmenu({backLabel:t.data("back-label")})},setupCarousels:function(){e(".news-carousel").swiper({loop:!0,pagination:".swiper-pagination",freeMode:!0,spaceBetween:30,slidesPerView:"auto",paginationClickable:!0}),e(".screenshots-carousel").swiper({loop:!0,spaceBetween:0,centeredSlides:!0,slidesPerView:"auto"}),e(".owl-carousel").owlCarousel({items:1,navigation:!0,navigationText:["",""],singleItem:!0,autoHeight:!0,transitionStyle:"fade"}),setInterval(function(){e(".owl-carousel").each(function(){e(this).data("owlCarousel").updateVars()})},1500);var t=e("#team .items").owlCarousel({items:1,singleItem:!0,transitionStyle:"fade",afterAction:function(t){{var i=t.find(".item").eq(this.owl.currentItem).data("bg");t.parents(".section").css("background-image","url("+i+")")}e("#team .team-pagination a").removeClass("current"),e("#team .team-pagination a").eq(this.owl.currentItem).addClass("current")}}).data("owlCarousel");e("#team .team-pagination a").click(function(){var i=e("#team .team-pagination a").index(e(this));return t.goTo(i),!1})},setupTabs:function(){e(".services").each(function(){var t=e(this),i=t.next(".services-pagination").find(".tab-link");i.click(function(){var a=e(this).attr("href"),n=e(a);t.find(".service-item").hide().removeClass("selected");n.data("image");return n.fadeIn(300,function(){n.addClass("selected"),e("html, body").animate({scrollTop:n.offset().top-20},800)}),i.removeClass("selected"),e(this).addClass("selected"),!1})})},setupFooter:function(){if(e(window).width()<992)e("div.section").last().css("margin-bottom","0px");else if(e("body").hasClass("parallax-footer")&&e(window).width()>=992){var t=e("#footer");t.waitForImages({waitForAll:!0,finished:function(){e("#content-wrapper").css("margin-bottom",t.height()+"px")}})}},setupOnePage:function(){var t=this;e("body.home-agency").length&&t.preloadImages(["images/demo-images/home_1_slider_1.jpg","images/demo-images/home_1_slider_2.jpg","images/demo-images/home_1_slider_3.jpg","images/demo-images/home_1_slider_4.jpg","images/demo-images/home_1_slider_5.jpg"]),e("body.one-page").length&&e("body.one-page #header-menu").singlePageNav({currentClass:"current-link",updateHash:!0,offset:50,speed:1100,filter:":not(.external)",easing:"easeOutBack"})},setupGoTop:function(){e.scrollUp({scrollName:"scrollUp",topDistance:"1000",topSpeed:100,animation:"slide",animationInSpeed:500,animationOutSpeed:500,scrollText:"",activeOverlay:!1})},setupVideos:function(){var t=e(".lazy-video");t.each(function(){e(this).lazyYT()})},setupPortfolio:function(){e(".portfolio").each(function(){{var t=e(this),i=t.find(".portfolio-gallery");i.justifiedGallery({sizeRangeSuffixes:{},rowHeight:400,maxRowHeight:200,margins:0,captionSettings:{visibleOpacity:.9,animationDuration:300,nonVisibleOpacity:0},captions:!0})}t.find(".portfolio-header .filters a").bind("click touchstart",function(){t.find(".portfolio-header .filters a").removeClass("selected"),e(this).addClass("selected");var a=e(this).data("filter");return i.justifiedGallery({filter:a}),!1})})},setupLightbox:function(){e(".lightbox").length&&e(".lightbox").nivoLightbox({effect:"fadeScale"})},bindContactForm:function(){var t=this;e("#contact-form").submit(function(){var i=e(this),a=e("#input-name"),n=a.val(),o=e("#input-email"),s=o.val(),r=e("#input-phone"),u=r.val(),l=e("#input-subject").val(),d=e("#input-message"),c=d.val();return""==e.trim(n)?(a.focus(),!1):""!=e.trim(s)&&t.isValidEmailAddress(s)?""==e.trim(c)?(d.focus(),!1):(e.ajax({url:"contact-form.php",type:"POST",data:{name:n,email:s,phone:u,subject:l,message:c},beforeSend:function(){e("#contact-form input, #contact-form textarea, #contact-form button").attr("disabled","disabled"),e("#contact-form").fadeTo(500,"0.7")},success:function(){i.html("<h4>Your message has been sent. Thank you!</h4>").css("opacity","1")}}),!1):(o.focus(),!1)})},isValidEmailAddress:function(e){var t=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return t.test(e)},preloadImages:function(t){e(t).each(function(){e("<img/>")[0].src=this})}},window.themeFrontCore.initialize()}(window.jQuery);