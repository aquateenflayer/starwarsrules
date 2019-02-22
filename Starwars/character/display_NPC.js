function display_NPC(character){
	function create(dataType){
		return document.createElement(dataType)
	}
	function create_Word(word){
		return document.createTextNode(word)
	}
	function attach(child,parent){
		parent.appendChild(child)
	}
	function bold(span){
		span.style.fontWeight = "bold";
	}

	NPC_Display = create("DIV");


	//name of npc
	name_Header = create("H1");
	name_Data = create_Word(character.name);
	attach(name_Data,name_Header);
	attach(name_Header,NPC_Display);
	//chalange Rating//
	//NPCs Size//
	size_Span = create("SPAN");
	size_Word = create_Word(`${character.species.size.NAME} `);
	attach(size_Word,size_Span);
	attach(size_Span,NPC_Display);
	//species//
	species_Span = create("SPAN");
	species_Word = create_Word(`${character.species.name} `)
	attach(species_Word,species_Span);
	attach(species_Span,NPC_Display);
	//level

	let level_String = "";
	for(current_class = 0; current_class < character.CLASS_ARRAY.length; current_class++){
		//console.log(character.CLASS_ARRAY[i].NAME)
		
		if(character.CLASS_ARRAY[current_class].LEVEL > 0){
			if(level_String === ""){
		level_String += `${character.CLASS_ARRAY[current_class].NAME} ${character.CLASS_ARRAY[current_class].LEVEL}`	
		}else{
	level_String += `/${character.CLASS_ARRAY[current_class].NAME} ${character.CLASS_ARRAY[current_class].LEVEL}`	
		
			}
															}
																						}
	Level_Span = create("SPAN");
	Level_Word = create_Word(level_String);
	attach(Level_Word,Level_Span);
	attach(Level_Span,NPC_Display);
	//force paragraph//
	force_Line_Paragraph = create("P");
	attach(force_Line_Paragraph,NPC_Display);
	///Destiny//
	//word//
	if(undefined !== character.destiny){
	destiny_Word_Span =create("SPAN");
	destiny_word = create_Word("Destiny ");
	attach(destiny_word,destiny_Word_Span);
	bold(destiny_Word_Span);
	attach(destiny_Word_Span,force_Line_Paragraph);
	//data//
	destiny_Data_Span = create("SPAN");
	destiny_Data = create_Word(character.destiny);
	attach(destiny_Data,destiny_Data_Span);
	attach(destiny_Data_Span,force_Line_Paragraph);

										}
	//force//
	if(undefined !== character.force){
	force_Word_Span =create("SPAN");
	force_word = create_Word("Force ");
	attach(force_word,force_Word_Span);
	bold(force_Word_Span);
	attach(force_Word_Span,force_Line_Paragraph);
	//data//
	force_Data_Span = create("SPAN");
	force_Data = create_Word(character.force);
	attach(force_Data,force_Data_Span);
	attach(force_Data_Span,force_Line_Paragraph);

										}

	//dark side
if(undefined !== character.dark_Side){
	dark_Side_Word_Span =create("SPAN");
	dark_Side_word = create_Word("Dark Side ");
	attach(dark_Side_word,dark_Side_Word_Span);
	bold(dark_Side_Word_Span);
	attach(dark_Side_Word_Span,force_Line_Paragraph);
	//data//
	dark_Side_Data_Span = create("SPAN");
	dark_Side_Data = create_Word(character.dark_Side);
	attach(dark_Side_Data,dark_Side_Data_Span);
	attach(dark_Side_Data_Span,force_Line_Paragraph);

										}

if(undefined !== character.destiny && undefined !== character.force ){
	destiny_Semicolin_Span =create("SPAN");
	destiny_Semicolin_Word = create_Word("; ")
	attach(destiny_Semicolin_Word,destiny_Semicolin_Span);
	attach(destiny_Semicolin_Span,destiny_Data_Span);
}

if(undefined !== character.force && undefined !== character.dark_Side ){
	force_Semicolin_Span =create("SPAN");
	force_Semicolin_Word = create_Word("; ")
	attach(force_Semicolin_Word,force_Semicolin_Span);
	attach(force_Semicolin_Span,force_Data_Span);
}
	//initiave paragraph//
	init_Paragraph = create("P");
	attach(init_Paragraph,NPC_Display);
	//the word init span//
	init_Span = create("SPAN");
	init_Word = create_Word("Init ");
	attach(init_Word,init_Span);
	bold(init_Span);
	attach(init_Span,init_Paragraph);
	//the init data//
	init_Data_Span = create("SPAN");
	init_Plus =""
	if (character.skills.INITIATIVE.TOTAL_BONUS > 0){
		init_Plus = "+";
	} 
	init_Data = create_Word(`${init_Plus}${character.skills.INITIATIVE.TOTAL_BONUS}; `);
	attach(init_Data,init_Data_Span);
	attach(init_Data_Span,init_Paragraph);
	//senses word//
	senses_Word_Span = create("SPAN");
	senses_Word = create_Word("Senses ");
	attach(senses_Word,senses_Word_Span);
	bold(senses_Word_Span);
	attach(senses_Word_Span,init_Paragraph);
		/// special senses////
	//perception word//
	perception_Word_Span = create("SPAN");
	perception_Word = create_Word("Perception ");
	attach(perception_Word,perception_Word_Span);
	attach(perception_Word_Span,init_Paragraph);
	//perception bonus/
	perception_Bonus_Span = create("SPAN");
	perception_Plus ="";
	if (character.skills.PERCEPTION.TOTAL_BONUS > 0){
		perception_Plus = "+";
	} 
	perception_Bonus = create_Word(perception_Plus+character.skills.PERCEPTION.TOTAL_BONUS);
	attach(perception_Bonus,perception_Bonus_Span);
	attach(perception_Bonus_Span,init_Paragraph);

	//languages paragraph//
	languages_paragraph = create("P");
	attach(languages_paragraph,NPC_Display);
	//languages word//
	languages_Word_Span = create("SPAN");
	languages_Word = create_Word("Languages ");
	attach(languages_Word,languages_Word_Span);
	bold(languages_Word_Span);
	attach(languages_Word_Span,languages_paragraph);
	//languages//
	languages_Known = "";
	for(language_Switcher = 0; language_Switcher < character.languages.length; language_Switcher++ ){
		if(language_Switcher< character.languages.length -1){
			languages_Known += character.languages[language_Switcher].NAME + ", ";
		}else{
		languages_Known += character.languages[language_Switcher].NAME + " ";
	}
	}
	languages_Span = create("SPAN");
	languages_Data = create_Word(languages_Known)
	attach(languages_Data,languages_Span);
	attach(languages_Span,languages_paragraph);
	//hr//
	languages_HR = create("HR");
	attach(languages_HR,NPC_Display);
	//defenses paragraph//
	defenses_Paragraph = create("P");
	attach(defenses_Paragraph,NPC_Display);
	/////defenses word//
	defenses_Word_Span = create("SPAN");
	defenses_Word = create_Word("Defenses ");
	attach(defenses_Word,defenses_Word_Span);
	bold(defenses_Word_Span);
	attach(defenses_Word_Span,defenses_Paragraph);
	//defenses data//
	defenses_Data_Span = create("SPAN");
	defenses_Data =create_Word(`Ref ${character.current_Ref} (flat-footed ${character.flat_Footed}), Fort ${character.current_Fort}, Will ${character.current_Will} `)
	attach(defenses_Data,defenses_Data_Span);
	attach(defenses_Data_Span,defenses_Paragraph);
	//other defenses//
	hit_points_Paragraph = create("P");
	attach(hit_points_Paragraph,NPC_Display);
	/////the word hp//
	hp_Word_Span = create("SPAN");
	hp_Word = create_Word("hp ");
	attach(hp_Word,hp_Word_Span);
	bold(hp_Word_Span);
	attach(hp_Word_Span,hit_points_Paragraph);
	//hp data//
	hp_Data_Span = create("SPAN");
	hp_Data = create_Word(`${character.max_Hp};`);
	attach(hp_Data,hp_Data_Span);
	attach(hp_Data_Span,hit_points_Paragraph);
	//dr//
	if(character.damage_Reduction !== undefined){
		//shield word//
		dr_Word_Span = create("SPAN");
		dr_Word = create_Word(" DR")
		attach(dr_Word,dr_Word_Span);
		bold(dr_Word_Span)
		attach(dr_Word_Span,hit_points_Paragraph);
		//shield data//
		dr_Data_Span =create("SPAN");
		dr_Data = create_Word(` ${character.damage_Reduction};`);
		attach(dr_Data,dr_Data_Span);
		attach(dr_Data_Span,hit_points_Paragraph);
	}
	//shields?
	if(character.shield_Rating !== undefined){
		//shield word//
		shield_Word_Span = create("SPAN");
		shield_Word = create_Word(" SR")
		attach(shield_Word,shield_Word_Span);
		bold(shield_Word_Span)
		attach(shield_Word_Span,hit_points_Paragraph);
		//shield data//
		shield_Data_Span =create("SPAN");
		shield_Data = create_Word(` ${character.shield_Rating};`);
		attach(shield_Data,shield_Data_Span);
		attach(shield_Data_Span,hit_points_Paragraph);
	}
	//fast healing//
if(character.fast_Healing !== undefined){
		//shield word//
		healing_Word_Span = create("SPAN");
		healing_Word = create_Word(" fast-healing")
		attach(healing_Word,healing_Word_Span);
		bold(healing_Word_Span)
		attach(healing_Word_Span,hit_points_Paragraph);
		//shield data//
		healing_Data_Span =create("SPAN");
		healing_Data = create_Word(` ${character.fast_Healing};`);
		attach(healing_Data,healing_Data_Span);
		attach(healing_Data_Span,hit_points_Paragraph);
	}
	

	//threashold word//
	threshold_Word_Span = create("SPAN");
	threshold_Word = create_Word(" Threshold ");
	attach(threshold_Word,threshold_Word_Span);
	bold(threshold_Word_Span);
	attach(threshold_Word_Span,hit_points_Paragraph);
	//threshold data
	threshold_Data_Span = create("SPAN");
	threshold_Data = create_Word(character.threshold);
	attach(threshold_Data,threshold_Data_Span);
	attach(threshold_Data_Span,hit_points_Paragraph);
	//hit point hr//
	hit_Points_HR = create("HR");
	attach(hit_Points_HR,NPC_Display);
	//speed paragraph//
	speed_Paragraph = create("P");
	attach(speed_Paragraph,NPC_Display);
	//the word speed//
	speed_Word_Span = create("SPAN");
	speed_Word = create_Word("Speed ");
	attach(speed_Word,speed_Word_Span);
	bold(speed_Word_Span);
	attach(speed_Word_Span,speed_Paragraph);
	//speed data//
	speed_Data_Span = create("SPAN");
	speed_Data = create_Word(character.current_Speed);
	attach(speed_Data,speed_Data_Span);
	attach(speed_Data_Span,speed_Paragraph);
	//other speeds and other movements//

	//attacks//
	//attack paragraph
	//attacks data//

	//bab paragraph
	bab_Paragraph=create("P");
	attach(bab_Paragraph,NPC_Display);
	//bab word//
	bab_Word_Span = create("SPAN");
	bab_Word = create_Word("Base Atk");
	attach(bab_Word,bab_Word_Span);
	bold(bab_Word_Span);
	attach(bab_Word_Span,bab_Paragraph);
	//bab data//
	bab_Data_Span = create("SPAN");
	bab_Data = create_Word(` +${character.Base_Attack_Bonus}; `);
	attach(bab_Data,bab_Data_Span);
	attach(bab_Data_Span,bab_Paragraph);
	//grp word//
	grp_Word_Span = create("SPAN");
	grp_Word = create_Word("Grp ");
	attach(grp_Word,grp_Word_Span);
	bold(grp_Word_Span);
	attach(grp_Word_Span,bab_Paragraph);
	//grp data//
	//need to make calculate_Grapple function
	grp_Data_Span = create("SPAN");
	let grapple = character.grapple;
	if(grapple > 0){
		grapple = "+"+grapple;
	}
	grp_Data = create_Word(grapple);
	attach(grp_Data,grp_Data_Span);
	attach(grp_Data_Span,bab_Paragraph);
	//atk option paragraph//
	attack_Options_Paragraph = create("P");
	attach(attack_Options_Paragraph,NPC_Display);
	//attac =k option word//
	attack_Options_Span = create("SPAN");
	attack_Options = create_Word("Special Actions");
	attach(attack_Options,attack_Options_Span);
	bold(attack_Options_Span);
	attach(attack_Options_Span,attack_Options_Paragraph);
	//attack options data//
	for(item_Timer=0;item_Timer<character.carried.length;item_Timer++){
		if(character.carried[item_Timer].equipment_Type === "weapon"){
			//loop to go through the weapon and create a line for each attack type//

			//melee or ranged
			let weapon = character.carried[item_Timer];
			weapon_Attack_Type_Span = create("SPAN");
			weapon_Attack_Type =create_Word(weapon.weapon_group.ATTACK_TYPE.NAME);
			attach(weapon_Attack_Type,weapon_Attack_Type_Span);
			bold(weapon_Attack_Type_Span);
			attach(weapon_Attack_Type_Span,NPC_Display);
			///weapon name
			let weapon_Name_Span =create("SPAN");
			let weapon_Name = create_Word(" " +weapon.name + " ");
			attach(weapon_Name,weapon_Name_Span);
			attach(weapon_Name_Span,NPC_Display);
			//attack//
			attack_Mod_Span = create("SPAN");
			attack_Modifier = calculateAttackMod(character,weapon);
			if(attack_Modifier > -1){
				attack_Modifier = "+"+attack_Modifier;
			}
			attack_Mod = create_Word(attack_Modifier);
			attach(attack_Mod,attack_Mod_Span);
			attach(attack_Mod_Span,NPC_Display);
			//damage//
			weapon_Damage_Span = create("SPAN");
			weapon_Damage = create_Word(calculate_Damage_Dice(character,weapon))
			attach(weapon_Damage,weapon_Damage_Span);
			attach(weapon_Damage_Span,NPC_Display);
			//attack option//
			//br//
			let br = create("BR");
			attach(br,NPC_Display);
		}
	}
	//special actions
	//force powers known//
	//force techniques//
	//<hr>//
	attach(languages_HR,NPC_Display);
	//abilities paragraph//
	abilities_Paragraph =  create("P");
	attach(abilities_Paragraph,NPC_Display);
	//abilities word
	abilities_Word_Span = create("SPAN");
	abilities_Word = create_Word("Abilities");
	attach(abilities_Word,abilities_Word_Span);
	bold(abilities_Word_Span);
	attach(abilities_Word_Span,abilities_Paragraph);
	//str word//
	str_Word_Span = create("SPAN");
	str_Word = create_Word(` Str ${character.strength} `);
	attach(str_Word,str_Word_Span);
	//bold(str_Word_Span);
	attach(str_Word_Span,abilities_Paragraph);
	//dex word//
	dex_Word_Span = create("SPAN");
	dex_Word = create_Word(`, Dex ${character.dexterity} `);
	attach(dex_Word,dex_Word_Span);
	//bold(dex_Word_Span);
	attach(dex_Word_Span,abilities_Paragraph);
	//con word//
	con_Word_Span = create("SPAN");
	con_Word = create_Word(`, Con ${character.constitution} `);
	attach(con_Word,con_Word_Span);
	//bold(con_Word_Span);
	attach(con_Word_Span,abilities_Paragraph);
	//int word//
	int_Word_Span = create("SPAN");
	int_Word = create_Word(`, Int ${character.inteligence} `);
	attach(int_Word,int_Word_Span);
	//bold(int_Word_Span);
	attach(int_Word_Span,abilities_Paragraph);
	//wis word//
	wis_Word_Span = create("SPAN");
	wis_Word = create_Word(`, Wis ${character.wisdom} `);
	attach(wis_Word,wis_Word_Span);
	//bold(wis_Word_Span);
	attach(wis_Word_Span,abilities_Paragraph);
	//cha word//
	cha_Word_Span = create("SPAN");
	cha_Word = create_Word(`, Cha ${character.charisma} `);
	attach(cha_Word,cha_Word_Span);
	//bold(cha_Word_Span);
	attach(cha_Word_Span,abilities_Paragraph);
	//special qualities//
	//talents paragraph
	talents_Paragraph = create("P");
	attach(talents_Paragraph,NPC_Display);

	//talents word//
	talents_Word_Span =create("SPAN");
	talents_Word = create_Word("Talents");
	attach(talents_Word,talents_Word_Span);
	bold(talents_Word_Span);
	attach(talents_Word_Span,talents_Paragraph);
	//talents data
let talents_String = "";
	for(talanets_timer =0; talanets_timer < character.talents.length; talanets_timer++){
		talents_String += ` ${character.talents[talanets_timer].NAME},` 
	}
	talents_Data_Span = create("SPAN");
	talents_String =talents_String.substring(0, talents_String.length-1);
	talents_Data =create_Word(talents_String);
	attach(talents_Data,talents_Data_Span);
	attach(talents_Data_Span,talents_Paragraph);
	//feats paragraph
	feats_Paragraph = create("P");
	attach(feats_Paragraph,NPC_Display);
	//feats//
	feats_Word_Span =create("SPAN");
	feats_Word = create_Word("Feats");
	attach(feats_Word,feats_Word_Span);
	bold(feats_Word_Span);
	attach(feats_Word_Span,feats_Paragraph);
	//feats data
	let feats_String = "";
	for(feats_timer =0; feats_timer < character.feats.length; feats_timer++){
		feats_String += ` ${character.feats[feats_timer].name},` 
	}
	feats_Data_Span = create("SPAN");
	feats_String =feats_String.substring(0, feats_String.length-1);
	feats_Data =create_Word(feats_String);
	attach(feats_Data,feats_Data_Span);
	attach(feats_Data_Span,feats_Paragraph);

	//skills paragraph
	skills_paragraph = create("P");
	attach(skills_paragraph,NPC_Display);
	//skills word//
	skills_Word_Span =create("SPAN");
	skills_Word = create_Word("Skills");
	attach(skills_Word,skills_Word_Span);
	bold(skills_Word_Span);
	attach(skills_Word_Span,skills_paragraph);
	//skills data
	skills_string = "";
	for(skills_changer = 0; skills_changer < character.SKILLS_ARRAY.length; skills_changer++){
		if(character.SKILLS_ARRAY[skills_changer].TRAINED){
			skills_string += ` ${character.SKILLS_ARRAY[skills_changer].NAME} ${character.SKILLS_ARRAY[skills_changer].TOTAL_BONUS}, `;
		}
	}
	skills_Data_Span = create("SPAN");
	skills_string =skills_string.substring(0, skills_string.length-2);
	console.log(skills_string)
	skills_Data = create_Word(skills_string);
	attach(skills_Data,skills_Data_Span);
	attach(skills_Data_Span,skills_paragraph);
	//possessions paragraph
	possessions_paragraph = create("P");
	attach(possessions_paragraph,NPC_Display);
	//posessions word//
	possessions_Word_Span =create("SPAN");
	possessions_Word = create_Word("Possessions");
	attach(possessions_Word,possessions_Word_Span);
	bold(possessions_Word_Span);
	attach(possessions_Word_Span,possessions_paragraph);
	//posessions data//
	posessions_string ="";
	for(item_Number = 0; item_Number < character.carried.length;item_Number++){
		posessions_string += ` ${character.carried[item_Number].name},`
	}
	posessions_string =posessions_string.substring(0, posessions_string.length-1);
	//console.log(posessions_string);
	posessions_Data_Span = create("SPAN");
	posessions_Data = create_Word(posessions_string);
	attach(posessions_Data,posessions_Data_Span);
	attach(posessions_Data_Span,possessions_paragraph);
	//attaching div to body//
	attach(NPC_Display,document.body);
}
