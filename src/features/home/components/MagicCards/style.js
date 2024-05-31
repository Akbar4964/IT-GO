import styled from "styled-components";

export const MagicCardsRow = styled.div`
  position: relative;
  .magic-row {
    text-align: center;
    h4 {
      margin-top: 22px;
      max-width: 500px;
      margin: 0 auto;
      padding-top: 22px;
    }
  }

  .buttons {
    text-align: center;
    padding-top: 100px;
    margin-bottom: 100px;
    button {
      width: 111px;
      height: 33px;
      background-color: var(--blue);
      color: var(--white);
    }
  }

  @media screen and (max-width: 400px) {
    .buttons {
      padding-top: 33px;
    }
  }
`;
