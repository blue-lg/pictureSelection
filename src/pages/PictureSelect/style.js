import styled from 'styled-components';

export const PicSeleWrapper = styled.div`
  .allSelectBox {
    display: flex;
    align-items: center;
    label {
      font-size: 14px;
    }
  }
  .imgList {
    display: flex;
    padding: 10px 20px;
  }

  .cards-enter,
  .cards-appear {
    opacity: 0;
  }

  .cards-enter-active,
  .cards-appear-active {
    transition: all 0.3s ease-in;
    opacity: 1;
  }

  .cards-enter-done,
  .cards-appear-done {
    opacity: 1;
  }

  .cards-exit {
    opacity: 1;
  }

  .cards-exit-active {
    transition: all 0.3s ease-in;
    opacity: 0;
  }
`;