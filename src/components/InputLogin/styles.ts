import styled from "styled-components";

export const InputLoginStyles = styled.div`
  width: 335px;
  height: 44px;

  border: 1px solid #868686;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 20px;
  margin-top: 27px;

  display: flex;
  padding: 12px;

  img {
    margin-right: 5px;
    color: #fff;
  }

  input {
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: none;
    color: #a9afb9;
  }

  :onfocus {
    border: 1px solid #ffc632;
    box-sizing: border-box;
    box-shadow: 0px 0px 0px 2px #ffde88;
    border-radius: 4px;
  }
`;
