var loadContext = () => {
	const templateFunction = Handlebars.compile(document.getElementById('templateHB').innerHTML);
	const compiledHTML = templateFunction(context);

	document.getElementById('information').innerHTML = compiledHTML;
}

var updateContextList = () => {
	var filterKey, filterInputs = document.getElementsByName('filter'), filterSelect = document.getElementById('filter-select'), newContext = {};
	
	newContext.entries = [];
	
	for (var i = filterInputs.length - 1; i >= 0; i--) {
		if (filterInputs[i].checked) {
			filterKey = filterInputs[i].value;
		}
	}

	filterSelect.value = filterKey;

	for (var i = 0; i < context.entries.length; i++) {
		if (Object.values(context.entries[i]).includes(filterKey)) {
			newContext.entries.push(context.entries[i])
		}
	}

	const templateFunction = Handlebars.compile(document.getElementById('templateHB').innerHTML);
	const compiledHTML = templateFunction(newContext);

	document.getElementById('information').innerHTML = compiledHTML;
}

var updateContextSelect = () => {
	var filterKey, filterInputs = document.getElementsByName('filter'), filterSelect = document.getElementById('filter-select'), newContext = {};
	
	newContext.entries = [];
	
	filterKey = filterSelect.value;

	for (var i = filterInputs.length - 1; i >= 0; i--) {
		if (filterKey == filterInputs[i].value) {
			filterInputs[i].checked = true;
		}
	}

	for (var i = 0; i < context.entries.length; i++) {
		if (Object.values(context.entries[i]).includes(filterKey)) {
			newContext.entries.push(context.entries[i])
		}
	}

	const templateFunction = Handlebars.compile(document.getElementById('templateHB').innerHTML);
	const compiledHTML = templateFunction(newContext);

	document.getElementById('information').innerHTML = compiledHTML;
}

function refreshPage(){
    window.location.reload();
}

window.addEventListener('load', loadCountdown);
window.addEventListener('load', loadContext);
document.getElementById('filter-form').children[0].addEventListener('click', updateContextList);
document.getElementById('filter-form').children[1].addEventListener('click', updateContextList);
document.getElementById('filter-form').children[2].addEventListener('change', updateContextSelect);
document.getElementById('clear-filter').onclick = refreshPage;

