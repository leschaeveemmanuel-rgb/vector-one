import React from 'react';
import NewsCard from './components/NewsCard'; // Le composant qu'on a créé ensemble

export default function SpaceDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-white font-sans">
      {/* Barre de navigation "Mission Control" */}
      <nav className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-xl font-black tracking-tighter text-blue-500">ASTRO_LAB</div>
        <div className="space-x-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition">ACTUALITÉ</a>
          <a href="#" className="hover:text-white transition">MODÉLISME</a>
          <a href="#" className="hover:text-white transition">ARCHIVES</a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        {/* Section Hero : L'événement majeur */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 p-8">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">A la une</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">Objectif Mars : Le Starship s'apprête au décollage.</h1>
          <p className="text-slate-400 max-w-2xl mb-6 text-lg">Analyse technique des systèmes de survie et des modifications apportées au bouclier thermique pour la mission habitée.</p>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full font-bold transition">Lire le rapport complet</button>
        </section>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard 
            category="Astronautique"
            title="Sonde Voyager 1"
            description="Reprise des transmissions de données scientifiques après la panne moteur."
            date="Avril 2026"
            image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
          />
          <NewsCard 
            category="Modélisme"
            title="Saturn V (1/144)"
            description="Comment obtenir un fini métal réaliste sur l'étage S-II avec les peintures Alclad."
            date="Mai 2026"
            image="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2"
          />
          {/* Tu peux en ajouter d'autres ici */}
        </div>
      </main>
    </div>
  );
}