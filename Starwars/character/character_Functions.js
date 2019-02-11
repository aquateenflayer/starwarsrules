


function train_Feat(character,feat){
character.feats.push(feat);
};

function train_Skill(character,skill){
	skill = skill.toLowerCase();
	for (i = 0 ;i <character.skills.length; i++){
		if (character.skills[i].name == skill ){
			 character.skills[i].trained = true;
		}else(alert(skill + " is not a skill, please check spelling"))
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
//console.log("TOTAL BONUS" +total_Attack_Mod);
//console.log(`Bonus from stats ${STAT_MOD} \n BAB ${bab_Mod} \n proficiency ${proficent_Mod} \n Weapon Focous ${WF_Mod}`)
return total_Attack_Mod
}

function addCharacterTemplate(character,template,level){

}

function calculate_Save(character,save){
	let save_bonus = 0;
	let level = 0;
	for(i=0; i < character.CLASS_ARRAY.length; i++){
		if (character.CLASS_ARRAY[i].LEVEL > 0){
				if(character.CLASS_ARRAY[i] !== CLASS.NPC){	
			level += character.CLASS_ARRAY[i].LEVEL;
															}
			//console.log(character.CLASS_ARRAY[i].NAME + character.CLASS_ARRAY[i].LEVEL + "<br>"+ level)

		if (save_bonus < character.CLASS_ARRAY[i][save]){
			save_bonus = character.CLASS_ARRAY[i][save];
			//console.log(character.CLASS_ARRAY[i].save)
			//console,log("oo")
		}
												}
			//console.log(character.CLASS_ARRAY[i][save]);
														}
	//console.log(level)
	level_Bonus = Math.floor(level/1)
	//console.log(`${save}\nlevel_Bonus ${level_Bonus}\nsave_bonus${save_bonus}`)
	let result = save_bonus +10 + level_Bonus;
	character[save] = result;
	return result;
}
	function calculate_All_Saves(character){
		calculate_Save(character,"fort");
		calculate_Save(character,"ref");
		calculate_Save(character,"will");
	}


function calculate_BAB(character){
	let BAB = 0;
	for(i=0; i < character.CLASS_ARRAY.length; i++){
		if (character.CLASS_ARRAY[i].LEVEL > 0){
			BAB += (character.CLASS_ARRAY[i].BAB * character.CLASS_ARRAY[i].LEVEL) ;
}
}	
	character.Base_Attack_Bonus = Math.floor(BAB);
	return Math.floor(BAB);
}


function calculate_Skill(character,skill){
	//bonus from stat modifier
	var mod ;
		switch(character.skills[skill].STAT_USED){
			case "str" :
			mod = character.strength_Mod
			break;
			case "dex" :
			mod = character.dexterity_Mod
			break;
			case "con" :
			mod = character.constitution_Mod
			break;
			case "int" :
			mod = character.inteligence_Mod
			break;
			case "wis" :
			mod = character.wisdom_Mod
			break;
			case "cha" :
			mod = character.charisma_Mod
			break;
			default:
			console.log("ERROR in the skill display")
													}
				//console.log(character.skills[skill].STAT_USED)
				//console.log("modifier used"+mod)

			//bonus from being trained	
				trained_Bonus = 0;
			if (character.skills[skill].TRAINED){
				trained_Bonus =5
			}							
			//console.log("trained bonus:"+trained_Bonus)

			/////bonus from level
			let level = 0;
			for(i=0; i < character.CLASS_ARRAY.length; i++){
		if (character.CLASS_ARRAY[i].LEVEL > 0){
			level += character.CLASS_ARRAY[i].LEVEL;
															}}
		let	level_Bonus = Math.floor(level/2);										
			//final score
			all_Skill_Bonus = trained_Bonus + mod + character.condition.PENALTY +level_Bonus
			character.skills[skill].TOTAL_BONUS = all_Skill_Bonus;
			//console.log(`TOTAL:${all_Skill_Bonus}\nTRAINED BONUS:${trained_Bonus}\nSTATMOD:${mod}\nLEVELBONUS${level_Bonus}\nCONDITIONMOD${character.condition.PENALTY};     `);		
												}

function calculate_All_Skills(character){
for(skillTimer =0; skillTimer < character.SKILLS_ARRAY.length;skillTimer++){
	rawSkill = character.SKILLS_ARRAY[skillTimer].NAME;
	//console.log(rawSkill);
	uppercaseSkill =rawSkill.toUpperCase();
	skill = uppercaseSkill.replace(/ /g,"_");
	//console.log(skill)
	calculate_Skill(character,skill);
	
												}
										}

function roll(dx) {
		var result = Math.floor(Math.random()*dx+1);
		//console.log(result);
		return result;
					}

function calculate_Max_Hp(character){
	starting_Class = character.starting_Class;
	character.CLASS[character.starting_Class.REFRENCE].LEVEL--;
	let max_Hp = character.starting_Class.STARTINGHP + character.constitution_Mod;
	let theLevel = 1;
	console.log(`Starting Class ${character.starting_Class.NAME} \nStarting HP: ${max_Hp}`)
	for(hpTimer = 0; hpTimer < character.CLASS_ARRAY.length; hpTimer++){
		if(character.CLASS_ARRAY[hpTimer].LEVEL > 0){
		for(lvTimer = 0; lvTimer < character.CLASS_ARRAY[hpTimer].LEVEL; lvTimer++){
			theLevel++;
			hp_Gain_Roll =roll(character.CLASS_ARRAY[hpTimer].HITDICE);
			hp_Gain = hp_Gain_Roll + character.constitution_Mod;
			console.log(`HP gained at lv.${theLevel}\nClass:${character.CLASS_ARRAY[hpTimer].NAME}\n${hp_Gain} Hitpoints Gained`)
			max_Hp += hp_Gain;
		}
	}
}
character.level = theLevel;
character.CLASS[character.starting_Class.REFRENCE].LEVEL++;
character.max_Hp = max_Hp;
character.current_Hp = max_Hp;
}