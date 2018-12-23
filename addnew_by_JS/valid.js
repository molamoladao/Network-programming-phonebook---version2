function valid()
	{		
		var a=document.form1.nname.value;
		var b=document.form1.ttel.value;
		var c=document.form1.mmail.value;
		var d=document.form1.aadre.value;
		var e=document.form1.QQQ.value;
		var myReg= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
 
		if (a==null || a==""){
			alert("姓名必须填写");
			return false;
		}
		
		else if(b!=null&&b!=""){
			if(b.length<6){
			alert("电话号码至少为6位");
			return false;}
			else if(c!=null&&c!=""){
				if(!myReg.test(c)){
　　　　    		alert("邮箱格式不对!");
　　　　			return false;
				}
				else if(e!=null&&e!=""){
					if(e.length<6){
						alert("QQ号码至少为6位");
						return false;
					}
					else{
						return true;
					}
				}
			}
		}
		
		
				
	}