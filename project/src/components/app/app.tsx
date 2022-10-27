import MainScreen from '../../pages/main-screen/main-screen';

type AppProps = {
  filmTitle: string;
  filmGenre: string;
  releaseDate: number;
};

function App({ filmTitle, filmGenre, releaseDate }: AppProps): JSX.Element {
  return (
    <MainScreen
      filmTitle='filmTitle'
      filmGenre='filmGenre'
      releaseDate={releaseDate}
    />
  );
}

export default App;
