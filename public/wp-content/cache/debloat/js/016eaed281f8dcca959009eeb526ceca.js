/**
 * Floating/Sticky Social Share.
 * @copyright ThemeSphere
 * @preserve
 */
"use strict";Bunyad.floatShare=function(d){function e(s){let a=0;if(!(d(window).width()<768)){if(!d(s).closest(".no-sidebar").length&&!d(s).closest(".the-post-modern").length){const t=d(s).closest(".the-post"),e=t.find(".the-post-header");a=e.length?e.position().top:0}var r=[];d([".the-post-modern .alignfull",".the-post-modern .alignwide",".the-post-modern .gallery:not(.aligncenter)",".the-post-modern .wp-block-gallery:not(.aligncenter)",".the-post-modern figure.alignnone",".the-post-modern img.alignnone"].join(",")).each(function(){r.push(this)}),d(window).on("scroll",function(){var t,e,n=!1,o=s.find("> .inner").get(0);if(d(window).scrollTop()<a)n=!0;else for(var i in r)if(t=o,e=r[i],t=t.getBoundingClientRect(),e=e.getBoundingClientRect(),!(t.top>e.bottom||t.right<e.left||t.bottom<e.top||t.left>e.right)){n=!0;break}requestAnimationFrame(()=>{n?s.addClass("is-hidden"):s.removeClass("is-hidden")})})}}return{init:function(){d(".post-share-float").length&&(d(window).on("resize load resize.TSS",this.sticky),document.addEventListener("spc-alp-loaded",this.sticky),"complete"!==document.readyState||this.sticky())},sticky:function(){if(window.innerWidth<768)return!1;var i=parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--main-width"));d(".has-share-float").each(function(){const t=d(this);let e=t.data("orig-pos");if(e||(e=t.hasClass("has-share-float-in")?"in":"out",t.data("orig-pos",e)),"in"!==e)if(i+110>document.documentElement.clientWidth)t.addClass("has-share-float-in");else{t.removeClass("has-share-float-in");var n=(window.innerWidth-i)/2;const o=t.find(".post-share-float");n<110?o.addClass("post-share-float-vp"):o.removeClass("post-share-float-vp")}});var o=25;o+=d(".admin-bar").length?32:0,d(".post-share-float").each(function(){if(!d(this).data("init")){d(this).data("init",!0),e(d(this));const n=d(this).find("> .inner");d(document).on("sticky-bar-show",()=>{var t=d(".smart-head-sticky");let e=0;t.length&&(t=window.getComputedStyle(t[0]).getPropertyValue("--head-h"),e=parseInt(t)-10),n.css("top",o+e+"px")});var t=()=>n.css("top",o+"px");d(document).on("sticky-bar-hide",t),t()}})}}}(jQuery),jQuery(function(t){t("body").hasClass("single-post")&&Bunyad.floatShare.init()})