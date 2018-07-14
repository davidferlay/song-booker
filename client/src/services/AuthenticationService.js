import Api from '@/sercices/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}
