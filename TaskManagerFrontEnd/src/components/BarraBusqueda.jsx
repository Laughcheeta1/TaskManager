import { Link } from "react-router-dom";

export default function BarraBusqueda({ searchMethod, refillMethod, route, placeholder, objectClass }) {
  return (
    <div className="container-barra-busqueda">
      <input type="text" className="barra-busqueda" placeholder={placeholder} onChange={e => {
        e.target.value ? searchMethod(e.target.value) : refillMethod();
        }}/>
      {objectClass === "Commodatum" ? <></> :  
        <Link to={route}>
          <button className="btn btn-verde">
            Agregar &nbsp;
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 12H20M12 4V20"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </Link>}
    </div>
  );
}
