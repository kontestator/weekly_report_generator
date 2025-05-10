import ical from 'ical';
import fs from 'fs';
import path from 'path';

function parseICalFile(filePath) {
    try {
        const data = ical.parseFile(filePath);

        const events = Object.values(data)
            .filter(item => item.type === 'VEVENT')
            .map(event => ({
                summary: event.summary,
                description: event.description,
                startDate: event.start,
                endDate: event.end,
            }));
        return events;
    } catch (err) {
        throw err;
    }
}

function generateWeeklyReport(events) {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    
}