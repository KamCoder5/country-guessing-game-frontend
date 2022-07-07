import { Button } from "@mui/material";
function HomePage() {
  return (
    <div className="homepage-buttons">
      <h1>Homepage</h1>
      <Button className="play-game-button" variant="outlined">
        Play guess the flag
      </Button>
      <Button className="scoreboard" variant="outlined">
        Submit
      </Button>
    </div>
  );
}

export default HomePage;
