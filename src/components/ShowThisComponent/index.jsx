import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,special,special2,speed,type,weight,species } ){

    return(
        <div id="show-component">
            <div className="poke-img">
                <img src={ image } alt="pokemón" />
            </div>
            <div className="poke-stats">
                <h1>{ name }</h1>
                <div>
                    
                </div>
            </div>
        </div>
    );
};