export class PromiseMock {
  constructor(responseType, {response, err, shouldAbortRequest} = {}){
    this.responseType = responseType;
    this.response = response || err;
    this.shouldAbortRequest = shouldAbortRequest;
  }
  then(successCallback, errorCallback){
    if(!this.shouldAbortRequest)
      return handleResponse(this.responseType, this.response, {
        successCallback,
        errorCallback
      });
  }
}

function handleResponse(responseType, response, options){
  return responseType == 'success' ?
    options.successCallback(response) :
    options.errorCallback(response);
}
