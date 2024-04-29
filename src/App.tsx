import { Button, Show, Grid, GridItem } from '@chakra-ui/react'

  const App = () => {
    return (
      <div>
        <Grid templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}>
          <GridItem area="nav" bg='coral'>
            Nav
          </GridItem>
          <Show above="lg">
          <GridItem area="aside" bg='gold'>
            Nav
          </GridItem>
          </Show>
          <GridItem area="main" bg='purple'>
            Nav
          </GridItem>
        </Grid>
        <Button colorScheme='blue'>Button</Button>
      </div>
    );
  };

export default App
