import { atom } from 'recoil'
import getLanguage from '../../utils/getLanguage'

export const languageAtom = atom({
  key: 'languageState',
  default: getLanguage(navigator.language)
})
