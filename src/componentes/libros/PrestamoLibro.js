import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Spinner from '../layout/Spinner'

class PrestamoLibro extends Component {
    render() {
        // Extraer el libro
        const { libro } = this.props
        if (!libro) return <Spinner/>
        return (
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/libros'} className="btn btn-secondary">
                        <i className="fas fa-arrow-circle-left"></i>{''}
                        Volver al listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i> {''}
                        Solicitar Prestamo : { libro.titulo}
                    </h2>
                    <div className="row justify-content-center mt-5">
                        <div className="col-m-8">
                            <form>
                                <legend className="color-primary text-center">
                                    Buscar el suscriptor por código
                                </legend>
                                <div className="form-group">
                                    <input type="text"
                                        name="busqueda"
                                        className="form-control"
                                        onChange={this.leerDato}/>
                                </div>
                                <input type="submit"
                                        className="btn btn-success btn-block"
                                        value="Buscar Alumno"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PrestamoLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'libros',
            storeAs: 'libro',
            doc: props.match.params.id
        }
    ]),
    connect(({firestore: { ordered }}, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(PrestamoLibro)