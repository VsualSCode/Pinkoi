function setCookie(k,v,num){
	var d = new Date()
	d.setDate(d.getDate()+num)
	document.cookie = k + "=" + v + ";expires=" + d;
}

function removeCookie(k){
	setCookie(k,1,-1)
}

function getCookie(k){
	var str = document.cookie
	var arr = str.split("; ")
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == k){
			return arr[i].split("=")[1]
		}
	}
	return "";
}
            function getCookie(){
            	var str = document.cookie
            	var arr = str.split(",")
            	for(var i=0;i<arr.length;i++){
            		if(arr[i].split("=")[0] == k){
            			return arr[i].split("=")[1]
            		}
            	}
            		return "";
            
            }
