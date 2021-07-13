import ResidentInfo from './ResidentInfo';
import { useEffect, useState } from 'react';

const ResidentContainer = ({urlsResidents}) =>{
    const [urlResident, setUrlResident] = useState('')
    const [dataResident, setDataResident] = useState('')
    const [indexUrlResident, setIndexUrlResident] = useState(0)
    const [urlsResdientsState, setUrlsResidentsState] = useState([])
    const [allResidents, setAllResidents] = useState([])
    const [dataAllResidents, setDataAllResidents] = useState([])

    /*****AQUI HACEMOS LA PETICION DE CADA RESIDENTE*****/
    useEffect(() =>{
        const petition = async () =>{
            const data = await fetch(urlResident).then(response => response.json()).catch(err => err)
            setDataResident(data)
        }
        if (urlResident){
            petition()
        }
    },[urlResident])

    /*****AQUI ES DONDE EVALUAMOS Y INSETAMOS TODAS LAS URLS DE LOS RESIDENTES EN EL ESTADO URLSRESIDENTSSTATE*/
    useEffect(() =>{
        if(urlsResidents){
            setUrlsResidentsState(prevent => {
                if(JSON.stringify(prevent) !== JSON.stringify(urlsResidents)){
                    setIndexUrlResident(0)
                    setAllResidents([])
                    return urlsResidents
                }
            })
        }
    },[urlsResidents])

    useEffect(() =>{
        if(urlsResdientsState){
            if(urlsResdientsState.length !== indexUrlResident){
                setUrlResident(urlsResdientsState[indexUrlResident])
            }
        }
    },[urlsResdientsState,indexUrlResident])

    useEffect(() =>{
        if(dataResident){
            setAllResidents(prevent => prevent.concat(dataResident))
            setIndexUrlResident(prevent => prevent+=1)
        }
    },[dataResident])

    useEffect(() =>{
        if(urlsResdientsState && allResidents){
            if(urlsResdientsState.length === allResidents.length){
                setDataAllResidents(allResidents)
            }
        }
    },[urlsResdientsState,allResidents])

    return (
       <ResidentInfo dataResidents={dataAllResidents}></ResidentInfo> 
    )
}

export default ResidentContainer