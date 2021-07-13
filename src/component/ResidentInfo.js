import ComponentResident from './ComponentResident'

const ResidentInfo = ({dataResidents}) =>{


    const component = dataResidents.map((data,index) => <ComponentResident key={index} img={data.image} nameResident={data.name} estatusResident={data.status} originResident={data.origin.name} epesidiosResident={data.episode.length}/>)

    return (
        <div className="container">
            <div className="row">
                <div id="ResidentInfo">
                    {component}
                </div>
            </div>
        </div>
    )
}
export default ResidentInfo