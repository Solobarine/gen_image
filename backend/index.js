import express from "express"

import Replicate from "replicate"

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.post("/images/generate", async(req, res) => {
 const prompt = req.params.prompt
 const style = req.params.style

 const replicate = new Replicate({auth: process.env.REPLICATE_API_TOKEN})
 
 const output = await replicate.run(
  "black-forest-labs/flux-schnell",
  {
    input: {
      prompt: `${prompt}. The style of the images should be ${style}. Generate at most 4 images`
    }
  }
 )

  return res.status(201).json({images: output})
})

app.listen(port, () => {
  console.log("Backend running on Port " + port)
})
