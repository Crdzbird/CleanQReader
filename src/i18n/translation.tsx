import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nInstance = i18n.use(initReactI18next)

i18nInstance.init({
  resources: {
    en: {
      translations: {
        "QR Code detected": "QR Code detected",
        "No Permission": "No Permission",
        "Register QR": "Register QR",
        "Read again": "Read again",
        "Permission Rejected": "Permission Rejected",
        "No QR Scanned": "No QR Scanned",
        "Scan your QR code": "Scan your QR code",
        "CleanQReader": "CleanQReader"
      }
    },
    es: {
      translations: {
        "QR Code detected": "Codigo QR Detectado",
        "No Permission": "Sin Permiso",
        "Register QR": "QR Registrado",
        "Read again": "Leer otra vez",
        "Permission Rejected": "Permiso Rechazado",
        "No QR Scanned": "No QR Escaneado",
        "Scan your QR code": "Escanea tu codigo QR",
        "CleanQReader": "LectorQRLimpio"
      }
    }
  },
  // Default language
  lng: 'es',
  fallbackLng: 'es',
  debug: false,

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // use content as keys
  interpolation: {
    escapeValue: false,
  },
})

i18nInstance.languages = ['en', 'es']

export default i18nInstance;