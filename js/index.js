window.onload=function(){
// 登录框
	// 获取元素
		var login=document.querySelector('.deng .con .login');//
		var uname=document.querySelector('.usename');//账户
		var passwer=document.querySelector('.passwer');//密码
		var upwd2=document.querySelector('.btn ');//登录
		var wari=document.querySelectorAll('.wari');
		var input=document.querySelectorAll('.input  input'); //单击框
		var inpu=document.querySelectorAll('.input'); 
		// 用户名密码标记 
		var abc = false;
        var bac = false;
        index = $(this).index();
     	$('.input').eq(0).click(function(){
			$('.input').eq(0).removeClass('activi');
     		$(this).addClass('activi');
     			

     	})
     	$('.input').eq(1).click(function(){

     		$(this).addClass('activi');
     		$('.input').eq(0).removeClass('activi');

     	})


     	
		// 获取焦点事件
		uname.onblur=function(){
	 		
			// 获取用户名
			var value =this.value.trim();
				// 判断是否为空
				if (value == ''){
				// 设置提示的内容
					wari[0].innerHTML = '请输入手机号/邮箱';
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
						$('.input').eq(0).css('border','1px solid #ccc');
						wari[0].style.display='none';
				}
			}
       
			 //正则表达式
            var reg = /^(13[0-9]|14[57]|15[012356789]|17[0135678]|18[0-9]|19[89])\d{8}$/;
 		 	var regs = /^[a-zA-Z0-9_][a-zA-Z0-9_\.]+@[a-z0-9A-Z]+\.[a-z]{2,8}(.cn)?$/;
          	if (regs.test(value)||reg.test(value)){
           			abc = false;
           			if(regs.test(value)){
           				abc=true;
           				upwd2.setAttribute('class','denglu');
           				wari[0].style.display='none';
           				$('.input').eq(0).css('border','1px solid #ccc');
           			}else{
           				abc=true;
           				wari[0].style.display='none';
           			}
           		
           }else{
           			wari[0].style.display='block';
		        	wari[0].innerHTML='手机号/邮箱格式错误';
		        	$('.input').eq(0).css('border','1px solid red');	
           		return;
           }      

		}	
		passwer.onblur=function(){
          	bac = false;
          	var value = this.value.trim();
    	 	var reg = /^[a-zA-Z0-9-_]{4,50}$/;
           		
    	 	if (reg.test(value)) {
                // 检验通过
		        	  bac= true;
            } else {

            		wari[1].style.display='block';
		        	wari[1].innerHTML='请输入密码';
		        	$('.input').eq(1).css('border','1px solid red');

            }    			
        }
       upwd2.onsubmit=function(){
    			
    	
			 	if(abc==true && bac==true){
			 		alert('正确');
			 			
			 	}else{

			 		alert('账户名有问题');

			 	}
		
			}
}	