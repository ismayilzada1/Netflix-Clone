$(document).ready(function () 
{

    $("details").click(function(){
        $("details").removeAttr('open');
    });

    $('summary').click(function() {
        var details = $(this).parent(); 
        if($(details).attr('open')!==undefined){
            var details = $(this).parent(); 
            setTimeout(function() {
              details.removeAttr('open'); 
            }, 0);
        }
      });


      $("#movies-btn").click(function(){
        window.location.href="movies.html";
      });
})