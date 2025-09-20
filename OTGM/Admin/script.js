google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Set Data
function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Producto', 'Ventas'],
      ['Guitarra eléctrica', 120],
      ['Auriculares', 95],
      ['Bajo', 55],
      ['Piano digital', 40],
      ['Amplificador', 30]
    ]);

    // Set Options
    const options = {
        title: 'Productos más vendidos',
        pieHole: 0.4,
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('grafico-1'));
    chart.draw(data, options);
}