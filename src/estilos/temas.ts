import { extendTheme } from 'native-base'
import { Colors } from 'react-native/Libraries/NewAppScreen'

 export const TEMAS = extendTheme ({
    Colors:{
        gray: {
            300:  '#8D8D99'
        },
        blue:{
            500: '#339CFF',
            800: '#0B3B60'
        },
        white: '#FFF',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
 })