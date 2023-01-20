import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '../../../database';
import { Entry } from '../../../models';

type Data = {
    msg: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) {
        res.status(400).json({ msg: `Id ${id} invalido` })
    }

    switch (req.method) {
        case 'PUT':
            return updateEntryF(req, res);
        default:
            return res.status(400).json({ msg: 'Metodo invalido' })
    }

}

const updateEntryF = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if (!entryToUpdate) {
        await db.disconnect();
        return res.status(400).json({ msg: 'No se encontro una entrada con el id: ' + id });
    }

    const {
        description = entryToUpdate.description,
        status = entryToUpdate.status
    } = req.body;

    try {

        const updateEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true });
        await db.disconnect();
        res.status(200).json(updateEntry);
    } catch (error:any) {

        console.log({error});
        await db.disconnect();
        res.status(400).json({msg:error.errors.status.message});

    }
}