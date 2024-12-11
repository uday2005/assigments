const input = document.querySelector('#input')
const output = document.querySelector('#output')
const inputdeno = document.querySelector('#currencydeno1')
const outputdeno = document.querySelector('#currencydeno2')

const URL ='https://api.currencyapi.com/v3/latest?apikey=cur_live_n4R0Avi6LnurogrH1kcLcgBujkKbp7nLtQwiwuQb'


const GetExchangeRates= async () => {
    const response = await fetch(URL); // Fetch the data
    const data = await response.json(); // Parse JSON response
    console.log(data);
    let currencies = data.data; // Extract the currency object
    console.log(currencies);

    return currencies;
    // return Object.keys(currencies);

    // console.log(Object.keys(currencies));
    
};

// adding dynamically all currecncy denomination in  both dropdowns
const Dropdowns = async () => {
    const currencyList = await GetExchangeRates(); // Fetch currency data
    console.log(currencyList)

    for (const currCode in currencyList)  // Iterating over the keys of currency list
        {
        const option1 = `<option value="${currCode}">${currCode}</option>`;
        const option2 = `<option value="${currCode}">${currCode}</option>`;
        
        inputdeno.innerHTML += option1; // Append to input selcect option
        outputdeno.innerHTML += option2; // Append to  output select option 
    }
};

// Call the function to populate both dropdowns
populateDropdowns();












