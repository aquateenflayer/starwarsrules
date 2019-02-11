class character{
	constructor(name,strength,dexterity,constitution,inteligence,wisdom,charisma,species){
		this.name = name,
		this.level = 1,
		this.speed = 6,
		//this.max_Hit_Points = max_Hit_Points,
		//this.current_Hit_Points = max_Hit_Points,
		this.condition = CONDITION.NORMAL,
		this.skills = skills,
		this.equiped = [],
		this.carried = [],
		this.languages = [], 
		//this.armor = ARMOR_GROUP.UNARMORED,
		//this.equip_Armor = equip_Armor,
		//this.equip_Weapon = equip_Weapon,
		this.strength = strength,
		this.strength_Mod = Math.floor((this.strength -10)/2),
		this.dexterity = dexterity,
		this.dexterity_Mod = Math.floor((this.dexterity -10)/2),
		this.constitution =constitution,
		this.constitution_Mod = Math.floor((this.constitution -10)/2),
		this.inteligence = inteligence,
		this.inteligence_Mod = Math.floor((this.inteligence -10)/2),
		this.wisdom = wisdom,
		this.wisdom_Mod = Math.floor((this.wisdom -10)/2),
		this.charisma = charisma,
		this.charisma_Mod = Math.floor((this.charisma -10)/2),
		this.Base_Attack_Bonus = Math.floor(CLASS.BAB * this.level),
		//this.weapons = [],
		this.feats = [],
		this.talents = [],
		this.CLASS = CLASS,
		this.fort = calculateFort(this);
		this.ref = 10 + CLASS.REF + Math.floor(this.level/1),
		this.will = 10 + CLASS.WILL + Math.floor(this.level/1),
		this.species = species;
		this.equip_Armor =function(armor_to_Equip){
			this.armor = armor_to_Equip;
			if (this.ARMOR_TALENT == undefined){
			if (armor_to_Equip.reflex_Defense>0){
				if (this.dexterity_Mod < armor_to_Equip.max_Dex){
				this.ref = 10 + armor_to_Equip.reflex_Defense + this.dexterity_Mod + this.CLASS.REF;
			}else{
				this.ref = 10 + armor_to_Equip.reflex_Defense + armor_to_Equip.max_Dex + this.CLASS.REF;
			}
			}
			}else{
				if (armor_to_Equip.reflex_Defense>0){
				if (this.dexterity_Mod < armor_to_Equip.max_Dex){
				this.ref = 10 + armor_to_Equip.reflex_Defense + this.dexterity_Mod + this.CLASS.REF+ Math.floor(this.level /2);
			}else{
				this.ref = 10 + armor_to_Equip.reflex_Defense + armor_to_Equip.max_Dex + this.CLASS.REF + Math.floor(this.level /2);
			}
			}
			}
			if(armor_to_Equip.fortitude_Defense > 0){
				this.fort = 10 + armor_to_Equip.fortitude_Defense + this.constitution_Mod +this.CLASS.FORT;
			}		
			return
		}; 
	}

}





function calculateFort(thisCharacter){
		return 10 + thisCharacter.CLASS.FORT + Math.floor(thisCharacter.level/1) + thisCharacter.constitution_Mod
								}