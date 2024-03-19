let canvas = document.querySelector('#bridges-chart')
let ctx = canvas.getContext('2d')

// create chart object
let bridgesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [ {
            label: 'Span of Bridge',
            data: [],
            backgroundColor: []
        } ],
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

// build array of objects to store bridge data
bridges = [
    {"name": "Verrazano-Narrows Bridge", "span": 1298.4, "span_text": "1,298.4m", "city": "New York", "location": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "span": 1280.2, "span_text": "1,280.2m", "city": "San Francisco - Marin", "location": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "span": 1158.0, "span_text": "1,158.0m", "city": "Mackinaw - St Ignace", "location": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "span": 1067.0, "span_text": "1,067.0m", "city": "New York - New Jersey", "location": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "span": 853.44, "span_text": "853.44m", "city": "Tacoma - Kitsap", "location": [47.2690, -122.5517]}
]

bridgeChartColors = ['indigo', 'salmon', 'limegreen', 'teal', 'orchid', 'goldenrod', 'mediumaquamarine', 'darkorange']


// loop over bridges array and push name, span, and color to chart
bridges.forEach( function (bridge) {
    // push name and span
    bridgesChart.data.labels.push(bridge.name)
    bridgesChart.data.datasets[0].data.push(bridge.span)

    // push chart colors
    // if every color is used, starts at beginning of array again
    let colorCount = bridgesChart.data.datasets[0].backgroundColor.length
    let color = bridgeChartColors[ colorCount % bridgeChartColors.length ]
    bridgesChart.data.datasets[0].backgroundColor.push(color)

    bridgesChart.update()
} )






