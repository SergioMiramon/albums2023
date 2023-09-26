import "./Saved.css";

const Saved = ({saved, totalSaved}) => {
  return (
    <section className="saved">
      <h2>🛒</h2>
      <ol>
        {saved.map((item) => (
          <li>
            {item.name} - {item.price} €
          </li>
        ))}
      </ol>
      <h3>Saved: {totalSaved} albums</h3>
    </section>
  );
};

export default Saved