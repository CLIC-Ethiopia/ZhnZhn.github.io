
const DF_COLOR = '#8085e9';

const _assign = Object.assign;

const ChartFactory = {
  crColumnConfig({ seriaColor }={}) {
    const _color = seriaColor || DF_COLOR;
    return {
      chart: {
        type: "column",
        marginTop: 60,
        marginBottom: 100,
        panKey: void 0,
        panning: false,
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        categories: [],
        type: "category",
        crosshair: true,
        gridLineWidth : 0
      },
      yAxis: {
        //min: 0,
        opposite: true,
        lineWidth: 0,
        tickLength: 0,
        gridLineDashStyle: 'Dot',
        labels: {
          x: 3
        },
        title: {
          text: ''
        }
      },
      legend : {
        enabled : false,
        align: 'right',
        verticalAlign: 'top',
        layout: 'horizontal',
        x:  0,
        y: -25
      },
      plotOptions: {
        column : {
          color: _color,
          minPointLength : 5,
          pointWidth : 6,
          pointPadding : 0,
          borderWidth : 0,
          groupPadding : 0.2,
          shadow : false
        },
        bar : {
          color: _color,
          minPointLength : 5,
          pointWidth : 4,
          pointPadding : 0,
          borderWidth : 0,
          groupPadding : 0.2,
          shadow : false
        }
      },
      series: [{ name: 'Column'}]
    }
  },

  crBarConfig(option) {
    const config = ChartFactory.crColumnConfig(option);
    _assign(config.chart, {
      type: 'bar',
      height: 450,
      marginTop: 50,
      marginBottom: 35
    })
    _assign(config.yAxis, {
      labels: { x: 0, y: 14 },
      opposite: false,
      gridLineDashStyle: 'ShortDot'
    })

    return config;
  }
};

export default ChartFactory
