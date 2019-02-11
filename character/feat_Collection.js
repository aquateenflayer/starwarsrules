
//armor profs
const ARMOR_PROF_LIGHT = new feat("Armor Proficency (Light)","You are proficient with Light Armor, and can wear it without impediment.\nEffect: When you wear Light Armor, you take no Armor Check Penalty on attack rolls or Skill Checks. Additionally, you benefit from all of the armor's special Equipment bonuses (If any).\nNormal: A character who wears Light Armor with which they are not proficient takes a -2 Armor Check Penalty on attack rolls as well as Skill Checks made using the following Skills: Acrobatics, Climb, Endurance, Initiative, Jump, Stealth, and Swim. Additionally, the character gains none of the armor's special Equipment bonuses.");
const BURST_FIRE = new feat("Burst Fire","When using a ranged weapon in Autofire mode, you can fire a short Burst at a single foe.\nPrerequisite: Weapon Proficiency (Heavy Weapons) Feat\nEffect: When using a ranged weapon with Autofire capability, and that you are Proficient with, in Autofire mode, you may fire a short burst as a single attack against a single target. You take a -5 penalty on your attack roll, but deal +2 dice of damage. The effects of this Feat do not stack with the extra damage provided by the Deadeye or Rapid Shot Feats.\nSpecial: Firing a Burst expends five shots, and can only be done if the weapon has at least five shots remaining.")
const COORDINATED_ATTACK =  new feat("Coordinated Attack","You are skilled at coordinating your attacks with your allies.\nPrerequisite: Base Attack Bonus +2\nEffect: You are automatically successful when using the Aid Another action to aid an ally's attack, or suppress and enemy as long as the target is adjacent to you or within Point-Blank Range.\nNormal: You must make an attack roll against a Reflex Defense of 10 to gain the benefits of the Aid Another action.");
const POINT_BLANK_SHOT = new feat("Point Blank Shot","You are skilled at making well-placed shots with ranged weapons at Point-Blank Range.\nEffect: You get a +1 bonus on attack and damage rolls with ranged weapons against opponents within Point-Blank Range.\nSpecial: This Feat works normally with Vehicle Weapons. However, if you are using a Missile or a Torpedo and you miss with your attack roll, the projectile does not gain the benefit of this Feat for the second attack roll.")


//weapon focus//
const WEAPON_FOCUS_UNARMED = new feat("Weapon Focus Unarmed","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_UNARMED.weapon_Focus = true;
		WEAPON_FOCUS_UNARMED.effects = "Unarmed";
const WEAPON_FOCUS_PISTOLS = new feat("Weapon Focus Pistols","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_PISTOLS.weapon_Focus = true;
		WEAPON_FOCUS_PISTOLS.effects = "Pistol";
const WEAPON_FOCUS_RIFLES = new feat("Weapon Focus Rifles","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_RIFLES.weapon_Focus = true;
		WEAPON_FOCUS_RIFLES.effects = "Rifle";
const WEAPON_FOCUS_HEAVY = new feat("Weapon Focus Heavy Weapons","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_HEAVY.weapon_Focus = true;
		WEAPON_FOCUS_HEAVY.effects = "Heavy";
const WEAPON_FOCUS_SIMPLE = new feat("Weapon Focus Simple Weapons","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_SIMPLE.weapon_Focus = true;
		WEAPON_FOCUS_SIMPLE.effects = "Simple";
const WEAPON_FOCUS_ADVANCED_MELEE = new feat("Weapon Focus Advanced Melee Weapons","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_ADVANCED_MELEE.weapon_Focus = true;
		WEAPON_FOCUS_ADVANCED_MELEE.effects = "Advanced Melee";
const WEAPON_FOCUS_EXOTIC_MELEE = new feat("Weapon Focus Exotic Melee Weapons","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_EXOTIC_MELEE.weapon_Focus = true;
		WEAPON_FOCUS_EXOTIC_MELEE.effects = "Exotic Melee";
const WEAPON_FOCUS_EXOTIC_RANGED = new feat("Weapon Focus Exotic Ranged Weapons","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_EXOTIC_RANGED.weapon_Focus = true;
		WEAPON_FOCUS_EXOTIC_RANGED.effects = "Exotic Ranged";
const WEAPON_FOCUS_LIGHTSABERS = new feat("Weapon Focus Lightsabers","You are particularly skilled in using placeholder.\,Effect: You gain a +1 bonus on all attack rolls you make using placeholder.\nSpecial: You can gain this Feat multiple times. It's effects do not stack. Each time you take the Feat, it applies to a new Exotic Weapon or weapon group (Including Unarmed attacks). If you take this Feat with Heavy Weapons, it works normally with Vehicle Weapons.");
		WEAPON_FOCUS_LIGHTSABERS.weapon_Focus = true;
		WEAPON_FOCUS_LIGHTSABERS.effects = "Lightsaber";
//Weapon prof
const WEAPON_PROF_SIMPLE = new feat("Weapon Proficiency Simple Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_SIMPLE.proficiency = true;
		WEAPON_PROF_SIMPLE.effects = "Simple";
const WEAPON_PROF_PISTOLS = new feat("Weapon Proficiency Pistols","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_PISTOLS.proficiency = true;
		WEAPON_PROF_PISTOLS.effects = "Pistol";
const WEAPON_PROF_RIFLES = new feat("Weapon Proficiency Rifles","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_RIFLES.proficiency = true;
		WEAPON_PROF_RIFLES.effects = "Rifle";
const WEAPON_PROF_LIGHTSABERS = new feat("Weapon Proficiency Lightsabers","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_LIGHTSABERS.proficiency = true;
		WEAPON_PROF_LIGHTSABERS.effects = "Lightsaber";
const WEAPON_PROF_HEAVY = new feat("Weapon Proficiency Heavy Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_HEAVY.proficiency = true;
		WEAPON_PROF_HEAVY.effects = "Heavy";
const WEAPON_PROF_ADVANCED_MELEE = new feat("Weapon Proficiency Advanced Melee Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_ADVANCED_MELEE.proficiency = true;
		WEAPON_PROF_ADVANCED_MELEE.effects = "Advanced Melee";
const WEAPON_PROF_ADVANCED_RANGED = new feat("Weapon Proficiency Advanced Melee Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_ADVANCED_RANGED.proficiency = true;
		WEAPON_PROF_ADVANCED_RANGED.effects = "Advanced Ranged";
const WEAPON_PROF_EXOTIC_RANGED = new feat("Weapon Proficiency Exotic Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_EXOTIC_RANGED.proficiency = true;
		WEAPON_PROF_EXOTIC_RANGED.effects = "Exotic Ranged";
const WEAPON_PROF_EXOTIC_MELEE = new feat("Weapon Proficiency Exotic Weapons","You are proficient with this particular kind of weaponry.\n Normal: If you wield a weapon with which you are not proficient, you take a -5 penalty to your attack rolls.");
		WEAPON_PROF_EXOTIC_MELEE.proficiency = true;
		WEAPON_PROF_EXOTIC_MELEE.effects = "Exotic Melee";