window.onload=function(){
// 登录框
	// 获取元素
		var login=document.querySelector('.deng .con .login');//
		var uname=document.querySelectorAll('.usename');//账户
		var passwer=document.querySelectorAll('.passwer');//密码
		var upwd2=document.querySelector('.btn');//登录
		var wari=document.querySelectorAll('.wari');
		var input=document.querySelectorAll('.input  input'); //单击框
		var inpu=document.querySelectorAll('.input'); 
		var upawp=document.querySelector('#upwd'); 

		// 用户名密码标记 
		var abc = false;
        var bac = false;
        var cab = false;
     	$('.input').eq(0).click(function(){

     		$(this).addClass('activi');
     		$('.input').eq(1).removeClass('activi');

     	})
     	$('.input').eq(1).click(function(){

     		$(this).addClass('activi');
     		$('.input').eq(0).removeClass('activi');

     	})
		// 获取焦点事件
		uname[0].onblur=function(){
	 		
			// 获取用户名
			var value =this.value.trim();
				// 判断是否为空
				if (value == ''){
				// 设置提示的内容
					wari[0].innerHTML = '请输入手机号';
					wari[0].style.display='block';
					$('.input').eq(0).css('border','1px solid red');	
				// 设置isUserOk标志
					abc = false;
					// 终止事件
					return;
				}
			// 键盘事件
			window.onkeydown = function (e) {
				var  value =this.value + e.key.toUpperCase();

						switch (e.keyCode) {
					case 8:

				$('.input').each(function(index,dom){
					
				  $(this).css('border','1px solid #ccc');
				  		$('.wari').css('display','none');
						})
						
				}
			}
       		
			//正则表达式
            var reg = /^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            $('.war').css('display','none');
          	if (reg.test(value)){
           		         abc=true;
           				upwd2.setAttribute('class','denglu');
           				wari[0].style.display='none';
           				$('.input').eq(0).css('border','1px solid #ccc');
           				$('.yanzhema').css('border','1px solid #5f7ed7 ')

           				
           		
           }else{
           			wari[0].style.display='block';
		        	wari[0].innerHTML='手机号格式错误';
		        	$('.input').eq(0).css('border','1px solid red');	
           		return;
           }      

		}
		// 手机验证码
		uname[1].onblur=function(){
          	bac = false;
          	var value = this.value.trim();
    	 	var reg = /^[0-9]{0,4}$/;
           	$('.war').css('display','none');	
    	 	if (reg.test(value)) {
                // 检验通过
		        	  bac= true;
		        	  $('.yanzhema').css('border','1px solid #ccc');
		        	  wari[1].style.display='none';
		        	$('.input').eq(1).css('border','1px solid #ccc');
            } else {

            		wari[1].style.display='block';
		        	wari[1].innerHTML='请输入验证码';
		        	$('.input').eq(1).css('border','1px solid red');

            }    			
        }

        // 密码获取焦点事件
        passwer[0].onfocus=function(){
        	$('.war').eq(0).css('display','block');
        	$('.war').eq(1).css('display','none');
        }
        // 失去焦点事件
        passwer[0].onblur=function(){
        	var value =this.value.trim();
           var reg = /^[a-zA-Z0-9]{4,20}$/;
        		cab=false;
        	if (reg.test(value)){
        		bac=true;
        		wari[2].style.display='none';
        		$('.war').eq(0).css('display','none');	
        		$('.input').eq(2).css('border','1px solid #ccc');
        	}else{
        		$('.input').eq(2).css('border','1px solid red');
        		wari[2].innerHTML='密码格式错误';
        		wari[2].style.display='block';
        	}

        } 
        passwer[1].onblur=function(){
        	var upwd2Value =this.value.trim();
         	$('.war').eq(0).css('display','none');
        	if (upwd2Value==''){
        	
        		wari[2].style.display='block';
        		$('.war').eq(1).css('display','block');	
        		$('.input').eq(3).css('border','1px solid red');

        		cab=false;

        		return;
        	}

        	if(upwd2Value ==upawp.value.trim()){
        		cab=true;

        	}else{
        		$('.war').eq(1).css('display','block');
        		wari[3].style.display='block';	
        		wari[3].innerHTML='两次密码输入不一致';
        		$('.input').eq(3).css('border','1px solid red');
        		cab=false;
        	}

        } 
       upwd2.onsubmit=function(){
			 	if (abc==true && bac==true && cab==true) {
			 		alert('正确');
			 			
			 	}else{

			 		alert('账户名有问题');

			 	}
		
		}
}	