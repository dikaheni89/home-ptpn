import { extendTheme } from "@chakra-ui/react"


export const colors = {
  primary: {
    main: '#004233',
    50: '#ffffff',
    100: '#E5FFFF',
    200: '#CCFFFF',
    300: '#B3F5E6',
    400: '#99DBCC',
    500: '#7FC1B2',
    600: '#66A899',
    700: '#4D8F80',
    800: '#337566',
    900: '#1A5C4D',
    950: '#002B1F'
  }
}

const theme = extendTheme({
  colors
})

export const scrollBarStyle = {
  '&::-webkit-scrollbar': {
    width: '5px',
    height: '5px'
  },
  '&::-webkit-scrollbar-track': {
    background: colors.primary['100'],
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: colors.primary['500'],
    borderRadius: '10px'
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: colors.primary['800']
  }
}

export default theme
