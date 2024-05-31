import styled from "styled-components";

export const TechnologyRow = styled.div`
  overflow: hidden;
  position: relative;
  background-color: var(--blue);
  margin: 100px 0;
  padding: 22px 0;
  h1 {
    font-family: Montserrat;
    text-align: center;
    font-size: 48px;
    font-weight: 400;
    line-height: 58.51px;
    color: var(--white);
  }
  .scroll-container {
    height: 150px;
    overflow-y: hidden;
    margin-top: 33px;
    margin-bottom: 33px;
  }
  .carousel-primary,
  .carousel-secondary {
    position: absolute;
    /* top: 26%; */
    left: 100%;
    width: 100%;
    white-space: nowrap;
  }

  .carousel-primary > img {
    width: 100%;
    margin: 0 30px;
    border-radius: 14px;
  }

  .carousel-primary {
    display: flex;
    justify-content: space-around;
    animation: scroll-horizontal 20s linear infinite;
  }

  .carousel-secondary {
    animation: scroll-horizontal 20s linear infinite;
    animation-delay: 10s;
  }

  @keyframes scroll-horizontal {
    0% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }

  @media screen and (max-width: 400px) {
  }
`;
