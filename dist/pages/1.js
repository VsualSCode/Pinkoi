$(".nav").children("li").hover(function(){
			$(this).children(".secnav").stop().show()
		},
		function(){
			$(this).children(".secnav").stop().hide()
		});




					$(".admin").on("click",function(){
//						console.log(JSON.parse($.cookie("admin")))
						
						if(JSON.parse($.cookie("admin"))==null){
							console.log(0)
							location.href="https://localhost:8000/pages/login.html"
					}else{
//						console.log(1)
						location.href="https://localhost:8000/pages/people.html"
						
					}	
					});
				
