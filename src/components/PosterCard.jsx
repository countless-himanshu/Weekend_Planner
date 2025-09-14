//This `PosterCard.jsx` component generates a visually styled poster of the weekend schedule, displaying each day’s activities with time, title, estimated duration, and vibe, using color-coded accents and responsive layout, and supports a `ref` for capturing the poster via `html2canvas` or PDF export.

import React from "react";

const accentColors = [
  "#6366f1", // indigo
  "#f59e42", // orange
  "#10b981", // green
  "#f472b6", // pink
  "#fbbf24", // yellow
  "#38bdf8", // blue
];

const PosterCard = React.forwardRef(({ schedule }, ref) => {
  const hasScheduleData = schedule && Object.keys(schedule).some(day => 
    schedule[day] && schedule[day].length > 0
  );

  return (
    <div
      ref={ref}
      id="poster-card"
      className="w-[600px] h-[850px] bg-gradient-to-br from-indigo-100 via-white to-blue-100 rounded-3xl shadow-2xl p-10 font-sans flex flex-col justify-between border-4 border-indigo-200"
      style={{ minHeight: '800px', minWidth: '600px' }}
    >
      <div>
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-2 tracking-tight drop-shadow-lg">Weekend Activity Planner</h1>
        <p className="text-center text-lg text-gray-600 mb-8">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        {!hasScheduleData ? (
          <div className="flex flex-col items-center justify-center h-96">
            <p className="text-2xl text-gray-400 mb-2">No activities scheduled yet!</p>
            <p className="text-base text-gray-400">Add some activities to your schedule to create a poster.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.keys(schedule)
              .filter(day => schedule[day] && schedule[day].length > 0)
              .map((day, i) => (
                <div key={day} className="bg-white/80 rounded-2xl p-6 shadow-md border-l-8" style={{ borderColor: accentColors[i % accentColors.length] }}>
                  <h2 className="text-2xl font-bold text-indigo-600 capitalize mb-4 flex items-center gap-2">
                    <span className="text-2xl">
                      {day === 'saturday' ? '🌟' : day === 'sunday' ? '☀️' : '📅'}
                    </span>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </h2>
                  <ul className="space-y-3">
                    {schedule[day].map((item, idx) => (
                      <li key={item.id || idx} className="flex items-center gap-4 bg-indigo-50 rounded-xl px-4 py-2 shadow-sm">
                        <span className="text-indigo-400 text-xl">⏰</span>
                        <span className="font-semibold text-gray-800 w-20">{item.time || "09:00"}</span>
                        <span className="text-gray-500">—</span>
                        <span className="font-bold text-indigo-700 flex-1 truncate">{item.title}</span>
                        <span className="text-xs text-white bg-indigo-400 px-2 py-1 rounded-full">{item.est || "1h"}</span>
                        <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">{item.vibe || ""}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="mt-10 pt-6 border-t border-indigo-200 text-center">
        <p className="text-base text-indigo-500 font-semibold">✨ Generated with Weekendly ✨</p>
        <p className="text-xs text-gray-400 mt-1">{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
});

export default PosterCard;