(function($) {
    "use strict";
    $(document).ready(function(e) {
        
    
        // chart one
        var options = {
          chart: {
            height: 120,
            type: "line",
            toolbar: {
              show: false,
            },
          },
          stroke: {
            curve: "smooth",
          },
          grid: {
            show: false,
          },

          yaxis: {
            lines: {
              show: false,
            },
            labels: {
              show: false,
            },
          },

          series: [
            {
              name: "sales",
              data: [30, 40, 45, 50, 91, 125],
            },
          ],

          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1998, 1999],
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            lines: {
              show: false,
            },
          },
        };
        var chart = new ApexCharts(document.querySelector("#month-chart"), options);
        chart.render();

        // chart two pie
        var options = {
          series: [88, 22],
          chart: {
            width: 200,
            type: 'donut',
          },
        fill: {
          type: 'gradient',
        },
        legend: {
          show: false
        },
        
        };

        var chart = new ApexCharts(document.querySelector("#sold-pie"), options);
        chart.render();



        
    })

    
})(jQuery);
