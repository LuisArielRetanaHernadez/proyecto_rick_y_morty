import { useState, useEffect } from 'react';
import HeaderWeb from './HeaderWeb';
import LocationInfo from './LocationInfo';

const LocationContainer = ({getUrlApi}) =>{
    
    const [apiRickMorty, setApiRickMorty] = useState('')
    const [location, setLocation] = useState('')
    const [urlsResidents, setUrlsResidents] = useState('')

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
        if(apiRickMorty.results){
            setUrlsResidents(apiRickMorty.results[0].residents)
        }else{
            setUrlsResidents(apiRickMorty.residents)
        }
    },[apiRickMorty])

    useEffect(() => {
        getUrlApi(urlsResidents)
    },[urlsResidents,getUrlApi])
    
    return (
        <section className="Container">
            <HeaderWeb searchLocation={searchLocation} />
            <LocationInfo></LocationInfo>
        </section>
    )
}

export default LocationContainer