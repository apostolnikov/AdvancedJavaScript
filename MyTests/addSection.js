var mainSection = document.getElementById('mainSection');
var sectionButton = document.getElementById('newSectionButton');
sectionButton.addEventListener('click', addNewSection);

var unique_Id = 0;
function addNewSection () {
	unique_Id += 1;	
	var childSection = document.createElement('section');
	childSection.setAttribute('class', 'childSection');
	childSection.setAttribute('id', ('childSection' + unique_Id));
	childSection.innerHTML = 
	'<h2>' + 
	document.getElementById('newSectionName').value + 
	'</h2>';

	mainSection.appendChild(childSection);

	var addItemDiv = document.createElement('div');
	addItemDiv.setAttribute('class', 'addItemDiv');
	addItemDiv.innerHTML = 
	'<input type="text" class="newItemName" id="inputItem' + unique_Id + '" name="text" placeholder="Add item...">' +
	'<button type="button" class="newItemButton" onclick="addNewItem()" id="buttonItem' + unique_Id + '">+</button>';

	mainSection.appendChild(addItemDiv);
}

var childSectionForItem = document.getElementById(('childSection') + unique_Id);

function addNewItem () {
	var item = document.createElement('div');
	item.setAttribute('class', 'itemDiv');

	item.innerHTML = 
	'<input type="checkbox" name="chekbox" class="checkBox">' +
	'<p>' +
	document.getElementById('inputItem' + unique_Id).value +
	'</p>';

	childSectionForItem.appendChild(item);
}

