import React, { memo } from 'react'
import PropTypes from 'prop-types';
import { DiaLogWrapper } from './style';

const Dialog = function (prop) {
  const { imgUrl, dialogChange } = prop;
  return (
    <DiaLogWrapper>
      <div className="mask" onClick={(e) => dialogChange('')}></div>

      <div className="body">
        <div className="cloneDialog" onClick={(e) => dialogChange('')} />
        <img
          src={
            imgUrl ||
            'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
          }
          alt=""
        />
      </div>
    </DiaLogWrapper>
  ); 
}

Dialog.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  dialogChange: PropTypes.func, 
};

Dialog.defaultProps = {
  imgUrl: ''
};

export default memo(Dialog);


