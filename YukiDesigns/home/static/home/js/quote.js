$("#start-now").click(function() {
	$("#price-table-form").show();
	$("#start-now").fadeOut();
	$("#type-label").fadeIn();
	$("#price-label").fadeIn();
});

function priceUpdate() {
	var price = 0;
	var prices = {
		"pages": 75,
		"responsive": 250,
		"type-fast": 500,
		"type-custom": 1500,
		"pages-coeff": 7
	}

	var pages = $('input[name=pages]:checked', '#price-table-form').val();
	var responsive = $('input[name=responsive]:checked', '#price-table-form').val()
	var type = $('input[name=type]:checked', '#price-table-form').val()

	if (pages)
		if (pages != 0)
			price += prices["pages"] * pages;
		else
			price += prices["pages"] * prices["pages-coeff"];

	if (responsive)
		if (responsive == 1)
			price += prices["responsive"];

	if (type)
		if (type == 0)
			price += prices["type-custom"];
		else
			price += prices["type-fast"];

	$("#price-label").text(price + "€");
}

$("#price-table-form")
	.on("input", function() {
		if ($('input[name=type]:checked', '#price-table-form').val())
			$("#responsive-label").fadeIn();
		if ($('input[name=responsive]:checked', '#price-table-form').val())
			$("#pages-label").fadeIn();
		priceUpdate();
	})
;