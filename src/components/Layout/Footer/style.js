import styled from "styled-components";

export const FooterRow = styled.footer`
  width: 100%;
  height: auto;
  background-color: var(--blue);
  padding-bottom: 22px;

  .footer-row {
    padding: 22px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .footer-site-map > li {
    margin-top: 11px;
  }

  .footer-site-map > li > a {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .footer-subscribe {
    max-width: 355px;
    p {
      margin-top: 11px;
    }
  }

  .line {
    margin-top: 44px;
    width: 100%;
    height: 1.5px;
    border-radius: 22px;
    background-color: var(--white);
  }

  .socials {
    color: var(--white);
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      gap: 22px;
    }
  }

  .input-row {
    display: flex;
    align-items: center;
    margin-top: 11px;
    gap: 7px;
    button {
      color: var(--blue);
      font-weight: 500;
      height: 44px;
      border-radius: 22px;
    }
  }

  .form input {
    width: 100%;
    height: 44px;
    border-radius: 22px;
    border: 0;
    color: var(--blue);
    font-weight: 500;
    &::placeholder {
      color: var(--blue);
    }
  }

  @media screen and (max-width: 1000px) {
    .footer-site-map > h3 {
      margin-top: 22px;
    }

    .footer-logo {
      margin-top: 22px;
    }

    .footer-subscribe > h3 {
      margin-top: 22px;
    }
  }

  @media screen and (max-width:400px) {
    .footer-row{
      display: flex;
      flex-direction: column;
    }
  }
`;
