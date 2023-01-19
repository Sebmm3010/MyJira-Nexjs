import mongoose from 'mongoose';

const mongooConection = {
    isConnected: 0
}

export const connect = async () => {

    if (mongooConection.isConnected) {
        console.log('Conectados con la base de datos');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongooConection.isConnected = mongoose.connections[0].readyState;

        if (mongooConection.isConnected === 1) {
            console.log('usando conexion anterior');
            return;
        }
        await mongoose.disconnect();
    }
    await mongoose.connect('');
    mongooConection.isConnected = 1;
    console.log('Conectado a mongoDB', '');
}

export const disconnect = async () => {

    if(mongooConection.isConnected !== 0) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDB');
    

}