import PropTypes from 'prop-types'

const Error = ({ massage }) => (
  <p className="alert alert-danger error">{massage}</p>
);

Error.propTypes = {
    massage: PropTypes.string.isRequired
}

export default Error;
