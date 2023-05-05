import axios from 'axios'
import * as doctorServices from './doctorServices'

const url ='http://127.0.0.1:3000/api/doctors'

describe('Doctors router', () => {
    test('GET route', async () => {
        const result = await axios.get(url);

        expect(result).toBeTruthy;
        expect(result.status).toBe(200);
    })
})

describe('Validation', () => {
    test('Fields validation fail - POST route', async () => {
        try{
            await axios.post(url, {
                nameInput: '',
                lastnameInput: '',
                consultoryInput: '',
                emailInput: ''   
            })
        } catch (error) {
            const message = error.message;
            expect(error.response.status).toBe(400);
            expect(message).toEqual(expect.any(String))
        }
    })
})