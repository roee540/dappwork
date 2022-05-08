import { Container, Media } from "reactstrap";
import mainImg from "../assets/home.jpeg";

const Home = () => {
  const imgStyle = {
    maxHeight: 300,
    maxWidth: "90%",
  };
  return (
    <Container className="d-flex justify-content-center">
      <Media object src={mainImg} style={imgStyle} />
    </Container>
  );
};

export default Home;
