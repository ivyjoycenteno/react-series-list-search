export const tileFormatter = (src: string, label: string, language: string, type:string) => `
<div class="sr-wrapper">
    <div class="img-cont">
        <img class="img-tg" src="${src}"/>
    </div>
    <ul class="sr-ul-ls">
        <li class="sr-bold">${label}</li>
        <li>${language}</li>
        <li>${type}</li>
    </ul>
</div>`