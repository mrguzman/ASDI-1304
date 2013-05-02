//ASD 1304
//Juan J Guzman

$(document).ready(function(){
	
	//SAVE DATA to LocalStorage.
		function saveAppt(key){
		if(!key){
			var id = Math.floor(Math.random()*100000001);
		}else{
			var id = key;
		}
		var item = {};
			item.fName = ["First Name:", $("#fName").val()];
			item.lName = ["Last Name:", $("#lName").val()];
			item.phoneNum = ["Phone Number:", $("#phoneNum").val()];
			item.phoneType = ["Contact Type:", $("#phoneType").val()];
			item.date = ["Appointment Date:", $("#date").val()];
			item.time = ["Preferred Time:", $("#time").val()];
			item.interest = ["Interest Level:", $("#interest").val()];
			item.comments = ["Comments:", $("#comments").val()];
			localStorage.setItem(id, JSON.stringify(item));
			
			alert("Appointment Saved");
			
			
			
	}
	
	//VALIDATE and Save.
	$("#saveButton").click(function(){
			if ($("input").val() == "") {
				    alert("Fields are blank!");
				    return false;
			  }else{
				  saveAppt();
				  return false;
			  }
		})
		
		
	//DISPLAY all localStorage data to user
	
		
	$(".display").find("a").click(function(){
		if(localStorage.length === 0){
			alert("No Appointments Currently Saved");
			return false;
		}
		
		
		
	})
	
		


	
	
});



