import styled from "styled-components";
import { Background } from "../../../../assets/images";

export const LastSectionRow = styled.div`
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  h1 {
    padding-top: 111px;
    text-align: center;
    color: var(--white);
    text-shadow: 5px 5px 5px var(--blue);
  }
  p {
    font-size: 22px;
    max-width: 888px;
    padding-top: 22px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    margin: 0 auto;
    word-spacing: 1px;
  }

  .row {
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(5px);
  }
  @media screen and (max-width: 400px) {
    h1{
      padding-top: 33px;
    }
    p{
      font-size: 17px;
    }
  }
`;
