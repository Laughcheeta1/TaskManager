

export default function BarraBusqueda({ searchMethod, refillMethod, placeholder, }) {
  return (
    <div className="container-barra-busqueda">
      <input type="text" className="barra-busqueda" placeholder={placeholder} onChange={e => {
        e.target.value ? searchMethod(e.target.value) : refillMethod();
        }}/>
    </div>
  );
}
