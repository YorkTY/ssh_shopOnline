// JavaScript Document

window.onload=function(){
	var code=document.getElementById("code");
	function change(){
		// 验证码组成库
	var arrays=new Array(  
		'1','2','3','4','5','6','7','8','9','0',  
		'a','b','c','d','e','f','g','h','i','j',  
		'k','l','m','n','o','p','q','r','s','t',  
		'u','v','w','x','y','z',  
		'A','B','C','D','E','F','G','H','I','J',  
		'K','L','M','N','O','P','Q','R','S','T',  
		'U','V','W','X','Y','Z'               
            	); 
			// 重新初始化验证码
				codes ='';
				// 随机从数组中获取四个元素组成验证码
				for(var i = 0; i<4; i++){
					// 随机获取一个数组的下标
					var r = parseInt(Math.random()*arrays.length);
					codes += arrays[r];
				}
		// 验证码添加到input里
    code.value = codes;
	}
	  change();//加载显示在页面上
    code.onclick = change;//单击更换验证码

//单击验证
	var check=document.getElementById("check");
	var input=document.getElementById("input");
	var username=document.getElementById("username");
	var password=document.getElementById("password");
	var pass=document.getElementById("pass");
  check.onclick=function(){
	            var user = username.value;
				var inputCode = input.value.toUpperCase();
				var mm = password.value; 
				var qrmm = pass.value;
					//取得输入的验证码并转化为大写      
				if(user.length==0) { //若输入用户名长度为0
					alert("请输入用户名！"); //则弹出请输入验证码
				} 
				else if(mm.length==0) { //若输入的验证码长度为0
					alert("请输入密码！"); //则弹出请输入验证码
				}   
				else if(qrmm.length==0) { //若输入的验证码长度为0
					alert("请输入确认密码！"); //则弹出请输入验证码
				}  
				else if(inputCode.length==0) { 
					alert("请输入验证码！"); 
				}  
				else if(inputCode!=codes.toUpperCase()) { //若输入的验证码与产生的验证码不一致时
					alert("验证码输入错误！请重新输入"); //则弹出验证码输入错误
					change();//刷新验证码
					input.value="";//清空文本框
					return false;
				} 
				 else if(mm!==qrmm) { 
					alert("输入两次密码不正确！"); 
				}       
				else{ //输入正确时
					self.location='login.html'; //弹出输入正确
				} 
			}


}

