function display_Black_Market(){
	var blackmarket_Array = [];
	function prune_Array(array){
		for(i = 0; i < array.length; i++){
					blackmarketRoll = roll(20) + roll_modifier;
					//console.log(blackmarketRoll);
					if (array[i].availibility.SKILL_DC <= blackmarketRoll){
						array[i].cost = array[i].black_market_cost;
						blackmarket_Array.push(array[i]);
						//console.log(arrayName[i].name + " Add to Table");
					}else{
						console.log(array[i].name +" Failed to Roll High Enough");
					}
				}
	}

	//put items rolled into black market array
	prune_Array(Simple_Melee)
	prune_Array(Advanced_Melee)
	prune_Array(Exotic_Melee)
	prune_Array(Lightsaber_Array)
	prune_Array(Pistols)
	prune_Array(Rifles)
	prune_Array(Exotic_Ranged)
	prune_Array(Simple_Ranged)
	prune_Array(Grenades)
	prune_Array(light_Armor_Array);
	prune_Array(medium_Armor_Array);
	prune_Array(heavy_Armor_Array);
	//get all the rare items out of black market array
 for(x = 0; x < blackmarket_Array.length;x++){
 	if(blackmarket_Array[x].rare){
 		console.log(blackmarket_Array[x].name +"is rare and removed from array")
 		blackmarket_Array.splice(x,1);

 	}
 }
//sort the array
blackmarket_Array.sort();
//display blackmarket array
	displayArray(blackmarket_Array);

}




function displayArray(array){
	for(x=0 ; x < array.length; x++){
		display_Item(array[x]);
	}
}

function dislayAllWeapons(){
	displayArray(Simple_Melee)
	displayArray(Advanced_Melee)
	displayArray(Exotic_Melee)
	displayArray(Lightsaber_Array)
	displayArray(Pistols)
	displayArray(Rifles)
	displayArray(Exotic_Ranged)
	displayArray(Simple_Ranged)
	displayArray(Grenades)
	}
