import { provideIcons } from '@ng-icons/core';

import { ionIcons, simpleIcons } from './app/app.icons';

export default [
    provideIcons({
        ...ionIcons,
        ...simpleIcons,
    }),
];
