import 'dotenv/config';

interface config {
    port: number,
    database_url: string
}

const getEnv = (key: string) => {
    const value = process.env[key]
    if (value == null || value.trim() == '' || !value) throw new Error(`ENV value is missing for ${key}`)
    return value
}

export const config: config = {
    port: Number(getEnv('PORT')),
    database_url: String(getEnv('DATABASE_URL'))
}