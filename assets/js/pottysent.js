(function() {

	var  colors ={   
		"1": "#0000FF",
		"2": "#46a546",
		"3": "#9d261d",
		"4": "#7a43b6",
		"5": "#f89406",
		"6": "#ffc40d",
		"7": "#c3325f",
		"8": "#c09853",
		"9": "#049cdb",
		"10": "#f2dede"
    }
    
	function id_decoder(id){
		return colors[id];
	}
	
	// Color the map!
	var state = d3.selectAll('path').attr('fill', function(d){
		// Path 57 is the grey line that seperates hawaii and alaska
		if (this.id==="path57"){
				return 'none'
			}		
		// SF is the north part of Michigan
		if (this.id==="SP-"){
			return id_decoder(statejson.winner['MI']);
		}
		else{
			return id_decoder(statejson.winner[this.id]);
		}
		
		
		
	});
	
	// Color the legend!
	//console.log(statejson.candidates);
	$.each(statejson.candidates, function(index, value) { 
	  $('#legend').append("<tr><td><code>"+value+"</code></td><td>"+statejson.totals[index]+"</td><td class='swatch-col'><span class='swatch' style='background-color:"+colors[index]+";'></span></tr>");
	  //console.log(index + ': ' + value); 
	});
	
})(); //<-- EOF -->//

