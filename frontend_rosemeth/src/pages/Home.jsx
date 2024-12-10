// src/pages/Home.jsx
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a EvaluaLaRosa</h1>
        <p className="text-lg text-gray-600 mb-6">
          Nuestra plataforma te ayuda a evaluar y gestionar indicadores de desempeño para una experiencia laboral óptima.
        </p>
        <img src="/images/imagegoodoffice.jpg" alt="EvaluaLaRosa" className="w-80 mx-auto rounded-lg shadow-lg" />
      </section>
    </main>
  );
}