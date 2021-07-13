import ComponentResident from './ComponentResident'
import { useEffect } from 'react';

const ResidentInfo = ({dataResidents}) =>{

    useEffect(() =>{
        if(dataResidents){
            if(dataResidents.length > 0){
                console.log('es mayor o igual a 0: ', dataResidents.length)
            }
        }
    },[dataResidents])

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