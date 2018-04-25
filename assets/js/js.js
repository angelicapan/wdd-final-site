$(document).ready(function() {

	// jQuery Function Number 1
    $('#main-content').fadeIn(500);
    //jQuery Function Number 2
   $(".item").hover(function() {
   		// jQuery Function Number 3
		let isRound = $(this).hasClass("round");
		
		let condition = !isRound;

		if (condition) { 
			// jQuery Function Number 4
			$(this).addClass("round");
			
		} else { 
			// jQuery Function Number 5
			$(this).removeClass("round");
			
		} 
		
		
	})
	//jQuery Function Number 6
	$(".item").click(function() {
   		// jQuery Function Number 7
   		if ($(this).hasClass("1")){
   			$(".center").text("I saw this cool toadstool in front of crossroads and put a coin on top of it. I wanted to see how long it would stay there but I forgot to check.");	
   		}
   		if ($(this).hasClass("2")){
   			$(".center").text("I learned to like eating salads this year.");	
   		}
   		if ($(this).hasClass("3")){
   			$(".center").text("Golden hour! This is the view from Soda Hall");	
   		}
   		if ($(this).hasClass("4")){
   			$(".center").text("A nice day spent catching Pokemon on Telegraph!");	
   		}
   		if ($(this).hasClass("5")){
   			$(".center").text("I went to a farmers' market in San Jose and didn't know what Jujubes were. They have funny names. ");	
   		}
   		if ($(this).hasClass("6")){
   			$(".center").text("He ties his shoe lace weird. ");	
   		}
   		if ($(this).hasClass("7")){
   			$(".center").text("One of the rare times where I wake up early enough to get the breakfast menu at the Den");	
   		}
   		if ($(this).hasClass("8")){
   			$(".center").text("Cute birds by a house the day we went to Corgi Con");	
   		}
   		if ($(this).hasClass("9")){
   			$(".center").text("I stayed in SoCal with my roommate over winter break and we went to a cute cafe!");	
   		}
   			
   			
   	
   		
		
		
		
	})

});