


function train_Feat(character,feat){
character.feats.push(feat);
};

function train_Skill(character,skill){
	skill = skill.toLowerCase();
	for (i = 0 ;i <character.skills.length; i++){
		if (character.skills[i].name == skill ){
			 character.skills[i].trained = true;
		}
	}
}
function equip_item(character,item){
		this.equiped.push(item);
		
};
function carry_item(character,item){
		this.carried.push(item);
	};

function calculateAttackMod(character,weapon){
	
	//attack bonus from characters stats
	STAT_MOD = 0;
	weaponsStat =weapon.weapon_group.ATTACK_TYPE.STAT_MOD;
	switch(weaponsStat){
		case "dex":
		STAT_MOD = character.dexterity_Mod;
		//console.log("dex based attack")
		break;
		case "str":
		STAT_MOD =character.strength_Mod;
		break;
		default:console.log("error");
						}

//console.log(STAT_MOD);

//attack bonus from bab	
	var bab_Mod = character.Base_Attack_Bonus;
	//console.log(bab_Mod);

// check to see if proficent
var proficent_Mod = -5;
for(current_Feat = 0; current_Feat < character.feats.length; current_Feat++){
		//console.log(character.feats[current_Feat])
	if(character.feats[current_Feat].proficiency == true){
		if(character.feats[current_Feat].effects == weapon.weapon_group.PROFICIENCY){
			proficent_Mod = 0;
																			}					
														}
																			}
//console.log(proficent_Mod)
//////////put size modifier for species her now its just a place holder for medium creatures
size_mod = 0;

//weapon focous mod
var WF_Mod = 0;
for(current_Feat = 0; current_Feat < character.feats.length; current_Feat++){
		//console.log(character.feats[current_Feat])
	if(character.feats[current_Feat].weapon_Focus == true){
		if(character.feats[current_Feat].effects == weapon.weapon_group.PROFICIENCY){
			WF_Mod = 1;
																			}					
														}
																			}
//console.log(WF_Mod)

//condition mod
condition_mod = character.condition.PENALTY;
//console.log(condition_mod)
////adding it all up
total_Attack_Mod = STAT_MOD+bab_Mod+proficent_Mod+size_mod+WF_Mod+condition_mod;
console.log("TOTAL BONUS" +total_Attack_Mod);
console.log(`Bonus from stats ${STAT_MOD} \n BAB ${bab_Mod} \n proficiency ${proficent_Mod} \n Weapon Focous ${WF_Mod}`)
return total_Attack_Mod
}

function addCharacterTemplate(character,template,level){

}