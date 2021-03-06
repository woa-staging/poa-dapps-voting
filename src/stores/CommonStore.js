import { observable, action } from 'mobx'

class CommonStore {
  @observable loading
  @observable loadingNetworkBranch
  @observable rootPath
  @observable isActiveFilter
  @observable isToFinalizeFilter
  @observable searchTerm
  @observable loadMoreLimit

  constructor() {
    this.loading = false
    this.loadingNetworkBranch = null
    this.isActiveFilter = false
    this.isToFinalizeFilter = false
    this.rootPath = '/poa-dapps-voting'
    this.loadMoreLimit = 10
  }

  @action('show loading')
  showLoading(loadingNetworkBranch) {
    this.loading = true
    this.loadingNetworkBranch = loadingNetworkBranch
  }

  @action('hide loading')
  hideLoading() {
    this.loading = false
    this.loadingNetworkBranch = null
  }

  @action('set search term')
  setSearchTerm = _val => {
    this.searchTerm = _val
  }
}

const commonStore = new CommonStore()

export default commonStore
export { CommonStore }
