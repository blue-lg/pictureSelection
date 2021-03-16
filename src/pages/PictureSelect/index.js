import React, { memo, useEffect, useMemo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


import PictureSelectItem from '../../components/PictureSelectItem';
import Dialog from '../../components/dialog';
import { PicSeleWrapper } from './style';

export default memo(function PictureSelect() {
  const pictures = useMemo(() => {
    return [
      {
        id: '1',
        name: 'foo',
        url:
          'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '2',
        name: 'foo',
        url:
          'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '3',
        name: 'foo',
        url:
          'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      }
    ];
  }, []);

  // 管理选中的id集合
  const [value, setValue] = useState(['1']);
  // 全选的状态
  const [allState, setAllState] = useState(false);
  // 预览图片dialog状态
  const [imgUrl, setimgUrl] = useState('');


  useEffect(() => {
    // 监听value 的变化 修改全选状态
    setAllState(value.length === pictures.length);
  }, [value, pictures]);

  // 全选check框的change事件
  function allSelectChange(e) {
    let checkVal = e.target.checked
    setAllState(checkVal);
    if (value.length >= 0 || checkVal) {
      setValue(pictures.map((v) => v.id));
    }
    
    if (value.length === pictures.length && !checkVal) {
      setValue([]);
    }
  }

  return (
    <PicSeleWrapper>
      <div className="allSelectBox">
        <label>
          <input
            type="checkbox"
            id="all"
            checked={allState}
            onChange={(e) => allSelectChange(e)}
          />
          <label htmlFor="all">已选中{value.length}个文件</label>
        </label>
      </div>
      <div className="imgList">
        {pictures.map((img) => {
          return (
            <PictureSelectItem
              key={img.id}
              item={img}
              value={value}
              onChange={(value) => setValue(value)}
              dialogChange={(val) => setimgUrl(val)}
            />
          );
        })}
      </div>

      {/* 弹出层 加入动画过渡 根据imgUrl 显示状态*/}
      <CSSTransition
        in={!!imgUrl}
        timeout={300}
        classNames="cards"
        unmountOnExit={true}
      >
        <Dialog imgUrl={imgUrl} dialogChange={(val) => setimgUrl(val)} />
      </CSSTransition>
      {/* {imgUrl && (
        <Dialog imgUrl={imgUrl} dialogChange={(val) => setimgUrl(val)} />
      )} */}
    </PicSeleWrapper>
  );
});
