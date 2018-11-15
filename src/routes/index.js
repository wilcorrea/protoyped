import HelloForm from '../components/HelloForm';
import HelloTable from '../components/HelloTable';


export default [
  { path: '/', redirect: '/index' },
  { path: '/index', component: HelloTable },
  { path: '/add', component: HelloForm, props: { scope: 'add' } },
  { path: '/:id', component: HelloForm, props: { scope: 'view' } },
  { path: '/:id/edit', component: HelloForm, props: { scope: 'edit' } },
  { path: '/:id/remove', component: HelloForm, props: { scope: 'remove' } },
];
