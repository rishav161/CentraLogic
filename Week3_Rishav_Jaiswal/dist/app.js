"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("./userModel"));
const axios_1 = __importDefault(require("axios"));
const sequelize_1 = __importDefault(require("sequelize"));
const nodemailer = __importStar(require("nodemailer"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/api/SaveWeatherMapping', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cities = req.body;
    // Checking the cities array
    if (!Array.isArray(cities) || cities.length === 0) {
        return res.status(400).json({ message: 'Invalid request body' });
    }
    try {
        for (const city of cities) {
            // Fetching coordinates (GeoCoding)
            const geoCodingResponse = yield axios_1.default.get(`https://api.api-ninjas.com/v1/geocoding?city=${city.city}&country=${city.country}`, {
                headers: {
                    'X-Api-Key': 'lIX8yyvQcG9Ia15rsV3vZQ==oKDEDLQXmgdBpVDd',
                },
            });
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
            const weatherResponse = yield axios_1.default.get(`https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`, {
                headers: {
                    'X-RapidAPI-Key': 'cf1b8a533bmsh0638362a6035593p1d8076jsnb95f0491417d',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                },
            });
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
            yield userModel_1.default.create({
                city: city.city,
                country: city.country,
                weather: weather,
                longitude: longitude,
                latitude: latitude,
            });
        }
        res.status(200).json({ message: 'Weather data is saved successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Unable to save' });
    }
}));
// ------------fetching the weather information from the database---------------- 
app.get('/api/weatherDashboard', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.query.city;
    try {
        if (city) {
            const cityWeather = yield userModel_1.default.findAll({
                where: { city },
                order: [['createdAt', 'DESC']],
            });
            if (cityWeather.length === 0) {
                return res.status(404).json({
                    message: 'No Weather data found'
                });
            }
            res.json(cityWeather);
        }
        else {
            const currentWeather = yield userModel_1.default.findAll({
                attributes: [
                    'id',
                    'city',
                    'country',
                    [sequelize_1.default.fn('MAX', sequelize_1.default.col('createdAt')), 'currentDate'],
                    'weather',
                ],
                group: ['id', 'city', 'country', 'weather'],
                order: [[sequelize_1.default.fn('MAX', sequelize_1.default.col('createdAt')), 'DESC']],
            });
            res.json(currentWeather);
        }
    }
    catch (err) {
        console.error('Unable to fetch the Weather', err);
        res.status(500).json({ message: 'Unable to fetch the Weather' });
    }
}));
//----------------------Send Mail using node Mailer-------------------
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: 'renee.hudson89@ethereal.email',
        pass: 'sJEz5GmdSuqHUwBdtN'
    }
});
app.post('/api/sendMail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // Check request body is empty or not array
        if (!Array.isArray(data) || data.length === 0) {
            return res.status(400).json({ message: 'Invalid request body' });
        }
        // Formating data into HTML table
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
        // Send email
        const mailOptions = {
            from: 'renee.hudson89@ethereal.email',
            to: 'hilma.crona43@ethereal.email',
            subject: 'Weather Data',
            html: tableHtml
        };
        yield transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Unable to send email' });
    }
}));
app.listen(port, () => {
    console.log("Server started at ", port);
});
//# sourceMappingURL=app.js.map