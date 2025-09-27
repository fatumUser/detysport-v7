let burgerIcon = document.getElementById('burger-icon');

burgerIcon.onclick = function() {
    document.body.classList.toggle("overflow-hidden")
    document.getElementById("header").classList.toggle("burger-menu-open")
    document.getElementById("header__nav-block").classList.toggle("elem-show")
    document.getElementById("header__contacts-block").classList.toggle("elem-show-display-flex")
    document.getElementById("header__btn-feedback").classList.toggle("elem-show-display-flex")
  };

  $('.section-feedback__form__inpt-phone').mask('+7 (999) 999-99-99');
  
 /* $(" .section-feedback__form__group-checkbox input").on("click", function()
  { $(" .section-feedback__form__group-checkbox input").removeAttr("checked"); 
  $(this).prop("checked", true); }); */

$(".section-feedback__form__group-checkbox").find('div:first').find('input:first').prop('checked', true);

  $("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

$(".section-main .btn-feedback").on('click', function() {
  document.getElementById("pop-ap-feedback").style.display='grid'
  document.body.style.overflow='hidden'
});


$(".section-main-mob-bottom-block .btn-feedback").on('click', function() {
  document.getElementById("pop-ap-feedback").style.display='grid'
  document.body.style.overflow='hidden'
});


$("footer .btn-feedback").on('click', function() {
  document.getElementById("pop-ap-feedback").style.display='grid'
  document.body.style.overflow='hidden'
});


$(".pop-ap-feedback__icon-close").on('click', function() {
  document.getElementById("pop-ap-feedback").style.display='none'
  document.body.style.overflow='initial'
});
