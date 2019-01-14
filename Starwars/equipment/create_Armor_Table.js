function create_Armor_Table(array){
			//create table
						

			var row =[];
			table_name = "Armor_Table" + array[0].ARMOR_GROUP.NAME;

			array.armor_Table = document.createElement("TABLE");
			array.armor_Table.setAttribute("id",table_name);
			//attach table created onto the 'stats' table up higher
			document.getElementById(array[0].ARMOR_GROUP.NAME).appendChild(array.armor_Table);

			for(i = -1; i < array.length; i++){
				//create table row
				name = array[0].ARMOR_GROUP.NAME + "row"+i;
				row[i] = document.createElement("TR");
				row[i].setAttribute("id",name);
				document.getElementById(table_name).appendChild(row[i]);
				if (i == -1){
	
			
			//create header
			var header1 = document.createElement("TH");


			var header1Input = document.createTextNode(array[0].ARMOR_GROUP.NAME + " Armor");
			header1.appendChild(header1Input);
			//put header into row 0
			document.getElementById(name).appendChild(header1);
			//create header
			var header2 = document.createElement("TH");
			var header2Input = document.createTextNode("COST");
			header2.appendChild(header2Input);
			//put header into row 1
			document.getElementById(name).appendChild(header2);
			//create header
			var header3 = document.createElement("TH");
			var header3Input = document.createTextNode("REFLEX BONUS");
			header3.appendChild(header3Input);
			//put header into row 1
			document.getElementById(name).appendChild(header3);
			//create header
			var header4 = document.createElement("TH");
			var header4Input = document.createTextNode("FORTITUDE BONUS");
			header4.appendChild(header4Input);
			//put header into row 1
			document.getElementById(name).appendChild(header4);
			//create header
			var header5 = document.createElement("TH");
			var header5Input = document.createTextNode("MAX DEX BONUS");
			header5.appendChild(header5Input);
			//put header into row 1
			document.getElementById(name).appendChild(header5);
			//create header
			var header6 = document.createElement("TH");
			var header6Input = document.createTextNode("WEIGHT");
			header6.appendChild(header6Input);
			//put header into row 1
			document.getElementById(name).appendChild(header6);
			//create header
			var header7 = document.createElement("TH");
			var header7Input = document.createTextNode("PICTURE");
			header7.appendChild(header7Input);
			//put header into row 1
			document.getElementById(name).appendChild(header7);
			
						}else{

							//create name data
							array[i].nameData = document.createElement("TD");
							var nameDetail = document.createElement("DETAILS");
							array[i].nameData.appendChild(nameDetail);
			var nameSummary = document.createElement("SUMMARY");
			var nameInput = document.createTextNode(array[i].name);
							nameSummary.appendChild(nameInput);
			var detailDescription =document.createTextNode(array[i].description);
			nameDetail.appendChild(nameSummary);
			nameDetail.appendChild(detailDescription);
			


			document.getElementById(name).appendChild(array[i].nameData);

							//create cost data
			var costData = document.createElement("TD");
			var costInput = document.createTextNode(array[i].cost);
			costData.appendChild(costInput);
			document.getElementById(name).appendChild(costData);

							//create reflex data
			var refData = document.createElement("TD");
			var refInput = document.createTextNode(array[i].reflex_Defense);
			refData.appendChild(refInput);
			document.getElementById(name).appendChild(refData);

							//create fortitude data
			var fortData = document.createElement("TD");
			var fortInput = document.createTextNode(array[i].fortitude_Defense);
			fortData.appendChild(fortInput);
			document.getElementById(name).appendChild(fortData);

							//create max dex bonus data
			var dexData = document.createElement("TD");
			var dexInput = document.createTextNode(array[i].max_Dex);
			dexData.appendChild(dexInput);
			document.getElementById(name).appendChild(dexData);

					//create weight data
			var weightData = document.createElement("TD");
			var weightInput = document.createTextNode(array[i].weight);
			weightData.appendChild(weightInput);
			document.getElementById(name).appendChild(weightData);

			//create picture data
			var pictureData = document.createElement("TD");
			var pictureInput = document.createElement("IMG")
			pictureInput.setAttribute("src",array[i].picture);
			pictureInput.setAttribute("height","150");
			pictureData.appendChild(pictureInput);
			document.getElementById(name).appendChild(pictureData);
						}
					}
				}
				