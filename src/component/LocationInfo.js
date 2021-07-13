const LocationInfo = ({nameLocation,typeLocation,dimensionLation,amountResidentsLocation}) =>{

    return (
        <div id='LocationInfo'>
            <div className="row">
                <ul>
                    <li>Nombre: <strong>Earth</strong></li>
                    <li>Tipo: <strong>Planeta</strong></li>
                    <li>Dimension: <strong>(65-FC)</strong></li>
                    <li>Can. Residentes: <strong>20</strong></li>
                </ul>
            </div>
        </div>
    )

}

export default LocationInfo;