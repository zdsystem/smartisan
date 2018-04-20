	// 购物车特效移入显示
		// 获取元素
		 var cox =document.querySelector('.nob');
		 var nov=document.querySelector('.nav-nov');
			 console.log(cox);
			 cox.onmouseenter=function(){
			 	 nov.style.display='block';
			 }
			 nov.onmouseleave=function(){
			 	 this.style.display='none';

			 }
	// 轮播图jquery特效
		$(' .bou .dot-lisy li').mouseenter(function(){
            $(this).parents('.tent').children('.ap').children('img').removeClass('activi');
            $(this).parents('.dot-lisy').children('li').removeClass('activeli');

            // 移入到哪个索引，对应索引的图片显示
            index = $(this).index();
            $(this).parents('.dot-lisy').children('li').eq(index).addClass('activeli');
            $(this).parents('.tent').children('.ap').children('img').eq(index).addClass('activi');
        })

   		var  bou=document.querySelectorAll('.bou');
		var  pri=document.querySelectorAll('.bou .pri');
		var  oper=document.querySelectorAll('.bou .oper');
		for (var i = 0; i<bou.length; i++) {
		        // 鼠标移入
		        bou[i].index=i;
		        bou[i].onmouseover = function(){
		        	oper[this.index].style.opacity='1';
		        	pri[this.index].style.display='none';
		        }
		        // 鼠标移出
		        bou[i].onmouseout = function(){
		        	pri[this.index].style.display='block';
		          	oper[this.index].style.opacity='0';
		        }
		    }

