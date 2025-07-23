

export const environmetnsComponents = ( element ) => {

    console.log(import.meta.env)


    const html = `
        variables:
        DEV: ${ import.meta.env.DEV} <br/>
        PROD: ${ import.meta.env.PROD} <br/>
        KEY: ${ import.meta.env.VITE_API_KEY} <br/>
        URL: ${ import.meta.env.VITE_BASE_URL} <br/>
    `;

    element.innerHTML = html;

}
