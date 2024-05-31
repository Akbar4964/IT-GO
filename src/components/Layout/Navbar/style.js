import styled from "styled-components";

export const NavbarRow = styled.nav`
  width: 100%;
  margin: 22px 0;
  .navbar-row {
    padding: 22px;
    border-radius: 22px;
    color: var(--white);
    background-color: var(--blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
    gap: 33px;
    font-weight: 500;
    position: relative;
  }

  .navbar-menu > li > a {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .navbar-select {
    width: 66px;
  }

  .solutions-menu {
    position: absolute;
    right: 88px;
    top: 33px;
    width: 122px;
    padding: 11px 15px;
    height: auto;
    background-color: var(--blue);
    border: 1px solid var(--white);
  }

  .solutions-menu > li {
    margin-top: 11px;
  }

  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    option {
      background-color: red;
    }
  }

  .ant-select .ant-select-arrow {
    display: none;
  }

  .navbar-menu-rwd {
    display: none;
  }

  .open-navbar-menu {
    display: none;
  }

  @media screen and (max-width: 400px) {
    .navbar-menu {
      display: none;
    }

    .open-navbar-menu {
      display: flex;
      align-items: center;
      gap: 11px;
      .img {
        width: 55px;
        height: 55px;
      }
    }

    .navbar-menu-rwd {
      display: flex;
      justify-content: space-between;
      padding: 33px;
      border-radius: 22px;
      position: absolute;
      width: 100%;
      height: 333px;
      top: 99px;
      left: 0;
      background-color: var(--blue);
      border: 1px solid #fff;
      div > li {
        margin-top: 17px;
        a {
          font-size: 22px;
        }
      }
      .cancel {
        cursor: pointer;
      }
    }
  }
`;
