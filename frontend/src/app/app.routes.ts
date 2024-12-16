import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta principal
  { path: 'order-confirmation', component: OrderConfirmationComponent }, // Ruta para la confirmación del pedido
];
