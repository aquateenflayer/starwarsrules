class skill{
	constructor(name){
		this.name = name,
		this.trained = false;
		this.equipment_Bonus = 0,
		this.use_Untrained = true,
		this.check_Penalty = false
		//this.stat_Used = 

	}
}

let acrobatics = new skill("acrobatics"); 
let climb = new skill("climb");
let deception = new skill("deception");
let endurance = new skill("endurance");
let gather_Information = new skill("gather information");
let initiative = new skill("initiative");
let jump = new skill("jump");
let knowledge_Bureaucracy = new skill(" knowledge bureaucracy");
let knowledge_Galactic_Lore = new skill("knowledge galactic lore");
let knowledge_Life_Sciences = new skill("knoledge life sciences");
let knoledge_Physical_Sciences = new skill("knoledge physical sciences");
let knoledge_Social_Sciences = new skill("knowledge social sciences");
let knowledge_Tactics = new skill("knowledge tactics");
let knowledge_Technology = new skill("knowledge technology");
let mechanics = new skill("mechanics");
let perception = new skill("perception");
let pilot = new skill("pilot");
let ride = new skill("ride");
let stealth = new skill("stealth");
let survival = new skill ("survival");
let swim = new skill ("swim");
let treat_Injury = new skill("treat injury");
let use_Computer = new skill("use computer");
let use_The_Force = new skill("use the force");

///array with all the skills
var skills =[acrobatics,climb,deception,endurance,gather_Information,initiative,jump,knowledge_Bureaucracy,knowledge_Galactic_Lore,knowledge_Life_Sciences,knoledge_Physical_Sciences,knoledge_Social_Sciences,knowledge_Tactics,knowledge_Technology,mechanics,perception,pilot,ride,stealth,survival,swim,treat_Injury,use_Computer,use_The_Force];
