class character{
	constructor(name,strength,dexterity,constitution,inteligence,wisdom,charisma,species){
		this.level = 0,
		this.name = name,
		this.species = species;
		this.base_Speed = this.species.speed;
		this.current_Speed = this.base_Speed;
		this.starting_Class ={},
		//this.max_Hit_Points = max_Hit_Points,
		//this.current_Hit_Points = max_Hit_Points,
		this.condition = CONDITION.NORMAL,
		this.skills = SKILL,
		this.SKILLS_ARRAY =SKILLS_ARRAY,
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
		this.Base_Attack_Bonus = 0,
		//this.weapons = [],
		this.feats = [],
		this.talents = [],
		this.TALENT,
		this.CLASS = CLASS,
		this.CLASS_ARRAY =[this.CLASS.NPC,this.CLASS.JEDI,this.CLASS.NOBLE,this.CLASS.SCOUT,this.CLASS.SCOUNDREL,this.CLASS.SOLDIER],
		//base stats with no equipment//
		this.fort = 0;
		this.ref = 0;
		this.will =0;
		//where you put  the totals and stuff when you buff the saves///
		this.current_Fort =0;
		this.current_Will= 0;
		this.current_Ref = 0;

		}
	}






