// import React from "react";

// const PosterCard = ({ schedule }) => (
//   <div
//     id="poster-card"
//     className="w-[500px] bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-2xl shadow-2xl p-6 font-sans"
//   >
//     <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">📅 My Plan</h2>
//     {Object.keys(schedule).map((day) => (
//       <div key={day} className="mb-4">
//         <h3 className="text-lg font-semibold text-blue-700 capitalize">🌟 {day}</h3>
//         <ul className="list-none ml-4">
//           {schedule[day].map((item) => (
//             <li key={item.id} className="text-gray-700">
//               ⏰ {item.time || "—"} — <span className="font-medium">{item.title}</span> ({item.est}, {item.vibe})
//             </li>
//           ))}
//         </ul>
//       </div>
//     ))}
//     <p className="text-xs text-gray-500 text-center mt-6">✨ Generated with My Planner ✨</p>
//   </div>
// );

// export default PosterCard;

import React from "react";

const PosterCard = ({ schedule }) => {
  // Check if schedule has any data
  const hasScheduleData = schedule && Object.keys(schedule).some(day => 
    schedule[day] && schedule[day].length > 0
  );

  if (!hasScheduleData) {
    return (
      <div
        id="poster-card"
        className="w-[500px] bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-2xl shadow-2xl p-6 font-sans"
        style={{ minHeight: '400px' }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">📅 My Plan</h2>
        <div className="text-center text-gray-500 py-8">
          <p className="text-lg">No activities scheduled yet!</p>
          <p className="text-sm mt-2">Add some activities to your schedule to create a poster.</p>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">✨ Generated with My Planner ✨</p>
          <p className="text-xs text-gray-400 text-center mt-1">
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="poster-card"
      className="w-[500px] bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-2xl shadow-2xl p-6 font-sans"
      style={{ minHeight: '400px' }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">📅 My Weekend Plan</h2>
        <p className="text-sm text-gray-600">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>
      
      <div className="space-y-6">
        {Object.keys(schedule)
          .filter(day => schedule[day] && schedule[day].length > 0)
          .map((day) => (
            <div key={day} className="bg-white/60 rounded-xl p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 capitalize mb-3 flex items-center">
                <span className="mr-2 text-xl">
                  {day === 'saturday' ? '🌟' : day === 'sunday' ? '☀️' : '📅'}
                </span>
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </h3>
              
              <div className="space-y-2">
                {schedule[day].map((item, index) => (
                  <div key={item.id || index} className="flex items-center text-gray-700 bg-white/40 rounded-lg p-2">
                    <div className="flex items-center min-w-0 flex-1">
                      <span className="text-blue-500 mr-2 text-sm">⏰</span>
                      <span className="font-medium text-gray-800 mr-2">
                        {item.time || "09:00"}
                      </span>
                      <span className="text-gray-500 mr-2">—</span>
                      <span className="font-semibold text-gray-900 mr-2 truncate">
                        {item.title}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {item.est || "1h"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-300">
        <div className="text-center">
          <p className="text-xs text-gray-500">✨ Generated with My Planner ✨</p>
          <p className="text-xs text-gray-400 mt-1">
            Created on {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;