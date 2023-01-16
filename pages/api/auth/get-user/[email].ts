import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getAuthToken } from '../../../../lib/getAuthToken';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const query = req.query;
    const { email } = query;

    const mgmtApiAccessToken = await getAuthToken()

   

      const resp = await fetch('https://storygen.us.auth0.com/api/v2/users', {
        method: 'GET',
        headers: {authorization: `Bearer ${mgmtApiAccessToken}`},
        body:JSON.stringify({
            params: {q: `email:"${email}"`, search_engine: 'v3'},
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience:"https://storygen.us.auth0.com/api/v2/",
        }) 
      })

      const data = await resp.json()   


      res.status(200).json({ result: data });

    

    
}
