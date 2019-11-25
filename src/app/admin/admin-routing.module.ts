import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeesListComponent  } from './components/employees-list/employees-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children:
    [
      {
        path: 'employees',
        component: EmployeesListComponent
      },
      {
        path: 'employees/create',
        component: EmployeeFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
