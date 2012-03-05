(function() {
	function candidate_id_decoder(president){	
		// Decode president name based on codes
		// because our data doesn't just give us their names
		if(president == '1701'){
			return 'McCain';
		}
		else if(president == '1918') {
			return 'Obama';
		}
		else {
			return false;
		}
	}
	
	var state_data = [];
	$.each(statejson.locals, function(key, data){
	 
		// Grab the ID of the candidate elected president in that state
		var president = data.races.President[''].final;
	 
		// Grab the abbreviation of that state
		var state_abbreviation = data.abbr;
	 
		// Create a JSON object containing the state abbreviation
		// and the name of the president who won that state
		var datarow = {"state_abbr": state_abbreviation,
						 "president": candidate_id_decoder(president)};
	 
		// Add that JSON object to our data
		state_data.push(datarow);
	 
	});
	
	var state = d3.selectAll('path').attr('fill', function(d){
	if (this.id==="path57"){
		return 'none'
	}
	// Get the ID of the path we are currently working with
	// Our SVG uses the state abbreviation for the ID
	var abbr = this.id;
  
	
	// Loop through the state data looking for
	// a match for that abbreviation
	// Then returning the corresponding president
	// who won that state, from the array we made earlier
	
		$.each(state_data, function(key, data){
			if(data.state_abbr == abbr){
				state_president = data.president;
			}
		})
	 
		// Return colors
		// based on data
		if(state_president == "Obama"){
				return "blue"
			}
			else if(state_president == "McCain"){
				return "red"
			}
			else {
				return "#CCC"
			}
	
	});
})();