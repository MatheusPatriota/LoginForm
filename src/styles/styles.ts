import styled from "styled-components";

export const MainStyles = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  .cinquenta {
    width: 50%;
  }

  .leftside {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  .logo {
    position: absolute;
    width: 115px;
    height: 28px;
    left: 40px;
    top: 40px;
  }

  .loginarea {
    position: absolute;
    width: 572px;
    height: 512px;

    background: #24221f;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .toplogin {
      display: flex;
      flex-direction: column;

      span {
        font-weight: 500;
        font-size: 16px;
        color: #afb6c2;
      }

      .top {
        font-weight: 600;
        font-size: 24px;
        color: #d4ccb6;

        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
        }
      }
    }

    .recoverypasswordarea {
      width: 335px;
      display: flex;
      flex-direction: row;
      align-items: center;

      justify-content: space-between;

      span {
        color: #a9afb9;
        display: flex;
        align-items: center;

        input {
          all: unset;
          width: 20px;
          height: 20px;

          border: 1px solid #868686;
          box-sizing: border-box;
          border-radius: 4px;
          margin-right: 5px;
        }
        input:checked {
          background-color: #ffc632;
        }
      }
      .forgotpassword {
        color: #ffc632;
        font-weight: 600;
        font-size: 14px;
      }
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      border: none;
      cursor: pointer;

      width: 334px;
      height: 51px;

      background: #ffc632;
      border-radius: 4px;

      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      /* identical to box height */

      letter-spacing: 0.015em;
      text-transform: uppercase;
      color: #473404;

      margin-top: 32px;
    }

    button:hover {
      background: #dec175;
    }

    .footer {
      color: #ffc632;
      font-weight: normal;
      font-size: 14px;
      margin-top: 14px;
    }
  }
  .rightside {
    .rightsideimage {
      width: 100%;
      height: 100%;

      background-size: cover;
    }
  }
`;
