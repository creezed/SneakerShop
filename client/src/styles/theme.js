export const baseTheme = {
    colors: {
        white: `#fff`,
        accentColor: '#d6434f',
        accentColorDart: '#c42c38',
        accentColorDartSecond: '#b82530',
        accentColorLight: '#ffe5e5',
        accentColorLightSecond: '#ffdada',

        gray100: '#f2f2f2',
        gray200: '#e0e0e0',
        gray300: '#d3d3d3',
        gray800: '#9f9f9f',
        gray900: '#404040',
        bg: '#fbfbfb',
        border: '#f3f3f3'
    },

    zIndex: {
        ui: 10,
        select: 50,
        modal: 100,
    },

    font: {
        notoSans:`'Noto Sans', sans-serif`,
        lato: `'Lato', sans-serif`
    },

    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        extraBold: 900,
    },

    fontSize: {
        xxs: `11px`,
        xs: `14px`,
        s: `16px`,
        m: `18px`,
        l: `${22 / 16}rem`,
        xl: `${24 / 16}rem`,
        xxl: `${36 / 16}rem`,
        xxxl: `${44 / 16}rem`,
        xxxxl: `${60 / 16}rem`
    },

    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },

    sizes: {
        header: { height: '90px' },
        container: { width: '1240px' },
        modal: { width: '800px' }
    },

    transition: {
        easeOut: 'ease-out'
    },

    boxShadow: {
        LargerShadow: '0 14px 30px rgba(0, 0, 0, 0.05);'
    }
}