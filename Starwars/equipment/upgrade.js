class upgrade extends equipment{
	constructor(name,cost,availibility,description,upgrade_Cost){
				super(name,cost,availibility);
				this.upgrade_Cost = upgrade_Cost;
				this.description = description;
			}
		}