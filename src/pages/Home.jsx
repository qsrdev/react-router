export default function HomePage() {
  return (
    <>
      <main>
        <div className="container">
          <h1 className="d-flex justify-content-center align-items-center">Questo è un certificato momento napoletano</h1>
          <div className="d-flex justify-content-center align-items-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UxGzZoL3YeQ?si=VdXOcZY28jUmWhgo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
