import fs from "fs"

export default async (req:any, res:any) => {
    const ls = await fs.promises.readdir(".")

    res(status).json({
        ls: ls
    })
}