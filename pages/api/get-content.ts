export default (req:string, res:any) => {
    res.setHeader('Content-Type','application/json');
    res.setHeader('Access-Control-Allow-Origin','*')
    res.statusCode = 200;
    res.end(JSON.stringify({name: "next"}))
}