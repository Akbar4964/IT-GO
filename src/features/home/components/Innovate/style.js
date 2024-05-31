import styled from "styled-components";

export const InnovateRow = styled.div`
  margin: 100px 0;
  .innovate-row {
    display: flex;
    align-items: center;
    gap: 77px;
    color: var(--blue);
    img {
      width: 500px;
      height: 500px;
      background-position: center;
      object-fit: cover;
      object-position: center;
    }

    .solutions-title {
      font-size: 33px;
    }

    .solutions-text {
      margin-top: 22px;
    }

    .solutions-name {
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 700;
      margin-top: 22px;
    }

    .solutions-btn {
      margin-top: 22px;
      width: auto;
      padding: 0 7px;
      height: 44px;
      background-color: var(--blue);
      color: var(--white);
      border-radius: 22px;
      border: 0;
      font-size: 15px;
      &:hover {
        border: 3px solid var(--blue);
      }
    }
  }

  @media screen and (max-width: 400px) {
    .innovate-row {
      flex-direction: column;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
