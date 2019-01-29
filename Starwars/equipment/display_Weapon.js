function display_Weapon(item){
		//create everything///
	let masterTable = document.createElement("TABLE");
	let masterTableRow1 = document.createElement("TR");
	let masterTableData = document.createElement("TD");
	let ItemTitle = document.createElement("DETAILS");
	let ItemNameContainer = document.createElement("SUMMARY");
	let ItemName = document.createTextNode(item.name);
	let detailsTable = document.createElement("Table");
	let descriptionRow = document.createElement("TR");
	let descriptionData = document.createElement("TD");
	let descriptionText = document.createTextNode(item.description);
	let pictureRow = document.createElement("TR")
	let pictureData = document.createElement("TD")
	let pictureDetails = document.createElement("DETAILS")
	let pictureSummary = document.createElement("SUMMARY")
	let theWordPicture = document.createTextNode("Picture")
	let pictureLink = document.createElement("IMG")
		pictureLink.setAttribute("src",item.picture)



		////ranged weapon title row create data////
	let rangedWeaponRow =document.createElement("TR")
	let costTitleData = document.createElement("TD")
	let theWordCost = document.createTextNode("Cost")
	let sizeTitleData = document.createElement("TD")
	let theWordSize = document.createTextNode("Size")
	let damageTitleData = document.createElement("TD")
	let theWordDamage = document.createTextNode("Damage")
	let damageTypeTitleData = document.createElement("TD")
	let damageType = document.createElement("TD")
	let theWordDamageType = document.createTextNode("Damage Type")
	let stunTitleData = document.createElement("TD")
	let theWordStun = document.createTextNode("Stun Damage")
	let rateOfFireData = document.createElement("TD")
	let theWordRateOfFire = document.createTextNode("Rate of Fire")
	let weightTitleData = document.createElement("TD")
	let theWordWeight = document.createTextNode("Weight")
	let weaponCategoryTitle = document.createElement("TD")
	let theWordWeaponCategory = document.createTextNode("Weapon Category")
	/// ranged weapon data row///
	let rangedWeaponRow2 = document.createElement("TR") 
	let costActualData = document.createElement("TD")
	let itemCost = document.createTextNode(item.cost)
	let sizeActualData = document.createElement("TD")

	//if the damage type of weapon is an array loop through it otherwise just use normal damage
	var damageTypeTextcontainer = false;
	 if (typeof item.damage_type == "object" ){
	 	 damageTypeTextcontainer ="";
	 	for(i =0; i < item.damage_type.length; i++){
	 		damageTypeTextcontainer += item.damage_type[i].NAME + " "; 
	 	}
		}
	let itemSize = document.createTextNode(item.weapon_size.DISCRIPTION)
	let damageActualData = document.createElement("TD")
	var combinedDamageDice = true;
	if (item.damage_Dice_Number > 0){
	 combinedDamageDice = item.damage_Dice_Number + "d" + item.damage_Dice_Size;
	}else{
		combinedDamageDice = "No";
	}
	let itemDamage = document.createTextNode(combinedDamageDice)
	let damageTypeActualData = document.createElement("TD")
	let itemDamageType = true;
	if (damageTypeTextcontainer){
		itemDamageType = document.createTextNode(damageTypeTextcontainer)
	}else{
	 itemDamageType = document.createTextNode(item.damage_type.NAME)
		}
	let stunActualData = document.createElement("TD")
	var combinedStunDamage = true;
	if (item.stun_Dice_Number > 0){
	combinedStunDamage = item.stun_Dice_Number + "d" + item.stun_Dice_Size;
									}else{
	combinedStunDamage = "No"									
									}
	let itemStun = document.createTextNode(combinedStunDamage)
	let rateOfFireActualData = document.createElement("TD")
	let rateOfFireSpan = document.createElement("SPAN")
	let rateOfFireTitle = document.createElement("TITLE")
	let rateOfFireTitleData = true;
	itemRateOfFire = true;
	if(item.weapon_group.ATTACK_TYPE.NAME == "Ranged"){
	itemRateOfFire = document.createTextNode(item.RATE_OF_FIRE.NAME);
	rateOfFireTitleData = item.RATE_OF_FIRE.RULES
		}else{
			itemRateOfFire = document.createTextNode("Melee")
			rateOfFireTitleData = "Get Colse and hit 'em"
		}
	let weightActualData = document.createElement("TD")
	let itemWeight = document.createTextNode(item.weight + " kg")
	//for some reason the damage type text nodes didn't work so using the test data to fill in the blanks
	let testData =  document.createElement("TD")
	let weaponCategoryData =  document.createElement("TD")
	let weaponCategoryActual = document.createTextNode(item.weapon_group.NAME) 






////////////////////////attach everything////////////////////////////




//attach description row
descriptionData.appendChild(descriptionText);
//descriptionData.className = "wideData";
descriptionRow.appendChild(descriptionData);
detailsTable.appendChild(descriptionRow);
//detailsTable.className = "fullWidth";
//attach picture row
pictureSummary.appendChild(theWordPicture);
pictureDetails.appendChild(pictureSummary);
pictureDetails.appendChild(pictureLink);
pictureData.appendChild(pictureDetails);
pictureRow.appendChild(pictureData);
detailsTable.appendChild(pictureRow);


//attach ranged weapon title row//
//weapon cateogry//
weaponCategoryTitle.appendChild(theWordWeaponCategory);
rangedWeaponRow.appendChild(weaponCategoryTitle);
//cost title//
costTitleData.appendChild(theWordCost);
rangedWeaponRow.appendChild(costTitleData);
//size title
sizeTitleData.appendChild(theWordSize);
rangedWeaponRow.appendChild(sizeTitleData);
//damage title
damageTitleData.appendChild(theWordDamage);
rangedWeaponRow.appendChild(damageTitleData);
//damage type title
damageType.appendChild(theWordDamageType);
rangedWeaponRow.appendChild(damageType);
//stun title
stunTitleData.appendChild(theWordStun);
rangedWeaponRow.appendChild(stunTitleData);
//rate of fire title
rateOfFireData.appendChild(theWordRateOfFire);
rangedWeaponRow.appendChild(rateOfFireData);
//weight title
weightTitleData.appendChild(theWordWeight);
rangedWeaponRow.appendChild(weightTitleData);
//attach ranged weapon title row
detailsTable.appendChild(rangedWeaponRow);


//////////////attach ranged weapon data row
//weapon catagory
weaponCategoryData.appendChild(weaponCategoryActual);
rangedWeaponRow2.appendChild(weaponCategoryData);
//cost data
costActualData.appendChild(itemCost);
rangedWeaponRow2.appendChild(costActualData);
//size data
sizeActualData.appendChild(itemSize);
rangedWeaponRow2.appendChild(sizeActualData);
//damage data
damageActualData.appendChild(itemDamage);
rangedWeaponRow2.appendChild(damageActualData);
//damage type data
testData.appendChild(itemDamageType);
rangedWeaponRow2.appendChild(testData);
//stun data
stunActualData.appendChild(itemStun);
rangedWeaponRow2.appendChild(stunActualData);
//rof data
rateOfFireSpan.title = rateOfFireTitleData;
rateOfFireSpan.appendChild(rateOfFireTitle);
rateOfFireSpan.appendChild(itemRateOfFire);
rateOfFireActualData.appendChild(rateOfFireSpan);
rangedWeaponRow2.appendChild(rateOfFireActualData);
//weightdata
weightActualData.appendChild(itemWeight);
rangedWeaponRow2.appendChild(weightActualData );
//attach ranged weapon data row
detailsTable.appendChild(rangedWeaponRow2);

///attach weapon  ranges 
if (item.weapon_group.ATTACK_TYPE == ATTACK_TYPE.RANGED){

	///weapon ranges titles///
var ranges_Table = document.createElement("TABLE")
var ranges_Title_Row = document.createElement("ROW")
var pointBlankTitle = document.createElement("TD")
var poitBlankSpan = document.createElement("SPAN")
var theWordPointBlank =document.createTextNode("Point Blank")
var pointBlankRules = RANGED_PENALTIES.POINT_BLANK;
var shortTitle = document.createElement("TD")
var shortSpan = document.createElement("SPAN")
var theWordShort =document.createTextNode("Short")
var shortRules = RANGED_PENALTIES.SHORT;
var mediumTitle = document.createElement("TD")
var mediumSpan = document.createElement("SPAN")
var theWordMedium =document.createTextNode("Medium")
var mediumRules = RANGED_PENALTIES.MEDIUM;
var longTitle = document.createElement("TD")
var longSpan = document.createElement("SPAN")
var theWordLong =document.createTextNode("Long")
var longRules = RANGED_PENALTIES.LONG;
//weapon ranges actual data data////
var ranges_data_Row = document.createElement("TR")
var pointBlankData = document.createElement("TD")
var pointBlankActual =document.createTextNode (`0 - ${item.weapon_group.POINT_BLANK.METERS}`)
var shortData = document.createElement("TD")
var shortActual =document.createTextNode(`${item.weapon_group.POINT_BLANK.METERS+1} -  ${item.weapon_group.SHORT.METERS}`)
var mediumData = document.createElement("TD")
var mediumActual =document.createTextNode(`${item.weapon_group.SHORT.METERS+1} -  ${item.weapon_group.MEDIUM.METERS}`)
var LongData = document.createElement("TD")
var LongActual =document.createTextNode(`${item.weapon_group.MEDIUM.METERS+1} -  ${item.weapon_group.LONG.METERS}`)


//ranged titles
//point blank
poitBlankSpan.title = pointBlankRules;
poitBlankSpan.appendChild(theWordPointBlank);
pointBlankTitle.appendChild(poitBlankSpan);
ranges_Title_Row.appendChild(pointBlankTitle);
//short
shortSpan.title = shortRules;
shortSpan.appendChild(theWordShort);
shortTitle.appendChild(shortSpan);
ranges_Title_Row.appendChild(shortTitle);
//medium
mediumSpan.title = mediumRules;
mediumSpan.appendChild(theWordMedium);
mediumTitle.appendChild(mediumSpan);
ranges_Title_Row.appendChild(mediumTitle);
//long
longSpan.title = longRules;
longSpan.appendChild(theWordLong);
longTitle.appendChild(longSpan);
ranges_Title_Row.appendChild(longTitle);
//ranged row
ranges_Table.appendChild(ranges_Title_Row);

//weapon ranges actual/////	
//point blank
pointBlankData.appendChild(pointBlankActual);
ranges_data_Row.appendChild(pointBlankData);
//short
shortData.appendChild(shortActual);
ranges_data_Row.appendChild(shortData);
//medium
mediumData.appendChild(mediumActual);
ranges_data_Row.appendChild(mediumData);
//long
LongData.appendChild(LongActual);
ranges_data_Row.appendChild(LongData);
//row
ranges_Table.appendChild(ranges_data_Row);

//ranged table
detailsTable.appendChild(ranges_Table);



}
//attach the starting
ItemTitle.appendChild(detailsTable);
//ItemTitle.className = "wideData";
ItemNameContainer.appendChild(ItemName);
ItemTitle.appendChild(ItemNameContainer);
masterTableData.appendChild(ItemTitle);
//masterTableData.className = "wideData";
masterTableRow1.appendChild(masterTableData)
masterTable.appendChild(masterTableRow1);
//masterTable.className = "fullWidth";
document.body.appendChild(masterTable);

//adjust width of stuff

//document.getElementsByClassName("wideData").colSpan =8;

}