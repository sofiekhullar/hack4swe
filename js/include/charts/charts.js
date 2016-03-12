function createCharts() {

        // Skapa cirkeldiagram för totalt antal arbetslösa
        $('#pieChartTotalt').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Totalt arbetslösa'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
             credits: {
                enabled: false
              },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Procentuellt',
                colorByPoint: true,
                data: [{
                    name: 'Kvinnor',
                    color: '#ff4d4d',
                    y: getLan(SELECTED_LAN_ID).n_kvinnor_arbetslosa
                }, {
                    name: 'Män',
                    color: '#0066ff',
                    y: getLan(SELECTED_LAN_ID).n_man_arbetslosa
                }]
            }]
        });
    

     // Skapa cirkeldiagram för totalt antal unga arbetslösa
        $('#pieChartUnga').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Unga arbetslösa'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
             credits: {
                enabled: false
              },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Procentuellt',
                colorByPoint: true,
                data: [{
                    name: 'Kvinnor',
                    color: '#ff4d4d',
                    y: getLan(SELECTED_LAN_ID).n_unga_kvinnor_arbetslosa
                }, {
                    name: 'Män',
                    color: '#0066ff',
                    y: getLan(SELECTED_LAN_ID).n_unga_man_arbetslosa
                }]
            }]
        });

// Skapa stapel diagram för personer 
$('#columnChartArbetslosa').highcharts({
        chart: {
            type: 'column'
        },
            credits: {
                enabled: false
        },
        title: {
            text: 'Arbetslösa'
        },
        xAxis: {
            categories: [
                'Totalt',
                'Unga',
                'Studie skuld'                         
                 ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Antal personer'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} Personer</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Kvinnor',
            color: '#ff4d4d',
            data: [49.9, 71.5, 123]

        }, {
            name: 'Män',
            color: '#0066ff',
            data: [83.6, 200.8, 140]
            }]
    });

// Skapa antal lediga jobb diagram
$('#columnChartJobb').highcharts({
        chart: {
            type: 'column'
        },
            credits: {
                enabled: false
        },
        title: {
            text: 'Lediga jobb'
        },
        xAxis: {
            categories: [
                'Lediga jobb'                      
                 ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Antal'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Totalt',
            color: '#ff4d4d',
            data: [49.9]

        }, {
            name: 'Platsbanken',
            color: '#0066ff',
            data: [83.6]
            }]
    });
    }

