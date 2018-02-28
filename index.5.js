// Popular Post Snippet
$(".popular-posts ul li .item-snippet").each(function(){var t=$(this).text().substr(0,60),s=t.lastIndexOf(" ");s>52&&$(this).text(t.substr(0,s).replace(/[?,!\.-:;]*$/,"..."))});
$(".item-thumbnail img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w100-h80-c/"))});
$("#recent-posts img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w100-h80-c/"))});
$(".avatar-image-container img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w70-h70-c/"))});
$("ul#relpost_img_sum li img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w120-h110-c/"))});


jQuery(document).ready(function($){
	
	"use strict";

	// Attach + To Top Menu
	$('#top-nav .menu-item-has-children > a, #main-nav ul li ul .menu-item-has-children > a').append(' +');

	// Attach Arrow To Main Menu
	$('#main-nav .menu-item-has-children > a').append('<span class="menu-arrow"></span>');
	
	// Prepend Menu Icons
	$('#logo').after('<div id="menu-icon"></div>');

	$('#top-nav .wrapper').append('<div id="top-menu-icon"></div>');
	
	// Toggle Nav
	$('#menu-icon').on('click', function(){
		$('#main-nav').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#main-nav');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	$('#top-menu-icon').on('click', function(){
		$('#top-nav ul').slideToggle(250);
		$(this).toggleClass('active');
	});
	
	$(window).resize(function(){  
		var w = $(window).width();
		var navDisplay = $('#top-nav ul');
		if(w > 1000 && navDisplay.is(':hidden')) {  
			navDisplay.removeAttr('style');
		}
	});

	
});
(function(e) {
    e.fn.resizeToParent = function(t) {
        function r(e) {
            e.css({
                width: "",
                height: "",
                "margin-left": "",
                "margin-top": ""
            });
            var n = e.parents(t.parent).width();
            var r = e.parents(t.parent).height();
            var i = e.width();
            var s = e.height();
            var o = i / n;
            if (s / o < r) {
                e.css({
                    width: "auto",
                    height: r
                });
                i = i / (s / r);
                s = r
            } else {
                e.css({
                    height: "auto",
                    width: n
                });
                i = n;
                s = s / o
            }
            var u = (i - n) / -2;
            var a = (s - r) / -2;
            e.css({
                "margin-left": u,
                "margin-top": a
            })
        }
        var n = {
            parent: "div",
            delay: 100
        };
        var t = e.extend(n, t);
        var i;
        var s = this;
        e(window).on("resize", function() {
            clearTimeout(i);
            i = setTimeout(function() {
                s.each(function() {
                    r(e(this))
                })
            }, t.delay)
        });
        return this.each(function() {
            var t = e(this);
            t.attr("src", t.attr("src"));
            t.load(function() {
                r(t)
            });
            if (this.complete) {
                r(t)
            }
        })
    }
})(jQuery);
$(".imageContainer img").resizeToParent();
