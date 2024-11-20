import mysql from 'mysql2/promise';

let pool;
    function initializePool() {
      if (!pool) {
        pool = mysql.createPool({
          host: 'db', // Docker service name
          user: 'root',
          password: 'SeveN062',
          database: 'mydatabase',
          port: 3306,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });
        console.log('MySQL connection pool initialized');
      }
    }
    
        async function runQuery(sql) {
          try {
            // Check if the pool is initialized; if not, initialize it
            if (!pool) {
              initializePool();
            }
            const [rows] = await pool.query(sql); // Using pool.query with async/await
            return rows;
          } catch (err) {
            console.error('Query error:', err.message);
            throw err;
          }
        }
        
        
        // Start SQL and run a sample query
        export async function startsql() {
          try {
            console.log('Running a query...');
            const users = await runQuery('SELECT * FROM users');
            console.log('Query results:', users);
            return users; // Return the query results
          } catch (err) {
            console.error('Error in startsql:', err.message);
            return []; // Return an empty array on error
          }
        }