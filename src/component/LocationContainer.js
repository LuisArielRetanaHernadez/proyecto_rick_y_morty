import { useState, useEffect } from 'react';
import HeaderWeb from './HeaderWeb';
import LocationInfo from './LocationInfo';

const LocationContainer = ({getUrlApi}) =>{
    
    const [apiRickMorty, setApiRickMorty] = useState({})
    const [location, setLocation] = useState('')
    const [urlsResidents, setUrlsResidents] = useState('')
    const [amountResident, setAmountResident] = useState('')
    const [nameLocation, setNameLocation] = useState('')
    const [dimensionLocation, setDimensionLocation] = useState('')
    const [typeLocation, setTypeLocation] = useState('')

    const searchLocation = (value) => {
        setLocation(value)
    }

    useEffect(() => {
        const petition = async () => {
            
            if(location){
                const url = `https://rickandmortyapi.com/api/location/?name=${location}`
                const data = await fetch(url).then(response => response.json()).catch(err => err)
                setApiRickMorty(data)
            }else{
                const idLocation = Math.floor(Math.random() * 108) + 1 
                const urlId = `https://rickandmortyapi.com/api/location/${idLocation}`
                const dataId = await fetch(urlId).then(response => response.json()).catch(err => err)
                setApiRickMorty(dataId)
            }
        }
        petition()
    },[location])

    useEffect(() => {
        if(Object.keys(apiRickMorty).length > 0 && !apiRickMorty.error){

            if(apiRickMorty.results){
                setUrlsResidents(apiRickMorty.results[0].residents)
                setAmountResident(apiRickMorty.results[0].residents.length)
                setNameLocation(apiRickMorty.results[0].name)
                setDimensionLocation(apiRickMorty.results[0].dimension)
                setTypeLocation(apiRickMorty.results[0].type)
            }else{
                setUrlsResidents(apiRickMorty.residents)
                setAmountResident(apiRickMorty.residents.length)
                setNameLocation(apiRickMorty.name)
                setDimensionLocation(apiRickMorty.dimension)
                setTypeLocation(apiRickMorty.type)
            }
        }
    },[apiRickMorty])

    useEffect(() => {
        getUrlApi(urlsResidents)
    },[urlsResidents,getUrlApi])
    
    return (
        <section className="Container">
            <HeaderWeb searchLocation={searchLocation} />
            <LocationInfo nameLocation={nameLocation} dimensionLocation={dimensionLocation} typeLocation={typeLocation} amountResidentsLocation={amountResident}></LocationInfo> 
        </section>
    )
}

export default LocationContainer