import fs from "fs"

export default async (req:any, res:any) => {
    const ls = await fs.promises.readdir(".")

    res(200).json({
        ls: ls
    })
}