import * as d3 from 'd3';

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
    }).sort();
        
      console.log(upper);
    var options = [upper];
    
    function makeUL(array) {
    // Create the list element:
    var data = [2, 4, 8, 10];

		var svg = d3.select("svg"),
			width = svg.attr("width"),
			height = svg.attr("height"),
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

		// Generate the pie
		var pie = d3.pie();

		// Generate the arcs
		var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);

		//Generate groups
		var arcs = g.selectAll("arc")
					.data(pie(data))
					.enter()
					.append("g")
					.attr("class", "arc")

		//Draw arc paths
		arcs.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);



    // Add it to the list:
    section.appendChild(item);
    

    // Finally, return the constructed list:
    return section;
}

  document.getElementById('wietgebruikers').appendChild(makeUL(options[0]));
	})
}

// setInterval(getData, seconds * 1000)

getData();

