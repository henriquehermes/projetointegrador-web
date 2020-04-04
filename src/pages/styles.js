import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  height: 70px;
  background-color: #2c3e50;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
`;

export const Title = styled.h1`
  font-family: "Open Sans Condensed", sans-serif;
  color: #ecf0f1;
  font-size: 25px;
  font-weight: 900;
`;

export const TitleAbout = styled.h1`
font-family: "Open Sans Condensed", sans-serif;
color: #2c3e50;
font-size: 25px;
font-weight: 900;
text-align: center;
`;

export const Footer = styled.div`
  background-color: #ecf0f1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: ". .";
  height: 100px;
`;

export const CenterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const MenuButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 50px;
  border-width: 0px;
  background-color: #ecf0f1;
  margin: 0px 6px;
`;

export const ButtonText = styled.span`
  font-family: "Open Sans Condensed", sans-serif;
  color: #2c3e50;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ButtonMark = styled.button`
  background: none;
  cursor: pointer;
  border: none;
`;

export const SubFooter = styled.span`
   color: #2c3e50;
  font-size: 12px;
  font-weight: bold;
`