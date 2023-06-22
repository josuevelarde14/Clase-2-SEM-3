// Crea una interfaz CorreoElectronico con propiedades asunto y destinatario. 
// Crea una función que reciba un objeto que cumpla con la interfaz y envíe un correo electrónico.
interface CorreoElectronico {
    asunto: string;
    destinatario: string;
  }
  
  function enviarCorreoElectronico(correo: CorreoElectronico): void {
    console.log(`Enviando correo electrónico a: ${correo.destinatario}`);
    console.log(`Asunto: ${correo.asunto}`);
    // Código para enviar el correo electrónico
  }
  