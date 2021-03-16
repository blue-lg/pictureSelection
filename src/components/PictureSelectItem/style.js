import styled from 'styled-components';

export const PicSeleItemWrapper = styled.div`
  width: 120px;
  display: flex;
  padding: 0 10px;

  .imgBox {
    width: 100%;
    position: relative;

    .check {
      position: absolute;
      cursor: pointer;
      z-index: 99;
    }

    img {
      width: 100%;
      cursor: pointer;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;
