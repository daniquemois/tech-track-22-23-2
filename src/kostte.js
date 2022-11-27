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
    
    function makeUL(array) {
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

document.getElementById('wietkostten').appendChild(makeUL(options[0]));
	})
}

// setInterval(getData, seconds * 1000)

getData();