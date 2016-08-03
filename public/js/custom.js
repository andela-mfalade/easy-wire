$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    console.log(target, 'tar');
    if( target.length ) {
        event.preventDefault();
        target.show();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 700);
    }
});


console.log("Ths is the custom js script in action..");


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      console.log(this.nextElementSibling);
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
  }
}
