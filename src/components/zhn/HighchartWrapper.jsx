import React, { Component } from 'react';
import Highcharts from 'highcharts';

const STYLE = {
  ROOT_DIV_SHOW : {
    position : 'relative',
    display : 'block',
    zIndex : 1
  },
  ROOT_DIV_HIDE : {
    position : 'relative',
    display : 'none'
  }
};

class HighchartWrapper extends Component {
  constructor(){
    super()
    this.state = {
      isShowAbsComp: true
    }
  }

  componentDidMount(){
    const { config, onLoaded } = this.props;
    this.renderChart(config);
    if ( typeof onLoaded === 'function' ){
      onLoaded(this.chart);
    }
  }

  componentWillUnmount(){
    const { onWillUnLoaded } = this.props;
    if ( typeof onWillUnLoaded === 'function' ){
      onWillUnLoaded(this.chart);
    }
    this.chart.destroy();
  }

  renderChart = (config) => {
    if (!config){
      throw new Error('Config must be specified for the ZhHighchart');
    }
    const chartConfig =  config.chart;
    this.chart = new Highcharts['Chart']({
      ...config,
      chart: {
        ...chartConfig,
        renderTo: this.chartEl
      }
    });
  }

  render() {
    const { isShow, rootStyle, absComp } = this.props
        , { isShowAbsComp } = this.state
        , _absComp = isShowAbsComp
             ? absComp
             : null
        , _rootDivStyle = isShow
             ? STYLE.ROOT_DIV_SHOW
             : STYLE.ROOT_DIV_HIDE;
    return (
       <div
         style={{...rootStyle, ..._rootDivStyle}}
       >
          <div ref={ c => this.chartEl = c }>
          </div>
          {_absComp}
        </div>
     );
  }

  getChart() {
    if(!this.chart){
      throw new Error('getChart() should not called before the ZhHighchart component is mounted');
    }
    return this.chart;
  }

  toggleAbsComp() {
    this.setState(prevState => {
      return {
        isShowAbsComp: !prevState.isShowAbsComp
      };
    })
  }
}

export default HighchartWrapper
