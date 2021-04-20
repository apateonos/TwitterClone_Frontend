const theme = (skin: string) => {
    switch (skin) {
        case 'dark':
            return darkSkin;
        default:
            return defaultSkin;
    }
}

const defaultSkin = {
    main: '#39a1f1',
    mainHover: '#1da1f21a',
    mainLight: '#8fcef9',
    border: '#cfcfcf',
    base: '#ffffff',
    baseHover: '#f8f8f8',
    textTitle: '#000000',
    textMain: '#5b7083',
    textSub: '',
    textDesc: '',
}

const darkSkin = {
    main: '#39a1f1',
    mainHover: '#1da1f21a',
    mainLight: '#8fcef9',
    border: '#cfcfcf',
    base: '#000000',
    baseHover: '#f8f8f8',
    textTitle: '#ffffff',
    textMain: '#5b7083',
    textSub: '',
    textDesc: '',
}

export default theme;