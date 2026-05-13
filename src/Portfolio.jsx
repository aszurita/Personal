import React from 'react';
import profileImg from './profile.png';
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Trophy,
  Code,
  Globe,
  Server,
  Database,
  BrainCircuit,
  Rocket,
  ArrowRight,
  Star,
  Lightbulb,
  Users,
  Award,
  Plane,
  Tv,
  Mic,
  BookOpen
} from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      <header className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 to-gray-950 pt-24 pb-16 px-6 sm:px-12 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium text-sm">
              <Rocket size={16} />
              <span>Del aula a la industria Tech</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Angelo Zurita
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              Ingeniero en Ciencias de la Computacion en ESPOL. Me apasiona el poder de los datos y la
              Inteligencia Artificial. Mi objetivo hoy es mostrarles que{' '}
              <strong className="text-white">
                con esfuerzo y dedicación, ustedes pueden llegar aun mas lejos.
              </strong>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a
                href="#trayectoria"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-semibold flex items-center gap-2"
              >
                Ver mi recorrido <ArrowRight size={18} />
              </a>
              <a
                href="#viajes"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors rounded-lg font-semibold flex items-center gap-2"
              >
                <Globe size={18} /> Eventos de IA
              </a>
            </div>
          </div>

          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-2xl shadow-blue-900/30">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-950">
              <img src={profileImg} alt="Foto de Angelo Zurita" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          SECCIÓN: EL CAMINO QUE ME TRAJO AQUÍ
      ════════════════════════════════════════ */}
      <section id="trayectoria" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium text-sm">
              <Rocket size={16} />
              <span>Desde cero hasta Latinoamerica</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">El Camino que me Trajo Aqui</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              De estudiante sin conocer la programacion a Data Scientist con reconocimiento internacional.{' '}
              <strong className="text-white">Cada paso, grande o pequeno, importo.</strong>
            </p>
          </div>

          <div className="relative">
            {/* Linea vertical continua */}
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/70 via-violet-500/60 via-40% via-emerald-500/60 via-70% via-orange-500/50 to-yellow-500/70" />

            {/* ══ AÑO 2022 ══ */}
            <div className="relative flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center z-10 ring-4 ring-gray-950 text-white font-black text-sm shrink-0 shadow-lg shadow-blue-600/40">
                22
              </div>
              <div className="ml-4 text-2xl font-black text-blue-400 tracking-widest">2022</div>
              <div className="ml-4 flex-1 h-px bg-blue-500/20" />
            </div>

            {/* 1 — El Click que lo Cambio Todo */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-blue-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb size={13} className="text-blue-400 shrink-0" />
                  <p className="text-blue-400 font-bold text-xs tracking-wide uppercase">ESPOL · Fundamentos de Programacion</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">El Click que lo Cambio Todo</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>Descubri la programacion y entendi que los datos podian cambiar el mundo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>La materia que me hizo decidirlo todo.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 — Y si Apuesto */}
            <div className="relative mb-10">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-blue-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-blue-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <ArrowRight size={13} className="text-blue-300 shrink-0" />
                  <p className="text-blue-300 font-bold text-xs tracking-wide uppercase">ESPOL · Telematica → Computacion</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">¿Y si Apuesto por lo que me Apasiona?</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-blue-300 mt-0.5 shrink-0" />
                    <span>La decision mas dificil: cambiar de carrera cuando todo ya estaba en marcha.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-blue-300 mt-0.5 shrink-0" />
                    <span>Dudas.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ══ AÑO 2023 ══ */}
            <div className="relative flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center z-10 ring-4 ring-gray-950 text-white font-black text-sm shrink-0 shadow-lg shadow-violet-600/40">
                23
              </div>
              <div className="ml-4 text-2xl font-black text-violet-400 tracking-widest">2023</div>
              <div className="ml-4 flex-1 h-px bg-violet-500/20" />
            </div>

            {/* 3 — Del Mapa al Codigo */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-violet-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Code size={13} className="text-violet-400 shrink-0" />
                  <p className="text-violet-400 font-bold text-xs tracking-wide uppercase">ESPOL · Cambio de Carrera</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Del Mapa al Codigo: El Cambio Oficial</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Cambio oficial a Computacion — sin mirar atras.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Empiece a formarme en serio en programacion, datos y tecnologia.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 — Mis Primeras Lineas para el Mundo Real */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-violet-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Database size={13} className="text-violet-400 shrink-0" />
                  <p className="text-violet-400 font-bold text-xs tracking-wide uppercase">ESPOL · Proyecto Rectorado</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Mis Primeras Lineas para el Mundo Real</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Python + visualizaciones automaticas para el Rectorado y Decanato de ESPOL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Un dashboard se convirtio en mi primer proyecto de impacto real.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5 — Houston, Tenemos Datos */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-violet-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={13} className="text-violet-300 shrink-0" />
                  <p className="text-violet-300 font-bold text-xs tracking-wide uppercase">Smart Explorer CSR · Top 7 General</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Primera competencia</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-300 mt-0.5 shrink-0" />
                    <span>Competencia de analisis de datos y modelos durante un fin de semana completo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-300 mt-0.5 shrink-0" />
                    <span>Top 7 General.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-violet-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Rocket size={13} className="text-violet-400 shrink-0" />
                  <p className="text-violet-400 font-bold text-xs tracking-wide uppercase">NASA Space Apps Challenge 2023 · Top 7</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Primera vez participando fuera de espol</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Primera competencia internacional — terminamos en el Top 7.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-400 mt-0.5 shrink-0" />
                    <span>Eso me convencio de que podia competir a ese nivel.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 — Primera Batalla, Primera Medalla */}


            {/* 7 — Encontre mi Tribu Tech */}
            <div className="relative mb-10">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-violet-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-violet-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={13} className="text-violet-300 shrink-0" />
                  <p className="text-violet-300 font-bold text-xs tracking-wide uppercase">TAWS Club Tecnologico</p>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-300 mt-0.5 shrink-0" />
                    <span>Ingrese al club y al mes ya lideraba el area de Recursos Humanos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-violet-300 mt-0.5 shrink-0" />
                    <span>La forma en que conectamos con las persona</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ══ AÑO 2024 ══ */}
            <div className="relative flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center z-10 ring-4 ring-gray-950 text-white font-black text-sm shrink-0 shadow-lg shadow-emerald-600/40">
                24
              </div>
              <div className="ml-4 text-2xl font-black text-emerald-400 tracking-widest">2024</div>
              <div className="ml-4 flex-1 h-px bg-emerald-500/20" />
            </div>

            {/* 8 — El Primer Sueldo con Datos */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={13} className="text-emerald-400 shrink-0" />
                  <p className="text-emerald-400 font-bold text-xs tracking-wide uppercase">Internship Data Analysis · Ene–Feb 2024</p>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Limpieza de datos, segmentacion con IA y modelos de churn en una empresa real.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Primera experiencia internacional.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 9 — Becado, en Avion, Lejos de Casa */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Plane size={13} className="text-emerald-400 shrink-0" />
                  <p className="text-emerald-400 font-bold text-xs tracking-wide uppercase">SALA 6.0 · Primera Beca Internacional · Feb 2024</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Primera vez viajando en avión</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Primera beca de viaje (~$500) para conferencia internacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Participar en comunidades abre puertas que el aula sola no puede.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 10 — IA para Salvar Vidas */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <BrainCircuit size={13} className="text-emerald-400 shrink-0" />
                  <p className="text-emerald-400 font-bold text-xs tracking-wide uppercase">Proyecto ML · Deteccion de Cancer de Mama · 2024</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">IA para Salvar Vidas</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>Modelo ML para detectar si un tumor es benigno o maligno.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-400 mt-0.5 shrink-0" />
                    <span>La inteligencia artificial puede tener impacto social real, no solo empresarial.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 11 — Canal 4 me Llamo */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Tv size={13} className="text-emerald-300 shrink-0" />
                  <p className="text-emerald-300 font-bold text-xs tracking-wide uppercase">Canal 4 RTS · Television Nacional · 23 Abril 2024</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Presentación del Modelos de Inteligencia Artifical para RTS</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>El proyecto de deteccion de cancer llego a la television nacional.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>Comunicar tecnologia al publico es tan importante como programarla.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 12 — Ahora Yo Lidero */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={13} className="text-emerald-300 shrink-0" />
                  <p className="text-emerald-300 font-bold text-xs tracking-wide uppercase">TAWS Vicepresidente Académico · May 2024</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Vicepresidente Académico</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>Dirijia proyectos educativos, seleccion de talento y formacion dentro del club.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>El liderazgo real se aprende liderando, no leyendo sobre liderazgo.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 13 — NASA Global: Ecuador en el Mapa */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Globe size={13} className="text-emerald-300 shrink-0" />
                  <p className="text-emerald-300 font-bold text-xs tracking-wide uppercase">NASA Space Apps Challenge 2024 · Nominado Global</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">NASA Global: Ecuador en el Mapa</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>Top 3 local + Nominado Global representando a Guayaquil y Ecuador.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-300 mt-0.5 shrink-0" />
                    <span>Un ano de diferencia, un nivel completamente distinto de resultado.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 14 — Datos a Escala Industrial */}
            <div className="relative mb-10">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-emerald-300 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Server size={13} className="text-emerald-200 shrink-0" />
                  <p className="text-emerald-200 font-bold text-xs tracking-wide uppercase">ESPOL TECH · Data Scientist en TIA · Sep 2024</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Datos a Escala Industrial</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-200 mt-0.5 shrink-0" />
                    <span>PySpark, Databricks, pruebas A/B y sistemas de recomendacion con millones de filas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-emerald-200 mt-0.5 shrink-0" />
                    <span>Soluciones a problemas reales de empresa</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ══ AÑO 2025 ══ */}
            <div className="relative flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center z-10 ring-4 ring-gray-950 text-white font-black text-sm shrink-0 shadow-lg shadow-orange-600/40">
                25
              </div>
              <div className="ml-4 text-2xl font-black text-orange-400 tracking-widest">2025</div>
              <div className="ml-4 flex-1 h-px bg-orange-500/20" />
            </div>

            {/* 15 — El Mundo Afuera del Codigo */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-orange-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Plane size={13} className="text-orange-400 shrink-0" />
                  <p className="text-orange-400 font-bold text-xs tracking-wide uppercase">Work and Travel · Estados Unidos · Ene 2025</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">El Mundo Afuera del Codigo</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>Viaje a EE.UU. para vivir, trabajar y crecer fuera de Ecuador.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>El mundo tech es global — y tambien hay que vivirlo.</span>
                  </li>
                </ul>
              </div>
            </div>


            {/* 16 — Una Semana en EE.UU. y el MIT Toco mi Puerta */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-orange-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={13} className="text-orange-400 shrink-0" />
                  <p className="text-orange-400 font-bold text-xs tracking-wide uppercase">Charla· IA para Negocios · 21 May 2025</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Se hizo realidad, promover la ciencia de datos en colegios</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>Habia llegado a Estados Unidos menos de una semana antes cuando surgio la oportunidad de asistir a una conferencia de inteligencia artificial para negocios.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>Ahi conoci a dos personas de la Junta de Beneficencia — y nacio la idea de llevar ciencia de datos e IA a los colegios. Hoy es una realidad con dos instituciones activas.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 17 — Ensenar es el Mejor Maestro */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-orange-500 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen size={13} className="text-orange-400 shrink-0" />
                  <p className="text-orange-400 font-bold text-xs tracking-wide uppercase">Mentor Academico · MINTEL · Data Foundation Program · Agosto 2025 – Febrero 2026</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Ensenar es el Mejor Maestro</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>Dicte modulos de SQL, Python, BI y GenAI a becarios de todo el pais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-400 mt-0.5 shrink-0" />
                    <span>La mejor forma de dominar algo es explicarselo a otros.</span>
                  </li>
                </ul>
              </div>
            </div>



            {/* ══ AÑO 2026 ══ */}
            <div className="relative flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center z-10 ring-4 ring-gray-950 text-gray-950 font-black text-sm shrink-0 shadow-lg shadow-yellow-500/40">
                26
              </div>
              <div className="ml-4 text-2xl font-black text-yellow-400 tracking-widest">2026</div>
              <div className="ml-4 flex-1 h-px bg-yellow-500/20" />
            </div>

            {/* 18 — La Cima de Latinoamerica */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-yellow-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-yellow-500/30 hover:border-yellow-400/60 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-900/20">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy size={13} className="text-yellow-400 shrink-0" />
                  <p className="text-yellow-400 font-bold text-xs tracking-wide uppercase">SALA 2026 · Top 3 LATAM · #1 Ecuador · Beca Completa</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">La Cima de Latinoamerica</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                    <span>Banana Vision AI: IA para deteccion temprana de enfermedades del banano.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                    <span>Beca completa + reconocimiento continental. El esfuerzo acumulado da frutos.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 19 — Mi Voz en las Ondas */}
            <div className="relative mb-5">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-yellow-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Mic size={13} className="text-yellow-400 shrink-0" />
                  <p className="text-yellow-400 font-bold text-xs tracking-wide uppercase">Primera Entrevista en Podcast · 2026</p>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                    <span>Difundiendo el impacto de la IA y los datos mas alla del codigo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                    <span>El mejor proyecto es el que llega a la gente.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 20 — Datos en el Banco */}
            <div className="relative mb-4">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-yellow-300 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Database size={13} className="text-yellow-300 shrink-0" />
                  <p className="text-yellow-300 font-bold text-xs tracking-wide uppercase">Banco Guayaquil · DWH Intern · Mar 2026 – Actualidad</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">Datos en el Banco</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-300 mt-0.5 shrink-0" />
                    <span>Oracle APEX, Data Governance y dashboards que impactan decisiones empresariales.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-yellow-300 mt-0.5 shrink-0" />
                    <span>De la universidad a uno de los bancos mas grandes del Ecuador.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mb-10">
              <div className="absolute left-[12px] top-4 w-4 h-4 rounded-full bg-orange-400 ring-[3px] ring-gray-950 z-10" />
              <div className="ml-14 bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-xl p-5 transition-all hover:-translate-y-0.5 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={13} className="text-orange-300 shrink-0" />
                  <p className="text-orange-300 font-bold text-xs tracking-wide uppercase">Paper Aceptado · Conferencia Internacional · Portugal · Abr 2026</p>
                </div>
                <h3 className="text-base font-bold text-white mb-3">La Ciencia en un Papel</h3>
                <ul className="space-y-1.5 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-300 mt-0.5 shrink-0" />
                    <span>Analisis de series temporales sobre rendimiento estudiantil bajo reformas academicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star size={12} className="text-orange-300 mt-0.5 shrink-0" />
                    <span>Investigacion academica formal aceptada a nivel internacional.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="viajes" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <MapPin className="text-purple-400" size={36} />
              El Mundo a traves de la IA
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Cada competencia, cada conferencia, una ciudad nueva.{' '}
              <strong className="text-white">Asi se construye una carrera.</strong>
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-1">
              <span className="flex items-center gap-1.5 text-xs text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" /> Guayaquil
              </span>
              <span className="flex items-center gap-1.5 text-xs text-violet-400 bg-violet-500/10 border border-violet-500/30 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-violet-400 inline-block" /> Quito
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Cuenca
              </span>
              <span className="flex items-center gap-1.5 text-xs text-orange-400 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Internacional
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">

            {/* 1 — Guayaquil · NASA Space Apps */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">1</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Guayaquil</p>
              <p className="text-[10px] text-gray-500 mb-1.5">8 Oct 2023</p>
              <p className="text-xs font-bold text-white leading-tight">NASA Space Apps</p>
              <p className="text-[10px] text-gray-400 mt-1">Top 7 · 1ra competencia</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 2 — Quito · SALA 6.0 */}
            <div className="relative bg-gray-900 border border-violet-500/40 hover:border-violet-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">2</div>
              <p className="text-xs font-bold text-violet-400 mb-0.5">🇪🇨 Quito</p>
              <p className="text-[10px] text-gray-500 mb-1.5">18–25 Feb 2024 · 7d</p>
              <p className="text-xs font-bold text-white leading-tight">SALA 6.0</p>
              <p className="text-[10px] text-gray-400 mt-1">1ra beca · 1er vuelo ✈️</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 3 — Quito · Google I/O */}
            <div className="relative bg-gray-900 border border-violet-500/40 hover:border-violet-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">3</div>
              <p className="text-xs font-bold text-violet-400 mb-0.5">🇪🇨 Quito</p>
              <p className="text-[10px] text-gray-500 mb-1.5">3–4 Ago 2024 · 2d</p>
              <p className="text-xs font-bold text-white leading-tight">Google I/O Connect</p>
              <p className="text-[10px] text-gray-400 mt-1">Toda TAWS presente</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 4 — Cuenca · IEEE */}
            <div className="relative bg-gray-900 border border-emerald-500/40 hover:border-emerald-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">4</div>
              <p className="text-xs font-bold text-emerald-400 mb-0.5">🇪🇨 Cuenca</p>
              <p className="text-[10px] text-gray-500 mb-1.5">25 Oct 2024 · 24h</p>
              <p className="text-xs font-bold text-white leading-tight">Competencia IEEE</p>
              <p className="text-[10px] text-gray-400 mt-1">24h sin dormir 🌙</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 5 — EE.UU. · Work and Travel */}
            <div className="relative bg-gray-900 border border-orange-500/40 hover:border-orange-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">5</div>
              <p className="text-xs font-bold text-orange-400 mb-0.5">🇺🇸 EE.UU.</p>
              <p className="text-[10px] text-gray-500 mb-1.5">18 Feb–May 2025 · 3m</p>
              <p className="text-xs font-bold text-white leading-tight">Work and Travel</p>
              <p className="text-[10px] text-gray-400 mt-1">3 meses en el exterior</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 6 — Guayaquil · UCG */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">6</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Guayaquil</p>
              <p className="text-[10px] text-gray-500 mb-1.5">31 May 2025</p>
              <p className="text-xs font-bold text-white leading-tight">Evento Univ. Católica</p>
              <p className="text-[10px] text-gray-400 mt-1">Charla tecnologica</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 7 — Cuenca · Build with AI */}
            <div className="relative bg-gray-900 border border-emerald-500/40 hover:border-emerald-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">7</div>
              <p className="text-xs font-bold text-emerald-400 mb-0.5">🇪🇨 Cuenca</p>
              <p className="text-[10px] text-gray-500 mb-1.5">11–13 Jul 2025 · 3d</p>
              <p className="text-xs font-bold text-white leading-tight">Build with AI · Google</p>
              <p className="text-[10px] text-gray-400 mt-1">TAWS como sponsor 🏅</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 8 — Guayaquil · Enlace Speech Chat */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">8</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Guayaquil</p>
              <p className="text-[10px] text-gray-500 mb-1.5">5 Oct 2025</p>
              <p className="text-xs font-bold text-white leading-tight">Enlace Speech Chat</p>
              <p className="text-[10px] text-gray-400 mt-1">Evento tech local</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 9 — Guayaquil · Conferencia Computación */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">9</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Guayaquil</p>
              <p className="text-[10px] text-gray-500 mb-1.5">17 Oct 2025</p>
              <p className="text-xs font-bold text-white leading-tight">Conf. Computacion UCG</p>
              <p className="text-[10px] text-gray-400 mt-1">Ponente invitado</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 10 — Guayaquil · El Milagro */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">10</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Milagro</p>
              <p className="text-[10px] text-gray-500 mb-1.5">18–20 Nov 2025 · 3d</p>
              <p className="text-xs font-bold text-white leading-tight">Innovatech AI Latam</p>
              <p className="text-[10px] text-gray-400 mt-1">Evento especial</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 11 — Quito · Hackathon Google */}
            <div className="relative bg-gray-900 border border-violet-500/40 hover:border-violet-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">11</div>
              <p className="text-xs font-bold text-violet-400 mb-0.5">🇪🇨 Quito</p>
              <p className="text-[10px] text-gray-500 mb-1.5">27–30 Nov 2025 · 4d</p>
              <p className="text-xs font-bold text-white leading-tight">Hackathon Google</p>
              <p className="text-[10px] text-gray-400 mt-1">4 dias de codigo puro</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 12 — Quito · SALA 2026 */}
            <div className="relative bg-gray-900 border border-yellow-500/60 hover:border-yellow-400 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg shadow-yellow-900/20">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center text-gray-950 font-black text-[10px] z-10 ring-2 ring-gray-950">12</div>
              <p className="text-xs font-bold text-yellow-400 mb-0.5">🇪🇨 Quito</p>
              <p className="text-[10px] text-gray-500 mb-1.5">8–13 Mar 2026 · 6d</p>
              <p className="text-xs font-bold text-white leading-tight">SALA 2026 🏆</p>
              <p className="text-[10px] text-yellow-400 mt-1 font-bold">Top 3 LATAM · #1 Ecuador</p>
            </div>
            <ArrowRight size={12} className="text-gray-600 shrink-0" />

            {/* 13 — Guayaquil · Banco Guayaquil */}
            <div className="relative bg-gray-900 border border-blue-500/40 hover:border-blue-400/80 rounded-xl p-3 w-36 transition-all hover:-translate-y-1 shadow-lg">
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px] z-10 ring-2 ring-gray-950">13</div>
              <p className="text-xs font-bold text-blue-400 mb-0.5">🇪🇨 Guayaquil</p>
              <p className="text-[10px] text-gray-500 mb-1.5">16 Mar 2026</p>
              <p className="text-xs font-bold text-white leading-tight">Banco Guayaquil</p>
              <p className="text-[10px] text-gray-400 mt-1">Inicio DWH Intern 🎯</p>
            </div>

          </div>
          <p className="text-center text-xs text-gray-600 mt-8 italic">13 paradas · 4 ciudades · 1 camino construido con esfuerzo</p>

        </div>
      </section>

      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/30 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-4">
              <Code className="text-blue-500" size={32} />
              Proyectos Destacados
            </h2>
            <p className="text-gray-400 text-lg">
              Crear soluciones reales es lo que marca la diferencia en tu curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">Banana Vision AI</h3>
                <span className="bg-blue-900/40 text-blue-400 text-xs font-bold px-2 py-1 rounded shrink-0">
                  SALA 2026 Winner
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                Plataforma de IA para deteccion temprana de enfermedades del banano. Integre vision computacional,
                pipelines de datos y LLMs servidos a traves de una API con FastAPI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Python</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">FastAPI</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Computer Vision</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Smart Tutor for ESPOL</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                Chatbot educativo con la API de ChatGPT para asistir a estudiantes principiantes en Fundamentos de
                Programacion, proporcionando soporte personalizado.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Python</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">ChatGPT API</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">Deteccion de Cancer de Mama</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                Modelo predictivo para determinar benignidad o malignidad de tumores. Publicacion de articulo en Medium
                sobre la problematica en Ecuador.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Scikit-learn</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">CatBoost</span>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-colors flex flex-col">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-xl font-bold text-white">WiDS ESPOL Web</h3>
                <span className="bg-orange-900/40 text-orange-400 text-xs font-bold px-2 py-1 rounded shrink-0">
                  Lider de Proyecto
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                Desarrollo de la plataforma oficial para el evento Women in Data Science ESPOL 2025, liderando un equipo
                multidisciplinario.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">React</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-800 text-xs rounded text-gray-300">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-950 text-center border-t border-gray-900">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">El limite lo pones tu.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="mailto:aszurita@espol.edu.ec" className="text-gray-400 hover:text-white transition-colors">
              aszurita@espol.edu.ec
            </a>
          </div>
          <p className="mt-12 text-sm text-gray-600">
            © 2026 Angelo Zurita
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
