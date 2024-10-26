import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  color: white;
  background-color: black;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  
`;
const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>L</Left>
        <Center>C</Center>
        <Right>R</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
