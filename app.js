function onSuccess(res){
  console.log('gg, Ajax:' + res.message);
  $('.api-dog').attr('src', res.message);
}
function onError(res){
  console.log('failjax:' + res);
}


$(document).ready(function(){
  console.log('sanity check');

  $('.api-dog').click(function(){
    var saved = $(this).next();
    console.log('saved: ' + saved.html());

    $(this).hide();
    saved.show();

    localStorage.setItem('display', saved);

    var store = localStorage.getItem('display');
    console.log('store: ' + store);
  });



  $(window).scroll(function(){
    var scrollPos = $(window).height();
    if($(this).scrollTop() > scrollPos * 3) {
      $('body').css('background-image', 'url(images/lh4.jpg)');
    } else if ($(this).scrollTop() > scrollPos * 2) {
      $('body').css('background-image', 'url(images/lh3.jpg)');

    } else if ($(this).scrollTop() > scrollPos) {
      $('body').css('background-image', 'url(images/lh2.jpg)');
    } else {
      $('body').css('background-image', 'url(images/lh1.jpg)');
    }
  });
  $.ajax({
    method: 'GET',
    url: 'https://dog.ceo/api/breeds/image/random',
    dataType: 'json',
    success: onSuccess,
    error: onError
  });
}); //closes document.ready
