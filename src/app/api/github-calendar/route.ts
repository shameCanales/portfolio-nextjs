import { NextRequest, NextResponse } from "next/server";

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

const GITHUB_USERNAME = "shameCanales";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // private token, NOT NEXT_PUBLIC

export async function GET(req: NextRequest) {
  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GitHub token missing" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "${GITHUB_USERNAME}") {
              contributionsCollection {
                contributionCalendar {
                  months {
                    name
                    firstDay
                  }
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                      color
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const json = await res.json();
    const calendar: CalendarData =
      json.data.user.contributionsCollection.contributionCalendar;

    return NextResponse.json(calendar);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch calendar" },
      { status: 500 }
    );
  }
}
