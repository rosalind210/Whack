window.onload = function() {
  var img = document.createElement('img');
  img.setAttribute('id', 'flower');
  img.style.opacity = 0;
  img.src = 'images/stage1.png';
  document.getElementById('imageSpace').appendChild(img);

  setTimeout(function(){$('#flower').fadeTo(2000, 1.0)}, 500);
}

function getHealthStatus(shower, hrsSleep, minsExercise) {
  // start at 1 point
  var health = 1;

  // you get two points for showering
  // shower should be boolean value
  if (shower) {
    health = health + 2;
  }

  // one point for exercising more than 30 min
  if (minsExercise > 30) {
    health = health + 1;
  }

  // one point for sleeping more than 6 hours
  if (hrsSleep > 6) {
    health = health + 1;
  }

  return health;
}

$('#healthStats').submit(function(event){
  event.preventDefault();

  var healthData = {
    'username': 'april',
    'shower': this.shower.checked,
    'exercise': this.exercise.value,
    'sleep': this.sleep.value
  };
  console.log(healthData);

  $.post( '/update', JSON.stringify(healthData), function( data ) {
    console.log(data);
  }, JSON);

  var img = document.createElement('img');
  img.setAttribute('id', 'flower');
  img.style.opacity = 0;
  var pngNo = getHealthStatus(healthData.shower,healthData.sleep,healthData.exercise) + 1;

  if (pngNo == 6) pngNo = 5;

  img.src = 'images/stage'+pngNo+'.png';

  var imgSpace = document.getElementById('imageSpace');
  imgSpace.removeChild(imgSpace.firstChild);
  imgSpace.appendChild(img);
  setTimeout(function(){$('#flower').fadeTo(2000, 1.0)}, 500);
  console.log('I work');
});

$.fn.extend({
  leanModal: function(options) {
    var defaults = {
      top: 100,
      overlay: 0.5,
      closeButton: null
    };

    var overlay = $('<div id="lean_overlay"></div>');
    $('body').append(overlay);

    options = $.extend(defaults, options);

    return this.each(function() {
      var o = options;

      $(this).click(function(e) {
        var modal_id = $(this).attr('href');

        $('#lean_overlay').click(function() {
          close_modal(modal_id);
        });

        $(o.closeButton).click(function() {
          close_modal(modal_id);
        });

        var modal_height = $(modal_id).outerHeight();
        var modal_width = $(modal_id).outerWidth();

        $('#lean_overlay').css({
          'display': 'block',
          opacity: 0
        });

        $('#lean_overlay').fadeTo(200, o.overlay);

        $(modal_id).css({
          'display': 'block',
          'position': 'fixed',
          'opacity': 0,
          'z-index': 11000,
          'left': 50 + '%',
          'margin-left': -(modal_width / 2) + 'px',
          'top': o.top + 'px'
        });

        $(modal_id).fadeTo(200, 1);

        e.preventDefault();
      });
    });

    function close_modal(modal_id) {
      $('#lean_overlay').fadeOut(200);

      $(modal_id).css({
              'display': 'none'
      });
    }
  }
});

// Plugin options and our code
$("#modal_trigger").leanModal({
  margin: 100,
  overlay: 0.6,
  closeButton: ".modal_close"
});

// Calling Login Form
$("#login_form").click(function () {
  $(".user_register").hide();
  $(".user_login").show();
  return false;
});

// Calling Register Form
$("#register_form").click(function () {
  $(".user_login").hide();
  console.log('hide');
  $(".user_register").show();
  console.log('show');
  $(".header_title").text('Register');
  return false;
});

// Going back to Social Forms
$(".back_btn").click(function () {
  $(".user_login").show();
  $(".user_register").hide();
  $(".header_title").text('Login');
  return false;
});
