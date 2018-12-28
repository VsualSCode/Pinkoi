let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");
let webserver = require("gulp-webserver");
gulp.task("watch",()=>{
	return gulp.watch(["../sass/*.scss","../*.html"],["sass","index"])
})


gulp.task("index",()=>{
	
	return gulp.src(["../*.html"]).pipe(gulp.dest("../server")).pipe(connect.reload());
})


gulp.task("server",()=>{
	connect.server({
		port:"8000",
		root:"server",
		livereload:true,
	})
})
gulp.task("zn",["server","watch"]);


gulp.task("sass",()=>{
	return gulp.src("../sass/*.scss").pipe(sass().on("error",sass.logError))
	.pipe(gulp.dest("../css"))
	.pipe(connect.reload());
})


gulp.task('webserver', ()=> {
	gulp.src('dist')
		.pipe(webserver({
			livereload: true, //是否支持热部署
			// directoryListing: true,   //显示根目录
			// open: true,       //服务器启动时是否打开浏览器
			https: true,      //是否采用https协议
			port: 8000,       //端口号
			    
			proxies : [
				{	
					source: '/abcdefg', 
					target: 'https://m.lagou.com/listmore.json?pageNo=2&pageSize=15',
				},
				{
					source: '/userinfo',
					target: 'https://nbrecsys.4paradigm.com/api/v0/recom/recall?requestID=pmKC7kYD&userID=u3FFkObPEe&sceneID=34'
					
				}
			]
		}));
});

