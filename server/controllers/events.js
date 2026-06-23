import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try 
    {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error)
    {
        res.status(400).json({ error: error.message })
    }
}

const getEventsByLocationId = async (req, res) => {
    try 
    {
        const { id } = req.params
        const results = await pool.query(
            'SELECT * FROM events WHERE location_id = $1 ORDER BY id ASC',
            [id]
        )
        res.status(200).json(results.rows)
    } 
    catch (error) 
    {
        res.status(400).json({ error: error.message })
    }
}

export default { getEvents, getEventsByLocationId }