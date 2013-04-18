//ASD 1304
//Juan J Guzman

$('#form').on('pageinit', function(){
	
	//SAVE DATA to LocalStorage.
	
	function saveAppt(key){
		if (!key){
			var id = Math.floor(Match.random()*100000001);
		}else{
			var id = key;
		};
		var item = {};
			item.fName = ["First Name:", $(fName).value];
			item.lName = ["Last Name:", $(lName).value];
			item.phoneNum = ["Phone Number:", $(phoneNum).value];
			item.phoneType = ["Contact Type:", $(phoneType).value];
			item.date = ["Appointment Date:", $(date).value];
			item.time = ["Preferred Time:", $(time).value];
			item.interest = ["Interest Level:", $(interest).value];
			item.comments = ["Comments:", $(comments).value];
			localStorage.setItem(id, JSON.stringify(item));
			
			alert("Appointment Saved");
			
	}
	
	
	
	
}); 