(function() {
	
	function id_decoder(id){
		return statejson.candidates[id].color;
	}
	
	
	var state = d3.selectAll('path').attr('fill', function(d){
		if (this.id==="path57"){
				return 'none'
			}		
		
		if (this.id!="SP-"){
			return id_decoder(statejson.winner[this.id]);
		}
		else{
			return "pink";
		}
		
		
		
		});
})(); //<-- EOF -->//

