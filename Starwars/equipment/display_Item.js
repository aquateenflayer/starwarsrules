////////////////// generate market ///////////////////////

function display_Item(item){

if(item.equipment_Type == "weapon"){display_Weapon(item)}
	else if(item.equipment_Type == "armor"){display_Armor(item)}else{



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

		/////create diffrent rows for melee weapons& ranged weapons& armor
		if (item.equipment_Type == "armor"){console.log( "Armor")
		}else if(item.equipment_Type == "weapon"){console.log("Weapon")}else{console.log("Equipment")}

///attach everything////




//attach description//
descriptionData.appendChild(descriptionText);
descriptionRow.appendChild(descriptionData);
detailsTable.appendChild(descriptionRow);


//attach picture//
pictureSummary.appendChild(theWordPicture);
pictureDetails.appendChild(pictureSummary);
pictureDetails.appendChild(pictureLink);
pictureData.appendChild(pictureDetails);
pictureRow.appendChild(pictureData);
detailsTable.appendChild(pictureRow);

//attach properties///

//attach upgrades///




//attach the starting elements
ItemTitle.appendChild(detailsTable);
ItemNameContainer.appendChild(ItemName);
ItemTitle.appendChild(ItemNameContainer);
masterTableData.appendChild(ItemTitle);
masterTableRow1.appendChild(masterTableData)
masterTable.appendChild(masterTableRow1);
document.body.appendChild(masterTable);
}
}