import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://cjplnpvatwiiiigtvvwz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcGxucHZhdHdpaWlpZ3R2dnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNDI5MjgsImV4cCI6MjA3NjcxODkyOH0.RoUAbe1XPgMbvyuMcDgDw4vnsfMD2fhJEOxmZcLNWtQ",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcGxucHZhdHdpaWlpZ3R2dnd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNDI5MjgsImV4cCI6MjA3NjcxODkyOH0.RoUAbe1XPgMbvyuMcDgDw4vnsfMD2fhJEOxmZcLNWtQ"

    }
})