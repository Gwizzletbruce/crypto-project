import coins from "/src/app.js"

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
            data: coins
        }, {
            name: 'Standard',
            data: [5, 10, 3]
        }]
    });
});
