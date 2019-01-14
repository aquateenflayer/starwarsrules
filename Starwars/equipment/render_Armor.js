function render_Armor(selected_Armor){
	printing_Stats =selected_Armor.name + "<br>" +selected_Armor.cost + "<br>" + selected_Armor.ARMOR_GROUP.NAME;

	document.getElementById("armor").innerHTML = printing_Stats;
}