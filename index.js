const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const knex = require('knex')
require('dotenv').config()

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
    }
  })

app.use(express.json())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Server is Up' })
})

// get coach assiugnemtns
app.get('/coach-assignments', async (req, res) => {
    try {
        const assignments = await db
            .select(
                'u.id AS coach_id',
                'u.first_name',
                'u.last_name',
                't.name AS team_name',
                'f.date',
                'f.start_time',
                'f.end_time',
                'v.short_name AS venue_name',
                'vc.court_name',
            )
            .from('Users as u')
            .join('Participants as p', 'u.id', 'p.user_id')
            .join('Teams as t', 'p.team_id', 't.id')
            .join('Draws as d', function() {
                this.on('t.id', '=', 'd.team1_id').orOn('t.id', '=', 'd.team2_id');
            })
            .join('Fixtures as f', 'f.draw_id', 'd.id')
            .join('Venue_courts as vc', 'f.venue_court_id', 'vc.id')
            .join('Venues as v', 'vc.venue_id', 'v.id')
            .where('p.role', 'coach')
            .orderBy('f.date', 'asc')
            .orderBy('f.start_time', 'asc');

        const report = {};

        assignments.forEach(assignment => {
            const date = assignment.date.toISOString().split('T')[0]
            const coachName = `${assignment.first_name} ${assignment.last_name}`
            const venueName = assignment.venue_name;
            
            if (!report[date]) {
                report[date] = {};
            }
            
            if (!report[date][coachName]) {
                report[date][coachName] = { total: 0, venues: {} };
            }
        
            report[date][coachName].total += 1;
        
            if (!report[date][coachName].venues[venueName]) {
                report[date][coachName].venues[venueName] = 0;
            }
        
            report[date][coachName].venues[venueName] += 1;
        });
        
        // Extract all unique venue names
        const venueNames = new Set();
        Object.values(report).forEach(coachEntries => {
            Object.values(coachEntries).forEach(coach => {
                Object.keys(coach.venues).forEach(venue => {
                venueNames.add(venue);
                fixture_id = coach.fixture_id;
                });
            });
        });

        const formattedResponse = Object.entries(report).map(([date, coachEntries]) => {
            const data = Object.entries(coachEntries).map(([coach, { total, venues }]) => {
                const venueData = Array.from(venueNames).map(venue => {
                    return { [venue]: venues[venue] || 0 };
                });
            
                return {
                    coach,
                    total,
                    ...Object.assign({}, ...venueData)
                };
            });
        
            return { date, data };
        });
            
    return res.json(formattedResponse);
    } catch (error) {
        console.error('Error fetching coach assignments:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})