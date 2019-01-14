function createWeapon(){
	let picture = document.getElementById("picture").value;
	let name = document.getElementById("name").value;
	let object_Name = name.toUpperCase();
	 	object_Name = object_Name.replace(/ /g,"_");
	let description = document.getElementById("description").value;
	let weapon_group= document.getElementById("weapon_group").value;
	let weapon_size= document.getElementById("weapon_size").value;
	let cost= document.getElementById("cost").value;
	let damage_Dice_Number= document.getElementById("damage_Dice_Number").value;
	let damage_Dice_Size= document.getElementById("damage_Dice_Size").value;
	let damage_Bonus= document.getElementById("damage_Bonus").value;
	let stun_Dice_Number= document.getElementById("stun_Dice_Number").value;
	let stun_Dice_Size= document.getElementById("stun_Dice_Size").value;
	let stun_Bonus= document.getElementById("stun_Bonus").value;
	let weight= document.getElementById("weight").value;
	let damage_type= document.getElementById("damage_type").value;
	let availibility= document.getElementById("availibility").value;

let object_code = `var ${object_Name} = new weapon(${name},${cost},AVAILIBILITY.${availibility.toUpperCase()},${weight},WEAPON_SIZE.${weapon_size.toUpperCase()},${picture},${damage_Dice_Size},${damage_Dice_Number},${damage_Bonus},${stun_Dice_Size},${stun_Dice_Number},${stun_Bonus},weapon_group.${weapon_group.toUpperCase()},DAMAGE_TYPE.${damage_type.toUpperCase()},${description})`;
document.getElementById("object_Code").innerHTML = object_code;
}

	//constructor(name,cost,availibility,weight,weapon_size,picture,damage_Dice_Size,damage_Dice_Number,damage_Bonus,stun_Dice_Size,stun_Dice_Number,stun_Bonus,weapon_group,damage_type,description,){
