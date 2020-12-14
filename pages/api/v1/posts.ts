import {NextApiRequest,NextApiResponse} from 'next'
import {getPosts} from "../../../lib/posts";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const posts = await getPosts()
  res.statusCode = 200
  res.setHeader('Content-type','application/json')
  res.json(posts)
}