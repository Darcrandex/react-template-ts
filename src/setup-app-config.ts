import axios from 'axios'

interface ISetupFn {
  (callback: () => void): void
}

// /public/config.json
const CONFIG_FILE_PATH = '/config.json'

const defaultAppConfig: IAppConfig = {
  PRODUCTION_ORIGIN: '',
  PRODUCTION_API_URL: '',
}

const setupAppconfig: ISetupFn = async (callback) => {
  window.AppConfig = defaultAppConfig

  try {
    const url = `${window.location.origin}${CONFIG_FILE_PATH}?timestamp=${Date.now()}`
    const { data } = await axios.get(url)

    window.AppConfig = Object.assign({}, defaultAppConfig, data)
  } catch (err) {
    console.error('获取 app-config 失败\n', err)
  }

  callback()
}

export default setupAppconfig
