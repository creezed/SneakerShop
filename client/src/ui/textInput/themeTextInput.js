import passwordHidden from '../../assets/icon/passwordHidden.svg'
import passwordVisible from '../../assets/icon/passwordVisible.svg'
import iconsSearch from '../../assets/icon/icons_search.svg'

export const themeTextInput = {
    withIcon: {
        password: {
            iconVisible: passwordVisible,
            iconHidden: passwordHidden,
            bg: ({ theme }) => theme.colors.white,
        },
        search: {
            icon: iconsSearch,
            bg: ({ theme }) => theme.colors.border
        }
    }
}