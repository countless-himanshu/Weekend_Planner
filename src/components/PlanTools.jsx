// import React from "react";

// const PlanTools = ({ theme, clearSchedule, exportPlan, sharePlanAsPoster, addDay }) => (
//   <div className={`md:col-span-2 ${theme.card} p-6 rounded-2xl shadow-xl`}>
//     <div className="flex items-center mb-4">
//       <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-3"></div>
//       <h4 className="font-bold text-xl text-gray-800">Plan Tools</h4>
//     </div>
//     <div className="flex flex-wrap gap-3">
//       <button
//         onClick={addDay}
//         className="px-6 py-3 border-2 border-blue-200 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//         Add Day
//       </button>
//       <button
//         onClick={clearSchedule}
//         className="px-6 py-3 border-2 border-red-200 rounded-xl bg-white text-red-600 font-bold hover:bg-red-50 hover:border-red-300 transition-all transform hover:scale-105 flex items-center gap-2"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//         </svg>
//         Clear All
//       </button>
//       <button
//         onClick={sharePlanAsPoster}
//         className="px-6 py-3 border-2 border-purple-200 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
//       >
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//         </svg>
//         Share as Poster
//       </button>
//     </div>
//   </div>
// );

// export default PlanTools;
import React from "react";

const PosterCard = React.forwardRef(({ schedule }, ref) => (
  <div
    ref={ref}
    id="poster-card"
    className="w-[500px] bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-2xl shadow-2xl p-6 font-sans"
  >
    <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">📅 My Plan</h2>
    {Object.keys(schedule).map((day) => (
      <div key={day} className="mb-4">
        <h3 className="text-lg font-semibold text-blue-700 capitalize">🌟 {day}</h3>
        <ul className="list-none ml-4">
          {schedule[day].map((item) => (
            <li key={item.id} className="text-gray-700">
              ⏰ {item.time || "—"} —{" "}
              <span className="font-medium">{item.title}</span> ({item.est}, {item.vibe})
            </li>
          ))}
        </ul>
      </div>
    ))}
    <p className="text-xs text-gray-500 text-center mt-6">✨ Generated with My Planner ✨</p>
  </div>
));

export default PosterCard;
