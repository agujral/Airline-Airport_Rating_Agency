

$( "#button" ).click(function() {
    $( "#item" ).toggle();
});

$( "#button1").click(function() {
    $( "#item1").toggle();
});

$( "#Showtrailer" ).click(function() {
    $( "#trailer" ).toggle();
});

var $select  = $('#airline');

$.getJSON("data.json", function(data) {
	
	$select.html('');
	
	for(var i=0; i < data['airline'].length; i++)
	{
		$select.append('<option id= "'+ data['airline'][i]['id'] +'">' + data['airline'][i]['name'] + '</option>');
		
	}

});

