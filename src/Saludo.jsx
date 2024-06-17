import './App.css';
function Holi(props) {
    return (
        <div id="contenedor">
            {/* encabezado */}
            <div className="texto">
                <h1>{props.lugar}</h1>
            </div>
            {/* encabezado */}
        <div id='parrafo'>
            <center>
            <div className='texto2'></div>

            <h3>Bienvenidos a {props.lugar}, somos la primera pastelería y cafetería de la ciudad de {props.ciudad}, en tener gatos en nuestros establecimientos y ofrecer de nuestras especialidades en nuestra área de repostería.
            {props.lugar} un lugar perfecto para venir con amigos u familia. Estamos ubicados en pleno centro de la ciudad de {props.ciudad}. Abrimos de {props.dias} a {props.dias2} a horas {props.horas} hasta {props.horas2}
             Tenemos promociones todos los días, visítanos los días {props.dias} a horas {props.horas}, y podrás degustar de nuestra promo:</h3>
            
            <h1>PROMO 2X1</h1>
            <h1> SOLO EN {props.lugar}</h1>
             
            </center>
            </div>   
        <div id='gatos'>
        <img className='gato' src='11.gif'/>
        </div>
            
        </div>
    );
}
export default Holi;