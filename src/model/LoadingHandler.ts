export default class LoadingHandler {
  private _loading: number;

  constructor() {
    this._loading = 0;
  }

  get loading() {
    return this._loading > 0;
  }

  addLoading() {
    this._loading++;
    window.dispatchEvent(new Event("loadingupdate"));
  }

  removeLoading() {
    this._loading--;
    window.dispatchEvent(new Event("loadingupdate"));
  }
}