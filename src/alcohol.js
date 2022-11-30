const seconds = 10;

function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
			console.log(data);
            
        const manVrouw = data[7];
        const manvrouw = [
            {
                glazen: "glazen",
                percentage: Number(manVrouw['Mannen'])
            },
            {
                glazen: "glazen",
                percentage: Number(manVrouw['Vrouwen'])
            }
        ]
                    
    var options = [manvrouw];
    
    function makeMan(array) {
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
    function makeVrouw(array) {
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


document.getElementById('alcoholman').appendChild(makeWiet(options[0]));
document.getElementById('alcoholvrouw').appendChild(makeAlcohol(options[0]));
	})
}

// setInterval(getData, seconds * 1000)

getData();