// src/pages/About.jsx

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <section className="text-center p-8">
        <h1 className="text-3xl font-semibold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 mb-6">
          EvaluaLaRosa es una plataforma diseñada para evaluar y optimizar el rendimiento laboral, con herramientas avanzadas para análisis y gestión de datos.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Gestión de indicadores clave de desempeño.</li>
          <li>Evaluaciones personalizadas para cada área de trabajo.</li>
          <li>Análisis detallado y recomendaciones.</li>
        </ul>
      </section>
    </main>
  );
}