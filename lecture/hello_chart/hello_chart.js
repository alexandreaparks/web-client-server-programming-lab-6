let canvas = document.querySelector('#soda-chart')
let ctx = canvas.getContext('2d')

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [ {
            label: 'Number of votes',
            data: [18, 14, 7, 10],
            backgroundColor: ['red', 'blue', 'green', 'yellow']
        } ]
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