function DataApi() {
  /**
   * @class DataAPI
   * @static
   */
  return {

    baseUrl: '',


    find: function (id, query, callbacks) {

      return $.ajax(APIUtils.addCallbacks({
        url: labNotesUrl + id,
        type: 'GET',
        dataType: 'json',
        headers: headers
  ***REMOVED***, callbacks));
***REMOVED***,


    get: function (queryString, callbacks) {

      return $.ajax(APIUtils.addCallbacks({
        url: labNotesUrl + queryString,
        type: 'GET',
        dataType: 'json',
        headers: headers
  ***REMOVED***, callbacks));
***REMOVED***,


    create: function (noteData, callbacks) {

      return $.ajax(APIUtils.addCallbacks({
        url: labNotesUrl + 'note',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: window.JSON.stringify(noteData),
        headers: headers
  ***REMOVED***, callbacks));
***REMOVED***,


    update: function (url, data, successCallback, errorCallback) {

      $.ajax({
          type: 'PUT',
          url: url,
          data: data
    ***REMOVED***)
        .done(successCallback)
        .error(errorCallback);
***REMOVED***


***REMOVED***;
}
