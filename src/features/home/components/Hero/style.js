import styled from "styled-components";
import { HeroBackgroundImg } from "../../../../assets/images";

export const HeroRow = styled.div`
  background-image: url(${HeroBackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: calc(100vh - 120px);

  .hero-row {
    color: var(--white);
    padding-top: 200px;
    display: flex;
    justify-content: space-between;
    background-attachment: fixed;
    h1 {
      max-width: 470px;
      font-size: 44px;
      text-shadow: 5px 5px 5px var(--blue);
    }
  }

  .hero-info {
    p {
      max-width: 555px;
      margin-top: 11px;
      word-spacing: 7px;
    }

    a > button {
      width: auto;
      height: 44px;
      margin-top: 22px;
      border-radius: 22px;
      border: 0;
      font-size: 17px;
      background-color: var(--blue);
      color: var(--white);
    }
  }

  @media screen and (max-width: 400px) {
    .hero-row{
      padding-top: 33px;
      flex-direction: column;
      h1{
        font-size: 33px;
      }
    }
    .hero-info{
      p{
        margin-top: 22px;
      }
    }
  }
`;
