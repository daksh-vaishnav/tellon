import type { Request, Response } from "express"



export const addController = (req: Request, res: Response) => {
    const body = req.body || null;
    return res.status(200).json({ message: "successfully added", data: [{ ...body }] })
}

export const getAllController = (req: Request, res: Response) => {

    return res.status(200).json({ message: "successfully", data: [] })
}

export const getByIdController = (req: Request, res: Response) => {
    // without id this route never called
    const id = req.params.id || null;
    return res.status(200).json({ message: `received id:${id}` })
}

export const updateController = (req: Request, res: Response) => {

    // without id this route never called
    const id = req.params.id || null;
    const body = req.body || null;

    return res.status(200).json({ message: "successfully updated", data: [{ ...body,id }] })
}

export const deleteController = (req: Request, res: Response) => {
    const id = req.params.id || null;

    return res.status(200).json({ message: `successfully deleted, id: ${id}` })
}