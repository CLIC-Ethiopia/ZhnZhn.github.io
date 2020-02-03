import React from 'react'

import STYLE from '../../styles/DialogStyles'

const S = {
  ROOT_DIV: {
    margin: '5px',
    lineHeight: 2,
    fontWeight: 'bold'
  },
  LABEL_SPAN : {
    display: 'inline-block',
    color: '#1b75bb',
    width: 100,
    paddingRight: 5,
    textAlign: 'right',
    fontSize: '16px'
  },
  TEXT: {
    display: 'inline-block',
    maxWidth: 200,
    height: 32,
    verticalAlign: 'middle',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};

const Plain = ({ style, children }) => (
  <div style={{ ...STYLE.rowDiv, ...style }}>
    {children}
  </div>
);

const Text = ({
  caption, text,
  styleRoot, styleCaption, styleText
}) => {
  return (
    <div style={{ ...S.ROOT_DIV, ...styleRoot }}>
      <span style={{ ...S.LABEL_SPAN, ...styleCaption }}>
        {caption}
      </span>
      <span style={{ ...S.TEXT, ...styleText }}>
        {text}
      </span>
    </div>
  )
};

export default { Plain, Text }
