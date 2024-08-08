const comedogenicIngredients = new Set([
    "cocoa butter",
    "butyl stearate",
    "oleic acid",
    "acetylated lanolin alcohol",
    "lanolin acid",
    "coconut oil",
    "isopropyl myristate",
    "isopropyl linoleate",
    "isopropyl isotearate",
    "myristyl lactate",
    "myristyl myristate",
    "isopropyl palmitate",
    "laureth-4",
    "oleyl alcohol",
    "octyl palmitate", 
    "laneth-10",
    "laneth-15",
    "wheat germ oil",
    "sodium chloride",
    "sodium lauryl sulfate",
    "oleth-3",
    "algae extract",
    "stearic acid",
    "shea butter",
    "palm oil",
    "squalene",
    "almond oil",
    "avocado oil",
    "a & d additive",
    "apricot kernel oil",
    "ascorbyl palmitate",
    "flaxseed oil",
    "capric acid",
    "cera alba",
    "beeswax",
    "ceteareth-20",
    "cetearyl alcohol + ceteareth 20",
    "cetearyl alcohol",
    "cetyl acetate",
    "Cetyl alcohol",
    "coconut alkanes",
    "cocos nucifera",
    "corn oil",
    "cotton seed oil",
    "decyl oleate",
    "di (2 ethylhexyl) succinate",
    "dioctyl malate",
    "dioctyl succinate",
    "eicosanoic acid",
    "ethylhexyl palmitate",
    "ethylhexyl pelargonate",
    "evening primrose oil",
    "glyceryl stearate SE",
    "glyceryl-3-diisostearate",
    "glycine soya oil",
    "grapeseed oil",
    "hexylene glycol",
    "hydrogenated vegetable oil",
    "isocetyl alcohol",
    "isodecyl oleate",
    "isopropyl isostearate",
    "isopropyl lanolate",
    "isopropyl linolate",
    "isopropyl myristate",
    "isopropyl neopentanoate",
    "isopropyl palmitate",
    "isostearic acid",
    "isostearyl alcohol",
    "isostearyl isostearate",
    "isostearyl neopentanoate",
    "laneth-10",
    "lanolic acid",
    "lanolin alcohol",
    "laureth-23",
    "laureth-4",
    "lauric acid",
    "linoleic acid",
    "linolenic acid",
    "linseed oil",
    "mineral oil",
    "mink oil",
    "mink oil, refined",
    "myreth-3 myristate",
    "myristic acid",
    "myristyl alcohol",
    "myristyl lactate",
    "myristyl myristate",
    "octyl palmitate",
    "octyl stearate",
    "octyldodecanol",
    "olea europaea fruit oil",
    "oleic acid (in natural oils)",
    "oleth-10",
    "oleth-3 phosphate",
    "oleth-5",
    "oleyl alcohol",
    "olive oil",
    "palm oil",
    "palmitic acid",
    "peach kernel oil",
    "peanut oil",
    "peg 100 distearate",
    "peg 150 distearate",
    "peg 16 lanolin",
    "peg 200 dilaurate",
    "peg 8 stearate",
    "pg caprylate/caprate",
    "pentaerythrital tetraisostearate",
    "pg dipelargonate",
    "pg monostearate",
    "phytantriol",
    "polyglyceryl-3-diisostearate",
    "peg 16 lanolin",
    "ppg 10 cetyl ether",
    "ppg 12 PEG 65 lanolin oil",
    "ppg 2 myristyl propionate",
    "ppg 5 Ceteth 10 phosphate",
    "prunus amygdalus dulcis oil",
    "prunus dulcis oil",
    "sandalwood seed oil",
    "sesame oil",
    "shark liver oil",
    "sorbitan isostearate",
    "sorbitan laurate",
    "sorbitan oleate",
    "soy oil",
    "soybean oil",
    "steareth-10",
    "steareth-20",
    "stearic acid",
    "stearyl alcohol",
    "stearyl heptanoate",
    "sulfulated jojoba oil",
    "sweet almond oil",
    "triethanoleamine",
    "vitamin a palmitate",
    "vitis vinifera oil",
    "water-soluble sulfur",
    "wheat germ glyceride",
    "xylene"















































































]); 
 
// function logSubmit(event) {
//     event.preventDefault();

    // // Get the input value
    // const input = document.getElementById("ingredients").value;
    
    // // Split the input values into an array of ingredients
    // // Taking into account that it could be separated by commas or newlines
    // // This regex split the string based on multiple delimiters
    // const ingredientList = input.split(/\s*[\s,]+\s*/);

    // const foundIngredients = []

    // for (let i = 0; i < ingredientList.length; i++) {
    //      const currentIngredients = ingredientList[i].trim().toLowerCase();

    //     if (comedogenicIngredients.includes(currentIngredients)) {
    //          foundIngredients.push(currentIngredients);
    //      }
    // }

    // // Display the found ingredients (if any)
    // if (foundIngredients.length > 0) {
    //     log.textContent = `Comedogenic ingredients found ${foundIngredients.join(", ")}`;
    // } else {
    //     log.textContent = "No comedogenic ingredients found";
    // }



const form = document.getElementById("form");
const log = document.getElementById("log");
const button = document.getElementById("submit")
// form.addEventListener("submit", logSubmit) 


form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // handle submit
    console.log("form submitted")
    const input = document.getElementById("ingredients").value;
    console.log(input)

    const ingredientList = input.split(/[,\n]+/).map(item => item.trim().toLowerCase());

    console.log(ingredientList) 

    const foundIngredients = []

    // i already defined it tho TT (like crying face) it says the ingredientlist is not defined

    // this part
    for (let i = 0; i < ingredientList.length; i++) { 
        const currentIngredients = ingredientList[i];
        console.log(currentIngredients)

        // it looks correct to me


       if (comedogenicIngredients.has(currentIngredients)) {
            console.log("inside check if includes ingredients")
            foundIngredients.push(currentIngredients);
        }
   }

   log.textContent = `Found ingredients: ${foundIngredients}`

  });


  

