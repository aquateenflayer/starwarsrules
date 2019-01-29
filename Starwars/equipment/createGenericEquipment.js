function createGenericEquipment(){
	let picture = document.getElementById("picture").value;
	let name = document.getElementById("name").value;
	let object_Name = name.toUpperCase();
	 	object_Name = object_Name.replace(/ /g,"_");
	let description = document.getElementById("description").value;
	let cost= document.getElementById("cost").value;	
	let weight= document.getElementById("weight").value;
	let availibility= document.getElementById("availibility").value;

	let object_code = `var ${object_Name} = new equipment(\"${name}\",${cost},\"AVAILABILITY.${availibility.toUpperCase()}\",${weight},\"${picture}\",\"${description}\")`
	document.getElementById("object_Code").innerHTML = object_code;
}	