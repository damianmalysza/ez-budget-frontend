import Container from "react-bootstrap/Container"
import {Button, Stack} from "react-bootstrap"
import BudgetsContainer from "./containers/BudgetsContainer"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import AddBudgetModal from "./components/AddBudgetModal";

function App() {
  return (
    <Router>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <Link to="/" style={{ textDecoration: 'none' }} className="me-auto"><h1>EZ Budget</h1></Link>
          <Link to="/budgets/new">
            <Button variant="primary">
              Add Budget
            </Button>
          </Link>
        </Stack>
        <Route path="/" component={BudgetsContainer} />
        <Route exact path="/budgets/new" component={AddBudgetModal}/>
      </Container>
    </Router>
  );
}

export default App;

export const currencyFormatter = new Intl.NumberFormat(undefined, {
  currency: "usd",
  style: "currency",
  minimumFractionDigits: 0,
})