"use client";

import { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface Month {
  name: string;
  firstDay: string;
}

interface CalendarData {
  weeks: Week[];
  months: Month[];
}

const fetchGithubCalendar = async (): Promise<CalendarData> => {
  const res = await fetch("/api/github-calendar");
  if (!res.ok) throw new Error("Failed to fetch GitHub calendar");
  return res.json();
};

export default function GithubStats() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const { data: calendarData, isLoading } = useQuery<CalendarData>({
    queryKey: ["githubCalendar"],
    queryFn: fetchGithubCalendar,
  });

  // Auto-scroll
  // Auto-scroll
  useEffect(() => {
    if (calendarData && gridRef.current) {
      // Delay until DOM + framer-motion animations finish initial mount
      const id = setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.scrollTo({
            left: gridRef.current.scrollWidth,
            behavior: "smooth", // keeps smooth animation
          });
        }
      }, 50); // small delay is enough

      return () => clearTimeout(id);
    }
  }, [calendarData]);

  const getMonthLabels = (): string[] => {
    if (!calendarData?.months?.length || !calendarData?.weeks?.length)
      return [];
    const labels = new Array(calendarData.weeks.length).fill("");

    calendarData.months.forEach((month) => {
      const monthStartDate = new Date(month.firstDay);
      const weekIndex = calendarData.weeks.findIndex((week) =>
        week.contributionDays.some(
          (day) =>
            new Date(day.date).toDateString() === monthStartDate.toDateString()
        )
      );
      if (weekIndex !== -1) labels[weekIndex] = month.name;
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div
      className="overflow-x-auto font-mono text-sm bg-[#030303] p-4 sm:p-5 lg:py-10 rounded-2xl sm:rounded-3xl md:rounded-4xl mt-6 2xl:mt-8 md:max-w-[834px] mx-auto"
      ref={gridRef}
    >
      {/* Loading state */}
      {isLoading && (
        <motion.div
          className="flex justify-center items-center h-[100px] text-stone-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          Loading GitHub activity...
        </motion.div>
      )}

      {/* Animate grid only when data is available */}
      <AnimatePresence>
        {calendarData && (
          <motion.div
            key="github-grid"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex space-x-[2.2px] ml-10 mb-1.5 w-max">
              {monthLabels.map((label, i) => (
                <div
                  key={i}
                  className="text-[10px] w-[12px] text-stone-100 montserrat-regular"
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="flex w-max">
              <div className="flex flex-col justify-between text-[10px] text-stone-100 h-[74px] mr-2 mt-3.5 montserrat-regular">
                <div>Mon</div>
                <div>Wed</div>
                <div>Fri</div>
              </div>

              <div className="flex space-x-[3.3px]">
                {calendarData.weeks.map((week, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col space-y-[4px]">
                    {week.contributionDays.map((day, dayIdx) => (
                      <motion.div
                        key={dayIdx}
                        title={`${day.date}: ${day.contributionCount} contributions`}
                        className="w-[11px] h-[11px] rounded-xs"
                        style={{ backgroundColor: day.color || "#161b22" }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.1,
                          delay: (weekIdx * 5 + dayIdx) * 0.01,
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
