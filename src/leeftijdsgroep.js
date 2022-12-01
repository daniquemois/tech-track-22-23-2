import * as d3 from 'd3';

  function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
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
            const alcohol = data[8];

            const alcoholData = [
                {
                    age: "18_19",
                    percentage: Number(alcohol['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(alcohol['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(alcohol['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(alcohol['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(alcohol['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(alcohol['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(alcohol['Leeftijdsgroepen 65+'])
                }
            ]
            const coke = data[1];

            const cokeData = [
                {
                    age: "18_19",
                    percentage: Number(coke['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(coke['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(coke['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(coke['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(coke['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(coke['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(coke['Leeftijdsgroepen 65+'])
                }
            ]
            const xtc = data[2];

            const xtcData = [
                {
                    age: "18_19",
                    percentage: Number(xtc['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(xtc['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(xtc['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(xtc['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(xtc['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(xtc['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(xtc['Leeftijdsgroepen 65+'])
                }
            ]
            const amfetamine = data[3];

            const amfetamineData = [
                {
                    age: "18_19",
                    percentage: Number(amfetamine['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(amfetamine['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(amfetamine['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(amfetamine['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(amfetamine['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(amfetamine['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(amfetamine['Leeftijdsgroepen 65+'])
                }
            ]
            const ghb = data[4];

            const ghbData = [
                {
                    age: "18_19",
                    percentage: Number(ghb['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(ghb['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(ghb['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(ghb['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(ghb['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(ghb['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(ghb['Leeftijdsgroepen 65+'])
                }
            ]
            const lachgas = data[5];

            const lachgasData = [
                {
                    age: "18_19",
                    percentage: Number(lachgas['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(lachgas['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(lachgas['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(lachgas['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(lachgas['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(lachgas['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(lachgas['Leeftijdsgroepen 65+'])
                }
            ]
            const keta = data[6];

            const ketaData = [
                {
                    age: "18_19",
                    percentage: Number(keta['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(keta['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(keta['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(keta['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(keta['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(keta['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(keta['Leeftijdsgroepen 65+'])
                }
            ]
            const tabak = data[8];

            const tabakData = [
                {
                    age: "18_19",
                    percentage: Number(tabak['Leeftijdsgroepen 18-19'])
                },
                {
                    age: "20_24",
                    percentage: Number(tabak['Leeftijdsgroepen 20-24'])
                },
                {
                    age: "25_29",
                    percentage: Number(tabak['Leeftijdsgroepen 25-29'])
                },
                {
                    age: "30_39",
                    percentage: Number(tabak['Leeftijdsgroepen 30-39'])
                },
                {
                    age: "40_49",
                    percentage: Number(tabak['Leeftijdsgroepen 40-49'])
                },
                {
                    age: "50_64",
                    percentage: Number(tabak['Leeftijdsgroepen 50-64'])
                },
                {
                    age: "65+",
                    percentage: Number(tabak['Leeftijdsgroepen 65+'])
                }
            ]
            
    const chartWidth = 150
    const chartHeight = 200

    //Cannabis
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

    d3.select('#labelsy')
    .selectAll('text')
    .data(cannabisData)
    .join('text')
    .attr('y', d => yScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#labelsx')
    .selectAll('text')
    .data(cannabisData)
    .join('text')
    .attr('x', d => xScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    //Alcohol
    const alcxScale = d3.scaleLinear()
        .domain([0, d3.max(alcoholData, d => d.percentage)])
        .range([0, chartWidth]);

    const alcyScale = d3.scaleBand()
        .domain(d3.map(alcoholData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#alcoholbars')
    .selectAll('rect')
    .data(alcoholData)
    .join('rect')
    .attr('height', yScale.bandwidth())
    .attr('width', d => alcxScale(d.percentage))
    .attr('fill', "var(--alcohol)")
    .attr('y', d => alcyScale(d.age))

    d3.select('#alcohollabelsy')
    .selectAll('text')
    .data(alcoholData)
    .join('text')
    .attr('y', d => alcyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#alcohollabelsx')
    .selectAll('text')
    .data(alcoholData)
    .join('text')
    .attr('x', d => alcxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // Coke
    const cokexScale = d3.scaleLinear()
        .domain([0, d3.max(cokeData, d => d.percentage)])
        .range([0, chartWidth]);

    const cokeyScale = d3.scaleBand()
        .domain(d3.map(cokeData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#cokebars')
    .selectAll('rect')
    .data(cokeData)
    .join('rect')
    .attr('height', cokeyScale.bandwidth())
    .attr('width', d => cokexScale(d.percentage))
    .attr('fill', "var(--coke)")
    .attr('y', d => cokeyScale(d.age))

    d3.select('#cokelabelsy')
    .selectAll('text')
    .data(cokeData)
    .join('text')
    .attr('y', d => cokeyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#cokelabelsx')
    .selectAll('text')
    .data(cokeData)
    .join('text')
    .attr('x', d => cokexScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // Xtc
    const xtcxScale = d3.scaleLinear()
        .domain([0, d3.max(xtcData, d => d.percentage)])
        .range([0, chartWidth]);

    const xtcyScale = d3.scaleBand()
        .domain(d3.map(xtcData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#xtcbars')
    .selectAll('rect')
    .data(xtcData)
    .join('rect')
    .attr('height', xtcyScale.bandwidth())
    .attr('width', d => xtcxScale(d.percentage))
    .attr('fill', "var(--xtc)")
    .attr('y', d => xtcyScale(d.age))

    d3.select('#xtclabelsy')
    .selectAll('text')
    .data(xtcData)
    .join('text')
    .attr('y', d => xtcyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#xtclabelsx')
    .selectAll('text')
    .data(xtcData)
    .join('text')
    .attr('x', d => xtcxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // Amfetamine
    const amfxScale = d3.scaleLinear()
        .domain([0, d3.max(amfetamineData, d => d.percentage)])
        .range([0, chartWidth]);

    const amfyScale = d3.scaleBand()
        .domain(d3.map(amfetamineData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#amfetaminebars')
    .selectAll('rect')
    .data(amfetamineData)
    .join('rect')
    .attr('height', amfyScale.bandwidth())
    .attr('width', d => amfxScale(d.percentage))
    .attr('fill', "var(--amfetamine)")
    .attr('y', d => amfyScale(d.age))

    d3.select('#amfetaminelabelsy')
    .selectAll('text')
    .data(amfetamineData)
    .join('text')
    .attr('y', d => amfyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#amfetaminelabelsx')
    .selectAll('text')
    .data(amfetamineData)
    .join('text')
    .attr('x', d => amfxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // Ghb
    const ghbxScale = d3.scaleLinear()
        .domain([0, d3.max(ghbData, d => d.percentage)])
        .range([0, chartWidth]);

    const ghbyScale = d3.scaleBand()
        .domain(d3.map(ghbData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#ghbbars')
    .selectAll('rect')
    .data(ghbData)
    .join('rect')
    .attr('height', ghbyScale.bandwidth())
    .attr('width', d => ghbxScale(d.percentage))
    .attr('fill', "var(--ghb)")
    .attr('y', d => ghbyScale(d.age))

    d3.select('#ghblabelsy')
    .selectAll('text')
    .data(ghbData)
    .join('text')
    .attr('y', d => ghbyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#ghblabelsx')
    .selectAll('text')
    .data(ghbData)
    .join('text')
    .attr('x', d => ghbxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // lachgas
    const lachxScale = d3.scaleLinear()
        .domain([0, d3.max(lachgasData, d => d.percentage)])
        .range([0, chartWidth]);

    const lachyScale = d3.scaleBand()
        .domain(d3.map(lachgasData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#lachgasbars')
    .selectAll('rect')
    .data(lachgasData)
    .join('rect')
    .attr('height', lachyScale.bandwidth())
    .attr('width', d => lachxScale(d.percentage))
    .attr('fill', "var(--lachgas)")
    .attr('y', d => lachyScale(d.age))

    d3.select('#lachgaslabelsy')
    .selectAll('text')
    .data(lachgasData)
    .join('text')
    .attr('y', d => lachyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#lachgaslabelsx')
    .selectAll('text')
    .data(lachgasData)
    .join('text')
    .attr('x', d => lachxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // Keta
    const ketaxScale = d3.scaleLinear()
        .domain([0, d3.max(ketaData, d => d.percentage)])
        .range([0, chartWidth]);

    const ketayScale = d3.scaleBand()
        .domain(d3.map(ketaData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#ketabars')
    .selectAll('rect')
    .data(ketaData)
    .join('rect')
    .attr('height', ketayScale.bandwidth())
    .attr('width', d => ketaxScale(d.percentage))
    .attr('fill', "var(--keta)")
    .attr('y', d => ketayScale(d.age))

    d3.select('#ketalabelsy')
    .selectAll('text')
    .data(ketaData)
    .join('text')
    .attr('y', d => ketayScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#ketalabelsx')
    .selectAll('text')
    .data(ketaData)
    .join('text')
    .attr('x', d => ketaxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

    // tabak
    const tabakxScale = d3.scaleLinear()
        .domain([0, d3.max(tabakData, d => d.percentage)])
        .range([0, chartWidth]);

    const tabakyScale = d3.scaleBand()
        .domain(d3.map(tabakData, d => d.age))
        .range([0, chartHeight])
    .paddingInner(0.05);

    d3.select('#tabakbars')
    .selectAll('rect')
    .data(tabakData)
    .join('rect')
    .attr('height', tabakyScale.bandwidth())
    .attr('width', d => tabakxScale(d.percentage))
    .attr('fill', "var(--tabak)")
    .attr('y', d => tabakyScale(d.age))

    d3.select('#tabaklabelsy')
    .selectAll('text')
    .data(tabakData)
    .join('text')
    .attr('y', d => tabakyScale(d.age) - 15)
    .attr('fill', "var(--grey)")
    .text(d => d.age)

    d3.select('#tabaklabelsx')
    .selectAll('text')
    .data(tabakData)
    .join('text')
    .attr('x', d => tabakxScale(d.percentage) + 15)
    .attr('fill', "var(--grey)")
    .text(d => d.percentage);

  })}

// setInterval(getData, seconds * 1000)

getData();