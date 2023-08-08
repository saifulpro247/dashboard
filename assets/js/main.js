(function($) {
    "use strict";
    $(document).ready(function(e) {
        
    
        // chart one

        var options = {
            chart: {
              type: 'line'
            },
            stroke: {
                curve: 'smooth',
              },
              legend: {
                show: false
              },

              xaxis: {
                lines: {
                  show: false,
                }
              },
              yaxis: {
                lines: {
                  show: false,
                }
              },
            series: [{
              name: 'sales',
              data: [30,40,45,50,49,60,70,91,125]
            }],

            xaxis: {
              categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
            }
          }
          
          var chart = new ApexCharts(document.querySelector("#month-chart"), options);
          
          chart.render();
        
    })

    
})(jQuery);
