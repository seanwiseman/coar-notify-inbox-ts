import NotificationRepo from '@src/repos/NotificationRepo';
import { INotification } from '@src/models/Notification';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


export const NOT_FOUND_ERR = 'Notification not found';

function get(id?: string):
  Promise<INotification | null> | Promise<INotification[]> {
  if (id) {
    return NotificationRepo.getOne(id);
  }

  return NotificationRepo.getAll();
}

function addOne(notification: INotification): Promise<void> {
  return NotificationRepo.add(notification);
}

async function _delete(id: string): Promise<void> {
  const persists = await NotificationRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      NOT_FOUND_ERR,
    );
  }

  return NotificationRepo.delete(id);
}


export default {
  get,
  addOne,
  delete: _delete,
} as const;
