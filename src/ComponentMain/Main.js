function Main(props) {
  const { picture, name, time, id } = props;
  return (
    <section className="sectionCenter">
      <div className="idPosition">{id}</div>

      <div>
        <div>
          <img src={picture} style={{ height: 100 }} alt="..." />
        </div>

        <div>
          <div>
            <h5>{name}</h5>
            <p>
              This is a wider card with supporting text below as a natural .
            </p>
            <p>
              <small>Last updated {time}mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
