import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,special,special2,speed,type,weight,species } ){

    return(
        <div id="show-component">
            <div className="poke-name">
                <h2>{name}</h2>
            </div>
            <div className="poke-ilustration">
                <img src={image} alt="" />
            </div>
        </div>
    );
};