var data = [];
var promises = [];

var start = new Date(2019, 03, 10); // 3 --> April
var end = new Date(2019, 03, 11);

/*for (var d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {

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
		data.push([date, minTemp, maxTemp, avgTemp]);
	})
})
.then( function () {
    var csv = 'Date,Min Temp,Max Temp,Avg Temp\n';
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
});*/