	//constructor(name,cost,availibility,weight,weapon_size,picture,damage_Dice_Size,damage_Dice_Number,stun_Dice_Size,stun_Dice_Number,RANGED_WEAPON_GROUP,DAMAGE_TYPE,description,){


////RIFLES//////

var BLASTER_CARBINE = new weapon("Blaster Carbine", 900, AVAILABILITY.RESTRICTED,2.2,WEAPON_SIZE.MEDIUM,"",3,8,0,3,8,0,WEAPON_GROUP.RIFLE,DAMAGE_TYPE.ENERGY,"This small Blaster Rifle has a short barrel and compact two-handed grip, making it look more like a long pistol than a Rifle. Some Blaster Carbines, such as the E-5 used by B1 Series Battle Droids, have a Retractable Stock. A Blaster Carbine without a Retractable Stock costs 850 credits Instead of 900 credits. Because of its compact design, a Blaster Carbine can always be used to make an Attack of Opportunity, even if its stock is not folded.A Blaster Carbine requires a Power Pack to operate. After 50 shots, the Power Pack must be replaced.<br>Inaccurate: This weapon cannot fire at targets at Long Range.")
	BLASTER_CARBINE.autoFire = true;
var BLASTER_RIFLE = new weapon("Blaster Rifle",1000, AVAILABILITY.RESTRICTED, 4.5,WEAPON_SIZE.MEDIUM,"", 3,8,0,3,8,0, WEAPON_GROUP.RIFLE,DAMAGE_TYPE.ENERGY, "The basic Blaster Rifle is standard issue to soldiers across the galaxy. Some Blaster Rifles, such as the BlasTech E-11 (Or its \"Clone,\" the SoroSuub Stormtrooper One), have a Retractable Stock. A Blaster Rifle without a Retractable Stock costs 900 credits (Instead of 1000 credits).A Blaster Rifle requires a Power Pack to operate. After 50 shots, the Power Pack must be replaced." )
	BLASTER_RIFLE.autoFire = true;	



////
Rifles =[BLASTER_CARBINE,BLASTER_RIFLE]
////