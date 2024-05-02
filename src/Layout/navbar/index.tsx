import Container from "../../components/container";

export default function Navbar() {
  return (
    <nav className="h-[3.75rem] bg-[#0E141E] mb-4">
      <Container className="w-full h-full flex items-center">
        <h1 className="text-2xl font-semibold text-white">Hacker News</h1>
      </Container>
    </nav>
  );
}
