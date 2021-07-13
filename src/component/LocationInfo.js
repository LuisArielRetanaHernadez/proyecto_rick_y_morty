const LocationInfo = ({nameLocation,typeLocation,dimensionLocation,amountResidentsLocation}) =>{

    return (
        <div id='LocationInfo'>
            <div className="row">
                <ul>
                    <li>Nombre: <strong>{nameLocation}</strong></li>
                    <li>Tipo: <strong>{typeLocation}</strong></li>
                    <li>Dimension: <strong>{dimensionLocation}</strong></li>
                    <li>Can. Residentes: <strong>{amountResidentsLocation}</strong></li>
                </ul>
            </div>
        </div>
    )

}

export default LocationInfo;