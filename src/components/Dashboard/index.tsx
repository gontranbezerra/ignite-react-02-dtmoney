import { Summary } from '../Summary';
import { Container } from './style';
import TransactionsTable from '../TransactionnTable/index';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
