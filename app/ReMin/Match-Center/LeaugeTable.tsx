import { useEffect, useState } from 'react';
import { fetchLeagueData } from './LaLiga';

type LeagueDataType = {
  // Define the shape of your data here based on the API response.
};

const LeagueTable: React.FC = () => {
  const [data, setData] = useState<LeagueDataType | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const leagueData = await fetchLeagueData();
        setData(leagueData);
      } catch (error) {
        console.error("Error fetching league data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* Render the league table using the data and TailwindCSS for styling. */}
      {data ? (
        <table className="min-w-full bg-white">
          <thead>
            {/* Render table headers */}
          </thead>
          <tbody>
            {/* Map over the data and render table rows */}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LeagueTable;
