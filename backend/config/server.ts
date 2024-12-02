export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Deja el host tal como está si es necesario para tu entorno.
  port: env.int('PORT', process.env.PORT || 1337), // Usa el puerto de la variable de entorno proporcionado por Vercel (o usa 1337 por defecto).
  app: {
    keys: env.array('APP_KEYS'),
  },
});
