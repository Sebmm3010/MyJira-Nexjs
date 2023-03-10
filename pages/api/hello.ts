// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok:boolean
  msg:string;
  method:string;
  goku?:string; 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  res.status(200).json({ 
    ok:true,
    msg:'Todo ok',
    method: req.method || 'sin Metodo',
    goku: process.env.Goku
   })
}
