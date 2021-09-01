import PropTypes from 'prop-types'

const Gasto = ({gasto}) => (
    <li className='gastos'>
        <p>
            {gasto.Nombre}
            <span className='gasto'>$ {gasto.Cantidad}</span>
        </p>
    </li>
)

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;