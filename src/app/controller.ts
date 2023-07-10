import * as data from './service.ts';
import * as view from './view.ts';

export const activityWhenBored = async (): Promise<void> => {
    try {
        const activity = await data.fetchBoredData();

        view.showBoredActivity(activity);
    } catch (error) {
        console.log('error', error);
    }
}

export const loadingBoredActivities = () => {

    view.clickHandler(() => {
        activityWhenBored();
    });
}


