import Typography from "typography"
import grandViewTheme from 'typography-theme-grand-view'
import {color} from './styles'
const typography = new Typography(grandViewTheme, { overrideThemeStyles: ({ rhythm }, options, styles) => ({
  h2:{ color: color.darkPink}
})})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
