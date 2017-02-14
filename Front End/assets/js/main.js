var pickout=function(){"use strict";function e(e){t(e),a()}function t(e){var t="object"==typeof e?e:{};"string"==typeof e&&(t.el=e),t.DOM=C.$$(t.el),h(t)}function a(){v.DOM.map(function(e,t){r(e,t)}),u()}function r(e,t){var a=v,r=!1;e.style.display="none",e.hasAttribute("multiple")&&(r=!0,e.name=-1!==e.name.indexOf("[]")?e.name:e.name+"[]");var l=e.parentElement;C.attr(l,"style","position:relative;float:left;");var i=C.attr(e,"placeholder"),d=C.create("div");
if(C.addClass(d,"icon-text beneath pk-field -"+a.theme+(r?" -multiple":"")),i&&(d.innerHTML=i),l.hasAttribute("for")&&C.attr(d,"id",C.attr(l,"for")),l.appendChild(d),!r){var o=C.create("span");C.addClass(o,"pk-arrow -"+a.theme),l.appendChild(o)}C.events(l,"click",function(e){e.preventDefault(),e.stopPropagation(),a.currentIndex=t,a.multiple=!!r,n(a)})}function n(e){var t,a=C.$(".pk-modal"),r=e.DOM[e.currentIndex],n=C.$(".main",a);if(C.addClass(a,"-"+e.theme),!n.children.length){var l=C.$(".pk-overlay"),d=C.toArray(r),o=d.map(function(r,n){return t={index:n,item:r},"optgroup"===r.parentElement.localName&&(t.optGroup=r.parentElement),i(t,a,e)});C.addClass(a,"-show"),C.addClass(l,"-show");var s=r.hasAttribute("placeholder")?C.attr(r,"placeholder"):"Select to option";if(C.$(".head",a).innerHTML=s,C.rmClass(a,"-multiple"),e.multiple){var p=C.$(".pk-multiple",a);C.addClass(p,"-show"),C.addClass(p,"-"+e.theme),C.addClass(a,"-multiple ")}if(e.search){var c=C.$(".pk-search",a),u=C.$("input",c);u.value="",setTimeout(function(){u.focus()},300),C.addClass(c,"-show");var f=[];C.events(u,"keyup",function(t){function a(){var e=C.$(".pk-no_result_search",n);e&&n.removeChild(e)}function r(e){e.map(function(e){e.parentNode&&n.removeChild(e)})}if(t.preventDefault(),t.stopPropagation(),f=C.$$("li",n),r(f),!t.target.value)return a(),void o.map(function(e){Array.isArray(e)&&(n.appendChild(e[0]),e=e[1]),n.appendChild(e)});if(o.map(function(e){Array.isArray(e)&&(e=e[1]);var r=e.lastChild;r&&-1!==r.innerHTML.toLowerCase().indexOf(t.target.value.toLowerCase())&&(a(),n.appendChild(e))}),!n.children.length){var l=C.create("li");return C.addClass(l,"pk-no_result_search"),C.addClass(l,"-"+e.theme),l.innerHTML=e.noResults,void n.appendChild(l)}})}}}function l(e,t,a){var r=C.create("li");return C.addClass(r,"pk-option-group -"+a.theme),C.attr(r,"data-opt-group",e.label),C.attr(r,"data-type",e.localName),r.innerHTML=e.label.toUpperCase(),t.appendChild(r),r}function i(e,t,a){var r=a.DOM[a.currentIndex],n=t.querySelector(".main"),i=[];if(e.optGroup){var s=C.$("li[data-opt-group="+e.optGroup.label+"]",n);s||i.push(l(e.optGroup,n,a))}var p=C.create("li"),c=e.item.hasAttribute("selected")?"-selected":"";if(C.addClass(p,"pk-option "+c+" -"+a.theme),a.multiple){var u=C.create("span");C.addClass(u,"pk-circle -"+a.theme),p.appendChild(u)}e.item.value||C.attr(p,"style","display:none;");var f=C.create("span");C.addClass(f,"icon"),f.innerHTML=C.attr(e.item,"data-icon")||"";var h=C.create("span");return C.addClass(h,"txt"),h.innerHTML=e.item.innerHTML,n.appendChild(p),p.appendChild(f),p.appendChild(h),e.txt=h.innerHTML,C.events(p,"click",function(t){if(t.preventDefault(),t.stopPropagation(),a.multiple){if(e.field=r.parentElement.querySelector(".pk-field"),r[e.index].hasAttribute("selected")){r[e.index].removeAttribute("selected"),C.rmClass(p,"-selected");var n=C.$('.pk-tag[data-select="'+r.name.replace("[]","")+e.index+'"]');return e.field.removeChild(n),void(e.field.children.length||(e.field.innerHTML=C.attr(r,"placeholder")))}return C.attr(r[e.index],"selected","selected"),C.addClass(p,"-selected"),void d(r,e,a)}o(r,e)}),i.length?(i.push(p),i):p}function d(e,t,a){t.field.children.length||(t.field.innerHTML="");var r=C.create("div"),n=C.create("span"),l=C.create("span");C.addClass(r,"pk-tag -"+a.theme),C.attr(r,"data-select",e.name.replace("[]","")+t.index),C.addClass(n,"txt"),C.addClass(l,"close"),n.innerHTML=t.txt,l.innerHTML="&times;",r.appendChild(n),r.appendChild(l),t.field.appendChild(r);var i=t.index;C.events(l,"click",function(a){a.preventDefault(),a.stopPropagation(),e[i].removeAttribute("selected"),t.field.removeChild(a.target.parentElement),t.field.children.length||(t.field.innerHTML=C.attr(e,"placeholder"))})}function o(e,t,a){C.toArray(e).map(function(e,a){return a===t.index?void C.attr(e,"selected","selected"):void e.removeAttribute("selected")}),s(e,t.txt),f()}function s(e,t){e.parentElement.querySelector(".pk-field").innerHTML=t}function p(e){t(e),v.DOM.forEach(function(e){s(e,e[e.selectedIndex].innerHTML)})}function c(e){var a={};t(e),v.DOM.forEach(function(e){a.field=e.parentElement.querySelector(".pk-field"),C.toArray(e).forEach(function(t,r){t.hasAttribute("selected")&&(a.index=r,a.txt=t.innerHTML,d(e,a,v))})})}function u(){if(!C.$(".pk-overlay")){var e=C.create("div");C.addClass(e,"pk-overlay");var t=C.create("div");C.addClass(t,"pk-modal");var a=C.create("ul");C.addClass(a,"main");var r=C.create("div");C.addClass(r,"head");var n=C.create("div");C.addClass(n,"pk-search");var l=C.create("input");C.attr(l,"type","text");var i=C.create("div");C.addClass(i,"pk-multiple");var d=C.create("button");C.addClass(d,"pk-btnMultiply"),d.innerHTML=v.txtBtnMultiple;var o=C.create("span");C.addClass(o,"close"),o.innerHTML="&times;",document.body.appendChild(e),document.body.appendChild(t),t.appendChild(r),t.appendChild(n),n.appendChild(l),t.appendChild(o),t.appendChild(a),t.appendChild(i),i.appendChild(d),[e,o,d].forEach(function(e){C.events(e,"click",function(e){e.preventDefault(),e.stopPropagation(),f()})})}}function f(){var e=C.$(".pk-overlay"),t=C.$(".pk-modal"),a=C.$(".pk-search",t),r=C.$(".pk-multiple",t);C.attr(t,"class","pk-modal"),C.attr(r,"class","pk-multiple"),C.attr(a,"class","pk-search"),C.attr(e,"class","pk-overlay"),setTimeout(function(){C.$(".main",t).innerHTML=""},500)}function h(e){v=JSON.parse(JSON.stringify(m));for(var t in e)e.hasOwnProperty(t)&&(v[t]=e[t])}var v={},m={theme:"clean",search:!1,noResults:"No Results",multiple:!1,txtBtnMultiple:"CONFIRM SELECTED"},C={create:function(e){return document.createElement(e)},attr:function(e,t,a){return a?Array.isArray(e)?void e.forEach(function(e){e.setAttribute(t,a)}):void e.setAttribute(t,a):e.getAttribute(t)},events:function(e,t,a){e.addEventListener(t,a,!1)},toArray:function(e){return[].slice.call(e)},addClass:function(e,t){var a=this,r=a.attr(e,"class")?a.attr(e,"class"):"";a.attr(e,"class",r+" "+t)},rmClass:function(e,t){var a=this;return Array.isArray(e)?void e.forEach(function(e){a.attr(e,"class",a.attr(e,"class").replace(" "+t,""))}):void a.attr(e,"class",a.attr(e,"class").replace(" "+t,""))},$:function(e,t){return(t||document).querySelector(e)},$$:function(e,t){return this.toArray((t||document).querySelectorAll(e))}};return{to:e,updated:p,updatedMultiple:c}}();"undefined"!=typeof module&&module.exports&&(module.exports=pickout);
pickout.to({
    'el': '.skills',
    'theme': 'cricket'
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= .5*$(window).height()) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(300);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(700);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1000);
});

// for fading on scroll
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }
        });

    });

});

setInterval(function(){
var owldata = $(".owl-carousel").data('owlCarousel');
owldata.updateVars();
},1500);

/* for carousel */
$(document).ready(function() {
 
  $("#owl-example").owlCarousel({
    navigation : true, 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      pagination: false,
      rewindSpeed: 500
  });
 
});


