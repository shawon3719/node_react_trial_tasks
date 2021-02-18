import React from 'react';

import { HomePage } from './views/dashboard/Dashboard'
const routes = [
  { path: '/dashboard', exact: true, name: 'Admin Dashboard', component: HomePage }
];

export default routes;
