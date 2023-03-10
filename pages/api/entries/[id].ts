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
        case 'GET':
            return getEntryById(req, res);
        case 'PUT':
            return updateEntryF(req, res);
        case 'DELETE':
            return deleteEntry(req, res);
        default:
            return res.status(400).json({ msg: 'Metodo invalido' })
    }

}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await db.connect();

    const entryById = await Entry.findById(id);

    await db.disconnect();
    if (!entryById) {
        await db.disconnect();
        return res.status(400).json({ msg: 'No se encontro una entrada con el id: ' + id });
    }

    res.status(200).json(entryById);
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
    } catch (error: any) {

        console.log({ error });
        await db.disconnect();
        res.status(400).json({ msg: error.errors.status.message });

    }
}

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    await db.connect();

    const entryToDelete = await Entry.findById(id);

    if (!entryToDelete) {
        await db.disconnect();
        return res.status(400).json({ msg: 'No se encontro una entrada con el id: ' + id });
    }

    try {

        await Entry.findByIdAndDelete(id);
        await db.disconnect();
        res.status(200).json(entryToDelete);
    } catch (error: any) {

        console.log({ error });
        await db.disconnect();
        res.status(400).json({ msg: error.errors.status.message });

    }
}
