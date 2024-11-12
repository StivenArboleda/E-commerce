import { Routes } from '@angular/router';

import  { ListComponent} from './domains/products/pages/list/list.component';
import  { AboutComponent} from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';
import { HomepageComponent } from './domains/info/pages/homepage/homepage.component';
import { QuestionsComponent } from './domains/info/pages/questions/questions.component';


export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: HomepageComponent
            },
            {
                path: 'store',
                component: ListComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'questions',
                component: QuestionsComponent
            },

        ]
    },
    {
        path: '404', 
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404',
    },

];


