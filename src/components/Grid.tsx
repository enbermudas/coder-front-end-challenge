function Card({ country }) {
  return (
    <div className="border border-800-neutral border-solid rounded-xl overflow-hidden">
      <img src={country.flags.png} alt={`${country.name.common} flag`} className="h-50" />
      <p>{country.name.common}</p>
      <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">Ver en google maps</a>
    </div>
  );
};

function Grid({ countries }) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {countries.map((country) => (
        <Card country={country} key={country.name.common} />
      ))}
    </div>
  )
}

export default Grid;