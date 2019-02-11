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
		character.equiped_Weapon = FRAG_GRENADE;
		for(i=0; i < character.species.languages.length; i++ ){
		character.languages.push(character.species.languages[i]);
	}
		heavy_storm_Trooper = character;
		return character;
	}
