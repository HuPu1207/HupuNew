//正则验证
function checkReg(type,str) {
    switch (type) {
        case "name":
            var reg = /^[a-zA-Z_]\w{5,14}$/; //6-15位，数字，字母和_组成，不以数字开头
            break;
        case "tel":
            var reg = /^1[0-9]{10}$/; //11位数字
            break;
        case "pass":
            var reg = /^\w{6,12}$/; //6-12位，数字，字母和_组成
            break;
        default:
            ;
    }
    return reg.test(str);
}

//获取随机验证码
function testCode(){
	let str = "";
	for(let i=0;i<4;i++){
		let acount = parseInt(Math.random()*10);
		str += acount;
	}
	return str;
}

//验证密码,验证码是否一致
function checkpass(a,b){
	if(a != b){
		return false;
	}else{
		return true;
	}
}

//保存cookie(添加)
//参数：
// 键
// 值
// 有效期:(单位：多少天)
//
function addCookie(key,value,dayCount,path,domain){

	let d=new Date;
	d.setDate(d.getDate()+dayCount);

	let str = `${key}=${escape(value)};expires=${d.toGMTString()}`;
	if(path!=undefined){
		str+=`;path=${path}`;
	}

	if(domain!=undefined){
		str+=`;domain=${domain}`;
	}

	document.cookie = str;
}

//获取Cookie
//参数
//键
//返回值：键对应的值
function getCookie(key){
	let str = unescape(document.cookie);
	let arr = str.split(", ");

	for(var i in arr){
        if(arr[i].startsWith(key+"=")){
            let [,value]=arr[i].split("=");//["username","jzm"]
            return value;
        }
    }
    return null;
}


//删除cookie:(cookie不能直接删除，可以通过设置过期时间为过去，进行删除)
//参数：
//键
//返回值：无
function removeCookie(key){//removeCookie("username");
    addCookie(key,"",-1);
}

export {
    checkReg,
    testCode,
    checkpass,
	addCookie,
	getCookie,
	removeCookie
}