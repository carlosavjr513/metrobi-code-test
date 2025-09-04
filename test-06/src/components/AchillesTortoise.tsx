import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { Footprints, Turtle } from "lucide-react";

export default function App() {
  const achilles = useAnimationControls();
  const tortoise = useAnimationControls();
  const [reset, setReset] = useState(0);

  useEffect(() => {
    async function race() {
      let A = 0;
      let T = 200; 
      const vA = 200; 
      const vT = 100; 

      for (let i = 0; i < 10; i++) {
        const deltaS = T - A
        const deltaT = deltaS / vA;
        const A_to = T;
        const T_to = T + vT * deltaT;

        await Promise.all([
          achilles.start({
            x: A_to,
            transition: { duration: deltaT, ease: "linear" },
          }),
          tortoise.start({
            x: T_to,
            transition: { duration: deltaT, ease: "linear" },
          }),
        ]);

        A = A_to;
        T = T_to;
      }
    }
    
    achilles.set({ x: 0 });
    tortoise.set({ x: 200 });

    race();
  }, [reset, achilles, tortoise]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-400 gap-4">
      <div className="relative w-[600px] h-40 bg-slate-50 border border-slate-100 rounded-lg overflow-hidden">
        <motion.div
          animate={achilles}
          className="absolute top-8 left-0 -translate-x-1/2 flex items-center gap-1"
        >
          <Footprints className="w-5 h-5 text-cyan-600" />
          <span className="text-slate-700">Achilles</span>
        </motion.div>

        <motion.div
          animate={tortoise}
          className="absolute top-24 left-0 -translate-x-1/2 flex items-center gap-1"
        >
          <Turtle className="w-5 h-5 text-emerald-600" />
          <span className="text-slate-700">Turtle</span>
        </motion.div>
      </div>

      <button
        onClick={() => setReset((n) => n + 1)}
        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg shadow"
      >
        Reset
      </button>
    </div>
  );
}
