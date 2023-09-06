import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import NotificationService from '@src/services/NotificationService';
import { INotification } from '@src/models/Notification';
import { IReq, IRes } from './types/express/misc';


async function get(req: IReq, res: IRes) {
  const id = req.params.id;
  const notifications = await NotificationService.get(id);
  return res.status(HttpStatusCodes.OK).json({ notifications });
}

async function add(req: IReq<INotification>, res: IRes) {
  await NotificationService.addOne(req.body);
  return res.status(HttpStatusCodes.CREATED).end();
}

async function delete_(req: IReq, res: IRes) {
  const id = req.params.id;
  await NotificationService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

function options(req: IReq, res: IRes) {
  res.setHeader('Accept-Post', 'application/ld+json');
  return res.status(HttpStatusCodes.BAD_REQUEST).end();
}


export default {
  get,
  add,
  options,
  delete: delete_,
} as const;
