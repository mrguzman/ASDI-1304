//ASD 1304
//Juan J Guzman

$('#form').on('pageinit', function(){
	
	//SAVE DATA to LocalStorage.
		function saveAppt(){
	
		var id = Math.floor(Math.random()*100000001);
		
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
			
			console.log($("#saveButton").click(saveAppt));
			
	}
	
	$("#saveButton").click(saveAppt);

	
		
}); 