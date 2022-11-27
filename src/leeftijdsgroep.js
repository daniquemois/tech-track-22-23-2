import * as d3 from 'd3';

  function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
			console.log(data);
		
			let newArray = [];
            
            data.forEach(item => {
                newArray.push(item["Leeftijdsgroepen 18-19", "Leeftijdsgroepen 18-19"])
            })
                
    var options = [newArray];
    
    const chartWidth = 700
    const chartHeight = 800

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(options, d => d.Aantal)])
        .range([0, chartWidth]);

    const yScale = d3.scaleBand()
        .domain(d3.map(options, d => d.Jaar))
        .range([0, chartHeight])
        .paddingInner(0.05);

    d3.select('#bars')
    .selectAll('rect')
    .data(options)
    .join('rect')
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d.Aantal))
    .attr('y', d => yScale(d.Jaar))
    .classed('animate__animated animate__headShake animate__infinite', () => Math.random() > 0.8)
    .classed('animate__slower', () => Math.random() > 0.5)

    d3.select('#labels')
    .selectAll('text')
    .data(options)
    .join('text')
    .attr('y', d => yScale(d.Jaar) + 15)
    .text(d => d.Jaar);
}
)}

// setInterval(getData, seconds * 1000)

getData();