import './index.scss';

export function ShowThisComponent( { name,image,hp,attack,defense,especial,especial2,speed,type,weight,species } ){
    return(
        <div id="show-component">
            <div className="poke-img">
                <img src={ image } alt="pokemón" />
            </div>
            <div className="poke-stats">
                <h1>{ name }</h1>
                <div className="poke-info">
                    <p>type: { type }</p>
                    <p>weight: { weight }hg</p>
                    <p>hp: { hp }</p>
                </div>
                <div className="poke-attributes">
                    <p>attack: { attack }</p>
                    <p>defense: {defense }</p>
                    <p>speed: { speed }</p>
                </div>
                <h1>blows</h1>
                <div className="poke-attributes">
                    <p>especial attack: { especial }</p>
                    <p>especial defense: { especial2 }</p>
                </div>
            </div>
        </div>
    );
};