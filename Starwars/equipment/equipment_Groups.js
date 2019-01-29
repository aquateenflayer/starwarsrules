const ARMOR_GROUP ={
	UNARMORED:{
		NAME:"Unarmored",
		CHECK_PENALTY:0,
		UPGRADES_MAX:0
	},
	LIGHT:{
		NAME: "Light",
		CHECK_PENALTY: -2,
		UPGRADES_MAX:1
			},
	MEDIUM:{
		NAME: "Medium",
		CHECK_PENALTY: -5,
		UPGRADES_MAX:2 
	},
	HEAVY:{
		NAME: "Heavy",
		CHECK_PENALTY: -10,
		UPGRADES_MAX:3
	}
};

const RANGED_PENALTIES ={
	POINT_BLANK: 0,
	SHORT: -2,
	MEDIUM: -5,
	LONG: -10
			};


const ATTACK_TYPE ={
	RANGED:{
		NAME:"Ranged"
	},
	MELEE:{
		Name:"Melee"
	}
};

const WEAPON_GROUP={
	RIFLE:{
		NAME: "Rifle",
		ATTACK_TYPE:ATTACK_TYPE.RANGED,
		POINT_BLANK: {
			METERS:30,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:60,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:150,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:300,
			PENALTY:RANGED_PENALTIES.LONG
		}
		},

	PISTOL:{
		NAME: "Pistol",
		ATTACK_TYPE:ATTACK_TYPE.RANGED,
		POINT_BLANK: {
			METERS:20,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:40,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:60,
			PENALTY:RANGED_PENALTIES.MEDIUM
		},
		LONG:{
			METERS:80,
			PENALTY:RANGED_PENALTIES.LONG
		}
			},


		ADVANCED_MELEE:{
			NAME:"Advanced Melee",
			ATTACK_TYPE:ATTACK_TYPE.MELEE

						},

		SIMPLE_MELEE:{
			NAME:"Simple Melee",
			ATTACK_TYPE:ATTACK_TYPE.MELEE
					},

		EXOTIC_MELEE:{
			NAME:"Exotic Melee",
			ATTACK_TYPE:ATTACK_TYPE.MELEE
					},

		LIGHTSABER:{
			NAME:"Lightsaber",
			ATTACK_TYPE:ATTACK_TYPE.MELEE
					},

		HEAVY_WEAPON:{
			NAME:"Heavy",
			ATTACK_TYPE:ATTACK_TYPE.RANGED,
			POINT_BLANK: {
			METERS:50,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:100,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:250,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:500,
			PENALTY:RANGED_PENALTIES.LONG
		}
					},

		EXOTIC_RANGED:{
			NAME:"Exotic Ranged",
			ATTACK_TYPE:ATTACK_TYPE.RANGED,
			POINT_BLANK: {
			METERS:30,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:60,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:150,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:300,
			PENALTY:RANGED_PENALTIES.LONG
		}
				},

		SIMPLE_RANGED:{
			NAME:"Simple Ranged",
			ATTACK_TYPE:ATTACK_TYPE.RANGED,
			POINT_BLANK: {
			METERS:20,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:40,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:60,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:80,
			PENALTY:RANGED_PENALTIES.LONG
		}
					},

		GRENADE:{
			NAME:"Grenade",
			ATTACK_TYPE:ATTACK_TYPE.RANGED,
			POINT_BLANK: {
			METERS:6,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:8,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:10,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:12,
			PENALTY:RANGED_PENALTIES.LONG
		},
		THROWN:{
			NAME:"Thrown",
			ATTACK_TYPE:ATTACK_TYPE.RANGED,
			POINT_BLANK: {
			METERS:6,
			PENALTY:RANGED_PENALTIES.POINT_BLANK
		},
		SHORT: {
			METERS:8,
			PENALTY:RANGED_PENALTIES.SHORT
		},
		MEDIUM: {
			METERS:10,
			PENALTY:RANGED_PENALTIES.MEDIUM
				},
		LONG:{
			METERS:12,
			PENALTY:RANGED_PENALTIES.LONG
		},
		}

			}
		};
///////////////////////////////////////////////////////////////////end of weapon catagories////


const DAMAGE_TYPE={
	ENERGY:{
		NAME:"Energy"
	},
	ION:{
		NAME:"Ion"
	},
	STUN:{
		NAME:"Stun"
	},
	PIERCING:{
		NAME:"Piercing"
	},
	SLASHING:{
		NAME:"Slashing"
	},
	BLUDGEONING:{
		NAME:"Bludgeoning"
	},
	FIRE:{
		NAME:"Fire"
	},
	SONIC:{
		NAME:"Sonic"
	},
	PIERCING_AND_SLASHING:{
		NAME:"Piercing and Slashing"
	}
};

const WEAPON_SIZE={
	TINY:{
		DISCRIPTION:"Tiny"
	},
	SMALL:{
		DISCRIPTION:"Small"
	},
	MEDIUM:{
		DISCRIPTION:'Medium'
	},
	LARGE:{
		DISCRIPTION:"Large"
	},
	HUGE:{
		DISCRIPTION:"Huge"
	}
}; 

const RATE_OF_FIRE={
	SINGLE_SHOT:{
		NAME:"Single Shot",
		RULES:"Fires one shot each time the trigger is pulled."
	},
	AUTOFIRE:{
		NAME:"Autofire",
		RULES:"Autofire is treated as an Area Attack. You target a 2-square by 2-square Area, make a single attack roll at a -5 penalty, and compare the result to the Reflex Defense of every creature in the Area. Creatures you hit take full Damage, and the creatures you miss take half Damage. Autofire consumes ten shots or slugs, and it can only be used if the weapon has ten shots or slugs in it.<br>If you are using an Autofire-Only Weapon, you may Brace your weapon by taking two Swift Actions in the same Round immediately before making your Attack. When you Brace an Autofire-Only Weapon, you take only a -2 penalty on your Attack Roll when making an Autofire Attack or using the Burst Fire feat.<br>Only Heavy Weapons, Rifles, and Pistols with an Extended Stock can be Braced."
	},
	AUTOFIRE_AND_SINGLE_SHOT:{
		NAME:"Autofire and Single Shot",
		RULES:"Any ranged weapon that has an Autofire setting can be set on Autofire as a Swift Action.<br>Autofire is treated as an Area Attack. You target a 2-square by 2-square Area, make a single attack roll at a -5 penalty, and compare the result to the Reflex Defense of every creature in the Area. Creatures you hit take full Damage, and the creatures you miss take half Damage. Autofire consumes ten shots or slugs, and it can only be used if the weapon has ten shots or slugs in it."
	}
}