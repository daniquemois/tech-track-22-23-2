const seconds = 10;

function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
			console.log(data);
		
			let newArray = [];
            
         data.forEach(item => {
                newArray.push(item["Aantal gebruikers"])
            })
                    
		
		const upper = newArray.map(element => {
			return element.charAt(0).toUpperCase() + element.slice(1);
		}).filter(element => {
      return element !== "";
    });
        
      console.log("upper", upper);
    var options = [upper];
    
    function makeWiet(array) {
    // Create the list element:
    var section = document.createElement('section');

    
    // Create the list item:
    var item = document.createElement('h2');

    // Set its contents:
    item.appendChild(document.createTextNode(array[0]));
    // Add it to the list: 
    section.appendChild(item);
    

    // Finally, return the constructed list:
    return section;
}
function makeAlcohol(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[7]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeCoke(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[1]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeKeta(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[6]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeAmfetamine(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[3]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeTabak(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[8]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeGHB(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[4]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeLachgas(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[5]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}
function makeXtc(array) {
  // Create the list element:
  var section = document.createElement('section');

  
  // Create the list item:
  var item = document.createElement('h2');

  // Set its contents:
  item.appendChild(document.createTextNode(array[2]));
  // Add it to the list: 
  section.appendChild(item);
  

  // Finally, return the constructed list:
  return section;
}

document.getElementById('wietgebruikers').appendChild(makeWiet(options[0]));
document.getElementById('alcoholgebruikers').appendChild(makeAlcohol(options[0]));
document.getElementById('cokegebruikers').appendChild(makeCoke(options[0]));
document.getElementById('ketagebruikers').appendChild(makeKeta(options[0]));
document.getElementById('amfetaminegebruikers').appendChild(makeAmfetamine(options[0]));
document.getElementById('tabakgebruikers').appendChild(makeTabak(options[0]));
document.getElementById('ghbgebruikers').appendChild(makeGHB(options[0]));
document.getElementById('lachgasgebruikers').appendChild(makeLachgas(options[0]));
document.getElementById('xtcgebruikers').appendChild(makeXtc(options[0]));
	})
}

// setInterval(getData, seconds * 1000)

getData();