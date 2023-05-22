import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

interface Game {
  id: number;
  gameFlyer: string;
  gameTitle: string;
  description: string;
}

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/GameRoom?id=${game.id}`}>
      <Card className="bg-gray-900 w-96 mx-2 my-4">
        <CardHeader floated={false} className="h-80">
          <img
            src={game.gameFlyer}
            alt="game flyer"
            className="object-cover h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="white" className="mb-2">
            {game.gameTitle}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {game.description}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

function GameCards() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios
      .get("https://staging-api.awujo.gg/api/v1/create-game")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameCards;
