# react2schema

transform react code to json schema of React style

## Installation

```
npm i react2schema -S
```

![preview](https://img.alicdn.com/tfs/TB1CP2Zdrr1gK0jSZR0XXbP8XXa-2548-1256.png)

## Usage

```
const react2schema = require('react2schema');
console.log(react2schema(getCode()));

function getCode(){
  return `import React, { Component } from 'react';

export default class About extends Component {
  static displayName = 'About';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.mainTitle}>ABOUT</div>
          <div style={styles.mainDesc}>关于阿里云</div>
          <div style={styles.tab}>
            <div
              style={{ ...styles.tabName, ...styles.first, ...styles.active }}
            >
              企业级
            </div>
            <div style={{ ...styles.tabName }}>个人级</div>
          </div>
          <div style={styles.items}>
            <div>
              <div style={styles.tabList} key="0">
                <div style={styles.left}>
                  <div style={styles.num}>123</div>
                  <div style={styles.title}>云存储特惠</div>
                </div>
                <div style={styles.middle}>
                  <div style={styles.desc}>
                    上云仅33元/年，降低企业成本
                  </div>
                </div>
                <div style={styles.btnBox}>
                  <a href="#" style={styles.btnLink}>
                    查看详情
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '50px 0',
    background: '#000',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
    position: 'relative',
  },
  mainTitle: {
    fontSize: '60px',
    color: '#fff',
    letterSpacing: '0.77px',
    lineHeight: '72px',
    margin: '0',
    fontWeight: '700',
  },
  mainDesc: {
    fontSize: '24px',
    lineHeight: '30px',
    color: '#fff',
    marginTop: '8px',
    fontWeight: '700',
  },
  img: {
    marginTop: '70px',
    maxWidth: '100%',
  },
  tab: {
    position: 'absolute',
    right: '10px',
    top: '66px',
    overflow: 'hidden',
  },
  first: {
    marginTop: '0',
  },
  active: {
    color: '#fff',
    borderBottom: '1px solid #fff',
  },
  tabName: {
    float: 'left',
    cursor: 'pointer',
    fontSize: '26px',
    lineHeight: '30px',
    color: 'hsla(0,0%,100%,.5)',
    marginLeft: '30px',
    padding: '14px 0',
    borderBottom: '1px solid transparent',
    transition: 'all .3s',
  },
  items: {
    overflow: 'hidden',
    paddingTop: '50px',
  },
  tabList: {
    height: '80px',
    background: '#191a1e',
    position: 'relative',
    paddingRight: '40px',
    marginTop: '20px',
    transition: 'all .3s',
  },
  middle: {
    paddingLeft: '335px',
    paddingRight: '180px',
    height: '80px',
    overflow: 'hidden',
  },
  left: {
    position: 'absolute',
    left: '0',
    top: '0',
    height: '80px',
    overflow: 'hidden',
  },
  num: {
    float: 'left',
    fontSize: '42px',
    width: '80px',
    height: '80px',
    lineHeight: '80px',
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    background: '#236cff',
  },
  title: {
    float: 'left',
    maxWidth: '255px',
    fontSize: '20px',
    lineHeight: '80px',
    color: '#fff',
    paddingLeft: '40px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  desc: {
    fontSize: '14px',
    lineHeight: '24px',
    color: 'hsla(0,0%,100%,.8)',
    marginTop: '28px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  btnBox: {
    position: 'absolute',
    right: '40px',
    top: '20px',
  },
  btnLink: {
    display: 'inline-block',
    width: '160px',
    height: '40px',
    border: '1px solid #fff',
    lineHeight: '38px',
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all .3s',
  },
};
`;
}
```

output json below
```
{"component":"div","props":{"style":{"padding":"50px 0","background":"#000"}},"children":[{"component":"div","props":{"style":{"width":"1200px","margin":"0 auto","position":"relative"}},"children":[{"component":"div","props":{"style":{"fontSize":"60px","color":"#fff","letterSpacing":"0.77px","lineHeight":"72px","margin":"0","fontWeight":"700"},"data_text":"ABOUT"},"children":[]},{"component":"div","props":{"style":{"fontSize":"24px","lineHeight":"30px","color":"#fff","marginTop":"8px","fontWeight":"700"},"data_text":"关于阿里云"},"children":[]},{"component":"div","props":{"style":{"position":"absolute","right":"10px","top":"66px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"float":"left","cursor":"pointer","fontSize":"26px","lineHeight":"30px","color":"hsla(0,0%,100%,.5)","marginLeft":"30px","padding":"14px 0","borderBottom":"1px solid transparent","transition":"all .3s"},"data_text":"企业级"},"children":[]},{"component":"div","props":{"style":{"float":"left","cursor":"pointer","fontSize":"26px","lineHeight":"30px","color":"hsla(0,0%,100%,.5)","marginLeft":"30px","padding":"14px 0","borderBottom":"1px solid transparent","transition":"all .3s"},"data_text":"个人级"},"children":[]}]},{"component":"div","props":{"style":{"overflow":"hidden","paddingTop":"50px"}},"children":[{"component":"div","props":null,"children":[{"component":"div","props":{"style":{"height":"80px","background":"#191a1e","position":"relative","paddingRight":"40px","marginTop":"20px","transition":"all .3s"},"key":"0"},"children":[{"component":"div","props":{"style":{"position":"absolute","left":"0","top":"0","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"float":"left","fontSize":"42px","width":"80px","height":"80px","lineHeight":"80px","fontWeight":"700","color":"#fff","textAlign":"center","background":"#236cff"},"data_text":"123"},"children":[]},{"component":"div","props":{"style":{"float":"left","maxWidth":"255px","fontSize":"20px","lineHeight":"80px","color":"#fff","paddingLeft":"40px","whiteSpace":"nowrap","overflow":"hidden"},"data_text":"云存储特惠"},"children":[]}]},{"component":"div","props":{"style":{"paddingLeft":"335px","paddingRight":"180px","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"fontSize":"14px","lineHeight":"24px","color":"hsla(0,0%,100%,.8)","marginTop":"28px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"},"data_text":"上云仅33元/年，降低企业成本"},"children":[]}]},{"component":"div","props":{"style":{"position":"absolute","right":"40px","top":"20px"}},"children":[{"component":"a","props":{"href":"#","style":{"display":"inline-block","width":"160px","height":"40px","border":"1px solid #fff","lineHeight":"38px","fontSize":"16px","color":"#fff","textDecoration":"none","textAlign":"center","transition":"all .3s"},"data_text":"查看详情"},"children":[]}]}]},{"component":"div","props":{"style":{"height":"80px","background":"#191a1e","position":"relative","paddingRight":"40px","marginTop":"20px","transition":"all .3s"},"key":"1"},"children":[{"component":"div","props":{"style":{"position":"absolute","left":"0","top":"0","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"float":"left","fontSize":"42px","width":"80px","height":"80px","lineHeight":"80px","fontWeight":"700","color":"#fff","textAlign":"center","background":"#236cff"},"data_text":"123"},"children":[]},{"component":"div","props":{"style":{"float":"left","maxWidth":"255px","fontSize":"20px","lineHeight":"80px","color":"#fff","paddingLeft":"40px","whiteSpace":"nowrap","overflow":"hidden"},"data_text":"云存储特惠"},"children":[]}]},{"component":"div","props":{"style":{"paddingLeft":"335px","paddingRight":"180px","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"fontSize":"14px","lineHeight":"24px","color":"hsla(0,0%,100%,.8)","marginTop":"28px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"},"data_text":"上云仅33元/年，降低企业成本"},"children":[]}]},{"component":"div","props":{"style":{"position":"absolute","right":"40px","top":"20px"}},"children":[{"component":"a","props":{"href":"#","style":{"display":"inline-block","width":"160px","height":"40px","border":"1px solid #fff","lineHeight":"38px","fontSize":"16px","color":"#fff","textDecoration":"none","textAlign":"center","transition":"all .3s"},"data_text":"查看详情"},"children":[]}]}]},{"component":"div","props":{"style":{"height":"80px","background":"#191a1e","position":"relative","paddingRight":"40px","marginTop":"20px","transition":"all .3s"},"key":"2"},"children":[{"component":"div","props":{"style":{"position":"absolute","left":"0","top":"0","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"float":"left","fontSize":"42px","width":"80px","height":"80px","lineHeight":"80px","fontWeight":"700","color":"#fff","textAlign":"center","background":"#236cff"},"data_text":"123"},"children":[]},{"component":"div","props":{"style":{"float":"left","maxWidth":"255px","fontSize":"20px","lineHeight":"80px","color":"#fff","paddingLeft":"40px","whiteSpace":"nowrap","overflow":"hidden"},"data_text":"云存储特惠"},"children":[]}]},{"component":"div","props":{"style":{"paddingLeft":"335px","paddingRight":"180px","height":"80px","overflow":"hidden"}},"children":[{"component":"div","props":{"style":{"fontSize":"14px","lineHeight":"24px","color":"hsla(0,0%,100%,.8)","marginTop":"28px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"},"data_text":"上云仅33元/年，降低企业成本"},"children":[]}]},{"component":"div","props":{"style":{"position":"absolute","right":"40px","top":"20px"}},"children":[{"component":"a","props":{"href":"#","style":{"display":"inline-block","width":"160px","height":"40px","border":"1px solid #fff","lineHeight":"38px","fontSize":"16px","color":"#fff","textDecoration":"none","textAlign":"center","transition":"all .3s"},"data_text":"查看详情"},"children":[]}]}]}]}]}]}]}
```

