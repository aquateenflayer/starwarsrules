function create_Character(){
let name = document.getElementById("name").value;
let CLASS = document.getElementById("CLASS").value;
let max_Hit_Points = document.getElementById("max_Hit_Points").value;
let strength = document.getElementById("strength").value;
let dexterity = document.getElementById("dexterity").value;
let constitution = document.getElementById("constitution").value;
let inteligence = document.getElementById("inteligence").value;
let wisdom = document.getElementById("wisdom").value;
let charisma = document.getElementById("charisma").value;
name = name.toUpperCase();
name = name.replace(/ /g,"_");

document.getElementById("character").innerHTML = `var ${name} = new character("${name}",CLASS.${CLASS.toUpperCase()},${max_Hit_Points},${strength},${dexterity},${constitution},${inteligence},${wisdom},${charisma})`;
}

//name,CLASS,level,max_Hit_Points,strength,dexterity,constitution,inteligence,wisdom,charisma