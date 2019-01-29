function createWeapon(){
	let picture = document.getElementById("picture").value;
	let name = document.getElementById("name").value;
	let object_Name = name.toUpperCase();
	 	object_Name = object_Name.replace(/ /g,"_");
	let description = document.getElementById("description").value;
	let weapon_group= document.getElementById("weapon_group").value;
		weapon_group =weapon_group.replace(/ /g,"_");
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
	let rof= document.getElementById("rof").value;
	if(rof == "s"){
		RATE_OF_FIRE = "SINGLE_SHOT";
	}else if(rof == "a"){
		RATE_OF_FIRE = "AUTOFIRE";
	}else if(rof == "sa" || rof == "as"){
		RATE_OF_FIRE = "AUTOFIRE_AND_SINGLE_SHOT"
	}

	/* switch(damage_type){
		case p:
		DAMAGE_TYPE = "PIERCING";
		break; 
		case s:
		DAMAGE_TYPE = "SLASHING";
		break;
		case b:
		DAMAGE_TYPE = "BLUDGEONING";
		break;
		case p:
		DAMAGE_TYPE = "PIERCING_AND_SLASHING";
		break;

	} */





let object_code = `var ${object_Name} = new weapon(\"${name}\",${cost},AVAILABILITY.${availibility.toUpperCase()},${weight},WEAPON_SIZE.${weapon_size.toUpperCase()},\"${picture}\",${damage_Dice_Size},${damage_Dice_Number},${damage_Bonus},${stun_Dice_Size},${stun_Dice_Number},${stun_Bonus},WEAPON_GROUP.${weapon_group.toUpperCase()},DAMAGE_TYPE.${damage_type.toUpperCase()},"${description}",RATE_OF_FIRE.${RATE_OF_FIRE})`;
document.getElementById("object_Code").innerHTML = object_code;
}

	//constructor(name,cost,availibility,weight,weapon_size,picture,damage_Dice_Size,damage_Dice_Number,damage_Bonus,stun_Dice_Size,stun_Dice_Number,stun_Bonus,weapon_group,damage_type,description,){
