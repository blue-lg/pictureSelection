import styled from 'styled-components';

export const DiaLogWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .body {
    position: absolute;
    width: 30%;
    height: 60%;
    background: #fff;
    z-index: 9;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .cloneDialog {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #ccc;
      position: absolute;
      right:20px;
      top:20px;

      &::before {
        content: '';
        display: inline-block;
        width: 1px;
        height: 16px;
        background: #ccc;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 16px;
        background: #ccc;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }

    img{
      width:100%;
      height:100%;
    }
  }

  /* 屏幕小于540px 背景红色 */
  @media screen and (max-width: 539px) {
    .body {
      width: 100%;
    }
  }
  /* 屏幕大于于540px 小于 800px 背景蓝色 */
  @media screen and (min-width: 540px) {
    .body {
      width: 60%;
    }
  }
  /* 屏幕大于800px 背景粉色 */
  @media screen and (min-width: 900px) {
    .body {
      width: 40%;
    }
  }

  /* 屏幕大于800px 背景粉色 */
  @media screen and (min-width: 1200px) {
    .body {
      width: 30%;
    }
  }
`;