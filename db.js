const {Pool} = require('pg');

// Database configuration
const pool = new Pool({
    user: 'postgres', // Default PostgreSQL user
    host: 'localhost', // Database server
    database: 'hospital', // Database name
    password: "12345", // Password for the postgres user
    port: 5432, // Default PostgreSQL port
});

pool.connect()
    .then(() => console.log('✅ PostgreSQL connected successfully!'))
    .catch(err => console.error('❌ PostgreSQL connection error:', err));


async function fetchData() {
    try {
        
        // Query to fetch all data from a specific table (e.g., 'users' table)
        const res = await pool.query('SELECT * FROM users;'); // Change 'users' to your table name
            console.log(res)
        // Display the results in the VSCode terminal
        console.log('Data from the "users" table:');
        res.rows.forEach(row => {
            console.log(row); // Print each row as an object with column names as keys
        });

    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        // Close the connection to the database
        await pool.end();
    }
}

// Call the fetchData function to retrieve data
fetchData();

// Export the pool object
module.exports = pool;