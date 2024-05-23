import express, { Request, Response } from "express";
import WeatherMapping from "./userModel";
import axios from "axios";
import sequelize from "sequelize";
import * as nodemailer from "nodemailer"


interface City {
    city: string;
    country: string;
}

const app = express();
const port = 3000;

app.use(express.json());

//---------------------------Saving the weather of location----------------------------

app.post('/api/SaveWeatherMapping', async (req: Request, res: Response) => {
    const cities: City[] = req.body;

    // Checking the cities array
    if (!Array.isArray(cities) || cities.length === 0) {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    try {
        for (const city of cities) {
            // Fetching coordinates (GeoCoding)
            const geoCodingResponse = await axios.get(
                `https://api.api-ninjas.com/v1/geocoding?city=${city.city}&country=${city.country}`,
                {
                    headers: {
                        'X-Api-Key': 'lIX8yyvQcG9Ia15rsV3vZQ==oKDEDLQXmgdBpVDd',
                    },
                }
            );

            // Logging the complete geocoding response
            console.log('Geocoding data for', city.city, city.country, ':', geoCodingResponse.data);

            if (geoCodingResponse.data.length === 0) {
                console.error('No geocoding data found for', city.city, city.country);
                continue; // skipping the city
            }

            const { latitude, longitude } = geoCodingResponse.data[0];

            // Logging latitude and longitude
            console.log('Latitude:', latitude, 'Longitude:', longitude);

            if (typeof latitude !== 'number' || typeof longitude !== 'number') {
                console.error('Invalid latitude or longitude for', city.city, city.country);
                continue; //skipping the city
            }

            // Checking the latitude & longitude
            const weatherResponse = await axios.get(
                `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`,
                {
                    headers: {
                        'X-RapidAPI-Key': 'cf1b8a533bmsh0638362a6035593p1d8076jsnb95f0491417d',
                        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                    },
                }
            );

            // Logging the weather API URL and response
            console.log('Weather API URL:', `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`);
            console.log('Weather API response:', weatherResponse.data);

            // Extracting weather data
            const weather = weatherResponse.data.current.condition.text;

            // Logging the data to be saved
            console.log('Saving data:', {
                city: city.city,
                country: city.country,
                weather: weather,
                longitude: longitude,
                latitude: latitude,
            });

            // Saving the data to the database
            await WeatherMapping.create({
                city: city.city,
                country: city.country,
                weather: weather,
                longitude: longitude,
                latitude: latitude,
            });
        }
        res.status(200).json({ message: 'Weather data is saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Unable to save' });
    }
});



// ------------fetching the weather information from the database---------------- 

app.get('/api/weatherDashboard', async (req: Request, res: Response) => {
    const city = req.query.city as string | undefined;
  
    try {
      if (city) {
        const cityWeather = await WeatherMapping.findAll({
          where: { city },
          order: [['createdAt', 'DESC']],
        });
  
        if (cityWeather.length === 0) {
          return res.status(404).json({
            message: 'No Weather data found'
          });
        }
        res.json(cityWeather);
      } else {
        const currentWeather = await WeatherMapping.findAll({
          attributes: [
            'id',
            'city',
            'country',
            [sequelize.fn('MAX', sequelize.col('createdAt')), 'currentDate'],
            'weather',
          ],
          group: ['id', 'city', 'country', 'weather'],
          order: [[sequelize.fn('MAX', sequelize.col('createdAt')), 'DESC']],
        });
  
        res.json(currentWeather);
      }
    } catch (err) {
      console.error('Unable to fetch the Weather', err);
      res.status(500).json({ message: 'Unable to fetch the Weather' });
    }
  });
  

//----------------------Send Mail using node Mailer-------------------

const transporter=nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
auth:{
    user:'renee.hudson89@ethereal.email',
    pass:'sJEz5GmdSuqHUwBdtN'
}
});

app.post('/api/sendMail', async (req: Request, res: Response) => {
    try {
        const data = req.body;

        // Checking body is empty or not
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(400).json({ message: 'Invalid request body' });
        }

        // html data
        const tableHtml = `
            <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Weather</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                </tr>
                ${data.map(item => `
                    <tr>
                        <td>${item.city}</td>
                        <td>${item.country}</td>
                        <td>${item.weather}</td>
                        <td>${item.latitude}</td>
                        <td>${item.longitude}</td>
                    </tr>
                `).join('')}
            </table>
        `;

        // Sending email
        const mailOptions = {
            from: 'renee.hudson89@ethereal.email',
            to: 'hilma.crona43@ethereal.email',
            subject: 'Weather Data', 
            html: tableHtml 
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Unable to send email' });
    }
});


app.listen(port, () => {
    console.log("Server started at ", port);
});
