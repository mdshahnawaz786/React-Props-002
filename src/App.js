import "./App.css";
import Comp from "./component/Comp";

function App() {
  return (
    <div className="App">
      <Comp
        posterImage="https://www.comingsoon.net/wp-content/uploads/sites/3/gallery/bright-2017/brightposter.jpg"
        movieName="Bright"
        releaseDate="2017,David Ayer"
        time="117 min"
        type="Action,Crime,Fantasy"
        description="In Los Angeles, humans live with orcs and elves in a world where
            fantasy creatures do exist. LAPD police officer Dayl Ward is the
            first human cop having the orc police officer Nick Jakoby as a
            partner. When Ward is shot by an orc."
        movieImg="https://occ.a.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABffPAIPjEhT-aDZ2CPJqSvpx5OnrhKOXDYgwT2PIskGUmpJtnTgSHsWnJv84EVD_6XUt0hcgOVdyF2REM8Mvcia5Dx7rLq1QprqQ.jpg?r=b7e"
      />

      <Comp
        posterImage="https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg"
        movieName="Tomb Raider"
        releaseDate="2018, Roar Uthaug"
        time="125 min"
        type="Action, Fantasy"
        description="In Los Angeles, humans live with orcs and elves in a world where
            fantasy creatures do exist. LAPD police officer Dayl Ward is the
            first human cop having the orc police officer Nick Jakoby as a
            partner. When Ward is shot by an orc."
        movieImg="https://irs.www.warnerbros.com/gallery-v2-jpeg/movies/media/ajax/fieldtitlethumbnail/und/0/form-bfrmgtssven90qv9toosnzzyyxa4ygkozqlyok729e/TR-IK-00013r%5B3%5D.jpg"
      />
    </div>
  );
}

export default App;
