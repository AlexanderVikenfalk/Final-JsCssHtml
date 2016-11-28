function main(){
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

     $(function () {
        $('img.grid').hover(sourceSwap);
        $('img.footerlogo').hover(sourceSwap);
    });
  
}
$(document).ready(main);

// function main(){
//   // $('.skillset').hide();
//   // $('.skillset').fadeIn(1000);
//   $('p').hide();
//   $('p').fadeIn(5000);

// }
// $(document).ready(main);