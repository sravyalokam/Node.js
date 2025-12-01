const express = require("express");
const axios = require('axios');

const app = express();

app.use(express.json());

const baseUrl = 'https://chorusqa.cogninelabs.com/api/staffx/vendors';
const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InJ0c0ZULWItN0x1WTdEVlllU05LY0lKN1ZuYyIsImtpZCI6InJ0c0ZULWItN0x1WTdEVlllU05LY0lKN1ZuYyJ9.eyJhdWQiOiJhcGk6Ly9iZWZlOGI4Zi05NTZhLTQ3ZjMtYmE1NS03YzYxZTM2ZTkzZWIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMDMzNjQyZC02YWRmLTRhYzYtYmJjNS01MTFiNDJiYzVmMDAvIiwiaWF0IjoxNzY0NTgzMDE5LCJuYmYiOjE3NjQ1ODMwMTksImV4cCI6MTc2NDU4NzIyOSwiYWNyIjoiMSIsImFpbyI6IkFYUUFpLzhhQUFBQURsbERWdVBSVlNkZGZxQThuUDNBRnFvQ05IL2tlMFFRWU9qOGI3dHhOenYxRUh1blBpUjEzNmNSODdXQ1k4bzliWWErYWFLOVJhUnk3Q0ZDRGNOWUE5eUMrclZUOHRwRFUxUXNOcXFqWFIxSG9uNFlPN01WLzE0Sk1aY01DNDl5cmE2MzRkbHNvVjBkaUtwcmRDejBRZz09IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBpZCI6ImJlZmU4YjhmLTk1NmEtNDdmMy1iYTU1LTdjNjFlMzZlOTNlYiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTG9rYW0iLCJnaXZlbl9uYW1lIjoiU3JhdnlhIiwiaXBhZGRyIjoiMTE1LjI0Ni4xOTcuNDMiLCJuYW1lIjoiU3JhdnlhIExva2FtIiwib2lkIjoiNjEyNDc1ODYtZGRmNy00ZGRhLWJmNTctM2ZkYmViN2I1ZDBhIiwicmgiOiIxLkFWWUFMV1F6TU45cXhrcTd4VkViUXJ4ZkFJLUxfcjVxbGZOSHVsVjhZZU51ay11ZkFLTldBQS4iLCJzY3AiOiJhcHAiLCJzaWQiOiIwMDk5NjFiOS0zZjE2LTY0MjEtMGVlMS0wMWNkZDcxM2JmYjQiLCJzdWIiOiI2TzkxZU02QTFmYmVLNFl5WVE5TFlBYW9oVF9Vd2lPMUtLQ1ZQemtfYk5nIiwidGlkIjoiMzAzMzY0MmQtNmFkZi00YWM2LWJiYzUtNTExYjQyYmM1ZjAwIiwidW5pcXVlX25hbWUiOiJzcmF2eWEubG9rYW1AY29nbmluZS5jb20iLCJ1cG4iOiJzcmF2eWEubG9rYW1AY29nbmluZS5jb20iLCJ1dGkiOiJkRnhVR1I3VVRVeWRmOEl1cTRIV0FBIiwidmVyIjoiMS4wIiwieG1zX2Z0ZCI6InVKR3dZRnNQR2IyOVdXcWVlRmdMY0hvT3k1ZW9nM0Z4V0VXaXkxOGZiR1lCWVhOcFlYTnZkWFJvWldGemRDMWtjMjF6In0.nN62SxrvcTYcMjppv4c2oHtjPNYGSxj4QAlsgww8jTzKwBfHYmysiNTKwATe_GhmE4uvDdV1jiZZOS-U3ErdeWtmw2BPUi-Az1coTqU72pgElvq5eqkAE_pyIfWnK74DiBhgyAhqEZ_sozo0fiCpAegmgAmUjbqxoJaPOkRAz8hq_MX9cP5fJFaGryBLVHipDW-LWmwODEtuA5EGU99xwQdkJTM6bCnb-3a20RputPFNAXIYSintREdgcdTXHP6rC5eqQUXZvAG6Py3KdlJ2NavUvOBEvXRrXRb05qEw1ucUbm9o-yqbJXezz3T8oJMEYd9JMaujm-S2qg-kCuA-lg';

app.get('/', (req, res) => {
    res.send('Server running! Visit /vendors?page=1&page_size=10');
});

// Vendors route with pagination
app.get('/vendors', async (req, res) => {
    try {
        const { page = 1, page_size = 10 } = req.query;

        const response = await axios.get(baseUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                Host: 'chorusqa.cogninelabs.com' // optional
            },
            params: { page, page_size },
        });

        console.log('Request URL:', response.config.url);
        res.json(response.data);
    } catch (error) {
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            res.status(500).json({ message: 'No response from API' });
        } else {
            console.error('Error:', error.message);
            res.status(500).json({ message: 'Error fetching vendors' });
        }
    }
});


app.listen(3000, () => console.log('Server running on port 3000'));
