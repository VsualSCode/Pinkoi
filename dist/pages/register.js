(function($){
	
class Register{
	constructor(options){
		console.log(1111)
		this.url=options.url;
		this.user=options.user;
		this.pass=options.pass;	
		this.pass2=options.pass2;
		this.init();
	}
	init(){
		let that=this;
		if($("#pass").val()!==$("#pass2").val()){
			
			$(".tips").text("和第一次输入的密码不符");
			return;
		}else{
			console.log($("#pass").val(),$("#pass2").val())
			$.ajax({
				url:this.url,
				data:{
					tel:that.user,
					pass:that.pass
				},
				success:(res)=>{
					switch(res){
						case "0": $(".tips").text("用户名重复");break;
						case "2": $(".tips").text("用户名或密码错误");break;
						case "1": $(".tips").text("注册成功");
						setTimeout(()=>{
						location.href="https://localhost:8000/pages/login.html"
							},3000)
							break;
					}
				}
			})			
		}		
	}	
}

$("#sign_btn").on("click",()=>{
	console.log(1111)
	
	new Register({
	url:"http://www.liyangyf.com/ctrl/register.php",
	user:$("#user").val(),
	pass:$("#pass").val(),
	pass2:$("#pass2").val()
	})

})


})(jQuery);