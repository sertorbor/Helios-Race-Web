const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  console.log("Function formularioContacto called");
  console.log("Event:", event);

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    console.log("Parsed body:", { name, email, message });

    // Configura el transporte con variables de entorno
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar el correo
    await transporter.sendMail({
      from: `"HeliosRace Contact" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: message,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Correo enviado correctamente" }),
    };
  } catch (err) {
    console.error("Error al enviar:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Fallo al enviar el correo" }),
    };
  }
};
