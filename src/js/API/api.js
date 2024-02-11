import axios from "axios";

const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/work';
const END_POINT = '/contacts';
const END_POINT_ID = '/contacts/id';

const url = `${BASE_URL}${END_POINT}`
export async function getContacts () {
    const res = await axios.get(url);
    console.log(res);
    return res.data;
}
