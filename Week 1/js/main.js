//Advanced Scalable Data Infrastructure
//April 2013
//Juan J Guzman


window.addEventListener("DOMContentLoaded", function(){
	
//Function to help return HTML elements by their ID
	
	function autoGet(x){
		var htmlID = document.getElementById(x);
		return htmlID;
	}


//Save to local storage and generate individual key

	function saveAppt(key){
		if(!key){
			var id = Math.floor(Math.random()*100000001);
		}else{
			var id = key;
		}
		var item = {};
			item.fName = ["First Name:", autoGet('fName').value];
			item.lName = ["Last Name:", autoGet('lName').value];
			item.contactNum = ["Phone Number:", autoGet('contactNum').value];
			item.contactType = ["Contact Type:", autoGet('contactType').value];
			item.date = ["Appointment Date:", autoGet('date').value];
			item.time = ["Preferred Time:", autoGet('time').value];
			item.interest = ["Interest Level:", autoGet('interest').value];
			item.comments = ["Comments:", autoGet('comments').value];
			localStorage.setItem(id, JSON.stringify(item));
			
			alert("Appointment Scheduled");
	}
	
	
	//SAVE button
	
		var saveButton = autoGet('saveButton');
	saveButton.addEventListener("click", required);

	//VALIDATE before save
	
	var flagMessage = autoGet('errors');
	
	function required(r){
		var checkFname = autoGet('fName');
		var checkLname = autoGet('lName');
		var checkNum = autoGet('contactNum');
		var checkDate = autoGet('date')
		
		flagMessage.innerHTML = "";
		checkFname.style.border = "1px solid black";
		checkLname.style.border = "1px solid black";
		checkNum.style.border = "1px solid black";
		checkDate.style.border = "1px solid black";

		
		var flagArray = [];
		if (checkFname.value === ""){
			var fNameFlag = "Please Enter A First Name";
			checkFname.style.border ="1px solid red";
			flagArray.push(fNameFlag);
		}
			if (checkLname.value === ""){
			var lNameFlag = "Please Enter A Last Name";
			checkLname.style.border ="1px solid red";
			flagArray.push(lNameFlag);
		}
			if (checkNum.value === ""){
			var numFlag = "Please Enter A Contact Number";
			checkNum.style.border ="1px solid red";
			flagArray.push(numFlag);
		}
			if (checkDate.value === ""){
			var numFlag = "Please Enter A Scheduled Date";
			checkDate.style.border ="1px solid red";
			flagArray.push(numFlag);
		}
		if (flagArray.length >=  1){
			for (var i=0, j=flagArray.length; i < j; i++){
				var text = document.createElement('li');
				text.innerHTML = flagArray[i];
				flagMessage.appendChild(text);
			}
			r.preventDefault();
			return false;
		}else{
			saveAppt(this.key);
		}
		
	}
	
	

});