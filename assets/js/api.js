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
      }, callbacks));
    },


    get: function (queryString, callbacks) {

      return $.ajax(APIUtils.addCallbacks({
        url: labNotesUrl + queryString,
        type: 'GET',
        dataType: 'json',
        headers: headers
      }, callbacks));
    },


    create: function (noteData, callbacks) {

      return $.ajax(APIUtils.addCallbacks({
        url: labNotesUrl + 'note',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: window.JSON.stringify(noteData),
        headers: headers
      }, callbacks));
    },


    update: function (url, data, successCallback, errorCallback) {

      $.ajax({
          type: 'PUT',
          url: url,
          data: data
        })
        .done(successCallback)
        .error(errorCallback);
    }


  };
}
