import { useRecoilState } from 'recoil'
import { languageAtom } from '../stateManagement/recoil/languageAtom'
import getLanguage from '../utils/getLanguage'

type Props = {
  locale: string, children: React.ReactNode
}
export default function LanguageButton({ locale, children }: Props) {
  const [language, setLanguage] = useRecoilState(languageAtom)

  return (
    <button type='button' className={`btn btn-secondary${language.locale === locale ? ' active' : ''}`}
      onClick={() => setLanguage(getLanguage(locale))}>
      {children}
    </button>
  )
}
