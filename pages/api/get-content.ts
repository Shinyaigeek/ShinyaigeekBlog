export default (req:string, res:any) => {
    res.setHeader('Content-Type','application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({name: "next"}))
}