import jsonfile from 'jsonfile';

import { INotification } from '@src/models/Notification';


const DB_FILE_NAME = 'db.json';

interface IDb {
  notifications: INotification[];
}

function openDb(): Promise<IDb> {
  return jsonfile.readFile(__dirname + '/' + DB_FILE_NAME) as Promise<IDb>;
}

function saveDb(db: IDb): Promise<void> {
  return jsonfile.writeFile((__dirname + '/' + DB_FILE_NAME), db);
}


export default {
  openDb,
  saveDb,
} as const;
