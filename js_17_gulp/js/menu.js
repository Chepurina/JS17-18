 $(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
		
		
		var interval = setInterval(function(){
  
  // check for when fusionads shows up in DOM
  var fusionad = document.getElementById("fusionads");

  if (fusionad){

    // clear the interval so we stop looping
    clearInterval(interval);
    
    // add the close ad button
    var closead = document.createElement("a");
    closead.id = "close-fusionad";
    closead.innerHTML = "x";
    closead.href = "#";
    document.body.appendChild(closead);

    // close the ad
    document.getElementById("close-fusionad").addEventListener("click", function(e) {
      e.preventDefault();
      this.remove();
      fusionad.remove();
    });

  }

},100); // check every 100ms
    }); // end ready
	
	