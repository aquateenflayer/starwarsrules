function create_Armor(){
	//console.log(document.getElementById("availibility").value)
	let name = document.getElementById("name").value;
	let cost = document.getElementById("cost").value;
	let availibility = document.getElementById("availibility").value;
	let weight = document.getElementById("weight").value;
	let picture = document.getElementById("picture").value;
	let description = document.getElementById("description").value;
	let reflex_Defense = document.getElementById("reflex_Defense").value;
	let fortitude_Defense = document.getElementById("fortitude_Defense").value;
	let max_Dex = document.getElementById("max_Dex").value;
	let speed_reduction_Six = document.getElementById("speed_reduction_Six").value;
	let speed_reduction_Four = document.getElementById("speed_reduction_Four").value;
	let ARMOR_GROUP = document.getElementById("ARMOR_GROUP").value;
	const new_Name = new armor(name,cost,availibility,weight,picture,description,
	reflex_Defense,fortitude_Defense,max_Dex,speed_reduction_Six,speed_reduction_Four,ARMOR_GROUP);
	 
	 let object_Name = name.toUpperCase();
	 object_Name = object_Name.replace(/ /g,"_");

	 
	 printing_Stats = object_Name+":{<br>NAME:\"" + name +"\",<br>COST:" +cost + ",<br>AVAILABILITY:" +availibility.toUpperCase()+ ",<br>WEIGHT:" +weight+  ",<br>PICTURE:"+picture+ ",<br>DESCRIPTION:" + "\"" +description+"\",<br>REFLEX_DEFENSE:" +reflex_Defense+ ",<br>FORTITUDE_DEFENSE:" +fortitude_Defense+ ",<br>MAX_DEX:" +max_Dex+ ",<br>SPEED_REDUCTION_SIX:" +speed_reduction_Six+  ",<br>SPEED_REDUCTION_FOUR:"+speed_reduction_Four+ ",<br>ARMOR_GROUP:" +ARMOR_GROUP.toUpperCase() + "<br>}";
	 document.getElementById("armor").innerHTML = printing_Stats;

	 	const NEW_ARMOR = new armor(name,cost,availibility,weight,picture,description,
	reflex_Defense,fortitude_Defense,max_Dex,speed_reduction_Six,speed_reduction_Four,ARMOR_GROUP); 
	 //ALL_ARMORS.push(NEW_ARMOR);

	 object_Codeing_Stats = "var "+ object_Name + "= new armor(\"" + name + "\"," + cost + ", AVAILABILITY." + availibility.toUpperCase() + ","+ weight + ","+"\"" + picture +"\",\"" +description +"\","+ reflex_Defense + ","+ fortitude_Defense +"," + max_Dex + "," + speed_reduction_Six + "," + speed_reduction_Four + ",ARMOR_GROUP." +ARMOR_GROUP.toUpperCase() +");";
	 document.getElementById("object_Code").innerHTML = object_Codeing_Stats;
}
//console.log(ARMOR);



