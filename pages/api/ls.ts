import fs from "fs"

export default async (req:any, res:any) => {
    const ls = await fs.promises.readdir("/")
    const ls1 = await fs.promises.readdir("./")
    const ls2 = await fs.promises.readdir("../")

    res.status(200).json({
        ls: ls,
        ls1: ls1,
        ls2:ls2
    })
}