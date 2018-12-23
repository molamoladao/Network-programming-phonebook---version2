

function validform()
	{		
		var x=document.form1.nname.value;
		var y=document.form1.ppassword.value;
		
		if (x==null || x==""){
			alert("姓名必须填写");
			return false;
		}
		else if(y==null || y=="" ){
			alert("密码必须填写");
			return false;
		}
		else if(y.length<6){
			alert("密码位数至少为为6位");
			return false;
		}
		else{
			return true;
		}		
	}
	

	
