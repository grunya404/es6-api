'use strict';

import development from './development';
import test from './test';
import production from './production';

export default {
    env: () => {
        switch (process.env.NODE_ENV || 'development'){
            case 'development':
                return development;
            case 'production':
                return production;
            case 'test':
                return test;
        }
    }
};