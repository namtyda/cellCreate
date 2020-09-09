import styled from 'styled-components';

const AppWrapper = styled.div`
  background: linear-gradient(180deg, #310050 0%, #000000 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  width: 380px;
  padding: 12px;
  
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const CardName = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  margin: 0;
`;

const CardDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;
const CardAvatar = styled.div`
  background: ${({ background }) => background};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-repeat: no-repeat;
  position: relative;
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    background-image: ${({ icon }) => `url(${icon})`};
    position: absolute;
    top: 10px;
    left: 9px;
  }
`;

const MainWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-height: calc(100vh - 40%);
`;

const Title = styled.h1`
  margin: 0 0 22px 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #fff;
  align-self: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: 500px;
  margin-bottom: 20px;

&::-webkit-scrollbar {
    width: 0px;
}
::-webkit-scrollbar {
  width: 2px;
}
  &::-webkit-scrollbar-thumb {
  width: 2px;
  height: 2px;
  background: #005041;
  border-radius: 2px;
  }
`;

const CreateButton = styled.button`
  font-family: 'Roboto', sans-serif;
  background: #5A3472;
  border-radius: 4px;
  border: none;
  padding: 10px;
`;
export {
  AppWrapper,
  CardWrapper,
  CardName,
  CardAvatar  ,
  CardDescription,
  CardInfoWrapper,
  Title,
  MainWrapp,
  CardContainer,
  CreateButton
}