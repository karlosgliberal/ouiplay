
/*-----------------------------------------------------------------------------------*/
/*	RETINA.JS
/*-----------------------------------------------------------------------------------*/
(function () {
    function t(e) {
        this.path = e;
        var t = this.path.split("."),
            n = t.slice(0, t.length - 1).join("."),
            r = t[t.length - 1];
        this.at_2x_path = n + "@2x." + r
    }

    function n(e) {
        this.el = e, this.path = new t(this.el.getAttribute("src"));
        var n = this;
        this.path.check_2x_variant(function (e) {
            e && n.swap()
        })
    }
    var e = typeof exports == "undefined" ? window : exports;
    e.RetinaImagePath = t, t.confirmed_paths = [], t.prototype.is_external = function () {
        return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
    }, t.prototype.check_2x_variant = function (e) {
        var n, r = this;
        if (this.is_external()) return e(!1);
        if (this.at_2x_path in t.confirmed_paths) return e(!0);
        n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function () {
            return n.readyState != 4 ? e(!1) : n.status >= 200 && n.status <= 399 ? (t.confirmed_paths.push(r.at_2x_path), e(!0)) : e(!1)
        }, n.send()
    }, e.RetinaImage = n, n.prototype.swap = function (e) {
        function n() {
            t.el.complete ? (t.el.setAttribute("width", t.el.offsetWidth), t.el.setAttribute("height", t.el.offsetHeight), t.el.setAttribute("src", e)) : setTimeout(n, 5)
        }
        typeof e == "undefined" && (e = this.path.at_2x_path);
        var t = this;
        n()
    }, e.devicePixelRatio > 1 && (window.onload = function () {
        var e = document.getElementsByTagName("img"),
            t = [],
            r, i;
        for (r = 0; r < e.length; r++) i = e[r], t.push(new n(i))
    })
})();
/*-----------------------------------------------------------------------------------*/
/*	GO TO TOP
/*-----------------------------------------------------------------------------------*/
! function (a, b, c) {
    a.fn.scrollUp = function (b) {
        a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
    }, a.fn.scrollUp.init = function (d) {
        var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
            f = e.scrollTitle ? e.scrollTitle : e.scrollText,
            g = a("<a/>", {
                id: e.scrollName,
                href: "#top",
                title: f
            }).appendTo("body");
        e.scrollImg || g.html(e.scrollText), g.css({
            display: "none",
            position: "fixed",
            zIndex: e.zIndex
        }), e.activeOverlay && a("<div/>", {
            id: e.scrollName + "-active"
        }).css({
            position: "absolute",
            top: e.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + e.activeOverlay,
            zIndex: e.zIndex
        }).appendTo("body"), scrollEvent = a(b).scroll(function () {
            switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
            case "fade":
                a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
                break;
            case "slide":
                a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
                break;
            default:
                a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
            }
        }), g.click(function (b) {
            b.preventDefault(), a("html, body").animate({
                scrollTop: 0
            }, e.topSpeed, e.easingType)
        })
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function (d) {
        a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
    }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

$(document).ready(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 600, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icon-up-open"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
});
/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();


    $('.dropdown-menu a, .social .dropdown-menu, .social .dropdown-menu input').click(function (e) {
        e.stopPropagation();
    });

});
/*-----------------------------------------------------------------------------------*/
/*	STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $(".navbar:not(.basic) .navbar-collapse").sticky({
      topSpacing: 0
  });
});
/*-----------------------------------------------------------------------------------*/
/*	STICKY NAVIGATION - BASIC
/*-----------------------------------------------------------------------------------*/
// $(document).ready(function () {

//     var menu = $('.navbar.basic'),
//         pos = menu.offset();

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 200) {
//             menu.fadeOut('fast', function () {
//                 $(this).removeClass('default').addClass('fixed').fadeIn('fast');
//             });
//         } else if ($(this).scrollTop() <= pos.top + 200 && menu.hasClass('fixed')) {
//             menu.fadeOut(0, function () {
//                 $(this).removeClass('fixed').addClass('default').fadeIn(0);
//             });
//         }
//     });

// });

/*-----------------------------------------------------------------------------------*/
/*	IMAGE HOVER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});
/*-----------------------------------------------------------------------------------*/
/*	HOME SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var revapi;
    jQuery(document).ready(function () {

        revapi = jQuery('.fullwidthbanner').revolution({
            delay: 9000,
            startwidth: 1170,
            startheight: 450,
            hideThumbs: 200,
            fullWidth: "on"
        });

    });
});


/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function ($) {
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }

        $(this).focus(function () {
            if ($(this).val() == $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});

/*-----------------------------------------------------------------------------------*/
/*	PARALLAX MOBILE
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
});


/*-----------------------------------------------------------------------------------*/
/*  Scroll smoth
/*-----------------------------------------------------------------------------------*/
$(function() {
  $('li a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-51
        }, 1500, "easeOutBack");
        page(target.selector);
        return false;
      }
    }
  });
});

/*-----------------------------------------------------------------------------------*/
/*  Owl.carousel //
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  var owl = $(".owl-portfolio-slider");

  owl.owlCarousel({
      navigation: false,
      autoHeight: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true,
      //navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
  });

  // Custom Navigation Events
  $(".slider-next").click(function () {
      owl.trigger('owl.next');
  });
  $(".slider-prev").click(function () {
      owl.trigger('owl.prev');
  });
});

/*-----------------------------------------------------------------------------------*/
/*  Envio de correo
/*-----------------------------------------------------------------------------------*/
$(function(){       
  $('#form-contacto-uno').submit(function() {
    var $inputs = $('#form-contacto-uno :input');
    envioCorreo($inputs, '#alerta-contacto-uno');
  });
  $('#form-contacto-dos').submit(function() {
    var $inputs = $('#form-contacto-dos :input');
    envioCorreo($inputs, '#alerta-contacto-dos');
  });
  $('#form-contacto-tres').submit(function() {
    var $inputs = $('#form-contacto-tres :input');
    envioCorreo($inputs, '#alerta-contacto-tres');
  });

  var envioCorreo =function(form, id){
    var values = {};
    $.each($(form).serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });
    $.ajax({
      dataType: 'jsonp',
      data: values,            
      jsonp: 'callback',
      url: 'http://46.105.116.39:4300/ouiplay?callback=?',           
      success: function(data) {
        $(id).fadeIn('slow');
        // console.log('success');
        //console.log(JSON.stringify(data));
      }
    });
  };

});

/*-----------------------------------------------------------------------------------*/
/*  Sound egg 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
  $('#moc-moc').click(function(e){
    var sound = new Howl({
      urls: ['style/sound/bicycle.mp3', 'style/sound/bicycle.ogg', 'style/sound/bicycle.wav'],
      autoplay: false,
      loop: false,
      volume: 0.9,
      onend: function() {
      }
    });
    sound.play();
  });
});







