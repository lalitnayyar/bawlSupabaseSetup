import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { promises as fs } from 'fs'

try {
  const text = await fs.readFile('scrimba-info.txt', 'utf-8')

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    separators: ['\n\n', '\n', ' ', ''],// default settings
    chunkOverlap: 50
  })

  const output = await splitter.createDocuments([text])
  console.log(output)

  await fs.writeFile('output.md', JSON.stringify(output, null, 2))
} catch (err) {
  console.log(err)
}