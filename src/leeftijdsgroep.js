import * as d3 from 'd3';

  function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
            console.log('kaas');
			console.log(data);

            const cannabis = data[0];

            const cannabisData = [
                {
                    age: "18_19",
                    percentage: Number(cannabis['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(cannabis['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(cannabis['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(cannabis['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(cannabis['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(cannabis['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(cannabis['Leeftijdsgroepen 65+'])
                }
            ]

            console.log(cannabisData);
            
    const chartWidth = 200
    const chartHeight = 200

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(cannabisData, d => d.percentage)])
        .range([0, chartWidth]);

    const yScale = d3.scaleBand()
        .domain(d3.map(cannabisData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#bars')
    .selectAll('rect')
    .data(cannabisData)
    .join('rect')
    .attr('height', yScale.bandwidth())
    .attr('width', d => xScale(d.percentage))
    .attr('fill', "var(--wiet)")
    .attr('y', d => yScale(d.age))

    d3.select('#labels')
    .selectAll('text')
    .data(cannabisData)
    .join('text')
    .attr('y', d => yScale(d.age) + 15)
    .attr('x', d => xScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age);

  })}

// setInterval(getData, seconds * 1000)

getData();