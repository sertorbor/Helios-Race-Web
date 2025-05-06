exports.handler = async (event, context) => {
    switch (event.httpMethod) {
        case 'POST':
            const params = JSON.parse(event.body);
            console.log("Solicitud Recibida:", params);
            return;
        default:
            return {
                statusCode: 405,
                message: "Method Not Allowed"
            }
    }
}