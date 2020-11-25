/* Burger Menu animation!*/

$(document).ready(function () {
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
  });

/*La fonction principale de ce script est d'empêcher l'envoi du formulaire si un champ a été mal rempli
*et d'appliquer les styles de validation aux différents éléments de formulaire*/
(function() {
'use strict';
window.addEventListener('load', function() {
  let forms = document.getElementsByClassName('needs-validation');
  let validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);
})();

/* Toggle fa Stages & Formations */
$(function() {
  var Accordeon = function(el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;
  
  var links = this.el.find('.link');
  
  links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  
  Accordeon.prototype.dropdown = function(e) {
  var $el = e.data.el;
  $this = $(this),
  $next = $this.next();
  
  $next.slideToggle();
  $this.parent().toggleClass('open');
  
  if (!e.data.multiple) {
  $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
  };
  }
  
  var accordion = new Accordeon($('#accordeon'), false);
  });