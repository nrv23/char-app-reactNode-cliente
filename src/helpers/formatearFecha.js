import moment from 'moment';

export const formatFecha = fecha => {

    const fechaActual = moment(fecha);

    return fechaActual.format('HH:mm a | MMMM Do')

}