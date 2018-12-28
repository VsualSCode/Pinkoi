(function ($) {

	class Login {
		constructor(options) {
			this.user = options.user;
			this.pass = options.pass;
			this.url = options.url;
			this.init();
		}
		init() {
			let that = this;
			$.ajax({
				url: this.url,
				data: {
					user: that.user,
					pass: that.pass
				},
				success: (res) => {
					switch (res) {
						case "0":
							$(".tips").text("请输入正确的用户名和密码"); break;
						case "1":
							$(".tips").text("请重新登录");
							location.href = "https://localhost:8000/pages/login.html";
							break;
						default:
							location.href = "https://localhost:8000/pages/people.html";

							res = JSON.parse(res);
							console.log(res)
							that.person()
					}
				},


			})
		}

		person() {
			this.admin = JSON.parse($.cookie("admin"));
			console.log(this.admin)
			if (this.admin == null) {
				this.admin = [{
					admin: this.user,
					num: 1
				}]
			}

			$.cookie("admin", JSON.stringify(this.admin))

		}


	}
	$("#login_btn").on("click", () => {
		new Login({
			url: "https://passport.baidu.com",
			user: $("#user").val(),
			pass: $("#pass").val(),
		})
	})
})(jQuery)