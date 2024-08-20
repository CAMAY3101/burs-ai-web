// PROXY

const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 443;  // Usar puerto 443 para HTTPS

// Cargar clave y certificado SSL
const key = fs.readFileSync("/path/to/your/server.key"); // Ruta al archivo de la clave SSL
const cert = fs.readFileSync("/path/to/your/server.crt"); // Ruta al archivo del certificado SSL
const options = { key, cert };

// Servir archivos estáticos (por si tienes una página estática o archivos JS, CSS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Configuración del proxy para redirigir las solicitudes API
app.use(
    "/api",
    createProxyMiddleware({
        target: "https://bursapi.com", // URL de tu servidor API
        changeOrigin: true, // Cambia el origen de la solicitud al destino
        pathRewrite: { "^/api": "" }, // Reescribe la ruta eliminando "/api"
        secure: true, // Cambia a false si el servidor API usa un certificado autofirmado
        onError: (err, req, res) => {
            console.error("Proxy error:", err);
            res.status(500).send("Proxy error occurred");
        },
    })
);

// Endpoint para verificar cookies (opcional, solo para debug)
app.get("/check", (req, res) => {
    const cookie = req.headers.cookie || "No cookies found";
    console.log("Cookies received:", cookie);
    res.send(`Cookies received: ${cookie}`);
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

// Crear servidor HTTPS
https.createServer(options, app).listen(port, () => {
    console.log(`Proxy server running at https://proxy.burs.com.mx:${port}`);
});
