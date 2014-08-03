// This is the javascript 
$(document).ready(function() {
	// Dateinamen auslesen
	var files = new Array("IMGP5364_Kaktus-mit-Augen.jpg", "sdjfkjsbd.jpg");
	var dates = new Array("00.00.00", "00.00.00");
	
	// Bilder einfügen
	var html = ""
	for(row = 0; row < 10; row++) {
		
		html += "<tr>";
		for(col = 0; col < 5; col++) {
			if(files.length > row*5 + col) {
				html += "<td>" + 
					"<a href=\"data/" + files[row*5 + col] + "\" data-lightbox=\"image\">" + 
					"<div class=\"item\"><img src=\"data/" + files[row*5 + col] + "\"></img><p>" + dates[row*5 + col] + "</p></div>" + 
					"</a></td>";
			}
			else {
				html += "<td></td>";
			}
		}
		html += "</tr>";
	}
	
	$("#container").html(html);
		
});