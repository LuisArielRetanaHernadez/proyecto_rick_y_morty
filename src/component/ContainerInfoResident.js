const ContainerInfoResident = ({name,estatus,origin,episodios}) =>{
    
    return(
        <div className="ContainerInfoResident">
            <ul className="list-style-none">
                <li>Nombre: <strong>{name}</strong></li>
                <li>Estatus: <strong>{estatus}</strong></li>
                <li>Lugar de Ori: <strong>{origin}</strong></li>
                <li>total de ep: <strong>{episodios}</strong></li>
            </ul>
        </div>
    )
}
export default ContainerInfoResident