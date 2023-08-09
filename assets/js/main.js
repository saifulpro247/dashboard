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


        // pie 1
        var options = {
          series: [75],
          chart: {
            height: 200,
            width: 115,
            type: "radialBar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              track: {
                background: "#EDEFF1"
              },
              dataLabels: {
                show: true,
                name: {
                  show: false
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val) + "%";
                  },
                  color: "#AE9142",
                  fontSize: "18px",
                  show: true,
                  fontWeight: "bold",
                  offsetY: 5
                }
              }
            }
          },
          fill: {
            type: "gradient", 
            gradient: {
              shade: "dark", 
              type: "horizontal", 
              shadeIntensity: 0.8, 
              gradientToColors: ["#07AC72"], 
              inverseColors: true, 
              opacityFrom: 0.5, 
              opacityTo: 1, 
              stops: [0, 100], 
            }
          },
          stroke: {
            show: true,
            lineCap: "round",
            width: 9,
          }
        };
        
        var chart = new ApexCharts(document.querySelector("#sold-pie"), options);
        chart.render();

        // pie 2
        var options = {
          series: [75],
          chart: {
            height: 200,
            width: 115,
            type: "radialBar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              track: {
                background: "#EDEFF1"
              },
              dataLabels: {
                show: true,
                name: {
                  show: false
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val) + "%";
                  },
                  color: "#AE9142",
                  fontSize: "18px",
                  show: true,
                  fontWeight: "bold",
                  offsetY: 5
                }
              }
            }
          },
          fill: {
            type: "gradient", 
            gradient: {
              shade: "dark", 
              type: "horizontal", 
              shadeIntensity: 0.8, 
              gradientToColors: ["#07AC72"], 
              inverseColors: true, 
              opacityFrom: 0.5, 
              opacityTo: 1, 
              stops: [0, 100], 
            }
          },
          stroke: {
            show: true,
            lineCap: "round",
            width: 9,
          }
        };
        
        var chart = new ApexCharts(document.querySelector("#pending-pie"), options);
        chart.render();

        // Available tour donut.
        var options = {
          series: [75],
          chart: {
            height: 270,
            width: 270,
            type: "radialBar",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              track: {
                background: "#EDEFF1"
              },
              dataLabels: {
                show: true,
                name: {
                  show: false
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val) + "%";
                  },
                  color: "#AE9142",
                  fontSize: "18px",
                  show: true,
                  fontWeight: "bold",
                  offsetY: 5
                }
              }
            }
          },
          fill: {
            type: "gradient", 
            gradient: {
              shade: "dark", 
              type: "horizontal", 
              shadeIntensity: 0.8, 
              gradientToColors: ["#07AC72"], 
              inverseColors: true, 
              opacityFrom: 0.5, 
              opacityTo: 1, 
              stops: [0, 100], 
            }
          },
          stroke: {
            show: true,
            lineCap: "round",
          }
        };
        
        var chart = new ApexCharts(document.querySelector("#tour-pie"), options);
        chart.render();
        
        // static chart
        var options = {
          chart: {
            height: 350,
            type: "line",
            stacked: false,
            borderRadius: 10,
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          colors: ['#99C2A2', '#C5EDAC'],
          series: [
            
            {
              name: 'Sold',
              type: 'column',
              data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
            },
            {
              name: 'Canceled',
              type: 'column',
              data: [10, 19, 27, 26, 34, 35, 40, 38]
            },
          ],
          stroke: {
            show: true,
            width: [4, 4],
            lineCap: 'round',
          },
          plotOptions: {
            bar: {
              columnWidth: "20%"
              
            }
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
          },
          
          tooltip: {
            shared: false,
            intersect: true,
            x: {
              show: false
            }
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            offsetX: 40
          }
        };
        
        
        var chart = new ApexCharts(document.querySelector("#static-chart"), options);
        
        chart.render();
        
        // customer slider
    $(".booked--slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/prev.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="assets/img/next.svg"></button>',
    });
       // booking slider
    $(".single__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/prev.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="assets/img/next.svg"></button>',
    });
    















    })

    
})(jQuery);
