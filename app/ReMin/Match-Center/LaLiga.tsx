

export default function LaLiga() {
  return (
    <div className="bg-violet-300 p-5 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-0 pt-5 ">
      <iframe src="/MatchCenter/LiveGame.html" height={500} width='100%'  id=''></iframe>

      <h1 className="text-white text-3xl font-bold pb-5 pl-2">La Liga Standings</h1>
        <iframe src='/MatchCenter/Standings.html'  height={800} width='100%' id=''> </iframe>
      <h1 className="text-white text-3xl font-bold pb-5 pl-2">Top Players</h1>

        <iframe src='/MatchCenter/Games.html' height={500} width='100%' id=''></iframe>

        
        
      </div>
    </div>
  )
}

