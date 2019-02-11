class skill{
	constructor(name,stat_Used){
		this.name = name,
		this.trained = false;
		this.equipment_Bonus = 0,
		this.use_Untrained = true,
		this.check_Penalty = false,
		this.stat_Used = stat_Used;
		this.trained_Bonus = 0;

	}
}

let acrobatics = new skill("acrobatics","dex"); 
let climb = new skill("climb","str");
let deception = new skill("deception","cha");
let endurance = new skill("endurance","con");
let gather_Information = new skill("gather information","cha");
let initiative = new skill("initiative","dex");
let jump = new skill("jump","str");
let knowledge_Bureaucracy = new skill(" knowledge bureaucracy","int");
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

///array with all the skills
var skills =[acrobatics,climb,deception,endurance,gather_Information,initiative,jump,knowledge_Bureaucracy,knowledge_Galactic_Lore,knowledge_Life_Sciences,knoledge_Physical_Sciences,knoledge_Social_Sciences,knowledge_Tactics,knowledge_Technology,mechanics,perception,pilot,ride,stealth,survival,swim,treat_Injury,use_Computer,use_The_Force];
