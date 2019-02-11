//constructor(name,CLASS,max_Hit_Points,strength,dexterity,constitution,inteligence,wisdom,charisma,species)


//stormtroopers//
var storm_Trooper = new character('Storm Trooper',12,11,11,10,10,10,human);
	function createVanillaStormTrooper(character){
		character.feats = [];
		train_Feat(character,ARMOR_PROF_LIGHT);
		train_Feat(character,COORDINATED_ATTACK);
		train_Feat(character,WEAPON_FOCUS_RIFLES);
		train_Feat(character,WEAPON_PROF_PISTOLS);
		train_Feat(character,WEAPON_PROF_RIFLES);
		train_Feat(character,WEAPON_PROF_SIMPLE);
		train_Skill(character,"endurance");
		train_Skill(character,"perception");
		character.equip_Armor(STORMTROOPER_ARMOR);
		character.equiped_Weapon = BLASTER_RIFLE;
		character.languages.push(character.species.languages);
		storm_Trooper = character;
		
		return character;
}
var heavy_storm_Trooper= new character('Heavy Storm Trooper',15,11,10,12,9,8,human);
	function createHeavyStormTrooper(character){
		//character.CLASS.SOLDIER.LEVEL = 3;
		character.CLASS.NPC.LEVEL = 14;
		character.feats= [];
		train_Feat(character,ARMOR_PROF_LIGHT);
		train_Feat(character,BURST_FIRE);
		train_Feat(character,POINT_BLANK_SHOT);
		train_Feat(character,WEAPON_FOCUS_RIFLES);
		train_Feat(character,WEAPON_PROF_SIMPLE);
		train_Feat(character,WEAPON_PROF_HEAVY);
		train_Feat(character,WEAPON_PROF_RIFLES);
		train_Skill(character,"endurance");
		train_Skill(character,"mechanics");
		train_Skill(character,"perception");
		//train_Skill(character,"gather information");
		character.equip_Armor(STORMTROOPER_ARMOR);
		calculate_All_Saves(character);
		character.current_Will = character.will;
		character.equiped_Weapon = FRAG_GRENADE;
		for(i=0; i < character.species.languages.length; i++ ){
		character.languages.push(character.species.languages[i]);
		heavy_storm_Trooper = character;
		return character;
	}
}

var test_Character = new character('Test Character',10,10,10,10,10,10,human);
	
function create_text_Character(character){
			character.starting_Class = CLASS.SOLDIER;
			character.CLASS.NPC.LEVEL = 1;
			character.CLASS.JEDI.LEVEL =1;
			character.CLASS.NOBLE.LEVEL =5;
			character.CLASS.SOLDIER.LEVEL = 1;
			//character.equip_Armor(STORMTROOPER_ARMOR);
			calculate_All_Saves(character);
			character.current_Will = character.will;
			if(character.current_Fort == 0){
				character.current_Fort = character.fort;
			}
			if(character.current_Ref == 0){
				character.current_Ref = character.ref;
			}
			calculate_Max_Hp(character);
			calculate_BAB(character);
			character.equiped_Weapon = BLASTER_RIFLE;
			train_Feat(character,WEAPON_PROF_RIFLES);
			train_Feat(character,WEAPON_FOCUS_RIFLES);
			character.skills.ACROBATICS.TRAINED = true;
			calculate_All_Skills(character);
			//character.equip_Armor(HEAVY_BATTLE_ARMOR);
			
			return character
	}