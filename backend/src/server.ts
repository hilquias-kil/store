import { app } from "./app";

const port = 3333

app.listen(port, ()=>{
  console.log(`app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
})