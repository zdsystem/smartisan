window.onload=function(){

		// 购物车特效移入显示
		// 获取元素
		 var cox =document.querySelectorAll('.nob');
		 var mox =document.querySelectorAll('.mox');
		 var nov=document.querySelectorAll('.nav-nov');
			 cox[0].onmouseenter=function(){
			 	 nov[0].style.display='block';
			 }
			 nov[0].onmouseleave=function(){
			 	 this.style.display='none';

			 }
			 cox[1].onmouseenter=function(){
			 	 nov[1].style.display='block';
			 }
			 
			 nov[1].onmouseleave=function(){
			 	 this.style.display='none';
			 }



		// 轮播图特效
		// 获取元素
		var imgList = document.querySelectorAll('#circle li');
	    var numList = document.querySelectorAll('#lun-1 li');
	    var leftBtn = document.querySelectorAll('#lun ul a');

	    // 初始化显示的索引为0 的图片
	    var index=0;
	    var tir;
	    // 图片自动轮播 
	    function run(){
	    	  tir=setInterval(function(){
	    	  	imgList[index].removeAttribute('class');
	    	  	numList[index].removeAttribute('class');
	    	  	leftBtn[index].removeAttribute('class');

	    	  	
	    	  	index++;
	    	  	if(index >=imgList.length) {
	                index = 0;
	            }
	    	  	imgList[index].setAttribute('class','active');
	    	  	numList[index].setAttribute('class','activeNum');
	    	  	leftBtn[index].setAttribute('class','activeNu');
	    	  },3000)
	    }
	    run();

	    // 给所有的圆点序列设置鼠标的单击事件
	    for(var i=0; i<numList.length; i++){
			numList[i].onclick = (function (i){
				return function () {
					console.log(i);
				imgList[index].removeAttribute('class');
	    	  	numList[index].removeAttribute('class');
	    	  	leftBtn[index].removeAttribute('class');
	            index=i;
	    	  	imgList[index].setAttribute('class','active');
	    	  	numList[index].setAttribute('class','activeNum');
	    	  	leftBtn[index].setAttribute('class','activeNu');
				}
			})(i)
	    }


		//导航滚动条
		var sub =document.querySelector('.nav-sub');			
			
				var ap1 = document.querySelector('.nav-sub .sun .ap');//
				var sun3 =document.querySelector('.nav-sub .sun2');//手机显示
				var sun4 =document.querySelector('.nav-sub .sun1');//手机显示
						ap1.onmouseenter=function(){
							sun3.style.height='350px';
							sun3.style.display='block';
							sun4.style.height='450px';
							sun4.style.display='block';
						}
						sun3.onmouseleave=function(){
							
							sun4.style.background='#ededed';
							sun4.style.height='0px';
							this.style.height='0px';
							this.style.display='none';
						}
		
		window.onscroll=function(){
		var abc=document.documentElement.scrollTop;	
		
		//手机显示
		var sun1 =document.querySelector(' .sun1');//手机显示
		var sun4 =document.querySelector('.sun1');//手机显示
		var sun3 =document.querySelector('.sun2');//手机显
		var abc=document.documentElement.scrollTop;		
			if (abc>=100){
					sun1.style.background='#f7f7f7'
					sub.className=""+'kov'; 
					var ap = document.querySelector('.kov .sun .ap');//
					var sun2 =document.querySelector('.kov .sun2');
					mox[1].style.display='block';
					sun1.style.height='60px'; 
					ap.onmouseenter=function(){
							sun2.style.height='350px';
							sun2.style.display='block';
							sun1.style.height='450px';
							sun1.style.display='block';
							sun1.style.background='#f7f7f7';
						}
					sun2.onmouseleave=function(){
							sun1.style.background='#f7f7f7';
							sun1.style.height='60px';
							this.style.height='0px';
							this.style.display='none';
						
					}
			}else{
					sub.className=""+'nav-sub'; 
					mox[1].style.display='none'	
					sun4.style.background='#ededed';
					ap1.onmouseenter=function(){
							sun3.style.height='350px';
							sun3.style.display='block';
							sun4.style.height='450px';
							sun4.style.display='block';
						}
						sun3.onmouseleave=function(){
							sun4.style.background='#ededed';
							sun4.style.height='0px';
							this.style.height='0px';
							this.style.display='none';
						} 
					}							
				}

	//热门商品按钮
			$('.hot .dis').click(function(e){
				var index =$(this).index();
				 $('.hot .dis').removeClass('activb').eq(index).addClass('activb');
				$('.cell-list').hide().eq(index).show();

			})

	// 轮播图jquery特效
		$(' .bou .dot-lisy>li').mouseenter(function(){
			// console.log($(this).index())
            $(this).parents('.tent').children('.ap').children('img').eq(index).removeClass('activi')
            $(this).parents('.dot-lisy').children('li').removeClass('activeli')

            // 移入到哪个索引，对应索引的图片显示
            index = $(this).index();
            $(this).parents('.dot-lisy').children('li').eq(index).addClass('activeli')
            $(this).parents('.tent').children('.ap').children('img').eq(index).addClass('activi')
        })

	// 购物车特效
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
	   	
			

}
