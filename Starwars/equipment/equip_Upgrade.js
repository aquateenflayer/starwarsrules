
function equip_Upgrade(equipment,upgrade){
equipment.upgrades.push(upgrade);
calculate_Free_Upgrade_Slots(equipment.upgrades_Max,equipment.upgrades)
function calculate_Free_Upgrade_Slots(upgrades_Max,upgrades){
			var unused = upgrades_Max; 
		
		for (let i=0; i< upgrades.length; i++){
			unused -= upgrades[i].upgrade_Cost;}
			console.log(unused)
			return unused
			}

											}