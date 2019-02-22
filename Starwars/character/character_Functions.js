


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

function carry_item(character,item){
		this.carried.push(item);
		
	};

function check_for_Finesse(character){
	let weapon_finesse = false;
	for(i = 0; i< character.feats.length; i++){
	if(undefined !== character.feats[i].finesse){
			character.weapon_finesse = true;
			//console.log("Weapon Finesse = true");
			//console.log(character.feats[i].name);
												}
												}
										}

function calculateAttackMod(character,weapon){											
	//attack bonus from characters stats
	STAT_MOD = 0;
	weaponsStat =weapon.weapon_group.ATTACK_TYPE.STAT_MOD;
	switch(weaponsStat){
		case "dex" :
		STAT_MOD = character.dexterity_Mod;
		//console.log("dex based attack")
		break;
		case "str":
		if(character.weapon_finesse){
		STAT_MOD = character.dexterity_Mod;
		}else{
		STAT_MOD =character.strength_Mod;
			}
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
//size_mod = 0; dont have proof size mods effect attacks

//weapon focous mod
var WF_Mod = 0;
for(current_Feat = 0; current_Feat < character.feats.length; current_Feat++){
		//console.log(character.feats[current_Feat])
	if(character.feats[current_Feat].weapon_Focus == true){
		if(character.feats[current_Feat].effects == weapon.weapon_group.PROFICIENCY){
			WF_Mod = 1;
			/*
			let items = character.feats.find((item) => item.effects === weapon.weapon_group.PROFICIENCY);
if (items) { WF_Mod = 1; }

			*/																}					
														}
																			}
//console.log(WF_Mod)

//condition mod
condition_mod = character.condition.PENALTY;
//console.log(condition_mod)
////adding it all up
total_Attack_Mod = STAT_MOD+bab_Mod+proficent_Mod+WF_Mod+condition_mod;
//console.log("TOTAL BONUS" +total_Attack_Mod);
//console.log(`Bonus from stats ${STAT_MOD} \n BAB ${bab_Mod} \n proficiency ${proficent_Mod} \n Weapon Focous ${WF_Mod}`)
return total_Attack_Mod
}

function calculate_Damage_Dice(character,weapon){
	let number = weapon.damage_Dice_Number;
	let dice =weapon.damage_Dice_Size;
	let stat_Mod = 0;
	if (weapon.weapon_group.ATTACK_TYPE.NAME == "Melee"){
		stat_Mod = character.strength_Mod;
		//console.log(stat_Mod)
		//console.log("Melee Weapon")
		//console.log(character.strength_Mod)
														}

	let bonus = stat_Mod +weapon.damage_Bonus + Math.floor(character.pc_Class_Level/2);
		
		if(bonus == 0){
			bonus = "";
		}else if(bonus > 0){
			bonus = "+" + bonus;
		}else if(bonus < 0){
		 //console.log("Bonus is negetive")
		}

		damage_type ="";
		for(damage_loop=0;damage_loop < weapon.damage_type.length;damage_loop++){
			damage_type += damage_type + weapon.damage_type[damage_loop].NAME + " ";
			//console.log (weapon.damage_type[damage_loop].NAME)
		}

	let total = `( ${number}d${dice}${bonus} ${damage_type} Damage)`

	return total
}

function addCharacterTemplate(character,template,level){

}

function calculate_Class_Save(character,save){
	let save_bonus = 0;
	for(i=0; i < character.CLASS_ARRAY.length; i++){
		if (character.CLASS_ARRAY[i].LEVEL > 0){
	
			//console.log(character.CLASS_ARRAY[i].NAME + character.CLASS_ARRAY[i].LEVEL + "<br>"+ level)

		if (save_bonus < character.CLASS_ARRAY[i][save]){
			save_bonus = character.CLASS_ARRAY[i][save];
			//console.log(character.CLASS_ARRAY[i].save)
			//console,log("oo")
		}
												}
			//console.log(character.CLASS_ARRAY[i][save]);
														}

	//console.log(`${save}\nlevel_Bonus ${level_Bonus}\nsave_bonus${save_bonus}`)
	let result = save_bonus + 10 ;
	character[save] = result;
	return result;
}

function calculate_Fort(character){
	return character.constitution_Mod +calculate_Class_Save(character,"fort");
								}
function calculate_Ref(character){
	return  calculate_Class_Save(character,"ref");
								}
function calculate_Will(character){
	return character.wisdom_Mod + calculate_Class_Save(character,"will");

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
	//console.log(skill)
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
//check for skill bonuses from items
			/*let equipment_Bonus = false;
			
			for(item_Array_Tracker =0; item_Array_Tracker < character.carried.length;item_Array_Tracker++){
				if (undefined !== character.carried[item_Array_Tracker].skill){
				if (skill == character.carried[item_Array_Tracker].skills.NAME)
					console.log(character.carried[item_Array_Tracker].name + skill)
					equipment_Bonus = character.carried[item_Array_Tracker].skills.BONUS
					}
			}

					*/
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
			all_Skill_Bonus = /*equipment_Bonus +*/ trained_Bonus + mod + character.condition.PENALTY +level_Bonus
			character.skills[skill].TOTAL_BONUS = all_Skill_Bonus;

			//console.log(`${skill} TOTAL:${all_Skill_Bonus}\nTRAINED BONUS:${trained_Bonus}\nSTATMOD:${mod}\nLEVELBONUS${level_Bonus}\nCONDITIONMOD${character.condition.PENALTY}\n Equipment ${equipment_Bonus}    `);		
				//equipment_Bonus = 0;
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
	//console.log(`Starting Class ${character.starting_Class.NAME} \nStarting HP: ${max_Hp}`)
	for(hpTimer = 0; hpTimer < character.CLASS_ARRAY.length; hpTimer++){
		if(character.CLASS_ARRAY[hpTimer].LEVEL > 0){
		for(lvTimer = 0; lvTimer < character.CLASS_ARRAY[hpTimer].LEVEL; lvTimer++){
			theLevel++;
			hp_Gain_Roll =roll(character.CLASS_ARRAY[hpTimer].HITDICE);
			hp_Gain = hp_Gain_Roll + character.constitution_Mod;
			//console.log(`HP gained at lv.${theLevel}\nClass:${character.CLASS_ARRAY[hpTimer].NAME}\n${hp_Gain} Hitpoints Gained`)
			max_Hp += hp_Gain;
																					}
													}
																		}		
				//character.level = theLevel;
				character.CLASS[character.starting_Class.REFRENCE].LEVEL++;
				character.max_Hp = max_Hp;
				character.current_Hp = max_Hp;
								}

function equip_Armor(character,armor){
	character.armor = armor;
	//console.log("equip armor function" + character.armor.name);
	result = defense_From_Armor(character);
	if(character.base_Speed == 6){
		character.current_Speed =armor.speed_reduction_Six;
	}else{
		character.current_Speed =armor.speed_reduction_Four;
	}
	console.log(result)
}

function defense_From_Armor(character){
	let result ;
	let improved_Armored_Defense = false;
	let armored_Defense = false;
	let level = character.pc_Class_Level
	armor = character.armor;
	//check for talents
	for(i = 0; i < character.talents.length; i++){
		if(character.talents[i].NAME == "Improved Armored Defense"){
			improved_Armored_Defense = true;}
		if(character.talents[i].NAME == "Armored Defense"){
			armored_Defense = true;
			//console.log("Armored defense talent found!")
		}
	}

	if(character.armor == UNARMORED){
		//console.log("Unarmored")
		result = level;
	}else if(improved_Armored_Defense){
		//console.log("Improved Armored Defense")
		let improved_Armored_Defense_Mod = level + Math.floor(character.armor.reflex_Defense/2);
		
		if(character.armor.reflex_Defense > improved_Armored_Defense_Mod){
			result = character.armor.reflex_Defense;
			//console.log("Improved armor defesne just armor ");
			}else{
				result = improved_Armored_Defense_Mod;
				//console.log(`Improved Armored Defense armor + 1/2 level`);
			};

	}else if(armored_Defense){
		//console.log("Armoerd defense")
		if(level > character.armor.reflex_Defense){
			result = character.level;
			//console.log("Armored defense used character level");
			}else{
			 result = character.armor.reflex_Defense;
			//console.log("amrored defense used armor bonus ");
			};

	}else{
		//console.log("Armored and no talents")
		result = character.armor.reflex_Defense;
		//console.log("No talnets just use armor bonus")
	}
	//conclusion
	return result
}

function calculate_Languages_From_Species(character){
	for(language_switcher = 0; language_switcher < character.species.languages.length;language_switcher++  )
	character.languages.push(character.species.languages[language_switcher])
}


function calculate_Level(character){
let pc_Class_Level =0;
let npc_Class_Level = 0;
	for(i=0; i < character.CLASS_ARRAY.length; i++){
		if (character.CLASS_ARRAY[i].LEVEL > 0){
				if(character.CLASS_ARRAY[i] !== CLASS.NPC){	
			pc_Class_Level += character.CLASS_ARRAY[i].LEVEL;
															}else{
			npc_Class_Level += character.CLASS_ARRAY[i].LEVEL;													
															}
												}
													}
			character.level = pc_Class_Level + npc_Class_Level
			character.pc_Class_Level = pc_Class_Level;
			character.npc_Class_Level = npc_Class_Level;
			//console.log(`PC Class LV ${pc_Class_Level}\n NPC Class level ${npc_Class_Level}\n Charater LV ${character.level}`);			
									}
function calculate_Grapple(character){
	let stat_Mod =0;
	if(character.dexterity_Mod > character.strength_Mod){
		stat_Mod = character.dexterity_Mod;
	}else{
		stat_Mod = character.strength_Mod;
	}
	character.grapple = stat_Mod + character.species.size.GRAPLE_MOD +character.Base_Attack_Bonus;
	console.log(character.grapple )
}


//////////will be expanded in the future////////////
//////////////functions to calculate defenses//////////
function calculate_Current_ref(character){
	condition = character.condition.PENALTY;
	dex = character.dexterity_Mod;
	size = character.species.size.ATTACK_MOD;
	if (character.dexterity_Mod > character.armor.max_Dex) {
		dex = character.armor.max_Dex;
	}
	character.current_Ref = size + dex + condition + calculate_Ref(character) +defense_From_Armor(character)
	if (dex >= 0){
		character.flat_Footed = character.current_Ref - dex;
		console.log("charater dex is subtracted from flat footed ref")
	}else{
		character.flat_Footed = character.current_Ref;
		console.log("Characters dex so low penalties are still applied for flat footed ref")
	}	
}

function calculate_Current_Fort(character){
	condition = character.condition.PENALTY;
	character.current_Fort = condition+calculate_Fort(character) + character.pc_Class_Level+ character.armor.fortitude_Defense
	character.threshold = character.current_Fort;
}

function calculate_Current_Will(character){
	condition = character.condition.PENALTY;

	character.current_Will = condition+calculate_Will(character) + character.pc_Class_Level+character.wisdom_Mod;
}

////////////////////////////////////////////////////////////////////


//all calculations//
function character_Calclulations(character){
			calculate_Current_ref(character);
			calculate_Current_Fort(character);
			calculate_Current_Will(character);
			//keeps you rerollingsame characters hp if recalculating stats
			if(undefined == character.max_Hp){
			calculate_Max_Hp(character);
											}

			calculate_BAB(character);
			calculate_All_Skills(character);
			check_for_Finesse(character);
			calculate_Languages_From_Species(character)
			calculate_Grapple(character)

}

function display_Abilities(character){
	//create abilities div
	let abilities_Div = document.createElement("DIV");
	//create table
	let abilities_Table = document.createElement("TABLE");
	let abilities_Table_Head_Row = document.createElement("TR");
	let abilities_Abilities_Table_Head = document.createElement("TH");
	let score_Table_Head  = document.createElement("TH");
	let modifier_Table_Head = document.createElement("TH");

	//head row data
	let abilities_Span = document.createElement("SPAN");
	let theWordAbilities = document.createTextNode("Abilities");
	let score_Span  = document.createElement("SPAN");
	let theWordScore = document.createTextNode("Score");
	let mod_Span  = document.createElement("SPAN");
	let theWordMod = document.createTextNode("Mod");

	abilities_Span.appendChild(theWordAbilities);
	abilities_Abilities_Table_Head.appendChild(abilities_Span)
	abilities_Table_Head_Row.appendChild(abilities_Abilities_Table_Head);
	score_Span.appendChild(theWordScore);
	score_Table_Head.appendChild(score_Span);
	abilities_Table_Head_Row.appendChild(score_Table_Head);
	mod_Span.appendChild(theWordMod);
	modifier_Table_Head.appendChild(mod_Span);
	abilities_Table_Head_Row.appendChild(modifier_Table_Head);
	abilities_Table.appendChild(abilities_Table_Head_Row);

	//con row
	create_Ability_Row("strength","strength_Mod");
	create_Ability_Row("dexterity","dexterity_Mod");
	create_Ability_Row("constitution","constitution_Mod");
	create_Ability_Row("inteligence","inteligence_Mod");
	create_Ability_Row("wisdom","wisdom_Mod");
	create_Ability_Row("charisma","charisma_Mod");


	abilities_Div.appendChild(abilities_Table)
	document.body.appendChild(abilities_Div);
	document.getElementById("abilities").appendChild(abilities_Div);
function create_Ability_Row(stat,stat_Mod){


	//create ability table row///
	let stat_Table_Row = document.createElement("TR");
	let stat_Name_Table_Data = document.createElement("TD");
	let stat_Score_Table_Data = document.createElement("TD");
	let stat_Mod_Table_Data = document.createElement("TD");


	//ability name////
	//let	strNameDiv = document.createElement("div");
	let statNAMECONTAINER = document.createElement("SPAN");
	let STAT = stat.toUpperCase()
	let theWordstat = document.createTextNode(STAT);

	//ability score //
	//let	strScoreDiv = document.createElement("div");
	let statSCORECONTAINER = document.createElement("SPAN");
	let statScore = document.createTextNode(character[stat]);

	//ability mod//
	//let strModDiv = document.createElement("div");
	let statMODCONTAINER = document.createElement("SPAN");
	let statMod = document.createTextNode(character[stat_Mod]);

	//attach row
	statNAMECONTAINER.appendChild(theWordstat);
	stat_Name_Table_Data.appendChild(statNAMECONTAINER);
	stat_Table_Row.appendChild(stat_Name_Table_Data);
	statSCORECONTAINER.appendChild(statScore);
	stat_Score_Table_Data.appendChild(statSCORECONTAINER);
	stat_Table_Row.appendChild(stat_Score_Table_Data);
	abilities_Table.appendChild(stat_Table_Row);
	statMODCONTAINER.appendChild(statMod);
	stat_Mod_Table_Data.appendChild(statMODCONTAINER);
	stat_Table_Row.appendChild(stat_Mod_Table_Data);

						}
					}

function display_Skills(character){
	let skills_Div = document.createElement("DIV");
	let skill_Table = document.createElement("TABLE");
	let skill_Table_Header_Row = document.createElement("TR");

	//skills header//
	let skill_Name_Header = document.createElement("TH");
	let skill_Name_Header_Span = document.createElement("SPAN");
	let the_Word_Skill = document.createTextNode("Skills");
	//skill bonus header//
	let skill_Bous_Header = document.createElement("TH");
	let skill_Bonus_Header_Span = document.createElement("SPAN");
	let the_Word_Bonus = document.createTextNode("Total Bonus");
	//equal sign header//
	let skill_Equals_Header = document.createElement("TH");
	let skill_Equals_Header_Span = document.createElement("SPAN");
	let the_Word_Equals = document.createTextNode("=");

	//skill 1/2 level header//
	let skill_Half_Level_Header = document.createElement("TH");
	let skill_Half_Level_Header_Span = document.createElement("SPAN");
	let the_Word_Half_Level = document.createTextNode("1/2 Level");
	//ability mod header//
	let skill_Ability_Header = document.createElement("TH");
	let skill_Ability_Header_Span = document.createElement("SPAN");
	let the_Word_Ability = document.createTextNode("Ability Mod");
	//trained header//
	let skill_Trained_Header = document.createElement("TH");
	let skill_Trained_Header_Span = document.createElement("SPAN");
	let the_Word_Trained = document.createTextNode("Trained");
	//skill focous header//
	let skill_Skill_Focus_Header = document.createElement("TH");
	let skill_Skill_Focus_Header_Span = document.createElement("SPAN");
	let the_Word_Skill_Focus = document.createTextNode("Skill Focus");
	//skill other bonus header//
	let skill_Other_Header = document.createElement("TH");
	let skill_Other_Focus_Header_Span = document.createElement("SPAN");
	let the_Word_Other = document.createTextNode("Other");

	//name
	skill_Name_Header_Span.appendChild(the_Word_Skill)
	skill_Name_Header.appendChild(skill_Name_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Name_Header);
	//skill bonus
	skill_Bonus_Header_Span.appendChild(the_Word_Bonus)
	skill_Bous_Header.appendChild(skill_Bonus_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Bous_Header);
	//equals
	skill_Equals_Header_Span.appendChild(the_Word_Equals)
	skill_Equals_Header.appendChild(skill_Equals_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Equals_Header);

	//1/2 level//
	skill_Half_Level_Header_Span.appendChild(the_Word_Half_Level);
	skill_Half_Level_Header.appendChild(skill_Half_Level_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Half_Level_Header);
	//attach ability mod header//
	skill_Ability_Header_Span.appendChild(the_Word_Ability);
	skill_Ability_Header.appendChild(skill_Ability_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Ability_Header);
	//trained header//
	skill_Trained_Header_Span.appendChild(the_Word_Trained);
	skill_Trained_Header.appendChild(skill_Trained_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Trained_Header);
	//attach skill focus row//
	skill_Skill_Focus_Header_Span.appendChild(the_Word_Skill_Focus);
	skill_Skill_Focus_Header.appendChild(skill_Skill_Focus_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Skill_Focus_Header);
	//attach other//
	skill_Other_Focus_Header_Span.appendChild(the_Word_Other);
	skill_Other_Header.appendChild(skill_Other_Focus_Header_Span);
	skill_Table_Header_Row.appendChild(skill_Other_Header);
	skill_Table.appendChild(skill_Table_Header_Row);

	display_Skill(character,character.skills.ACROBATICS)

	skills_Div.appendChild(skill_Table);
	document.body.appendChild(skills_Div);



	function display_Skill(character,skill){
		//console.log(skill);
		skill_Row = document.createElement("TR");
		skill_Name_Container = document.createElement("TD");
		skill_Name_Span = document.createElement("SPAN");
		let SKILL = skill.NAME.toUpperCase()
		theWord_Skill = document.createTextNode(SKILL);
		skill_Bonus_Container  = document.createElement("TD");
		skill_Bonus_Span = document.createElement("SPAN");
		the_Bonus = document.createTextNode(skill.TOTAL_BONUS);

		
		//name//
		skill_Name_Span.appendChild(theWord_Skill);
		skill_Name_Container.appendChild(skill_Name_Span);
		skill_Row.appendChild(skill_Name_Container);
		
		//total bonus
		skill_Bonus_Span.appendChild(the_Bonus);
		skill_Bonus_Container.appendChild(skill_Bonus_Span);
		skill_Row.appendChild(skill_Bonus_Container);

		skill_Table.appendChild(skill_Row);
	}
}


