import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  h1 {
    color: ${(props) => (props.colored ? "black" : "red")};
    font-size: 26px;
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const ExtendHeader = styled(Header)`
  justify-content: space-between;
`;

function AppHeader() {
  return (
    <ExtendHeader colored as="header">
      <h1>Account name</h1>
      <h2>5 tweets, like 0</h2>
    </ExtendHeader>
  );
}

export default AppHeader;
