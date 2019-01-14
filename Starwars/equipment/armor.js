class armor extends equipment{
	constructor(name,cost,availibility,weight,picture,description,reflex_Defense,fortitude_Defense,max_Dex,speed_reduction_Six,speed_reduction_Four,ARMOR_GROUP,licence_Cost,black_market_cost,Upgrades_Current)
			{

		super(name,cost,availibility,weight,picture,description);

		this.reflex_Defense = reflex_Defense,
		this.fortitude_Defense = fortitude_Defense,
		this.max_Dex = max_Dex,
		this.speed_reduction_Four =speed_reduction_Four,
		this.speed_reduction_Six = speed_reduction_Six;
		this.ARMOR_GROUP = ARMOR_GROUP;
		this.picture = "equipment/equipment_pictures/" + picture;
		this.upgrades_Max = this.ARMOR_GROUP.UPGRADES_MAX;
		this.free_Upgrade_Slots = calculate_Free_Upgrade_Slots(this.upgrades_Max,this.upgrades);
		
		}
	}
								
							

