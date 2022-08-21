import Table from "react-bootstrap/Table";
import CoinRow from "./CoinRow";

const titles = ["#", "Coin", "Price (usd)", "Price Change 24h", "24h Volume"];

function TableCoins({ coins, search }) {
  console.log(coins);
  // filtro el arreglo de coins, por cada letra convertida a lowercase comparo (includes) lo que esta escrito en search, y asi lo va filtrando y solo aparece lo que escribo
  //   luego le paso esa constante a map para que la recorra y devuelva los valores por defecto si no hay nada escrito en search.
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Table hover variant="dark" className="mt-4 table-responsive ">
      <thead>
        <tr>
          {titles.map((title, index) => {
            return <th key={index}>{title}</th>;
          })}
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {filteredCoins.map((coin, index) => {
          return <CoinRow coin={coin} index={index + 1} />;
        })}
      </tbody>
    </Table>
  );
}

export default TableCoins;
