class equipment{
	constructor(name,cost,availibility,weight,picture,description,upgrades){
	this.description = description;
	this.name = name;
	this.cost = cost;
	this.availibility = availibility;
	this.weight= weight;
	this.picture = picture;
	this.licence_Cost = (this.cost * this.availibility.LICENSE_FEE) *.01;
	this.black_market_cost = this.cost * this.availibility.BLACK_MARKET_COST;
	this.rare = false;
	this.upgrades_Max = 1;
	this.upgrades_Current = 0;
	this.upgrades= [];
	this.properties=[];
	this.picture = "equipment/equipment_pictures/" + picture;
	this.equipment_Type = "equipment"
}

};