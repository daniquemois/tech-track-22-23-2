import * as d3 from 'd3';

  function getData() {
	console.log('Grabbing new userdata...');
	
	fetch('https://opensheet.elk.sh/1KqzNQUVOkJ1Miw6TlSb5jvmERoKaKZhFU1NUqonl5f0/1')
		.then(res => res.json())
		.then(data => {
            const cannabis = data[0];
            const cannabisData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(cannabis['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(cannabis['Uitgaanders niet'])
                }
			]
			const coke = data[1];
            const cokeData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(coke['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(coke['Uitgaanders niet'])
                }
			]
			const xtc = data[2];
            const xtcData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(xtc['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(xtc['Uitgaanders niet'])
                }
			]
			const amfetamine = data[3];
            const amfetamineData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(amfetamine['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(amfetamine['Uitgaanders niet'])
                }
			]
			const ghb = data[4];
            const ghbData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(ghb['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(ghb['Uitgaanders niet'])
                }
			]
			const lachgas = data[5];
            const lachgasData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(lachgas['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(lachgas['Uitgaanders niet'])
                }
			]
			const keta = data[6];
            const ketaData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(keta['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(keta['Uitgaanders niet'])
                }
			]
			const tabak = data[8];
            const tabakData = [
                {
                    personen: "uitgaanders",
                    percentage: Number(tabak['Uitgaanders wel'])
                },
                {
                    personen: "uitgaanders niet",
                    percentage: Number(tabak['Uitgaanders niet'])
                }
			]

			var width = 200;
			var height = 200;
			var radius = Math.min(width, height) /2;
			var color = d3.scaleOrdinal(d3.schemeCategory10);

			var pie = d3.pie()
					.value(function(d, i) { return d.percentage})
					.sort(null);

			var arc = d3.arc()
					.innerRadius(0)
					.outerRadius(radius);

			var svg = d3.select('#chart')
					.append("svg")
					.attr('width', width)
					.attr('height', height)
					.append('g')
					.attr("transform","translate("+ width/2 +","+ height/2 +")");
					
			svg.selectAll('path')
				.data(pie(cannabisData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	

			var cokesvg = d3.select('#cokechart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			cokesvg.selectAll('path')
				.data(pie(cokeData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	

			var xtcsvg = d3.select('#xtcchart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			xtcsvg.selectAll('path')
				.data(pie(xtcData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	

			var amfetaminesvg = d3.select('#amfetaminechart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			amfetaminesvg.selectAll('path')
				.data(pie(amfetamineData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	

			var ghbsvg = d3.select('#ghbchart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			ghbsvg.selectAll('path')
				.data(pie(ghbData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	

			var lachgassvg = d3.select('#lachgaschart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			lachgassvg.selectAll('path')
				.data(pie(lachgasData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	
			
			var ketasvg = d3.select('#ketasvg')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			ketasvg.selectAll('path')
				.data(pie(ketaData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	
			
			var tabaksvg = d3.select('#tabakchart')
				.append("svg")
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr("transform","translate("+ width/2 +","+ height/2 +")");
				
			tabaksvg.selectAll('path')
				.data(pie(tabakData))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d,i){
				return color(d.data.percentage);
				});	
  })}
getData();
