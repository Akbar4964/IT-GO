import styled from "styled-components";

export const AnchorTechnologyRow = styled.div`
  margin: 100px 0;
  .anchor-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image-container {
    img {
      width: 500px;
      height: 500px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    cursor: pointer;
    h1 {
      margin-top: 22px;
      font-weight: 700;
    }
    p {
      margin-top: 22px;
      max-width: 600px;
    }
  }

  .active {
    color: var(--blue);
    position: relative;
  }

  .active-line {
    position: absolute;
    top: 22%;
    left: -11px;
    width: 2px;
    border-radius: 22px;
    height: 100px;
    background-color: var(--blue);
  }

  @media screen and (max-width: 400px) {
    .anchor-row {
      flex-direction: column;
    }
    .image-container {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .active-line {
      display: none;
    }
  }
`;
