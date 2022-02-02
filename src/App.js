import Container from "react-bootstrap/Container"
import {Button, Stack} from "react-bootstrap"
import BudgetsContainer from "./containers/BudgetsContainer"


function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">EZ Budget</h1>
        <Button variant="primary">
          Add Budget
        </Button>
      </Stack>
      <BudgetsContainer />
    </Container>
  );
}

export default App;
