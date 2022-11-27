const seconds = 10;

function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
			console.log(data);
		
			let newArray = [];
            
            data.forEach(item => {
                newArray.push(item["Prijs"])
            })
                
    var options = [newArray];
    
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
      item.appendChild(document.createTextNode(array[1]));
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
      item.appendChild(document.createTextNode(array[5]));
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
      item.appendChild(document.createTextNode(array[2]));
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
      item.appendChild(document.createTextNode(array[4]));
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
      item.appendChild(document.createTextNode(array[6]));
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
      item.appendChild(document.createTextNode(array[7]));
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
      item.appendChild(document.createTextNode(array[8]));
      // Add it to the list: 
      section.appendChild(item);
      
    
      // Finally, return the constructed list:
      return section;
    }
    
    document.getElementById('wietkostten').appendChild(makeWiet(options[0]));
    document.getElementById('alcoholkostten').appendChild(makeAlcohol(options[0]));
    document.getElementById('cokekostten').appendChild(makeCoke(options[0]));
    document.getElementById('ketakostten').appendChild(makeKeta(options[0]));
    document.getElementById('amfetaminekostten').appendChild(makeAmfetamine(options[0]));
    document.getElementById('tabakkostten').appendChild(makeTabak(options[0]));
    document.getElementById('ghbkostten').appendChild(makeGHB(options[0]));
    document.getElementById('lachgaskostten').appendChild(makeLachgas(options[0]));
    document.getElementById('xtckostten').appendChild(makeXtc(options[0]));
        })
    }
    
    // setInterval(getData, seconds * 1000)
    
    getData();