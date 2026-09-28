// Configuración de la CLI publicada.
//
// Los valores por defecto apuntan a producción para que el paquete funcione
// recién instalado, sin pedirle nada a quien lo prueba. Las tres son públicas
// por diseño: la URL del servidor y los dos identificadores de Clerk, que el
// propio navegador expone durante el login. Aquí no va ningún secreto.
//
// Para desarrollo local, cualquiera de ellas se sobrescribe con una variable
// de entorno o con un .env en el directorio desde el que ejecutas el comando.

export const API_URL =
  process.env.API_URL ?? "https://numencodeserver-production.up.railway.app";

export const CLERK_FRONTEND_API =
  process.env.CLERK_FRONTEND_API ?? "https://fast-chamois-4390.clerk.accounts.dev";

export const CLERK_OAUTH_CLIENT_ID =
  process.env.CLERK_OAUTH_CLIENT_ID ?? "4ncEL9dFpE0Igh4o";
