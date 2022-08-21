function CoinRow({ coin, index }) {
  //   console.log(coin);
  return (
    <tr className="align-middle" key={index}>
      <td>{index}</td>

      <td>
        <img
          src={coin.image}
          alt={coin.image}
          style={{ width: "5%" }}
          className="me-4"
        />
        <span className="fw-bold">{coin.name}</span>
        <span className=" text-uppercase ms-3 fw-semibold">{coin.symbol} </span>
      </td>

      <td>$ {coin.current_price.toLocaleString("es-AR")}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0
            ? "text-success align-middle"
            : "text-danger"
        }
      >
        {coin.price_change_percentage_24h.toFixed(1)} %
      </td>
      <td>{coin.total_volume.toLocaleString("es-AR")}</td>
    </tr>
  );
}

export default CoinRow;
