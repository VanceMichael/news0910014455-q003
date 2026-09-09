import Fastify from 'fastify';

const app = Fastify({ logger: true });
app.get('/healthz', async () => ({ status: 'ok' }));
app.listen({ host: '127.0.0.1', port: 8080 }).catch((error: unknown) => {
  app.log.error(error);
  process.exit(1);
});
