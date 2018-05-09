// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Workout', 6],
  ['Listen Music', 8],
  ['Learn Something New', 7],
  ['Do Something Weird', 5],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'What I Love To Do'};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
