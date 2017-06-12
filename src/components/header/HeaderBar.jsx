import React, { Component } from 'react'

import ProgressLoading from './ProgressLoading'
import AppLabel from './AppLabel'
import IconLogoErc from './IconLogoErc'
import ActionButton from '../zhn/ActionButton'
import LimitRemainingLabel from './LimitRemainingLabel'
import PanelBrowsers from './PanelBrowsers'
import ComponentActions from '../../flux/actions/ComponentActions'
import BrowserActions from '../../flux/actions/BrowserActions'
import BrowserConfig from '../../constants/BrowserConfig'
import { BrowserType, ModalDialog } from '../../constants/Type'


const LOGO_TITLE = "ERC: Economic RESTful Client v0.14.0"
    , CAPTION = "ERC v0.14.0";

const styles = {
  rootDiv : {
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.6)',
    zIndex: 1050
  },
  appLabel : {
    display: 'inline-block',
    color:'#80c040',
    marginTop: '8px',
    marginLeft: '35px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  btDS : {
    marginTop: '8px',
    marginLeft: '10px'
  },
  bt: {
    marginTop: '8px'
  },
  btAbout: {
    float: 'right',
    marginRight: '20px',
    marginTop: '8px'
  },
  btSettings: {
    float: 'right',
    marginTop: '8px'
  },
  lbLimit: {
    float: 'right',
    paddingTop: '14px'
  }
}

class HeaderBar extends Component {

  constructor(props){
    super()

    this._settingFn = props.store.exportSettingFn()
    this.state = {
      isDS: false
    }
  }

  _handleClickQuandl = () => {
    BrowserActions.showBrowser(BrowserType.ECONOMIC)
    this.setState({ isDS: false })
  }

  _handleClickDynamic = (browserConfig) => {
    BrowserActions.showBrowserDynamic(browserConfig)
    this.setState({ isDS: false })
  }

  _handleClickWatch = () => {
    BrowserActions.showBrowser(BrowserType.WATCH_LIST)
    this.setState({ isDS: false })
  }

  _handleClickDS = () => {
    this.setState({ isDS: !this.state.isDS })
  }
  _handleDialogSettings = () => {
    ComponentActions.showModalDialog(
      ModalDialog.SETTINGS, this._settingFn
    )
  }

  render(){
    const { store } = this.props
        , { isDS } = this.state;
    return (
      <div className="header" style={styles.rootDiv}>
         <ProgressLoading store={store} />
         <IconLogoErc
            className="header__icon-erc"
            title={LOGO_TITLE}
         />
         <AppLabel
            className="header__app-label"
            caption={CAPTION}
         />

         <ActionButton
           style={styles.btDS}
           type="TypeA"
           caption="DS"
           title="Data Source Browsers"
           onClick={this._handleClickDS}
         >
           <span className={'arrow-down'}></span>
         </ActionButton>


        <ActionButton
          style={styles.bt}
          type="TypeA"
          caption="Quandl"
          title="Quandl Economic Browser"
          onClick={this._handleClickQuandl}
        />

        <ActionButton
           style={styles.bt}
           type="TypeA"
           caption="Eurostat"
           title="European Statistics Browser"
           onClick={this._handleClickDynamic.bind(null, BrowserConfig[BrowserType.EUROSTAT])}
        />

         <ActionButton
           style={styles.bt}
           type="TypeA"
           caption="Watch"
           title="Watch List Browser"
           onClick={this._handleClickWatch}
         />

         <ActionButton
           type="TypeA"
           style={styles.btAbout}
           caption="About"
           title="Description about application ERC"
           onClick={ComponentActions.showAbout}
          />

          <ActionButton
            type="TypeA"
            style={styles.btSettings}
            caption="Settings"
            title="Application settings"
            onClick={this._handleDialogSettings}
           />

           <LimitRemainingLabel
              store={store}
              style={styles.lbLimit}
           />

           <PanelBrowsers
              className="header__panel-browser"
              isShow={isDS}
              BROWSER={BrowserType}
              browserConfig={BrowserConfig}
              onClickQuandl={this._handleClickQuandl}
              onClickDynamic={this._handleClickDynamic}
              onClickWatch={this._handleClickWatch}
           />
      </div>
    );
  }
}

export default HeaderBar;
