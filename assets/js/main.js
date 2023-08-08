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

        // var options = {
        //   chart: {
        //     width: 200,
        //     type: 'donut',
        //   },
        //   series: [88, 22],
        //   dataLabels: {
        //     enabled: false,
        //   },
        //   stroke: {
        //     show: true,
        //     width: 9,
        //     curve: 'smooth',
        //     lineCap: 'round',
        //   },
        //   fill: {
        //     type: ['solid', 'gradient'],
        //   },
        //   legend: {
        //     show: false,
        //   },
        //   plotOptions: {
        //     donut: {
        //       size: 200
        //     }
        //   }
        // };
        
        // var chart = new ApexCharts(document.querySelector("#sold-pie"), options);
        // chart.render();
        

        // 

        // var options = {
        //   series: [75],
        //   chart: {
        //     height: 150,
        //     type: "radialBar",
        //     toolbar: {
        //       show: false
        //     }
        //   },
        //   plotOptions: {
        //     radialBar: {
        //       startAngle: 0,
        //       endAngle: 360,
        //       track: {
        //         background: "#EDEFF1"
        //       },
        //       dataLabels: {
        //         show: true,
        //         name: {
        //           show: false
        //         },
        //         value: {
        //           formatter: function (val) {
        //             return parseInt(val) + "%";
        //           },
        //           color: "#AE9142",
        //           fontSize: "18px",
        //           show: true,
        //           fontWeight: "bold",
        //           offsetY: 5
        //         }
        //       }
        //     }
        //   },
        //   fill: {
        //     colors: ["gradiant"]
        //   },
        //   stroke: {
        //     show: true,
        //     lineCap: "round",
        //     width: 9,
        //   }
        // };
        
        // var chart = new ApexCharts(document.querySelector("#sold-pie"), options);
        // chart.render();

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
        
        
        
        
    })

    
})(jQuery);
