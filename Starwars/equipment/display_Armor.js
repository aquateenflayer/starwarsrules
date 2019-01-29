function display_Armor(item){





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
	let statsRow = document.createElement("TR")
	let titleRow = document.createElement("TR")
		/////create diffrent rows for melee weapons& ranged weapons& armor
		if (item.equipment_Type == "armor"){console.log( "Armor")
		}else if(item.equipment_Type == "weapon"){console.log("Weapon")}else{console.log("Equipment")}
	let weightTitle = document.createElement("TD");
	let theWordWeight = document.createTextNode("Weight")
	let maxDexTitle = document.createElement("TD");
	let theWordMaxDex =  document.createTextNode("Max Dex")
	let fortTitle = document.createElement("TD");
	let theWordFort = document.createTextNode("EQUIPMENT BONUS TO FORTITUDE ")
	let reflexTitle = document.createElement("TD");
	let theWordRef = document.createTextNode("Reflex")
	let sizeTitle = document.createElement("TD");
	let theWordSize = document.createTextNode("Armor Category")
	let costTitle = document.createElement("TD");
	let theWordCost = document.createTextNode("Cost")
	let costData = document.createElement("TD");
	let sizeData = document.createElement("TD");
	let reflexData = document.createElement("TD");
	let fortData = document.createElement("TD");
	let maxData = document.createElement("TD");
	let weightData = document.createElement("TD");
	let costActual = document.createTextNode(item.cost)
	let sizeActual  = document.createTextNode(item.ARMOR_GROUP.NAME)
	let reflexActual = document.createTextNode(item.reflex_Defense)
	let fortActual = document.createTextNode(item.fortitude_Defense)
	let mexDexActual = document.createTextNode(item.max_Dex)
	let weightActual = document.createTextNode(item.weight + " kg")
	let porpertiesRow = document.createElement("TR")
	let upgradesRow = document.createElement("TR")

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

////title row///////
//cost
costTitle.appendChild(theWordCost)
titleRow.appendChild(costTitle)
detailsTable.appendChild(titleRow);
//size
sizeTitle.appendChild(theWordSize)
titleRow.appendChild(sizeTitle)
//reflex
reflexTitle.appendChild(theWordRef)
titleRow.appendChild(reflexTitle)
//fort
fortTitle.appendChild(theWordFort)
titleRow.appendChild(fortTitle)
//max dex
maxDexTitle.appendChild(theWordMaxDex)
titleRow.appendChild(maxDexTitle)
//weight//
weightTitle.appendChild(theWordWeight)
titleRow.appendChild(weightTitle)
//attach armor stats//
//cost data
costData.appendChild(costActual)
statsRow.appendChild(costData)
//size data
sizeData.appendChild(sizeActual)
statsRow.appendChild(sizeData)
//reflex data
reflexData.appendChild(reflexActual)
statsRow.appendChild(reflexData)
//fort data
fortData.appendChild(fortActual)
statsRow.appendChild(fortData)
//maxData
maxData.appendChild(mexDexActual)
statsRow.appendChild(maxData)
//weight data
weightData.appendChild(weightActual)
statsRow.appendChild(weightData)
//the row
detailsTable.appendChild(statsRow);


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

