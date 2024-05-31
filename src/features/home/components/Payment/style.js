import styled from "styled-components";

export const PaymentRow = styled.div`
  margin: 100px 0;
  h1 {
    text-align: center;
  }
  p {
    margin-top: 11px;
    text-align: center;
  }

  .payment-row {
    margin-top: 44px;
    display: flex;
    justify-content: space-between;
  }

  .card {
    width: 333px;
    height: auto;
    border: 3px solid var(--blue);
    border-radius: 22px;
    padding: 33px;
    .img-row {
      text-align: right;
    }

    h3 {
      margin: 11px 0;
      font-size: 44px;
      font-weight: 700;
    }

    h5 {
      margin-top: 22px;
    }

    h6 {
      margin-top: 7px;
    }

    .btn-row {
      margin-top: 22px;
      text-align: center;
      button {
        width: 100%;
        height: 33px;
        background-color: var(--blue);
        color: var(--white);
        border: 0;
        border-radius: 22px;
      }
    }
  }

  .payment-buttons {
    text-align: center;
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 111px;
      height: 33px;
      border: 3px solid var(--blue);
    }
    .active {
      background-color: var(--blue);
      color: var(--white);
    }
  }

  @media screen and (max-width: 400px) {
    .payment-row {
      flex-direction: column;
    }
    .card{
      width: 100%;
      margin-top: 22px;
    }
  }
`;
