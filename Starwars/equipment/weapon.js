class weapon extends equipment{
	constructor(name,cost,availibility,weight,weapon_size,picture,damage_Dice_Size,damage_Dice_Number,damage_Bonus,stun_Dice_Size,stun_Dice_Number,stun_Bonus,weapon_group,damage_type,description,RATE_OF_FIRE){
				super(name,cost,availibility,weight,picture,description);
				this.stun_Dice_Number =stun_Dice_Number,
				this.stun_Dice_Size =stun_Dice_Size,
				this.damage_Dice_Size = damage_Dice_Size ,
				this.damage_Bonus = damage_Bonus,
				this.damage_Dice_Number = damage_Dice_Number,
				this.stun_Bonus = stun_Bonus
				this.weapon_group = weapon_group,
				this.damage_type = damage_type,
				this.weapon_size = weapon_size
				this.RATE_OF_FIRE = [];
			}
			


		}