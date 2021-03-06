import screenViewer from './core';
import {Observable} from 'rxjs/Rx';

export default class ScreenSize {
    constructor(map, event) {
        if (typeof map !== 'undefined' && map !== null) {
            screenViewer.setup(map);
        }

        const targetEventList = [
            Observable.fromEvent(window, 'load').map(() => document.documentElement.clientWidth),
            Observable.fromEvent(document, 'DOMContentLoaded').map(event => event.target.innerWidth),
            Observable.fromEvent(window, 'resize').map(() => document.documentElement.clientWidth),
        ];

        if (typeof event !== 'undefined' && event !== null) {
            targetEventList.push(...event);
        }

        return screenViewer.init$(targetEventList);
    }
}
