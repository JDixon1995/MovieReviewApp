import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'

async function main() {
    dotenv.config()

    const client = new mongodb.MongoClient(
        process.env.MOVIEREVIEWS_DB_URI
    )
    const port = process.env.port || 8000

    try {
        // Connect to MongoDB cluster
        await client.connect()

        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

main().catch(connect.error)