const seconds = 10;

function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
			console.log(data);
		
            let newArray = [];
            
            data.forEach(item => {
                newArray.push(item["Hoofddiagnose"])
                newArray.push(item["Nevendiagnose"])
                newArray.push(item["Ziekenhuisopnames"])
            })

            var options = [newArray];
    
    function makeWiet(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[0]));
        item1.appendChild(document.createTextNode(array[1]));
        item2.appendChild(document.createTextNode(array[2]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    function makeCoke(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[3]));
        item1.appendChild(document.createTextNode(array[4]));
        item2.appendChild(document.createTextNode(array[5]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    function makeXtc(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[6]));
        item1.appendChild(document.createTextNode(array[7]));
        item2.appendChild(document.createTextNode(array[8]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    function makeAmfetamine(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[9]));
        item1.appendChild(document.createTextNode(array[10]));
        item2.appendChild(document.createTextNode(array[11]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    function makeAlcohol(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[21]));
        item1.appendChild(document.createTextNode(array[22]));
        item2.appendChild(document.createTextNode(array[23]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    function makeTabak(array) {
        // Create the list element:
        var list = document.createElement('ul');
        // Create the list item:
        var item = document.createElement('li');
        var item1 = document.createElement('li');
        var item2 = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[24]));
        item1.appendChild(document.createTextNode(array[25]));
        item2.appendChild(document.createTextNode(array[26]));
        // Add it to the list:
        list.appendChild(item);
        list.appendChild(item1);
        list.appendChild(item2);
    // Finally, return the constructed list:
    return list;
    }
    document.getElementById('wietziekenhuis').appendChild(makeWiet(options[0]));
    document.getElementById('cokeziekenhuis').appendChild(makeCoke(options[0]));
    document.getElementById('xtcziekenhuis').appendChild(makeXtc(options[0]));
    document.getElementById('amfetamineziekenhuis').appendChild(makeAmfetamine(options[0]));
    document.getElementById('alcoholziekenhuis').appendChild(makeAlcohol(options[0]));
    document.getElementById('tabakziekenhuis').appendChild(makeTabak(options[0]));
        })
    }
    
    // setInterval(getData, seconds * 1000)
    
    getData();