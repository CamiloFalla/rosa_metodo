import React from 'react';

export default function SuccessStories() {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Casos de Éxito</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow">Caso de Éxito #1</div>
        <div className="bg-white p-4 rounded shadow">Caso de Éxito #2</div>
      </div>
    </section>
  );
}