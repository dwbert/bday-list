const compileTemplate = (context) => {
  const templateFunction = Handlebars.compile(document.getElementById('templateHB').innerHTML);
  return templateFunction(context);
};

const generateFilterInputs = () => {
  const priceFiltersContainer = document.getElementById('desktop-price-filters');
  const categoryFiltersContainer = document.getElementById('desktop-category-filters');
  const mobileFilterSelect = document.getElementById('mobile-filter-select');

  const uniquePrices = [...new Set(context.entries.map(entry => entry.price_label))];
  const uniqueCategories = [...new Set(context.entries.map(entry => entry.category))];

  uniquePrices.sort().forEach(price => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'filter';
    input.value = price;
    input.id = `price-filter-${price}`;
    
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = price;

    priceFiltersContainer.appendChild(input);
    priceFiltersContainer.appendChild(label);

    const option = document.createElement('option');
    option.value = price;
    option.textContent = price;
    mobileFilterSelect.querySelector('optgroup[label="Price"]').appendChild(option);
  });

  uniqueCategories.sort().forEach(category => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'filter';
    input.value = category;
    input.id = `category-filter-${category.toLowerCase()}`;
    
    const label = document.createElement('label');
    label.htmlFor = input.id;
    label.textContent = category;

    categoryFiltersContainer.appendChild(input);
    categoryFiltersContainer.appendChild(label);

    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    mobileFilterSelect.querySelector('optgroup[label="Category"]').appendChild(option);
  });
};

generateFilterInputs();

const updateContext = (filterKey) => {
  const newContext = { entries: context.entries.filter(entry => Object.values(entry).includes(filterKey)) };
  document.getElementById('information').innerHTML = compileTemplate(newContext);
};

const loadContext = () => {
  document.getElementById('information').innerHTML = compileTemplate(context);
};

const updateContextList = () => {
  const filterInputs = document.getElementsByName('filter');
  let filterKey = Array.from(filterInputs).find(input => input.checked)?.value;
  if (filterKey) {
    document.getElementById('mobile-filter-select').value = filterKey;
    updateContext(filterKey);
  }
};

const updateContextSelect = () => {
  const filterSelect = document.getElementById('mobile-filter-select');
  const filterKey = filterSelect.value;
  const filterInputs = document.getElementsByName('filter');
  Array.from(filterInputs).forEach(input => input.checked = input.value === filterKey);
  updateContext(filterKey);
};

const refreshPage = () => {
  window.location.reload();
};

window.addEventListener('load', loadContext);
document.querySelectorAll('#filter-form input[type="radio"]').forEach(input => input.addEventListener('click', updateContextList));
document.getElementById('mobile-filter-select').addEventListener('change', updateContextSelect);
document.getElementById('clear-filter').onclick = refreshPage;
