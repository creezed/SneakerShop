export const themeBtn = {
    fill: {
        bg: ({theme}) => theme.colors.accentColor,
        TextColor: ({theme}) => theme.colors.white,
        border: 'transparent',
        hover: {
            bg: ({theme}) => theme.colors.accentColorDart,
        },
        active: {
            bg: ({theme}) => theme.colors.accentColorDartSecond,
        }
    },
    outline: {
        bg: 'transparent',
        TextColor: ({theme}) => theme.colors.accentColor,
        border: ({theme}) => theme.colors.accentColor,
        hover: {
            bg: ({theme}) => theme.colors.accentColorLight,
        },
        active: {
            bg: ({theme}) => theme.colors.accentColorLightSecond,
        }
    }
}