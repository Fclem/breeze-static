function read_names() {
	$('span.sec_status').each(function (count) {
		console.debug($(this).parent().text().split(/\r?\n/)[2].split(/-/)[0].split(/-?[01]\.[0-9] /)[1].trimRight());
	});
};
