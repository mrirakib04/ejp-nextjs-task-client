import GameDetailsPage from "./GameDetailsPage";

const Game = async ({ params }) => {
  const { id } = await params;
  return <GameDetailsPage id={id}></GameDetailsPage>;
};

export default Game;
