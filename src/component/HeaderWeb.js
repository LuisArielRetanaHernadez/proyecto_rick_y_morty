import SearchBox from "./SearchBox"

const HeaderWeb = ({searchLocation}) =>{

    return (
        <header className="HeaderWeb">
            <div className="row">
                <div className="container-searchbox">
                    <SearchBox searchLocation={searchLocation} />
                </div>
            </div>
        </header>
    )

}
export default HeaderWeb;