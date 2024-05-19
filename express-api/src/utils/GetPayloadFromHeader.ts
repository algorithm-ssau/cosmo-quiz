import { Request } from 'express'
import { TAccessPayload } from '../types/Common'
import { Types } from 'mongoose'

export default function getPayloadFromHeader(req: Request): TAccessPayload {
  const userHeader = req.header("user")!;
  const payload = {id: new Types.ObjectId(JSON.parse(userHeader).id as string)}
  return payload
}
