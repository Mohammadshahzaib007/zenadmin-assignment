import Container from "../../components/container";
import SearchBar from "../../components/search-bar";

function HomePage() {
  return (
    <section>
      <Container>
        <div className="w-1/2 mx-auto mt-8">
          <SearchBar />
        </div>
      </Container>
    </section>
  );
}

export default HomePage;
