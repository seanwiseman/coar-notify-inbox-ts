import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import InboxRoutes from './InboxRoutes';


const apiRouter = Router();

// const validate = jetValidator();

const inboxRouter = Router();

inboxRouter.options(
  Paths.Inbox.Base,
  InboxRoutes.options,
);

inboxRouter.get(
  Paths.Inbox.Get,
  InboxRoutes.get,
);

inboxRouter.post(
  Paths.Inbox.Add,
  // TODO - implement validation
  // validate(['notification', validateNotification]),
  InboxRoutes.add,
);
//
// inboxRouter.delete(
//   Paths.Users.Delete,
//   validate(['id', 'number', 'params']),
//   UserRoutes.delete,
// );

apiRouter.use(Paths.Inbox.Base, inboxRouter);

export default apiRouter;
