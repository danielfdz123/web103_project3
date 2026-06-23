// This file will create tables needed to store events/locations
import { readFile } from 'fs/promises'
import { pool } from "./database.js"

const data = JSON.parse(
    await readFile(new URL('../data/data.json', import.meta.url))
)

const createLocationsTable = async () => {
    try
    {
        const createTableQuery = `
        DROP TABLE IF EXISTS locations CASCADE;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image TEXT,
            address VARCHAR(255),
            city VARCHAR(255),
            state VARCHAR(255),
            zip VARCHAR(255)
        );
    `;
    await pool.query(createTableQuery)

    for (const location of data.locations) {
        await pool.query(
            'INSERT INTO locations (name, image, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6)',
            [location.name, location.image, location.address, location.city, location.state, location.zip]
        )
    }
    }
    catch (error)
    {
        console.log(error)
    }
}

const createEventsTable = async () => {
    try
    {
        const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date VARCHAR(255) NOT NULL,
            time VARCHAR(255),
            image VARCHAR(255),
            location_id INT REFERENCES locations(id)
        );
    `;

    await pool.query(createTableQuery);

    for (const event of data.events) {
        await pool.query(
            'INSERT INTO events (title, date, time, image, location_id) VALUES ($1, $2, $3, $4, $5)',
            [event.title, event.date, event.time, event.image, event.location_id]
        )
    }
    }
    catch (error)
    {
        console.log(error);
    }
};


const resetTables = async () =>
{
    await createLocationsTable();
    await createEventsTable();
    pool.end();
};

resetTables();
