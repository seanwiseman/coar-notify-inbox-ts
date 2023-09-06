import { Immutable } from '@src/other/types';


const Paths = {
  Base: '/api',
  Inbox: {
    Base: '/inbox',
    Add: '/',
    Delete: '/:id',
    Get: '/:id?',
    Options: '/',
  },
};


export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
