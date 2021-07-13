import ImgResident from "./ImgResident"
import ContainerInfoResident from "./ContainerInfoResident"

const ComponentResident = ({img,nameResident,estatusResident,originResident,epesidiosResident}) =>{
    return (
        <div className="ComponentResident">
            <ImgResident urlImg={img}></ImgResident>
            <ContainerInfoResident name={nameResident} estatus={estatusResident} origin={originResident} episodios={epesidiosResident}></ContainerInfoResident>
        </div>
    )
}
export default ComponentResident