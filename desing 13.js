let bar = document.querySelector(`.fa-bars-staggered`);
let miuns = document.querySelector(`.miuns`);
let darkmode = document.querySelector(`.dark-mode`);
let ul = document.querySelectorAll(`ul li a`);
let shadow = document.querySelectorAll(`.shadow-sm`);
bar.addEventListener(`click`, () =>
{
    document.querySelector(`.side`).classList.add(`show-side`);
    document.querySelector(`.main`).classList.add(`hide`);
});
miuns.addEventListener(`click`, () =>
{
    document.querySelector(`.side`).classList.remove(`show-side`);
    document.querySelector(`.main`).classList.remove(`hide`);
});
darkmode.addEventListener(`click`, () =>
{
    document.querySelector(`.main`).classList.toggle(`black-main`);
    document.querySelector(`.side`).classList.toggle(`blackside`);
    document.querySelector(`.side`).classList.toggle(`shadow`);
    document.querySelector(`.table`).classList.toggle(`table-dark`);
    bar.classList.toggle(`blackli`)

});
darkmode.addEventListener(`click`, () =>
{
    ul.forEach(function (e)
    {
        e.classList.toggle(`blackli`);
    });
    shadow.forEach(function (l)
    {
        l.classList.toggle(`shadow`);
    });
});