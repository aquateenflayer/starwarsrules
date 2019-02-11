/*class skill{
	constructor(name,stat_Used){
		this.name = name,
		this.trained = false;
		this.equipment_Bonus = 0,
		this.use_Untrained = true,
		this.check_Penalty = false,
		this.stat_Used = stat_Used;
		this.trained_Bonus = 0;

	}
} */
const SKILL = {
		ACROBATICS:{NAME:"acrobatics",
			STAT_USED:"dex",
			TRAINED:false} ,
		CLIMB:{NAME:"climb",
			STAT_USED:"str",
			TRAINED:false},
		DECEPTION:{NAME:"deception",
				STAT_USED:"cha",
			TRAINED:false},
		ENDURANCE:{NAME:"endurance",
				STAT_USED:"con",
			TRAINED:false},
		GATHER_INFORMATION:{NAME:"gather_Information",
				STAT_USED:"cha",
			TRAINED:false},
		INITIATIVE:{NAME:"initiative",
				STAT_USED:"dex" ,
			TRAINED:false},
		JUMP:{NAME:"jump",
				STAT_USED:"str" ,
			TRAINED:false},
		KNOWLEDGE_BUREAUCRACY:{NAME:"knowledge bureaucracy"  ,
				STAT_USED:"int"  ,
			TRAINED:false},
		KNOWLEDGE_GALACTIC_LORE:{NAME:"knowledge galactic lore"  ,
				STAT_USED:"int" ,
			TRAINED:false },
		KNOWLEDGE_LIFE_SCIENCES:{NAME:"knowledge life sciences"  ,
				STAT_USED:"int",
			TRAINED:false  },
		KNOWLEDGE_PHYSICAL_SCIENCES:{NAME:"knowledge physical sciences",
				STAT_USED:"int",
			TRAINED:false },
		KNOWLEDGE_SOCIAL_SCIENCES:{NAME:"knowledge social sciences"  ,
				STAT_USED:"int" ,
			TRAINED:false },
		KNOWLEDGE_TACTICS:{NAME:"knowledge tactics"  ,
				STAT_USED:"int" ,
			TRAINED:false },
		KNOWLEDGE_TECHNOLOGY:{NAME:"knowledge technology"  ,
				STAT_USED:"int" ,
			TRAINED:false },
		MECHANICS:{NAME:"mechanics"  ,
				STAT_USED:"int" ,
			TRAINED:false },
		PERCEPTION:{NAME:"perception"  ,
				STAT_USED:"wis" ,
			TRAINED:false },
		PILOT:{NAME:"pilot" ,
				STAT_USED:"dex" ,
			TRAINED:false },
		RIDE:{NAME:"ride"  ,
				STAT_USED:"dex" ,
			TRAINED:false },
		STEALTH:{NAME:"stealth" ,
				STAT_USED:"dex" ,
			TRAINED:false },
		SURVIVAL:{NAME:"survival"  ,
				STAT_USED:"wis" ,
			TRAINED:false },
		SWIM:{NAME:"swim",
				STAT_USED:"str" ,
			TRAINED:false },
		TREAT_INJURY:{NAME:"treat injury",
				STAT_USED:"wis"	,
			TRAINED:false },
		USE_COMPUTER:{NAME:"use computer",
				STAT_USED:"int" ,
			TRAINED:false },
		USE_THE_FORCE:{NAME:"use the force",
				STAT_USED:"cha" ,
			TRAINED:false }
	}
/*let knowledge_Bureaucracy = new skill(" knowledge bureaucracy","int");
let knowledge_Galactic_Lore = new skill("knowledge galactic lore","int");
let knowledge_Life_Sciences = new skill("knoledge life sciences","int");
let knoledge_Physical_Sciences = new skill("knoledge physical sciences","int");
let knoledge_Social_Sciences = new skill("knowledge social sciences","int");
let knowledge_Tactics = new skill("knowledge tactics","int");
let knowledge_Technology = new skill("knowledge technology","int");
let mechanics = new skill("mechanics","int");
	mechanics.use_Untrained = false;
let perception = new skill("perception","int");
let pilot = new skill("pilot","int");
let ride = new skill("ride","int");
let stealth = new skill("stealth","int");
let survival = new skill ("survival","int");
let swim = new skill ("swim","int");
let treat_Injury = new skill("treat injury","int");
let use_Computer = new skill("use computer","int");
let use_The_Force = new skill("use the force","int");

array with all the skills
*/
var SKILLS_ARRAY =[SKILL.ACROBATICS,SKILL.CLIMB,SKILL.DECEPTION,SKILL.ENDURANCE,SKILL.GATHER_INFORMATION,SKILL.INITIATIVE,SKILL.JUMP,SKILL.KNOWLEDGE_BUREAUCRACY,SKILL.KNOWLEDGE_GALACTIC_LORE,SKILL.KNOWLEDGE_LIFE_SCIENCES,SKILL.KNOWLEDGE_PHYSICAL_SCIENCES,SKILL.KNOWLEDGE_SOCIAL_SCIENCES,SKILL.KNOWLEDGE_TACTICS,SKILL.KNOWLEDGE_TECHNOLOGY,SKILL.MECHANICS,SKILL.PERCEPTION,SKILL.PILOT,SKILL.RIDE,SKILL.STEALTH,SKILL.SURVIVAL,SKILL.SWIM,SKILL.TREAT_INJURY,SKILL.USE_COMPUTER,SKILL.USE_THE_FORCE];
