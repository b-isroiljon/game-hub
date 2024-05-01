import { Button, Show, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar';

  const App = () => {
    return (
      <div>
        <Grid templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}>
          <GridItem area="nav">
          <NavBar />
          </GridItem>
          <Show above="lg">
          <GridItem area="aside" bg='gold'>
            Aside
          </GridItem>
          </Show>
          <GridItem area="main" bg='purple'>
            Main
          </GridItem>
        </Grid>
        <Button colorScheme='blue'>Button</Button>
      </div>
    );
  };

export default App
