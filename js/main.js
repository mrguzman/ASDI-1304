//ASD 1304
//Juan J Guzman

$('#form').on('pageinit', function(){
	
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
	
/*	$("#saveButton").click(function(e){
		
		e.preventDefault();
		
		var data = $("#apptForm").serializeArray();
		
		$.each(data, function(i, obj){
			
			localStorage.setItem(obj.name, obj.value);
		});
		
		console.log(data);
	});

*/	


	
	
});
	

$('#display').on("pageinit", function(){
	


	// Create elements, Retrieve LocalStorage and display
	
		
	$("ul").appendTo("#content");
	$("#display").css({display: "block"});
		
		//Loops through key in local storage.

		for (var i=0, len=localStorage.length; i<len; i++){
			var createLi = $('li').appendTo("ul");
			var key = localStorage.key(i);
			
		}			


		
}); 