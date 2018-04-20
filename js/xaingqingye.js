 $(function(){
   
        $(window).scroll(function(){
           var s = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(s);
          if(s >100){
            $('.nav-app').addClass('activi');
            }else{
        
             $('.nav-app').removeClass('activi');

          } 


          })
 })