import './index.scss';

export function SearchComponent(){


    async function getValue(e){
        if(e.key === "Enter"){
            let target = e.target.value;
        }
    }

    return(
        <div id="search-component">
            <div className="search-container">
                <input type="text"  placeholder="Search Pokémon"
                    onKeyDown={(e) => getValue(e)}
                />
            </div>
        </div>
    );
};