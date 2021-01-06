import { makeAutoObservable, observable, action, computed } from 'mobx'

class RequestListener {
  @observable
  requestCount = 0

  @computed
  get isFetching() {
    return this.requestCount > 0
  }

  @action
  add = () => {
    this.requestCount++
  }

  @action
  sub = () => {
    this.requestCount--
  }
}

export default makeAutoObservable(new RequestListener())
