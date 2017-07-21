import App from '../App'
import MainPart from '../views/MainPart'
import ContextPart from '../views/ContextPart'
export default [
  { path: '/',
    component: App,
    indexRoute: { component: MainPart },
  }
  ,
  { path: '/:id',
    component: App,
    indexRoute: { component: MainPart },
  }
  ,
  { path: '/context/:id',
    component: App,
    indexRoute: { component: ContextPart },
  }
];
