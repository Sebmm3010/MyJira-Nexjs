import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry } from '../../../models';
import { IEntry } from '../../../models/EntryModel';

type Data =
    | { msg: string }
    | IEntry[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getEntries(res);

        default:
            res.status(400).json({ msg: 'Endpoint inexistente' })

    }

}

const getEntries = async (res: NextApiResponse<Data>) => {

    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    res.status(200).json(entries);
}