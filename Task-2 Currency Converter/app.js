const apiURL = 'https://api.exchangerate-api.com/v4/latest/';

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('convertedAmount');

// Fetch and Populate Currencies for Converter
async function fetchCurrencies() {
  try {
    const response = await fetch(`${apiURL}USD`);
    const data = await response.json();
    const currencies = Object.keys(data.rates);

    populateSelect(fromCurrency, currencies);
    populateSelect(toCurrency, currencies);
  } catch (error) {
    console.error('Error fetching currency data:', error);
  }
}

function populateSelect(selectElement, currencies) {
  selectElement.innerHTML = currencies
    .map(currency => `<option value="${currency}">${currency}</option>`)
    .join('');
}

async function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount)) {
    result.textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    const response = await fetch(`${apiURL}${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);
    result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
  } catch (error) {
    console.error('Error converting currency:', error);
    result.textContent = 'Error fetching conversion rates. Please try again later.';
  }
}

convertBtn.addEventListener('click', convertCurrency);

document.getElementById('resetBtn').addEventListener('click', function() {
  // Clear the amount and result fields
  amountInput.value = '';
  result.textContent = '';
});

fetchCurrencies(); // Populate the currency dropdowns for the converter
