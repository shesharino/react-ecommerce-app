import English from '../lang/en-US.json'
import Spanish from '../lang/es-AR.json'

export default function getLanguage(locale: string) {
  return {
    locale,
    messages: locale.startsWith('es') ? Spanish : English
  }
}
