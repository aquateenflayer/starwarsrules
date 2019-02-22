//constructor(name,strength,dexterity,constitution,inteligence,wisdom,charisma,species)


//stormtroopers//

var test_Character = new character('Test Character',10,10,10,10,10,10,human);

function create_text_Character(character){
			
			character.starting_Class = CLASS.SOLDIER;
			character.CLASS.SOLDIER.LEVEL = 11;
			character.CLASS.NPC.LEVEL = 1;
			calculate_Level(character);
			character.feats= [];
			train_Feat(character,WEAPON_PROF_RIFLES);
			train_Feat(character,WEAPON_FOCUS_RIFLES);
			character.talents = [];
			character.talents.push(improved_Armored_Defense);
			//skills trained//
			character.skills.ACROBATICS.TRAINED = true;
			character.armor = STORMTROOPER_ARMOR;
			character_Calclulations(character);
			character.equiped_Weapon = BLASTER_RIFLE;
			character.carried = [];
			character.carried.push(BLASTER_RIFLE,STORMTROOPER_ARMOR,BLASTER_PISTOL)
			character.destiny =1
			character.force =2
			character.dark_Side =3
			return character
	}

/*when making a new character first is

	//starting class
	//class levels
	character.starting_Class =
	calculate_Level(character);
	//feats
	character.feats= [];
	//talents
	character.talents = [];
	//skills trained
	character.armor =
	character_Calclulations(character);
	//weapons & other equipment
	character.carried = [];
return character
	*/
/*
let character_Array=[];
function create_Base_Character_Array(this_character,new_name){
	//let new_name = character + character_Array.length
	var new_name = new character(new_name,this_character.strength,this_character.dexterity,this_character.constitution,this_character.inteligence,this_character.wisdom,this_character.charisma,this_character.species);
		create_text_Character(new_name);
		character_Array.push(new_name)

}
create_Base_Character_Array(test_Character, "Robert");
create_Base_Character_Array(test_Character, "Tommy");
create_Base_Character_Array(test_Character, "Loyd");
*/

var assasian = new character("Assasian",10,16,8,14,12,13,human);
function create_Assassin(character){

//starting class
	//class levels
	character.starting_Class = CLASS.SCOUNDREL;
	character.CLASS.SCOUNDREL.LEVEL = 5;
	calculate_Level(character);
	//feats
	character.feats= [];
	train_Feat(character,CAREFUL_SHOT);
	train_Feat(character,POINT_BLANK_SHOT);
	train_Feat(character,RAPID_STRIKE);
	train_Feat(character,WEAPON_FINESSE);
	train_Feat(character,WEAPON_PROF_ADVANCED_MELEE);
	train_Feat(character,WEAPON_PROF_PISTOLS);
	train_Feat(character,WEAPON_PROF_SIMPLE);
	
	//talents
	character.talents = [];
	character.talents.push(sneak_Attack,sneak_Attack,dastardly_Strike);
	//skills trained
	character.armor = UNARMORED;
	character_Calclulations(character);
	//weapons & other equipment
	character.carried = [BLASTER_RIFLE,BLASTER_PISTOL,VIBROBLADE];
	return character

			}

var scout_Trooper = new character("Scout Trooper",10,13,12,10,11,8,human);		


function create_Scout_Trooper(character){
		//starting class
	//class levels
	character.starting_Class = CLASS.NPC;
	character.CLASS.NPC.LEVEL = 6;
	calculate_Level(character);
	//feats
	character.feats= [ARMOR_PROF_LIGHT,POINT_BLANK_SHOT,VEHICULAR_COMBAT,WEAPON_PROF_SIMPLE,WEAPON_PROF_PISTOLS,WEAPON_PROF_RIFLES];
	//talents
	character.talents = [];
	//skills trained
	character.skills.PERCEPTION.TRAINED = true;
	character.skills.PILOT.TRAINED = true;
	character.skills.STEALTH.TRAINED = true;
	character.armor = SCOUT_TROOPER_ARMOR;
	character_Calclulations(character);
	//weapons & other equipment
	character.carried = [BLASTER_PISTOL,BLASTER_RIFLE,SCOUT_TROOPER_ARMOR,FRAG_GRENADE];
return character
								}

//when making a new character first is
function THUG(){
	let thug = new character('Thug',13,14,11,8,7,11,human);
	character = thug;
	//starting class
	//class levels
	character.starting_Class = CLASS.NPC;
	character.CLASS.NPC.LEVEL = 6;
	calculate_Level(character);
	//feats
	character.feats= [ARMOR_PROF_LIGHT,POINT_BLANK_SHOT,VEHICULAR_COMBAT,WEAPON_PROF_SIMPLE,WEAPON_PROF_PISTOLS,WEAPON_PROF_RIFLES];
	//talents
	character.talents = [];
	//skills trained
	character.skills.PERCEPTION.TRAINED = true;
	character.skills.PILOT.TRAINED = true;
	character.skills.STEALTH.TRAINED = true;
	character.armor = UNARMORED;
	character_Calclulations(character);
	//weapons & other equipment
	character.carried = [BLASTER_PISTOL,VIBROBLADE];
	display_NPC(character);
return character
}