const Game = async ({ params }) => {
  const { id } = await params;
  return <div>Game: {id}</div>;
};

export default Game;
