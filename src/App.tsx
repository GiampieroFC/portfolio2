import Container from 'react-bootstrap/Container';
import ToggleDarkMode from "./components/molecules/ToggleDarkMode"
import InfoProfile from './components/molecules/infoProfile';
import Buttons from './components/molecules/buttons';
import Facts from './components/molecules/Facts';
import SwitchSections from './components/molecules/SwitchSections';
import { useMyContext } from './contexts/context';
import Portfolio from './components/molecules/Portfolio';
import Skills from './components/molecules/Skills';


function App() {

  const [state] = useMyContext();

  return (
    <Container className={state.dark ? 'bg-dark' : 'bg-secondary bg-opacity-25'} fluid>

      <Container>

        <ToggleDarkMode />
        <InfoProfile />
        <Facts />
        <Buttons />
        <SwitchSections />

        {state.swi === 'Portfolio' && <Portfolio />}
        {state.swi === 'Stack' && <Skills />}



      </Container>
    </Container>
  )
}

export default App
