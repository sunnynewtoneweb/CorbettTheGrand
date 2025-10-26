import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { AboutUs } from '../about-us/about-us';
import { Accommodation } from '../accommodation/accommodation';
import { Contact } from '../contact/contact';
import { Facilities } from '../facilities/facilities';
import { Gallery } from '../gallery/gallery';
import { Weddings } from '../weddings/weddings';
import { NotFound } from '../not-found/not-found';
import { BookaRoom } from '../booka-room/booka-room';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about-us',
        component: AboutUs
    },
    {
        path: 'accommodation' ,
        component: Accommodation
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'book-a-room',
        component: BookaRoom
    },
    {
        path: 'facilities',
        component: Facilities
    },
    {
        path: 'gallery',
        component: Gallery
    },
    {
        path: 'weddings',
        component: Weddings
    },
    {
        path: '**',
        component: NotFound
    }
];
