import express from "express"; // Importa el módulo Express
import { Request, Response, NextFunction } from "express"; // Importa tipos de TypeScript para solicitudes y respuestas
import morgan from "morgan"; // Importa Morgan para el registro de solicitudes

const app = express(); // Crea una instancia de la aplicación Express

app.use(morgan("dev")); // Middleware para registrar las solicitudes HTTP en la consola en modo 'dev'
app.use(express.json()); // Middleware para manejar cuerpos de solicitudes en formato JSON
app.use(express.urlencoded({ extended: false })); // Middleware para manejar cuerpos de solicitudes codificados en URL (formulario HTML)

// Define una ruta para manejar solicitudes GET a la raíz ("/")
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to my API with Nodejs and TypeScript!" });
});

// Middleware para manejar errores
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

export default app; // Exporta la instancia de la aplicación para que pueda ser utilizada en otros módulos
