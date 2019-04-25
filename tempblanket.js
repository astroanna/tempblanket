
var data = [];
var promises = [];

var start = new Date(2018, 03, 12); // 3 --> April
var end = new Date(2018, 03, 12);

// Name of yarn color, lower end inclusive and higher end exclusive
var colors = [
	["Burgundy", 85, 95],
	["Cranberry", 80, 85],
	["Rust", 75, 80],
	["Mustard", 70, 75],
	["Lemon", 65, 70],
	["Fern", 60, 65],
	["Kelly Green", 55, 60],
	["Sapphire", 50, 55],
	["Colonial Blue", 45, 50],
	["Purple", 40, 45],
	["Eggplant", 30, 40]
];

$(function() {

	$("#f").submit(function(event) {
		event.preventDefault();
		var start = $("#start").val() + "T00:00:00";
		startDate = new Date(start);
		var end = $("#end").val() + "T00:00:00";
		var endDate = new Date(end);

		if (startDate > endDate) {
			alert("The start date cannot be later than the end date.");
			document.getElementById('f').reset();
		}
		else if (endDate > Date.now()) {
			alert("The dates cannot be in the future.");
			document.getElementById('f').reset();
		}

	});
});

/*
for (var d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {

	url = 'https://cors-anywhere.herokuapp.com/'
	+ 'https://api.darksky.net/forecast/'
	+ 'e1f32930767c0bbaebdb9f993e212923/'
	+ '47.6125,-122.3170,'
	+ d.getFullYear() + '-'
	+ ('0' + (d.getMonth()+1)).slice(-2) + '-'
	+ ('0' + d.getDate()).slice(-2)
	+ 'T00:00:00'
	+ '?exclude=currently,minutely,hourly,alerts,flags';

	promises.push(axios.get(url));
}

axios.all(promises)
.then(function (results) {
	results.forEach(function (response) {
		var dateObj = new Date(response.data.daily.data[0].time * 1000);
		var date = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();

		var minTemp = response.data.daily.data[0].temperatureMin;
		var maxTemp = response.data.daily.data[0].temperatureMax;
		var avgTemp = (minTemp + maxTemp) / 2;

		var color = "";

		for (var i = 0; i < colors.length; i++) {
			if ((maxTemp >= colors[i][1]) && (maxTemp < colors[i][2])) {
				color = colors[i][0];
				break;
			}
		}

		data.push([date, minTemp, maxTemp, avgTemp, color]);
	})
})
.then( function () {
    var csv = 'Date,Min Temp,Max Temp,Avg Temp,Color\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'tempdata.csv';
    hiddenElement.click();
})
.catch(function (error) {
	console.log("error bitch");
});
*/
