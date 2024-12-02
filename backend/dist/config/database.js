"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => {
    const client = env('DATABASE_CLIENT', 'sqlite'); // Por defecto es SQLite, pero lo configuraremos como Postgres.
    const connections = {
        postgres: {
            connection: {
                connectionString: env('DATABASE_URL'), // Usa la URL completa.
                ssl: env.bool('DATABASE_SSL', false) && {
                    rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true), // Evitar errores con Neon.
                },
                schema: env('DATABASE_SCHEMA', 'public'),
            },
            pool: {
                min: env.int('DATABASE_POOL_MIN', 2),
                max: env.int('DATABASE_POOL_MAX', 10),
            },
        },
        sqlite: {
            connection: {
                filename: path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
            },
            useNullAsDefault: true,
        },
    };
    return {
        connection: {
            client,
            ...connections[client],
            acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
    };
};
