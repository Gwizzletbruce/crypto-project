

alert("hello")
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Crypto Coin Mentions'
        },
        xAxis: {
            categories: ["bitcoin", "ethereum", "litecoin", "cardano", "polkadot", "stellar", "binance coin", "monero" ]
        },
        yAxis: {
            title: {
                text: 'Mentions'
            }
        },
        series: [{
            name: 'Acronym',
            data: [7, 8, 9, 1, 2, 4, 7]
        }, {
            name: 'Standard',
            data: [5, 10, 3, 5, 6, 6, 7]
        }]
    });
});

// alert(coins)