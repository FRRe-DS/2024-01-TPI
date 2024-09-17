export default function ArtLayout({ children }) {
  return (
    <section className="arteLayout">
      <h1 className="arteTituloPrincipal">Obras de la Bienal</h1>
      {children}
    </section>
  );
}
