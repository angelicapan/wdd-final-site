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
   		
   			$(".center").text("Click on more memories!");
   			
   	
   		
		
		
		
	})

});