const input = document.querySelector('#input')
const output = document.querySelector('#output')
const inputdeno = document.querySelector('#currencydeno1')
const outputdeno = document.querySelector('#currencydeno2')

const URL ='https://api.currencyapi.com/v3/latest?apikey=cur_live_bojRL6surjg4ZhsBn8qarhdpoSJVhE5T31LufQcX'


const GetExchangeRates= async () => {
    const response = await fetch(URL); // Fetch the data
    const data = await response.json(); // Parse JSON response
    let currencies = data.data; // Extract the currency object
    return currencies; 
    
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
Dropdowns();

const  convertcurrency = async () =>
    {
    let currencies = await GetExchangeRates();  
    const fromamount = parseFloat (input.value);
    const fromcurrency = inputdeno.value;
    const tocurrency = outputdeno.value;

    const fromLiveCurrencyValue = currencies[fromcurrency].value; // Get the value of the from currency
    const toLiveCurrencyValue = currencies[tocurrency].value; // Get the value of the to currency

    if (fromamount!= 0)
    {
        const converted_amount = (fromamount *(toLiveCurrencyValue))/fromLiveCurrencyValue;
        output.value = converted_amount.toFixed(2); //round off to 2 decimal places
    }
    else
    {
        alert("Please enter a valid amount");
    }
    };
    convertcurrency();
input.addEventListener('input', convertcurrency); // activates  on amount input change
inputdeno.addEventListener('change', convertcurrency); // activates on from-currency change
outputdeno.addEventListener('change', convertcurrency); // activates on to-currency change



const arrow = document.querySelector('arrow-image')
const rotateimage = () =>{
    arrow.addEventListener('click', () =>{
        arrow.style.transform = `rotate(${90}deg)`;
    });

};

