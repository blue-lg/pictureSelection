import React, { memo, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
 
import { PicSeleItemWrapper } from './style';

 const PictureSelectItem = function (props) {
  const { item, value, onChange, dialogChange } = props;
  // 查询当前项是否选中 并获取选中的下标
  let index = value.indexOf(item.id);
  // 管理每项选中的状态
  const [check, setcheck] = useState(false);
  // check 的 dom节点
  const checkBox = useRef();

  useEffect(() => {
    // 节点加载完全 看是否有已经选中的值 有就选中

    setcheck(index >= 0);
  }, [index]);

  // check onchange 事件
  function checkBoxChange(e) {
    let check = e.target.checked;
    setcheck(check);
    if (check) {
      // 选中 并且原来没有查询到 就将当前id 添加到父级数组中
      index < 0 && onChange([...value, item.id]);
    } else {
      // 取消选中 过滤
      let newVal = value.filter((v) => v !== item.id);
      onChange(newVal);
    }
  }

  // 点击图片
  function imgItemClick(url) {
    dialogChange(url)
    // 选中
    // checkBox.current.checked = checkBox.current.checked ? false : true;
    // setcheck(checkBox.current.checked);

    // if (checkBox.current.checked) {
    //   index < 0 && onChange([...value, item.id]);
    // } else {
    //   let newVal = value.filter((v) => v !== item.id);
    //   onChange(newVal);
    // }
  }

  return (
    <PicSeleItemWrapper>
      <div className="imgBox">
        <input
          type="checkbox"
          className="check"
          checked={check}
          ref={checkBox}
          onChange={(e) => checkBoxChange(e)}
        />
        <img
          id="imglist"
          src={item.url}
          alt={item.name}
          data-original={item.url}
          onClick={(_) => imgItemClick(item.url)}
        />
      </div>
    </PicSeleItemWrapper>
  );
}

PictureSelectItem.propTypes = {
  item:PropTypes.object.isRequired,
  value:PropTypes.array.isRequired,
  onChange:PropTypes.func,
  dialogChange:PropTypes.func
};

PictureSelectItem.defaultProps={
  item:{},
  value:[]
}

export default memo(PictureSelectItem);
