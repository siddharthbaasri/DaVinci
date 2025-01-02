import { sql } from '@vercel/postgres';
import { Course, User } from "./dbTypes"


export async function getCourses() {
    try {
        const data = await sql<Course>`SELECT * FROM courses`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch course data.');
    }
}
export async function getUser(email: string) {
    try {
        // Check if user exists
        const result = await sql<User>`SELECT id FROM users WHERE email = ${email}`;
        return result.rows[0] || null;
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch user data.');
    }
}

export async function addUser(name: string | null | undefined, email: string, image: string | null | undefined) {
    try {
        // Insert new user
        await sql`INSERT INTO users (email, name, image) VALUES (${email}, ${name}, ${image})`;
        return true;
    } 
    catch (error) {
        console.error('Error storing user:', error);
        return false;
    }
}