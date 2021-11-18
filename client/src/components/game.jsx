export default function Game({name, image}){
    return <div> 
        <h3> {name} </h3>
        <img src={image} style={{width: '20vw'}} alt= 'portada de juego'/>
    </div>
}