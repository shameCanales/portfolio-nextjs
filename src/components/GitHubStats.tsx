"use client";

import { useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

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

  const { data: calendarData } = useQuery<CalendarData>({
    queryKey: ["githubCalendar"],
    queryFn: fetchGithubCalendar,
  });

  // Auto-scroll
  useEffect(() => {
    if (calendarData && gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }
  }, [calendarData]);

  const getMonthLabels = (): string[] => {
    if (!calendarData?.months?.length || !calendarData?.weeks?.length) return [];
    const labels = new Array(calendarData.weeks.length).fill("");

    calendarData.months.forEach((month) => {
      const monthStartDate = new Date(month.firstDay);
      const weekIndex = calendarData.weeks.findIndex((week) =>
        week.contributionDays.some(
          (day) => new Date(day.date).toDateString() === monthStartDate.toDateString()
        )
      );
      if (weekIndex !== -1) labels[weekIndex] = month.name;
    });

    return labels;
  };

  const monthLabels = getMonthLabels();

  return (
    <div
      className="overflow-x-auto font-mono text-sm bg-[#07061B] p-4 sm:p-5 lg:py-10 rounded-2xl sm:rounded-3xl md:rounded-4xl mt-6 2xl:mt-8 md:max-w-[834px] mx-auto"
      ref={gridRef}
    >
      <div className="flex space-x-[2.2px] ml-10 mb-1.5 w-max">
        {monthLabels.map((label, i) => (
          <div key={i} className="text-[10px] w-[12px] text-stone-100 montserrat-regular">
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
          {calendarData?.weeks?.map((week, weekIdx) => (
            <div key={weekIdx} className="flex flex-col space-y-[4px]">
              {week.contributionDays.map((day, dayIdx) => (
                <div
                  key={dayIdx}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  className="w-[11px] h-[11px] rounded-xs"
                  style={{ backgroundColor: day.color || "#161b22" }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
