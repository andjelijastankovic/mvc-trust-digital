import BoredAnswer from "./BoredAnswerModel";

type ButtonOnClick = () => void;

export const clickHandler = (onClick: ButtonOnClick) => {
    const button = document.querySelector('button');

    button?.addEventListener('click', function () {
        onClick();
    })
}

export const showBoredActivity = (showBoredActivity: BoredAnswer) => {
    const activity = document.querySelector('blockquote');
    activity!.textContent = showBoredActivity.activity;
}