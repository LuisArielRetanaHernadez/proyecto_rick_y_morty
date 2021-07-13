const ContainerInfoResident = ({name,estatus,origin,episodios}) =>{
    
    return(
        <div className="ContainerInfoResident">
            <ul className="list-style-none">
                <li>Nombre: {name}</li>
                <li>Estatus: {estatus}</li>
                <li>Lugar de Ori.: {origin}</li>
                <li>total de ep: {episodios}</li>
            </ul>
        </div>
    )
}
export default ContainerInfoResident