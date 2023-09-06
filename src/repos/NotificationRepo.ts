import { INotification } from '@src/models/Notification';
import orm from './MockOrm';


async function getOne(id: string): Promise<INotification | null> {
  const db = await orm.openDb();
  for (const notification of db.notifications) {
    if (notification.id === id) {
      return notification;
    }
  }
  return null;
}

async function persists(id: string): Promise<boolean> {
  const db = await orm.openDb();
  for (const notification of db.notifications) {
    if (notification.id === id) {
      return true;
    }
  }
  return false;
}

async function getAll(): Promise<INotification[]> {
  const db = await orm.openDb();
  return db.notifications;
}

async function add(notification: INotification): Promise<void> {
  const db = await orm.openDb();
  db.notifications.push(notification);
  return orm.saveDb(db);
}

async function delete_(id: string): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.notifications.length; i++) {
    if (db.notifications[i].id === id) {
      db.notifications.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}

export default {
  getOne,
  persists,
  getAll,
  add,
  delete: delete_,
} as const;
