// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.4
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(root, factory) {

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'underscore'], function(Backbone, _) {
      return (root.Marionette = root.Mn = factory(root, Backbone, _));
***REMOVED***);
***REMOVED*** else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('underscore');
    module.exports = factory(root, Backbone, _);
***REMOVED*** else {
    root.Marionette = root.Mn = factory(root, root.Backbone, root._);
***REMOVED***

}(this, function(root, Backbone, _) {
  ***REMOVED***

  /* istanbul ignore next */
  // Backbone.BabySitter
  // -------------------
  // v0.1.10
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.babysitter
  (function(Backbone, _) {
    "use strict";
    var previousChildViewContainer = Backbone.ChildViewContainer;
    // BabySitter.ChildViewContainer
    // -----------------------------
    //
    // Provide a container to store, retrieve and
    // shut down child views.
    Backbone.ChildViewContainer = function(Backbone, _) {
      // Container Constructor
      // ---------------------
      var Container = function(views) {
        this._views = {***REMOVED***
        this._indexByModel = {***REMOVED***
        this._indexByCustom = {***REMOVED***
        this._updateLength();
        _.each(views, this.add, this);
***REMOVED***
      // Container Methods
      // -----------------
      _.extend(Container.prototype, {
        // Add a view to this container. Stores the view
        // by `cid` and makes it searchable by the model
        // cid (and model itself). Optionally specify
        // a custom key to store an retrieve the view.
        add: function(view, customIndex) {
          var viewCid = view.cid;
          // store the view
          this._views[viewCid] = view;
          // index it by model
          if (view.model) {
            this._indexByModel[view.model.cid] = viewCid;
      ***REMOVED***
          // index by custom
          if (customIndex) {
            this._indexByCustom[customIndex] = viewCid;
      ***REMOVED***
          this._updateLength();
          return this;
    ***REMOVED***,
        // Find a view by the model that was attached to
        // it. Uses the model's `cid` to find it.
        findByModel: function(model) {
          return this.findByModelCid(model.cid);
    ***REMOVED***,
        // Find a view by the `cid` of the model that was attached to
        // it. Uses the model's `cid` to find the view `cid` and
        // retrieve the view using it.
        findByModelCid: function(modelCid) {
          var viewCid = this._indexByModel[modelCid];
          return this.findByCid(viewCid);
    ***REMOVED***,
        // Find a view by a custom indexer.
        findByCustom: function(index) {
          var viewCid = this._indexByCustom[index];
          return this.findByCid(viewCid);
    ***REMOVED***,
        // Find by index. This is not guaranteed to be a
        // stable index.
        findByIndex: function(index) {
          return _.values(this._views)[index];
    ***REMOVED***,
        // retrieve a view by its `cid` directly
        findByCid: function(cid) {
          return this._views[cid];
    ***REMOVED***,
        // Remove a view
        remove: function(view) {
          var viewCid = view.cid;
          // delete model index
          if (view.model) {
            delete this._indexByModel[view.model.cid];
      ***REMOVED***
          // delete custom index
          _.any(this._indexByCustom, function(cid, key) {
            if (cid === viewCid) {
              delete this._indexByCustom[key];
              return true;
        ***REMOVED***
      ***REMOVED***, this);
          // remove the view from the container
          delete this._views[viewCid];
          // update the length
          this._updateLength();
          return this;
    ***REMOVED***,
        // Call a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.call`.
        call: function(method) {
          this.apply(method, _.tail(arguments));
    ***REMOVED***,
        // Apply a method on every view in the container,
        // passing parameters to the call method one at a
        // time, like `function.apply`.
        apply: function(method, args) {
          _.each(this._views, function(view) {
            if (_.isFunction(view[method])) {
              view[method].apply(view, args || []);
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***,
        // Update the `.length` attribute on this container
        _updateLength: function() {
          this.length = _.size(this._views);
    ***REMOVED***
  ***REMOVED***);
      // Borrowing this code from Backbone.Collection:
      // http://backbonejs.org/docs/backbone.html#section-106
      //
      // Mix in methods from Underscore, for iteration, and other
      // collection related features.
      var methods = [ "forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce" ];
      _.each(methods, function(method) {
        Container.prototype[method] = function() {
          var views = _.values(this._views);
          var args = [ views ].concat(_.toArray(arguments));
          return _[method].apply(_, args);
  ***REMOVED***
  ***REMOVED***);
      // return the public API
      return Container;
***REMOVED***(Backbone, _);
    Backbone.ChildViewContainer.VERSION = "0.1.10";
    Backbone.ChildViewContainer.noConflict = function() {
      Backbone.ChildViewContainer = previousChildViewContainer;
      return this;
***REMOVED***;
    return Backbone.ChildViewContainer;
***REMOVED***)(Backbone, _);

  /* istanbul ignore next */
  // Backbone.Wreqr (Backbone.Marionette)
  // ----------------------------------
  // v1.3.5
  //
  // Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
  // Distributed under MIT license
  //
  // http://github.com/marionettejs/backbone.wreqr
  (function(Backbone, _) {
    "use strict";
    var previousWreqr = Backbone.Wreqr;
    var Wreqr = Backbone.Wreqr = {***REMOVED***
    Backbone.Wreqr.VERSION = "1.3.5";
    Backbone.Wreqr.noConflict = function() {
      Backbone.Wreqr = previousWreqr;
      return this;
***REMOVED***;
    // Handlers
    // --------
    // A registry of functions to call, given a name
    Wreqr.Handlers = function(Backbone, _) {
      "use strict";
      // Constructor
      // -----------
      var Handlers = function(options) {
        this.options = options;
        this._wreqrHandlers = {***REMOVED***
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
    ***REMOVED***
***REMOVED***
      Handlers.extend = Backbone.Model.extend;
      // Instance Members
      // ----------------
      _.extend(Handlers.prototype, Backbone.Events, {
        // Add multiple handlers using an object literal configuration
        setHandlers: function(handlers) {
          _.each(handlers, function(handler, name) {
            var context = null;
            if (_.isObject(handler) && !_.isFunction(handler)) {
              context = handler.context;
              handler = handler.callback;
        ***REMOVED***
            this.setHandler(name, handler, context);
      ***REMOVED***, this);
    ***REMOVED***,
        // Add a handler for the given name, with an
        // optional context to run the handler within
        setHandler: function(name, handler, context) {
          var config = {
            callback: handler,
            context: context
    ***REMOVED***
          this._wreqrHandlers[name] = config;
          this.trigger("handler:add", name, handler, context);
    ***REMOVED***,
        // Determine whether or not a handler is registered
        hasHandler: function(name) {
          return !!this._wreqrHandlers[name];
    ***REMOVED***,
        // Get the currently registered handler for
        // the specified name. Throws an exception if
        // no handler is found.
        getHandler: function(name) {
          var config = this._wreqrHandlers[name];
          if (!config) {
            return;
      ***REMOVED***
          return function() {
            return config.callback.apply(config.context, arguments);
    ***REMOVED***
    ***REMOVED***,
        // Remove a handler for the specified name
        removeHandler: function(name) {
          delete this._wreqrHandlers[name];
    ***REMOVED***,
        // Remove all handlers from this registry
        removeAllHandlers: function() {
          this._wreqrHandlers = {***REMOVED***
    ***REMOVED***
  ***REMOVED***);
      return Handlers;
***REMOVED***(Backbone, _);
    // Wreqr.CommandStorage
    // --------------------
    //
    // Store and retrieve commands for execution.
    Wreqr.CommandStorage = function() {
      "use strict";
      // Constructor function
      var CommandStorage = function(options) {
        this.options = options;
        this._commands = {***REMOVED***
        if (_.isFunction(this.initialize)) {
          this.initialize(options);
    ***REMOVED***
***REMOVED***
      // Instance methods
      _.extend(CommandStorage.prototype, Backbone.Events, {
        // Get an object literal by command name, that contains
        // the `commandName` and the `instances` of all commands
        // represented as an array of arguments to process
        getCommands: function(commandName) {
          var commands = this._commands[commandName];
          // we don't have it, so add it
          if (!commands) {
            // build the configuration
            commands = {
              command: commandName,
              instances: []
      ***REMOVED***
            // store it
            this._commands[commandName] = commands;
      ***REMOVED***
          return commands;
    ***REMOVED***,
        // Add a command by name, to the storage and store the
        // args for the command
        addCommand: function(commandName, args) {
          var command = this.getCommands(commandName);
          command.instances.push(args);
    ***REMOVED***,
        // Clear all commands for the given `commandName`
        clearCommands: function(commandName) {
          var command = this.getCommands(commandName);
          command.instances = [];
    ***REMOVED***
  ***REMOVED***);
      return CommandStorage;
***REMOVED***();
    // Wreqr.Commands
    // --------------
    //
    // A simple command pattern implementation. Register a command
    // handler and execute it.
    Wreqr.Commands = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        // default storage type
        storageType: Wreqr.CommandStorage,
        constructor: function(options) {
          this.options = options || {***REMOVED***
          this._initializeStorage(this.options);
          this.on("handler:add", this._executeCommands, this);
          Wreqr.Handlers.prototype.constructor.apply(this, arguments);
    ***REMOVED***,
        // Execute a named command with the supplied args
        execute: function(name) {
          name = arguments[0];
          var args = _.rest(arguments);
          if (this.hasHandler(name)) {
            this.getHandler(name).apply(this, args);
      ***REMOVED***
            this.storage.addCommand(name, args);
      ***REMOVED***
    ***REMOVED***,
        // Internal method to handle bulk execution of stored commands
        _executeCommands: function(name, handler, context) {
          var command = this.storage.getCommands(name);
          // loop through and execute all the stored command instances
          _.each(command.instances, function(args) {
            handler.apply(context, args);
      ***REMOVED***);
          this.storage.clearCommands(name);
    ***REMOVED***,
        // Internal method to initialize storage either from the type's
        // `storageType` or the instance `options.storageType`.
        _initializeStorage: function(options) {
          var storage;
          var StorageType = options.storageType || this.storageType;
          if (_.isFunction(StorageType)) {
            storage = new StorageType();
      ***REMOVED***
            storage = StorageType;
      ***REMOVED***
          this.storage = storage;
    ***REMOVED***
  ***REMOVED***);
***REMOVED***(Wreqr, _);
    // Wreqr.RequestResponse
    // ---------------------
    //
    // A simple request/response implementation. Register a
    // request handler, and return a response from it
    Wreqr.RequestResponse = function(Wreqr, _) {
      "use strict";
      return Wreqr.Handlers.extend({
        request: function(name) {
          if (this.hasHandler(name)) {
            return this.getHandler(name).apply(this, _.rest(arguments));
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***);
***REMOVED***(Wreqr, _);
    // Event Aggregator
    // ----------------
    // A pub-sub object that can be used to decouple various parts
    // of an application through event-driven architecture.
    Wreqr.EventAggregator = function(Backbone, _) {
      "use strict";
      var EA = function() {***REMOVED***
      // Copy the `extend` function used by Backbone's classes
      EA.extend = Backbone.Model.extend;
      // Copy the basic Backbone.Events on to the event aggregator
      _.extend(EA.prototype, Backbone.Events);
      return EA;
***REMOVED***(Backbone, _);
    // Wreqr.Channel
    // --------------
    //
    // An object that wraps the three messaging systems:
    // EventAggregator, RequestResponse, Commands
    Wreqr.Channel = function(Wreqr) {
      "use strict";
      var Channel = function(channelName) {
        this.vent = new Backbone.Wreqr.EventAggregator();
        this.reqres = new Backbone.Wreqr.RequestResponse();
        this.commands = new Backbone.Wreqr.Commands();
        this.channelName = channelName;
***REMOVED***
      _.extend(Channel.prototype, {
        // Remove all handlers from the messaging systems of this channel
        reset: function() {
          this.vent.off();
          this.vent.stopListening();
          this.reqres.removeAllHandlers();
          this.commands.removeAllHandlers();
          return this;
    ***REMOVED***,
        // Connect a hash of events; one for each messaging system
        connectEvents: function(hash, context) {
          this._connect("vent", hash, context);
          return this;
    ***REMOVED***,
        connectCommands: function(hash, context) {
          this._connect("commands", hash, context);
          return this;
    ***REMOVED***,
        connectRequests: function(hash, context) {
          this._connect("reqres", hash, context);
          return this;
    ***REMOVED***,
        // Attach the handlers to a given message system `type`
        _connect: function(type, hash, context) {
          if (!hash) {
            return;
      ***REMOVED***
          context = context || this;
          var method = type === "vent" ? "on" : "setHandler";
          _.each(hash, function(fn, eventName) {
            this[type][method](eventName, _.bind(fn, context));
      ***REMOVED***, this);
    ***REMOVED***
  ***REMOVED***);
      return Channel;
***REMOVED***(Wreqr);
    // Wreqr.Radio
    // --------------
    //
    // An object that lets you communicate with many channels.
    Wreqr.radio = function(Wreqr, _) {
      "use strict";
      var Radio = function() {
        this._channels = {***REMOVED***
        this.vent = {***REMOVED***
        this.commands = {***REMOVED***
        this.reqres = {***REMOVED***
        this._proxyMethods();
***REMOVED***
      _.extend(Radio.prototype, {
        channel: function(channelName) {
          if (!channelName) {
            throw new Error("Channel must receive a name");
      ***REMOVED***
          return this._getChannel(channelName);
    ***REMOVED***,
        _getChannel: function(channelName) {
          var channel = this._channels[channelName];
          if (!channel) {
            channel = new Wreqr.Channel(channelName);
            this._channels[channelName] = channel;
      ***REMOVED***
          return channel;
    ***REMOVED***,
        _proxyMethods: function() {
          _.each([ "vent", "commands", "reqres" ], function(system) {
            _.each(messageSystems[system], function(method) {
              this[system][method] = proxyMethod(this, system, method);
        ***REMOVED***, this);
      ***REMOVED***, this);
    ***REMOVED***
  ***REMOVED***);
      var messageSystems = {
        vent: [ "on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce" ],
        commands: [ "execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ],
        reqres: [ "request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers" ]
***REMOVED***
      var proxyMethod = function(radio, system, method) {
        return function(channelName) {
          var messageSystem = radio._getChannel(channelName)[system];
          return messageSystem[method].apply(messageSystem, _.rest(arguments));
  ***REMOVED***
***REMOVED***
      return new Radio();
***REMOVED***(Wreqr, _);
    return Backbone.Wreqr;
***REMOVED***)(Backbone, _);

  var previousMarionette = root.Marionette;
  var previousMn = root.Mn;

  var Marionette = Backbone.Marionette = {***REMOVED***

  Marionette.VERSION = '2.4.4';

  Marionette.noConflict = function() {
    root.Marionette = previousMarionette;
    root.Mn = previousMn;
    return this;
***REMOVED***;

  Backbone.Marionette = Marionette;

  // Get the Deferred creator for later use
  Marionette.Deferred = Backbone.$.Deferred;

  /* jshint unused: false *//* global console */

  // Helpers
  // -------

  // Marionette.extend
  // -----------------

  // Borrow the Backbone `extend` method so we can use it as needed
  Marionette.extend = Backbone.Model.extend;

  // Marionette.isNodeAttached
  // -------------------------

  // Determine if `el` is a child of the document
  Marionette.isNodeAttached = function(el) {
    return Backbone.$.contains(document.documentElement, el);
***REMOVED***;

  // Merge `keys` from `options` onto `this`
  Marionette.mergeOptions = function(options, keys) {
    if (!options) { return; }
    _.extend(this, _.pick(options, keys));
***REMOVED***;

  // Marionette.getOption
  // --------------------

  // Retrieve an object, function or other value from a target
  // object or its `options`, with `options` taking precedence.
  Marionette.getOption = function(target, optionName) {
    if (!target || !optionName) { return; }
    if (target.options && (target.options[optionName] !== undefined)) {
      return target.options[optionName];
***REMOVED***
      return target[optionName];
***REMOVED***
***REMOVED***;

  // Proxy `Marionette.getOption`
  Marionette.proxyGetOption = function(optionName) {
    return Marionette.getOption(this, optionName);
***REMOVED***;

  // Similar to `_.result`, this is a simple helper
  // If a function is provided we call it with context
  // otherwise just return the value. If the value is
  // undefined return a default value
  Marionette._getValue = function(value, context, params) {
    if (_.isFunction(value)) {
      value = params ? value.apply(context, params) : value.call(context);
***REMOVED***
    return value;
***REMOVED***;

  // Marionette.normalizeMethods
  // ----------------------

  // Pass in a mapping of events => functions or function names
  // and return a mapping of events => functions
  Marionette.normalizeMethods = function(hash) {
    return _.reduce(hash, function(normalizedHash, method, name) {
      if (!_.isFunction(method)) {
        method = this[method];
  ***REMOVED***
      if (method) {
        normalizedHash[name] = method;
  ***REMOVED***
      return normalizedHash;
***REMOVED***, {}, this);
***REMOVED***;

  // utility method for parsing @ui. syntax strings
  // into associated selector
  Marionette.normalizeUIString = function(uiString, ui) {
    return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, function(r) {
      return ui[r.slice(4)];
***REMOVED***);
***REMOVED***;

  // allows for the use of the @ui. syntax within
  // a given key for triggers and events
  // swaps the @ui with the associated selector.
  // Returns a new, non-mutated, parsed events hash.
  Marionette.normalizeUIKeys = function(hash, ui) {
    return _.reduce(hash, function(memo, val, key) {
      var normalizedKey = Marionette.normalizeUIString(key, ui);
      memo[normalizedKey] = val;
      return memo;
***REMOVED***, {});
***REMOVED***;

  // allows for the use of the @ui. syntax within
  // a given value for regions
  // swaps the @ui with the associated selector
  Marionette.normalizeUIValues = function(hash, ui, properties) {
    _.each(hash, function(val, key) {
      if (_.isString(val)) {
        hash[key] = Marionette.normalizeUIString(val, ui);
  ***REMOVED*** else if (_.isObject(val) && _.isArray(properties)) {
        _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
        /* Value is an object, and we got an array of embedded property names to normalize. */
        _.each(properties, function(property) {
          var propertyVal = val[property];
          if (_.isString(propertyVal)) {
            val[property] = Marionette.normalizeUIString(propertyVal, ui);
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***
***REMOVED***);
    return hash;
***REMOVED***;

  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // http://backbonejs.org/docs/backbone.html#section-121
  Marionette.actAsCollection = function(object, listProperty) {
    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
      'last', 'without', 'isEmpty', 'pluck'];

    _.each(methods, function(method) {
      object[method] = function() {
        var list = _.values(_.result(this, listProperty));
        var args = [list].concat(_.toArray(arguments));
        return _[method].apply(_, args);
***REMOVED***
***REMOVED***);
***REMOVED***;

  var deprecate = Marionette.deprecate = function(message, test) {
    if (_.isObject(message)) {
      message = (
        message.prev + ' is going to be removed in the future. ' +
        'Please use ' + message.next + ' instead.' +
        (message.url ? ' See: ' + message.url : '')
      );
***REMOVED***

    if ((test === undefined || !test) && !deprecate._cache[message]) {
      deprecate._warn('Deprecation warning: ' + message);
      deprecate._cache[message] = true;
***REMOVED***
***REMOVED***;

  deprecate._warn = typeof console !== 'undefined' && (console.warn || console.log) || function() {***REMOVED***
  deprecate._cache = {***REMOVED***

  /* jshint maxstatements: 14, maxcomplexity: 7 */

  // Trigger Method
  // --------------

  Marionette._triggerMethod = (function() {
    // split the event name on the ":"
    var splitter = /(^|:)(\w)/gi;

    // take the event section ("section1:section2:section3")
    // and turn it in to uppercase name
    function getEventName(match, prefix, eventName) {
      return eventName.toUpperCase();
***REMOVED***

    return function(context, event, args) {
      var noEventArg = arguments.length < 3;
      if (noEventArg) {
        args = event;
        event = args[0];
  ***REMOVED***

      // get the method name from the event name
      var methodName = 'on' + event.replace(splitter, getEventName);
      var method = context[methodName];
      var result;

      // call the onMethodName if it exists
      if (_.isFunction(method)) {
        // pass all args, except the event name
        result = method.apply(context, noEventArg ? _.rest(args) : args);
  ***REMOVED***

      // trigger the event, if a trigger method exists
      if (_.isFunction(context.trigger)) {
        if (noEventArg + args.length > 1) {
          context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
    ***REMOVED***
          context.trigger(event);
    ***REMOVED***
  ***REMOVED***

      return result;
***REMOVED***;
***REMOVED***)();

  // Trigger an event and/or a corresponding method name. Examples:
  //
  // `this.triggerMethod("foo")` will trigger the "foo" event and
  // call the "onFoo" method.
  //
  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
  // call the "onFooBar" method.
  Marionette.triggerMethod = function(event) {
    return Marionette._triggerMethod(this, arguments);
***REMOVED***;

  // triggerMethodOn invokes triggerMethod on a specific context
  //
  // e.g. `Marionette.triggerMethodOn(view, 'show')`
  // will trigger a "show" event or invoke onShow the view.
  Marionette.triggerMethodOn = function(context) {
    var fnc = _.isFunction(context.triggerMethod) ?
      context.triggerMethod :
      Marionette.triggerMethod;

    return fnc.apply(context, _.rest(arguments));
***REMOVED***;

  // DOM Refresh
  // -----------

  // Monitor a view's state, and after it has been rendered and shown
  // in the DOM, trigger a "dom:refresh" event every time it is
  // re-rendered.

  Marionette.MonitorDOMRefresh = function(view) {
    if (view._isDomRefreshMonitored) { return; }
    view._isDomRefreshMonitored = true;

    // track when the view has been shown in the DOM,
    // using a Marionette.Region (or by other means of triggering "show")
    function handleShow() {
      view._isShown = true;
      triggerDOMRefresh();
***REMOVED***

    // track when the view has been rendered
    function handleRender() {
      view._isRendered = true;
      triggerDOMRefresh();
***REMOVED***

    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
    function triggerDOMRefresh() {
      if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
        Marionette.triggerMethodOn(view, 'dom:refresh', view);
  ***REMOVED***
***REMOVED***

    view.on({
      show: handleShow,
      render: handleRender
***REMOVED***);
***REMOVED***;

  /* jshint maxparams: 5 */

  // Bind Entity Events & Unbind Entity Events
  // -----------------------------------------
  //
  // These methods are used to bind/unbind a backbone "entity" (e.g. collection/model)
  // to methods on a target object.
  //
  // The first parameter, `target`, must have the Backbone.Events module mixed in.
  //
  // The second parameter is the `entity` (Backbone.Model, Backbone.Collection or
  // any object that has Backbone.Events mixed in) to bind the events from.
  //
  // The third parameter is a hash of { "event:name": "eventHandler" }
  // configuration. Multiple handlers can be separated by a space. A
  // function can be supplied instead of a string handler name.

  (function(Marionette) {
    ***REMOVED***

    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function bindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);

      _.each(methodNames, function(methodName) {

        var method = target[methodName];
        if (!method) {
          throw new Marionette.Error('Method "' + methodName +
            '" was configured as an event handler, but does not exist.');
    ***REMOVED***

        target.listenTo(entity, evt, method);
  ***REMOVED***);
***REMOVED***

    // Bind the event to a supplied callback function
    function bindToFunction(target, entity, evt, method) {
      target.listenTo(entity, evt, method);
***REMOVED***

    // Bind the event to handlers specified as a string of
    // handler names on the target object
    function unbindFromStrings(target, entity, evt, methods) {
      var methodNames = methods.split(/\s+/);

      _.each(methodNames, function(methodName) {
        var method = target[methodName];
        target.stopListening(entity, evt, method);
  ***REMOVED***);
***REMOVED***

    // Bind the event to a supplied callback function
    function unbindToFunction(target, entity, evt, method) {
      target.stopListening(entity, evt, method);
***REMOVED***

    // generic looping function
    function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
      if (!entity || !bindings) { return; }

      // type-check bindings
      if (!_.isObject(bindings)) {
        throw new Marionette.Error({
          message: 'Bindings must be an object or function.',
          url: 'marionette.functions.html#marionettebindentityevents'
    ***REMOVED***);
  ***REMOVED***

      // allow the bindings to be a function
      bindings = Marionette._getValue(bindings, target);

      // iterate the bindings and bind them
      _.each(bindings, function(methods, evt) {

        // allow for a function as the handler,
        // or a list of event names as a string
        if (_.isFunction(methods)) {
          functionCallback(target, entity, evt, methods);
    ***REMOVED***
          stringCallback(target, entity, evt, methods);
    ***REMOVED***

  ***REMOVED***);
***REMOVED***

    // Export Public API
    Marionette.bindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
***REMOVED***;

    Marionette.unbindEntityEvents = function(target, entity, bindings) {
      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
***REMOVED***;

    // Proxy `bindEntityEvents`
    Marionette.proxyBindEntityEvents = function(entity, bindings) {
      return Marionette.bindEntityEvents(this, entity, bindings);
***REMOVED***;

    // Proxy `unbindEntityEvents`
    Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
      return Marionette.unbindEntityEvents(this, entity, bindings);
***REMOVED***;
***REMOVED***)(Marionette);


  // Error
  // -----

  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];

  Marionette.Error = Marionette.extend.call(Error, {
    urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',

    constructor: function(message, options) {
      if (_.isObject(message)) {
        options = message;
        message = options.message;
  ***REMOVED*** else if (!options) {
        options = {***REMOVED***
  ***REMOVED***

      var error = Error.call(this, message);
      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));

      this.captureStackTrace();

      if (options.url) {
        this.url = this.urlRoot + options.url;
  ***REMOVED***
***REMOVED***,

    captureStackTrace: function() {
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Marionette.Error);
  ***REMOVED***
***REMOVED***,

    toString: function() {
      return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
***REMOVED***
***REMOVED***);

  Marionette.Error.extend = Marionette.extend;

  // Callbacks
  // ---------

  // A simple way of managing a collection of callbacks
  // and executing them at a later point in time, using jQuery's
  // `Deferred` object.
  Marionette.Callbacks = function() {
    this._deferred = Marionette.Deferred();
    this._callbacks = [];
***REMOVED***;

  _.extend(Marionette.Callbacks.prototype, {

    // Add a callback to be executed. Callbacks added here are
    // guaranteed to execute, even if they are added after the
    // `run` method is called.
    add: function(callback, contextOverride) {
      var promise = _.result(this._deferred, 'promise');

      this._callbacks.push({cb: callback, ctx: contextOverride});

      promise.then(function(args) {
        if (contextOverride) { args.context = contextOverride; }
        callback.call(args.context, args.options);
  ***REMOVED***);
***REMOVED***,

    // Run all registered callbacks with the context specified.
    // Additional callbacks can be added after this has been run
    // and they will still be executed.
    run: function(options, context) {
      this._deferred.resolve({
        options: options,
        context: context
  ***REMOVED***);
***REMOVED***,

    // Resets the list of callbacks to be run, allowing the same list
    // to be run multiple times - whenever the `run` method is called.
    reset: function() {
      var callbacks = this._callbacks;
      this._deferred = Marionette.Deferred();
      this._callbacks = [];

      _.each(callbacks, function(cb) {
        this.add(cb.cb, cb.ctx);
  ***REMOVED***, this);
***REMOVED***
***REMOVED***);

  // Controller
  // ----------

  // A multi-purpose object to use as a controller for
  // modules and routers, and as a mediator for workflow
  // and coordination of other objects, views, and more.
  Marionette.Controller = function(options) {
    this.options = options || {***REMOVED***

    if (_.isFunction(this.initialize)) {
      this.initialize(this.options);
***REMOVED***
***REMOVED***;

  Marionette.Controller.extend = Marionette.extend;

  // Controller Methods
  // --------------

  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Controller.prototype, Backbone.Events, {
    destroy: function() {
      Marionette._triggerMethod(this, 'before:destroy', arguments);
      Marionette._triggerMethod(this, 'destroy', arguments);

      this.stopListening();
      this.off();
      return this;
***REMOVED***,

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,

    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption

***REMOVED***);

  // Object
  // ------

  // A Base Class that other Classes should descend from.
  // Object borrows many conventions and utilities from Backbone.
  Marionette.Object = function(options) {
    this.options = _.extend({}, _.result(this, 'options'), options);

    this.initialize.apply(this, arguments);
***REMOVED***;

  Marionette.Object.extend = Marionette.extend;

  // Object Methods
  // --------------

  // Ensure it can trigger events with Backbone.Events
  _.extend(Marionette.Object.prototype, Backbone.Events, {

    //this is a noop method intended to be overridden by classes that extend from this base
    initialize: function() {},

    destroy: function(options) {
      options = options || {***REMOVED***

      this.triggerMethod('before:destroy', options);
      this.triggerMethod('destroy', options);
      this.stopListening();

      return this;
***REMOVED***,

    // Import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod,

    // A handy way to merge options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,

    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
***REMOVED***);

  /* jshint maxcomplexity: 16, maxstatements: 45, maxlen: 120 */

  // Region
  // ------

  // Manage the visual regions of your composite application. See
  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/

  Marionette.Region = Marionette.Object.extend({
      constructor: function(options) {

        // set options temporarily so that we can get `el`.
        // options will be overriden by Object.constructor
        this.options = options || {***REMOVED***
        this.el = this.getOption('el');

        // Handle when this.el is passed in as a $ wrapped element.
        this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;

        if (!this.el) {
          throw new Marionette.Error({
            name: 'NoElError',
            message: 'An "el" must be specified for a region.'
      ***REMOVED***);
    ***REMOVED***

        this.$el = this.getEl(this.el);
        Marionette.Object.call(this, options);
  ***REMOVED***,

      // Displays a backbone view instance inside of the region.
      // Handles calling the `render` method for you. Reads content
      // directly from the `el` attribute. Also calls an optional
      // `onShow` and `onDestroy` method on your view, just after showing
      // or just before destroying the view, respectively.
      // The `preventDestroy` option can be used to prevent a view from
      // the old view being destroyed on show.
      // The `forceShow` option can be used to force a view to be
      // re-rendered if it's already shown in the region.
      show: function(view, options) {
        if (!this._ensureElement()) {
          return;
    ***REMOVED***

        this._ensureViewIsIntact(view);
        Marionette.MonitorDOMRefresh(view);

        var showOptions     = options || {***REMOVED***
        var isDifferentView = view !== this.currentView;
        var preventDestroy  = !!showOptions.preventDestroy;
        var forceShow       = !!showOptions.forceShow;

        // We are only changing the view if there is a current view to change to begin with
        var isChangingView = !!this.currentView;

        // Only destroy the current view if we don't want to `preventDestroy` and if
        // the view given in the first argument is different than `currentView`
        var _shouldDestroyView = isDifferentView && !preventDestroy;

        // Only show the view given in the first argument if it is different than
        // the current view or if we want to re-show the view. Note that if
        // `_shouldDestroyView` is true, then `_shouldShowView` is also necessarily true.
        var _shouldShowView = isDifferentView || forceShow;

        if (isChangingView) {
          this.triggerMethod('before:swapOut', this.currentView, this, options);
    ***REMOVED***

        if (this.currentView) {
          delete this.currentView._parent;
    ***REMOVED***

        if (_shouldDestroyView) {
          this.empty();

          // A `destroy` event is attached to the clean up manually removed views.
          // We need to detach this event when a new view is going to be shown as it
          // is no longer relevant.
    ***REMOVED*** else if (isChangingView && _shouldShowView) {
          this.currentView.off('destroy', this.empty, this);
    ***REMOVED***

        if (_shouldShowView) {

          // We need to listen for if a view is destroyed
          // in a way other than through the region.
          // If this happens we need to remove the reference
          // to the currentView since once a view has been destroyed
          // we can not reuse it.
          view.once('destroy', this.empty, this);

          // make this region the view's parent,
          // It's important that this parent binding happens before rendering
          // so that any events the child may trigger during render can also be
          // triggered on the child's ancestor views
          view._parent = this;
          this._renderView(view);

          if (isChangingView) {
            this.triggerMethod('before:swap', view, this, options);
      ***REMOVED***

          this.triggerMethod('before:show', view, this, options);
          Marionette.triggerMethodOn(view, 'before:show', view, this, options);

          if (isChangingView) {
            this.triggerMethod('swapOut', this.currentView, this, options);
      ***REMOVED***

          // An array of views that we're about to display
          var attachedRegion = Marionette.isNodeAttached(this.el);

          // The views that we're about to attach to the document
          // It's important that we prevent _getNestedViews from being executed unnecessarily
          // as it's a potentially-slow method
          var displayedViews = [];

          var attachOptions = _.extend({
            triggerBeforeAttach: this.triggerBeforeAttach,
            triggerAttach: this.triggerAttach
      ***REMOVED***, showOptions);

          if (attachedRegion && attachOptions.triggerBeforeAttach) {
            displayedViews = this._displayedViews(view);
            this._triggerAttach(displayedViews, 'before:');
      ***REMOVED***

          this.attachHtml(view);
          this.currentView = view;

          if (attachedRegion && attachOptions.triggerAttach) {
            displayedViews = this._displayedViews(view);
            this._triggerAttach(displayedViews);
      ***REMOVED***

          if (isChangingView) {
            this.triggerMethod('swap', view, this, options);
      ***REMOVED***

          this.triggerMethod('show', view, this, options);
          Marionette.triggerMethodOn(view, 'show', view, this, options);

          return this;
    ***REMOVED***

        return this;
  ***REMOVED***,

      triggerBeforeAttach: true,
      triggerAttach: true,

      _triggerAttach: function(views, prefix) {
        var eventName = (prefix || '') + 'attach';
        _.each(views, function(view) {
          Marionette.triggerMethodOn(view, eventName, view, this);
    ***REMOVED***, this);
  ***REMOVED***,

      _displayedViews: function(view) {
        return _.union([view], _.result(view, '_getNestedViews') || []);
  ***REMOVED***,

      _renderView: function(view) {
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'before:render', view);
    ***REMOVED***
        view.render();
        if (!view.supportsRenderLifecycle) {
          Marionette.triggerMethodOn(view, 'render', view);
    ***REMOVED***
  ***REMOVED***,

      _ensureElement: function() {
        if (!_.isObject(this.el)) {
          this.$el = this.getEl(this.el);
          this.el = this.$el[0];
    ***REMOVED***

        if (!this.$el || this.$el.length === 0) {
          if (this.getOption('allowMissingEl')) {
            return false;
      ***REMOVED***
            throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
      ***REMOVED***
    ***REMOVED***
        return true;
  ***REMOVED***,

      _ensureViewIsIntact: function(view) {
        if (!view) {
          throw new Marionette.Error({
            name: 'ViewNotValid',
            message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
      ***REMOVED***);
    ***REMOVED***

        if (view.isDestroyed) {
          throw new Marionette.Error({
            name: 'ViewDestroyedError',
            message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***,

      // Override this method to change how the region finds the DOM
      // element that it manages. Return a jQuery selector object scoped
      // to a provided parent el or the document if none exists.
      getEl: function(el) {
        return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
  ***REMOVED***,

      // Override this method to change how the new view is
      // appended to the `$el` that the region is managing
      attachHtml: function(view) {
        this.$el.contents().detach();

        this.el.appendChild(view.el);
  ***REMOVED***,

      // Destroy the current view, if there is one. If there is no
      // current view, it does nothing and returns immediately.
      empty: function(options) {
        var view = this.currentView;

        var emptyOptions = options || {***REMOVED***
        var preventDestroy  = !!emptyOptions.preventDestroy;
        // If there is no view in the region
        // we should not remove anything
        if (!view) { return this; }

        view.off('destroy', this.empty, this);
        this.triggerMethod('before:empty', view);
        if (!preventDestroy) {
          this._destroyView();
    ***REMOVED***
        this.triggerMethod('empty', view);

        // Remove region pointer to the currentView
        delete this.currentView;

        if (preventDestroy) {
          this.$el.contents().detach();
    ***REMOVED***

        return this;
  ***REMOVED***,

      // call 'destroy' or 'remove', depending on which is found
      // on the view (if showing a raw Backbone view or a Marionette View)
      _destroyView: function() {
        var view = this.currentView;
        if (view.isDestroyed) { return; }

        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'before:destroy', view);
    ***REMOVED***
        if (view.destroy) {
          view.destroy();
    ***REMOVED***
          view.remove();

          // appending isDestroyed to raw Backbone View allows regions
          // to throw a ViewDestroyedError for this view
          view.isDestroyed = true;
    ***REMOVED***
        if (!view.supportsDestroyLifecycle) {
          Marionette.triggerMethodOn(view, 'destroy', view);
    ***REMOVED***
  ***REMOVED***,

      // Attach an existing view to the region. This
      // will not call `render` or `onShow` for the new view,
      // and will not replace the current HTML for the `el`
      // of the region.
      attachView: function(view) {
        if (this.currentView) {
          delete this.currentView._parent;
    ***REMOVED***
        view._parent = this;
        this.currentView = view;
        return this;
  ***REMOVED***,

      // Checks whether a view is currently present within
      // the region. Returns `true` if there is and `false` if
      // no view is present.
      hasView: function() {
        return !!this.currentView;
  ***REMOVED***,

      // Reset the region by destroying any existing view and
      // clearing out the cached `$el`. The next time a view
      // is shown via this region, the region will re-query the
      // DOM for the region's `el`.
      reset: function() {
        this.empty();

        if (this.$el) {
          this.el = this.$el.selector;
    ***REMOVED***

        delete this.$el;
        return this;
  ***REMOVED***

***REMOVED***,

    // Static Methods
    {

      // Build an instance of a region by passing in a configuration object
      // and a default region class to use if none is specified in the config.
      //
      // The config object should either be a string as a jQuery DOM selector,
      // a Region class directly, or an object literal that specifies a selector,
      // a custom regionClass, and any options to be supplied to the region:
      //
      // ```js
      // {
      //   selector: "#foo",
      //   regionClass: MyCustomRegion,
      //   allowMissingEl: false
      // }
      // ```
      //
      buildRegion: function(regionConfig, DefaultRegionClass) {
        if (_.isString(regionConfig)) {
          return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
    ***REMOVED***

        if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
          return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
    ***REMOVED***

        if (_.isFunction(regionConfig)) {
          return this._buildRegionFromRegionClass(regionConfig);
    ***REMOVED***

        throw new Marionette.Error({
          message: 'Improper region configuration type.',
          url: 'marionette.region.html#region-configuration-types'
    ***REMOVED***);
  ***REMOVED***,

      // Build the region from a string selector like '#foo-region'
      _buildRegionFromSelector: function(selector, DefaultRegionClass) {
        return new DefaultRegionClass({el: selector});
  ***REMOVED***,

      // Build the region from a configuration object
      // ```js
      // { selector: '#foo', regionClass: FooRegion, allowMissingEl: false }
      // ```
      _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
        var RegionClass = regionConfig.regionClass || DefaultRegionClass;
        var options = _.omit(regionConfig, 'selector', 'regionClass');

        if (regionConfig.selector && !options.el) {
          options.el = regionConfig.selector;
    ***REMOVED***

        return new RegionClass(options);
  ***REMOVED***,

      // Build the region directly from a given `RegionClass`
      _buildRegionFromRegionClass: function(RegionClass) {
        return new RegionClass();
  ***REMOVED***
***REMOVED***);

  // Region Manager
  // --------------

  // Manage one or more related `Marionette.Region` objects.
  Marionette.RegionManager = Marionette.Controller.extend({
    constructor: function(options) {
      this._regions = {***REMOVED***
      this.length = 0;

      Marionette.Controller.call(this, options);

      this.addRegions(this.getOption('regions'));
***REMOVED***,

    // Add multiple regions using an object literal or a
    // function that returns an object literal, where
    // each key becomes the region name, and each value is
    // the region definition.
    addRegions: function(regionDefinitions, defaults) {
      regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);

      return _.reduce(regionDefinitions, function(regions, definition, name) {
        if (_.isString(definition)) {
          definition = {selector: definition***REMOVED***
    ***REMOVED***
        if (definition.selector) {
          definition = _.defaults({}, definition, defaults);
    ***REMOVED***

        regions[name] = this.addRegion(name, definition);
        return regions;
  ***REMOVED***, {}, this);
***REMOVED***,

    // Add an individual region to the region manager,
    // and return the region instance
    addRegion: function(name, definition) {
      var region;

      if (definition instanceof Marionette.Region) {
        region = definition;
  ***REMOVED***
        region = Marionette.Region.buildRegion(definition, Marionette.Region);
  ***REMOVED***

      this.triggerMethod('before:add:region', name, region);

      region._parent = this;
      this._store(name, region);

      this.triggerMethod('add:region', name, region);
      return region;
***REMOVED***,

    // Get a region by name
    get: function(name) {
      return this._regions[name];
***REMOVED***,

    // Gets all the regions contained within
    // the `regionManager` instance.
    getRegions: function() {
      return _.clone(this._regions);
***REMOVED***,

    // Remove a region by name
    removeRegion: function(name) {
      var region = this._regions[name];
      this._remove(name, region);

      return region;
***REMOVED***,

    // Empty all regions in the region manager, and
    // remove them
    removeRegions: function() {
      var regions = this.getRegions();
      _.each(this._regions, function(region, name) {
        this._remove(name, region);
  ***REMOVED***, this);

      return regions;
***REMOVED***,

    // Empty all regions in the region manager, but
    // leave them attached
    emptyRegions: function() {
      var regions = this.getRegions();
      _.invoke(regions, 'empty');
      return regions;
***REMOVED***,

    // Destroy all regions and shut down the region
    // manager entirely
    destroy: function() {
      this.removeRegions();
      return Marionette.Controller.prototype.destroy.apply(this, arguments);
***REMOVED***,

    // internal method to store regions
    _store: function(name, region) {
      if (!this._regions[name]) {
        this.length++;
  ***REMOVED***

      this._regions[name] = region;
***REMOVED***,

    // internal method to remove a region
    _remove: function(name, region) {
      this.triggerMethod('before:remove:region', name, region);
      region.empty();
      region.stopListening();

      delete region._parent;
      delete this._regions[name];
      this.length--;
      this.triggerMethod('remove:region', name, region);
***REMOVED***
***REMOVED***);

  Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');


  // Template Cache
  // --------------

  // Manage templates stored in `<script>` blocks,
  // caching them for faster access.
  Marionette.TemplateCache = function(templateId) {
    this.templateId = templateId;
***REMOVED***;

  // TemplateCache object-level methods. Manage the template
  // caches from these method calls instead of creating
  // your own TemplateCache instances
  _.extend(Marionette.TemplateCache, {
    templateCaches: {},

    // Get the specified template by id. Either
    // retrieves the cached version, or loads it
    // from the DOM.
    get: function(templateId, options) {
      var cachedTemplate = this.templateCaches[templateId];

      if (!cachedTemplate) {
        cachedTemplate = new Marionette.TemplateCache(templateId);
        this.templateCaches[templateId] = cachedTemplate;
  ***REMOVED***

      return cachedTemplate.load(options);
***REMOVED***,

    // Clear templates from the cache. If no arguments
    // are specified, clears all templates:
    // `clear()`
    //
    // If arguments are specified, clears each of the
    // specified templates from the cache:
    // `clear("#t1", "#t2", "...")`
    clear: function() {
      var i;
      var args = _.toArray(arguments);
      var length = args.length;

      if (length > 0) {
        for (i = 0; i < length; i++) {
          delete this.templateCaches[args[i]];
    ***REMOVED***
  ***REMOVED***
        this.templateCaches = {***REMOVED***
  ***REMOVED***
***REMOVED***
***REMOVED***);

  // TemplateCache instance methods, allowing each
  // template cache object to manage its own state
  // and know whether or not it has been loaded
  _.extend(Marionette.TemplateCache.prototype, {

    // Internal method to load the template
    load: function(options) {
      // Guard clause to prevent loading this template more than once
      if (this.compiledTemplate) {
        return this.compiledTemplate;
  ***REMOVED***

      // Load the template and compile it
      var template = this.loadTemplate(this.templateId, options);
      this.compiledTemplate = this.compileTemplate(template, options);

      return this.compiledTemplate;
***REMOVED***,

    // Load a template from the DOM, by default. Override
    // this method to provide your own template retrieval
    // For asynchronous loading with AMD/RequireJS, consider
    // using a template-loader plugin as described here:
    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
    loadTemplate: function(templateId, options) {
      var $template = Backbone.$(templateId);

      if (!$template.length) {
        throw new Marionette.Error({
          name: 'NoTemplateError',
          message: 'Could not find template: "' + templateId + '"'
    ***REMOVED***);
  ***REMOVED***
      return $template.html();
***REMOVED***,

    // Pre-compile the template before caching it. Override
    // this method if you do not need to pre-compile a template
    // (JST / RequireJS for example) or if you want to change
    // the template engine used (Handebars, etc).
    compileTemplate: function(rawTemplate, options) {
      return _.template(rawTemplate, options);
***REMOVED***
***REMOVED***);

  // Renderer
  // --------

  // Render a template with data by passing in the template
  // selector and the data to render.
  Marionette.Renderer = {

    // Render a template with data. The `template` parameter is
    // passed to the `TemplateCache` object to retrieve the
    // template function. Override this method to provide your own
    // custom rendering and template handling for all of Marionette.
    render: function(template, data) {
      if (!template) {
        throw new Marionette.Error({
          name: 'TemplateNotFoundError',
          message: 'Cannot render the template since its false, null or undefined.'
    ***REMOVED***);
  ***REMOVED***

      var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);

      return templateFunc(data);
***REMOVED***
***REMOVED***;


  /* jshint maxlen: 114, nonew: false */
  // View
  // ----

  // The core view class that other Marionette views extend from.
  Marionette.View = Backbone.View.extend({
    isDestroyed: false,
    supportsRenderLifecycle: true,
    supportsDestroyLifecycle: true,

    constructor: function(options) {
      this.render = _.bind(this.render, this);

      options = Marionette._getValue(options, this);

      // this exposes view options to the view initializer
      // this is a backfill since backbone removed the assignment
      // of this.options
      // at some point however this may be removed
      this.options = _.extend({}, _.result(this, 'options'), options);

      this._behaviors = Marionette.Behaviors(this);

      Backbone.View.call(this, this.options);

      Marionette.MonitorDOMRefresh(this);
***REMOVED***,

    // Get the template for this view
    // instance. You can set a `template` attribute in the view
    // definition or pass a `template: "whatever"` parameter in
    // to the constructor options.
    getTemplate: function() {
      return this.getOption('template');
***REMOVED***,

    // Serialize a model by returning its attributes. Clones
    // the attributes to allow modification.
    serializeModel: function(model) {
      return model.toJSON.apply(model, _.rest(arguments));
***REMOVED***,

    // Mix in template helper methods. Looks for a
    // `templateHelpers` attribute, which can either be an
    // object literal, or a function that returns an object
    // literal. All methods and attributes from this object
    // are copies to the object passed in.
    mixinTemplateHelpers: function(target) {
      target = target || {***REMOVED***
      var templateHelpers = this.getOption('templateHelpers');
      templateHelpers = Marionette._getValue(templateHelpers, this);
      return _.extend(target, templateHelpers);
***REMOVED***,

    // normalize the keys of passed hash with the views `ui` selectors.
    // `{"@ui.foo": "bar"}`
    normalizeUIKeys: function(hash) {
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
***REMOVED***,

    // normalize the values of passed hash with the views `ui` selectors.
    // `{foo: "@ui.bar"}`
    normalizeUIValues: function(hash, properties) {
      var ui = _.result(this, 'ui');
      var uiBindings = _.result(this, '_uiBindings');
      return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
***REMOVED***,

    // Configure `triggers` to forward DOM events to view
    // events. `triggers: {"click .foo": "do:foo"}`
    configureTriggers: function() {
      if (!this.triggers) { return; }

      // Allow `triggers` to be configured as a function
      var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));

      // Configure the triggers, prevent default
      // action and stop propagation of DOM events
      return _.reduce(triggers, function(events, value, key) {
        events[key] = this._buildViewTrigger(value);
        return events;
  ***REMOVED***, {}, this);
***REMOVED***,

    // Overriding Backbone.View's delegateEvents to handle
    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
    delegateEvents: function(events) {
      this._delegateDOMEvents(events);
      this.bindEntityEvents(this.model, this.getOption('modelEvents'));
      this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));

      _.each(this._behaviors, function(behavior) {
        behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
  ***REMOVED***, this);

      return this;
***REMOVED***,

    // internal method to delegate DOM events and triggers
    _delegateDOMEvents: function(eventsArg) {
      var events = Marionette._getValue(eventsArg || this.events, this);

      // normalize ui keys
      events = this.normalizeUIKeys(events);
      if (_.isUndefined(eventsArg)) {this.events = events;}

      var combinedEvents = {***REMOVED***

      // look up if this view has behavior events
      var behaviorEvents = _.result(this, 'behaviorEvents') || {***REMOVED***
      var triggers = this.configureTriggers();
      var behaviorTriggers = _.result(this, 'behaviorTriggers') || {***REMOVED***

      // behavior events will be overriden by view events and or triggers
      _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);

      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
***REMOVED***,

    // Overriding Backbone.View's undelegateEvents to handle unbinding
    // the `triggers`, `modelEvents`, and `collectionEvents` config
    undelegateEvents: function() {
      Backbone.View.prototype.undelegateEvents.apply(this, arguments);

      this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
      this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));

      _.each(this._behaviors, function(behavior) {
        behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
        behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
  ***REMOVED***, this);

      return this;
***REMOVED***,

    // Internal helper method to verify whether the view hasn't been destroyed
    _ensureViewIsIntact: function() {
      if (this.isDestroyed) {
        throw new Marionette.Error({
          name: 'ViewDestroyedError',
          message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
    ***REMOVED***);
  ***REMOVED***
***REMOVED***,

    // Default `destroy` implementation, for removing a view from the
    // DOM and unbinding it. Regions will call this method
    // for you. You can specify an `onDestroy` method in your view to
    // add custom code that is called after the view is destroyed.
    destroy: function() {
      if (this.isDestroyed) { return this; }

      var args = _.toArray(arguments);

      this.triggerMethod.apply(this, ['before:destroy'].concat(args));

      // mark as destroyed before doing the actual destroy, to
      // prevent infinite loops within "destroy" event handlers
      // that are trying to destroy other views
      this.isDestroyed = true;
      this.triggerMethod.apply(this, ['destroy'].concat(args));

      // unbind UI elements
      this.unbindUIElements();

      this.isRendered = false;

      // remove the view from the DOM
      this.remove();

      // Call destroy on each behavior after
      // destroying the view.
      // This unbinds event listeners
      // that behaviors have registered for.
      _.invoke(this._behaviors, 'destroy', args);

      return this;
***REMOVED***,

    bindUIElements: function() {
      this._bindUIElements();
      _.invoke(this._behaviors, this._bindUIElements);
***REMOVED***,

    // This method binds the elements specified in the "ui" hash inside the view's code with
    // the associated jQuery selectors.
    _bindUIElements: function() {
      if (!this.ui) { return; }

      // store the ui hash in _uiBindings so they can be reset later
      // and so re-rendering the view will be able to find the bindings
      if (!this._uiBindings) {
        this._uiBindings = this.ui;
  ***REMOVED***

      // get the bindings result, as a function or otherwise
      var bindings = _.result(this, '_uiBindings');

      // empty the ui so we don't have anything to start with
      this.ui = {***REMOVED***

      // bind each of the selectors
      _.each(bindings, function(selector, key) {
        this.ui[key] = this.$(selector);
  ***REMOVED***, this);
***REMOVED***,

    // This method unbinds the elements specified in the "ui" hash
    unbindUIElements: function() {
      this._unbindUIElements();
      _.invoke(this._behaviors, this._unbindUIElements);
***REMOVED***,

    _unbindUIElements: function() {
      if (!this.ui || !this._uiBindings) { return; }

      // delete all of the existing ui bindings
      _.each(this.ui, function($el, name) {
        delete this.ui[name];
  ***REMOVED***, this);

      // reset the ui element to the original bindings configuration
      this.ui = this._uiBindings;
      delete this._uiBindings;
***REMOVED***,

    // Internal method to create an event handler for a given `triggerDef` like
    // 'click:foo'
    _buildViewTrigger: function(triggerDef) {

      var options = _.defaults({}, triggerDef, {
        preventDefault: true,
        stopPropagation: true
  ***REMOVED***);

      var eventName = _.isObject(triggerDef) ? options.event : triggerDef;

      return function(e) {
        if (e) {
          if (e.preventDefault && options.preventDefault) {
            e.preventDefault();
      ***REMOVED***

          if (e.stopPropagation && options.stopPropagation) {
            e.stopPropagation();
      ***REMOVED***
    ***REMOVED***

        var args = {
          view: this,
          model: this.model,
          collection: this.collection
  ***REMOVED***

        this.triggerMethod(eventName, args);
***REMOVED***
***REMOVED***,

    setElement: function() {
      var ret = Backbone.View.prototype.setElement.apply(this, arguments);

      // proxy behavior $el to the view's $el.
      // This is needed because a view's $el proxy
      // is not set until after setElement is called.
      _.invoke(this._behaviors, 'proxyViewProperties', this);

      return ret;
***REMOVED***,

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: function() {
      var ret = Marionette._triggerMethod(this, arguments);

      this._triggerEventOnBehaviors(arguments);
      this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));

      return ret;
***REMOVED***,

    _triggerEventOnBehaviors: function(args) {
      var triggerMethod = Marionette._triggerMethod;
      var behaviors = this._behaviors;
      // Use good ol' for as this is a very hot function
      for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
        triggerMethod(behaviors[i], args);
  ***REMOVED***
***REMOVED***,

    _triggerEventOnParentLayout: function(eventName, args) {
      var layoutView = this._parentLayoutView();
      if (!layoutView) {
        return;
  ***REMOVED***

      // invoke triggerMethod on parent view
      var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
      var prefixedEventName = eventPrefix + ':' + eventName;
      var callArgs = [this].concat(args);

      Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);

      // call the parent view's childEvents handler
      var childEvents = Marionette.getOption(layoutView, 'childEvents');

      // since childEvents can be an object or a function use Marionette._getValue
      // to handle the abstaction for us.
      childEvents = Marionette._getValue(childEvents, layoutView);
      var normalizedChildEvents = layoutView.normalizeMethods(childEvents);

      if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
        normalizedChildEvents[eventName].apply(layoutView, callArgs);
  ***REMOVED***
***REMOVED***,

    // This method returns any views that are immediate
    // children of this view
    _getImmediateChildren: function() {
      return [];
***REMOVED***,

    // Returns an array of every nested view within this view
    _getNestedViews: function() {
      var children = this._getImmediateChildren();

      if (!children.length) { return children; }

      return _.reduce(children, function(memo, view) {
        if (!view._getNestedViews) { return memo; }
        return memo.concat(view._getNestedViews());
  ***REMOVED***, children);
***REMOVED***,

    // Walk the _parent tree until we find a layout view (if one exists).
    // Returns the parent layout view hierarchically closest to this view.
    _parentLayoutView: function() {
      var parent  = this._parent;

      while (parent) {
        if (parent instanceof Marionette.LayoutView) {
          return parent;
    ***REMOVED***
        parent = parent._parent;
  ***REMOVED***
***REMOVED***,

    // Imports the "normalizeMethods" to transform hashes of
    // events=>function references/names to a hash of events=>function references
    normalizeMethods: Marionette.normalizeMethods,

    // A handy way to merge passed-in options onto the instance
    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
    bindEntityEvents: Marionette.proxyBindEntityEvents,

    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
***REMOVED***);

  // Item View
  // ---------

  // A single item view implementation that contains code for rendering
  // with underscore.js templates, serializing the view's model or collection,
  // and calling several methods on extended views, such as `onRender`.
  Marionette.ItemView = Marionette.View.extend({

    // Setting up the inheritance chain which allows changes to
    // Marionette.View.prototype.constructor which allows overriding
    constructor: function() {
      Marionette.View.apply(this, arguments);
***REMOVED***,

    // Serialize the model or collection for the view. If a model is
    // found, the view's `serializeModel` is called. If a collection is found,
    // each model in the collection is serialized by calling
    // the view's `serializeCollection` and put into an `items` array in
    // the resulting data. If both are found, defaults to the model.
    // You can override the `serializeData` method in your own view definition,
    // to provide custom serialization for your view's data.
    serializeData: function() {
      if (!this.model && !this.collection) {
        return {***REMOVED***
  ***REMOVED***

      var args = [this.model || this.collection];
      if (arguments.length) {
        args.push.apply(args, arguments);
  ***REMOVED***

      if (this.model) {
        return this.serializeModel.apply(this, args);
  ***REMOVED***
        return {
          items: this.serializeCollection.apply(this, args)
  ***REMOVED***
  ***REMOVED***
***REMOVED***,

    // Serialize a collection by serializing each of its models.
    serializeCollection: function(collection) {
      return collection.toJSON.apply(collection, _.rest(arguments));
***REMOVED***,

    // Render the view, defaulting to underscore.js templates.
    // You can override this in your view definition to provide
    // a very specific rendering for your view. In general, though,
    // you should override the `Marionette.Renderer` object to
    // change how Marionette renders views.
    render: function() {
      this._ensureViewIsIntact();

      this.triggerMethod('before:render', this);

      this._renderTemplate();
      this.isRendered = true;
      this.bindUIElements();

      this.triggerMethod('render', this);

      return this;
***REMOVED***,

    // Internal method to render the template with the serialized data
    // and template helpers via the `Marionette.Renderer` object.
    // Throws an `UndefinedTemplateError` error if the template is
    // any falsely value but literal `false`.
    _renderTemplate: function() {
      var template = this.getTemplate();

      // Allow template-less item views
      if (template === false) {
        return;
  ***REMOVED***

      if (!template) {
        throw new Marionette.Error({
          name: 'UndefinedTemplateError',
          message: 'Cannot render the template since it is null or undefined.'
    ***REMOVED***);
  ***REMOVED***

      // Add in entity data and template helpers
      var data = this.mixinTemplateHelpers(this.serializeData());

      // Render and add to el
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);

      return this;
***REMOVED***,

    // Attaches the content of a given view.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);

      return this;
***REMOVED***
***REMOVED***);

  /* jshint maxstatements: 20, maxcomplexity: 7 */

  // Collection View
  // ---------------

  // A view that iterates over a Backbone.Collection
  // and renders an individual child view for each model.
  Marionette.CollectionView = Marionette.View.extend({

    // used as the prefix for child view events
    // that are forwarded through the collectionview
    childViewEventPrefix: 'childview',

    // flag for maintaining the sorted order of the collection
    sort: true,

    // constructor
    // option to pass `{sort: false}` to prevent the `CollectionView` from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    //
    // option to pass `{comparator: compFunction()}` to allow the `CollectionView`
    // to use a custom sort order for the collection.
    constructor: function(options) {
      this.once('render', this._initialEvents);
      this._initChildViewStorage();

      Marionette.View.apply(this, arguments);

      this.on({
        'before:show':   this._onBeforeShowCalled,
        'show':          this._onShowCalled,
        'before:attach': this._onBeforeAttachCalled,
        'attach':        this._onAttachCalled
  ***REMOVED***);
      this.initRenderBuffer();
***REMOVED***,

    // Instead of inserting elements one by one into the page,
    // it's much more performant to insert elements into a document
    // fragment and then insert that document fragment into the page
    initRenderBuffer: function() {
      this._bufferedChildren = [];
***REMOVED***,

    startBuffering: function() {
      this.initRenderBuffer();
      this.isBuffering = true;
***REMOVED***,

    endBuffering: function() {
      // Only trigger attach if already shown and attached, otherwise Region#show() handles this.
      var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
      var nestedViews;

      this.isBuffering = false;

      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
  ***REMOVED***
      if (canTriggerAttach && this._triggerBeforeAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'before:attach');
  ***REMOVED***

      this.attachBuffer(this, this._createBuffer());

      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getNestedViews();
        this._triggerMethodMany(nestedViews, this, 'attach');
  ***REMOVED***
      if (this._isShown) {
        this._triggerMethodMany(this._bufferedChildren, this, 'show');
  ***REMOVED***
      this.initRenderBuffer();
***REMOVED***,

    _triggerMethodMany: function(targets, source, eventName) {
      var args = _.drop(arguments, 3);

      _.each(targets, function(target) {
        Marionette.triggerMethodOn.apply(target, [target, eventName, target, source].concat(args));
  ***REMOVED***);
***REMOVED***,

    // Configured the initial events that the collection view
    // binds to.
    _initialEvents: function() {
      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this.render);

        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
    ***REMOVED***
  ***REMOVED***
***REMOVED***,

    // Handle a child added to the collection
    _onCollectionAdd: function(child, collection, opts) {
      // `index` is present when adding with `at` since BB 1.2; indexOf fallback for < 1.2
      var index = opts.at !== undefined && (opts.index || collection.indexOf(child));

      // When filtered or when there is no initial index, calculate index.
      if (this.getOption('filter') || index === false) {
        index = _.indexOf(this._filteredSortedModels(index), child);
  ***REMOVED***

      if (this._shouldAddChild(child, index)) {
        this.destroyEmptyView();
        var ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
  ***REMOVED***
***REMOVED***,

    // get the child view by model it holds, and remove it
    _onCollectionRemove: function(model) {
      var view = this.children.findByModel(model);
      this.removeChildView(view);
      this.checkEmpty();
***REMOVED***,

    _onBeforeShowCalled: function() {
      // Reset attach event flags at the top of the Region#show() event lifecycle; if the Region's
      // show() options permit onBeforeAttach/onAttach events, these flags will be set true again.
      this._triggerBeforeAttach = this._triggerAttach = false;
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'before:show', childView);
  ***REMOVED***);
***REMOVED***,

    _onShowCalled: function() {
      this.children.each(function(childView) {
        Marionette.triggerMethodOn(childView, 'show', childView);
  ***REMOVED***);
***REMOVED***,

    // If during Region#show() onBeforeAttach was fired, continue firing it for child views
    _onBeforeAttachCalled: function() {
      this._triggerBeforeAttach = true;
***REMOVED***,

    // If during Region#show() onAttach was fired, continue firing it for child views
    _onAttachCalled: function() {
      this._triggerAttach = true;
***REMOVED***,

    // Render children views. Override this method to
    // provide your own implementation of a render function for
    // the collection view.
    render: function() {
      this._ensureViewIsIntact();
      this.triggerMethod('before:render', this);
      this._renderChildren();
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
***REMOVED***,

    // Reorder DOM after sorting. When your element's rendering
    // do not use their index, you can pass reorderOnSort: true
    // to only reorder the DOM after a sort instead of rendering
    // all the collectionView
    reorder: function() {
      var children = this.children;
      var models = this._filteredSortedModels();
      var anyModelsAdded = _.some(models, function(model) {
        return !children.findByModel(model);
  ***REMOVED***);

      // If there are any new models added due to filtering
      // We need to add child views
      // So render as normal
      if (anyModelsAdded) {
        this.render();
  ***REMOVED***
        // get the DOM nodes in the same order as the models
        var elsToReorder = _.map(models, function(model, index) {
          var view = children.findByModel(model);
          view._index = index;
          return view.el;
    ***REMOVED***);

        // find the views that were children before but arent in this new ordering
        var filteredOutViews = children.filter(function(view) {
          return !_.contains(elsToReorder, view.el);
    ***REMOVED***);

        this.triggerMethod('before:reorder');

        // since append moves elements that are already in the DOM,
        // appending the elements will effectively reorder them
        this._appendReorderedChildren(elsToReorder);

        // remove any views that have been filtered out
        _.each(filteredOutViews, this.removeChildView, this);
        this.checkEmpty();

        this.triggerMethod('reorder');
  ***REMOVED***
***REMOVED***,

    // Render view after sorting. Override this method to
    // change how the view renders after a `sort` on the collection.
    // An example of this would be to only `renderChildren` in a `CompositeView`
    // rather than the full view.
    resortView: function() {
      if (Marionette.getOption(this, 'reorderOnSort')) {
        this.reorder();
  ***REMOVED***
        this.render();
  ***REMOVED***
***REMOVED***,

    // Internal method. This checks for any changes in the order of the collection.
    // If the index of any view doesn't match, it will render.
    _sortViews: function() {
      var models = this._filteredSortedModels();

      // check for any changes in sort order of views
      var orderChanged = _.find(models, function(item, index) {
        var view = this.children.findByModel(item);
        return !view || view._index !== index;
  ***REMOVED***, this);

      if (orderChanged) {
        this.resortView();
  ***REMOVED***
***REMOVED***,

    // Internal reference to what index a `emptyView` is.
    _emptyViewIndex: -1,

    // Internal method. Separated so that CompositeView can append to the childViewContainer
    // if necessary
    _appendReorderedChildren: function(children) {
      this.$el.append(children);
***REMOVED***,

    // Internal method. Separated so that CompositeView can have
    // more control over events being triggered, around the rendering
    // process
    _renderChildren: function() {
      this.destroyEmptyView();
      this.destroyChildren({checkEmpty: false});

      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
  ***REMOVED***
        this.triggerMethod('before:render:collection', this);
        this.startBuffering();
        this.showCollection();
        this.endBuffering();
        this.triggerMethod('render:collection', this);

        // If we have shown children and none have passed the filter, show the empty view
        if (this.children.isEmpty() && this.getOption('filter')) {
          this.showEmptyView();
    ***REMOVED***
  ***REMOVED***
***REMOVED***,

    // Internal method to loop through collection and show each child view.
    showCollection: function() {
      var ChildView;

      var models = this._filteredSortedModels();

      _.each(models, function(child, index) {
        ChildView = this.getChildView(child);
        this.addChild(child, ChildView, index);
  ***REMOVED***, this);
***REMOVED***,

    // Allow the collection to be sorted by a custom view comparator
    _filteredSortedModels: function(addedAt) {
      var viewComparator = this.getViewComparator();
      var models = this.collection.models;
      addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);

      if (viewComparator) {
        var addedModel;
        // Preserve `at` location, even for a sorted view
        if (addedAt) {
          addedModel = models[addedAt];
          models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
    ***REMOVED***
        models = this._sortModelsBy(models, viewComparator);
        if (addedModel) {
          models.splice(addedAt, 0, addedModel);
    ***REMOVED***
  ***REMOVED***

      // Filter after sorting in case the filter uses the index
      if (this.getOption('filter')) {
        models = _.filter(models, function(model, index) {
          return this._shouldAddChild(model, index);
    ***REMOVED***, this);
  ***REMOVED***

      return models;
***REMOVED***,

    _sortModelsBy: function(models, comparator) {
      if (typeof comparator === 'string') {
        return _.sortBy(models, function(model) {
          return model.get(comparator);
    ***REMOVED***, this);
  ***REMOVED*** else if (comparator.length === 1) {
        return _.sortBy(models, comparator, this);
  ***REMOVED***
        return models.sort(_.bind(comparator, this));
  ***REMOVED***
***REMOVED***,

    // Internal method to show an empty view in place of
    // a collection of child views, when the collection is empty
    showEmptyView: function() {
      var EmptyView = this.getEmptyView();

      if (EmptyView && !this._showingEmptyView) {
        this.triggerMethod('before:render:empty');

        this._showingEmptyView = true;
        var model = new Backbone.Model();
        this.addEmptyView(model, EmptyView);

        this.triggerMethod('render:empty');
  ***REMOVED***
***REMOVED***,

    // Internal method to destroy an existing emptyView instance
    // if one exists. Called when a collection view has been
    // rendered empty, and then a child is added to the collection.
    destroyEmptyView: function() {
      if (this._showingEmptyView) {
        this.triggerMethod('before:remove:empty');

        this.destroyChildren();
        delete this._showingEmptyView;

        this.triggerMethod('remove:empty');
  ***REMOVED***
***REMOVED***,

    // Retrieve the empty view class
    getEmptyView: function() {
      return this.getOption('emptyView');
***REMOVED***,

    // Render and show the emptyView. Similar to addChild method
    // but "add:child" events are not fired, and the event from
    // emptyView are not forwarded
    addEmptyView: function(child, EmptyView) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;

      // get the emptyViewOptions, falling back to childViewOptions
      var emptyViewOptions = this.getOption('emptyViewOptions') ||
        this.getOption('childViewOptions');

      if (_.isFunction(emptyViewOptions)) {
        emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
  ***REMOVED***

      // build the empty view
      var view = this.buildChildView(child, EmptyView, emptyViewOptions);

      view._parent = this;

      // Proxy emptyView events
      this.proxyChildEvents(view);

      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown) {
          Marionette.triggerMethodOn(view, 'before:show', view);
    ***REMOVED***

        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
    ***REMOVED***
  ***REMOVED***, this);

      // Store the `emptyView` like a `childView` so we can properly remove and/or close it later
      this.children.add(view);
      this.renderChildView(view, this._emptyViewIndex);

      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
  ***REMOVED***
      // call the 'show' method if the collection view has already been shown
      if (this._isShown) {
        Marionette.triggerMethodOn(view, 'show', view);
  ***REMOVED***
***REMOVED***,

    // Retrieve the `childView` class, either from `this.options.childView`
    // or from the `childView` in the object definition. The "options"
    // takes precedence.
    // This method receives the model that will be passed to the instance
    // created from this `childView`. Overriding methods may use the child
    // to determine what `childView` class to return.
    getChildView: function(child) {
      var childView = this.getOption('childView');

      if (!childView) {
        throw new Marionette.Error({
          name: 'NoChildViewError',
          message: 'A "childView" must be specified'
    ***REMOVED***);
  ***REMOVED***

      return childView;
***REMOVED***,

    // Render the child's view and add it to the
    // HTML for the collection view at a given index.
    // This will also update the indices of later views in the collection
    // in order to keep the children in sync with the collection.
    addChild: function(child, ChildView, index) {
      var childViewOptions = this.getOption('childViewOptions');
      childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);

      var view = this.buildChildView(child, ChildView, childViewOptions);

      // increment indices of views after this one
      this._updateIndices(view, true, index);

      this.triggerMethod('before:add:child', view);
      this._addChildView(view, index);
      this.triggerMethod('add:child', view);

      view._parent = this;

      return view;
***REMOVED***,

    // Internal method. This decrements or increments the indices of views after the
    // added/removed view to keep in sync with the collection.
    _updateIndices: function(view, increment, index) {
      if (!this.getOption('sort')) {
        return;
  ***REMOVED***

      if (increment) {
        // assign the index to the view
        view._index = index;
  ***REMOVED***

      // update the indexes of views after this one
      this.children.each(function(laterView) {
        if (laterView._index >= view._index) {
          laterView._index += increment ? 1 : -1;
    ***REMOVED***
  ***REMOVED***);
***REMOVED***,

    // Internal Method. Add the view to children and render it at
    // the given index.
    _addChildView: function(view, index) {
      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
      // Region#show() handles this.
      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
      var nestedViews;

      // set up the child view event forwarding
      this.proxyChildEvents(view);

      view.once('render', function() {
        // trigger the 'before:show' event on `view` if the collection view has already been shown
        if (this._isShown && !this.isBuffering) {
          Marionette.triggerMethodOn(view, 'before:show', view);
    ***REMOVED***

        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
        // to public method `renderChildView()`.
        if (canTriggerAttach && this._triggerBeforeAttach) {
          nestedViews = this._getViewAndNested(view);
          this._triggerMethodMany(nestedViews, this, 'before:attach');
    ***REMOVED***
  ***REMOVED***, this);

      // Store the child view itself so we can properly remove and/or destroy it later
      this.children.add(view);
      this.renderChildView(view, index);

      // Trigger `attach`
      if (canTriggerAttach && this._triggerAttach) {
        nestedViews = this._getViewAndNested(view);
        this._triggerMethodMany(nestedViews, this, 'attach');
  ***REMOVED***
      // Trigger `show`
      if (this._isShown && !this.isBuffering) {
        Marionette.triggerMethodOn(view, 'show', view);
  ***REMOVED***
***REMOVED***,

    // render the child view
    renderChildView: function(view, index) {
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'before:render', view);
  ***REMOVED***
      view.render();
      if (!view.supportsRenderLifecycle) {
        Marionette.triggerMethodOn(view, 'render', view);
  ***REMOVED***
      this.attachHtml(this, view, index);
      return view;
***REMOVED***,

    // Build a `childView` for a model in the collection.
    buildChildView: function(child, ChildViewClass, childViewOptions) {
      var options = _.extend({model: child}, childViewOptions);
      var childView = new ChildViewClass(options);
      Marionette.MonitorDOMRefresh(childView);
      return childView;
***REMOVED***,

    // Remove the child view and destroy it.
    // This function also updates the indices of
    // later views in the collection in order to keep
    // the children in sync with the collection.
    removeChildView: function(view) {
      if (!view) { return view; }

      this.triggerMethod('before:remove:child', view);

      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'before:destroy', view);
  ***REMOVED***
      // call 'destroy' or 'remove', depending on which is found
      if (view.destroy) {
        view.destroy();
  ***REMOVED***
        view.remove();
  ***REMOVED***
      if (!view.supportsDestroyLifecycle) {
        Marionette.triggerMethodOn(view, 'destroy', view);
  ***REMOVED***

      delete view._parent;
      this.stopListening(view);
      this.children.remove(view);
      this.triggerMethod('remove:child', view);

      // decrement the index of views after this one
      this._updateIndices(view, false);

      return view;
***REMOVED***,

    // check if the collection is empty
    isEmpty: function() {
      return !this.collection || this.collection.length === 0;
***REMOVED***,

    // If empty, show the empty view
    checkEmpty: function() {
      if (this.isEmpty(this.collection)) {
        this.showEmptyView();
  ***REMOVED***
***REMOVED***,

    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(collectionView, buffer) {
      collectionView.$el.append(buffer);
***REMOVED***,

    // Create a fragment buffer from the currently buffered children
    _createBuffer: function() {
      var elBuffer = document.createDocumentFragment();
      _.each(this._bufferedChildren, function(b) {
        elBuffer.appendChild(b.el);
  ***REMOVED***);
      return elBuffer;
***REMOVED***,

    // Append the HTML to the collection's `el`.
    // Override this method to do something other
    // than `.append`.
    attachHtml: function(collectionView, childView, index) {
      if (collectionView.isBuffering) {
        // buffering happens on reset events and initial renders
        // in order to reduce the number of inserts into the
        // document, which are expensive.
        collectionView._bufferedChildren.splice(index, 0, childView);
  ***REMOVED***
        // If we've already rendered the main collection, append
        // the new child into the correct order if we need to. Otherwise
        // append to the end.
        if (!collectionView._insertBefore(childView, index)) {
          collectionView._insertAfter(childView);
    ***REMOVED***
  ***REMOVED***
***REMOVED***,

    // Internal method. Check whether we need to insert the view into
    // the correct position.
    _insertBefore: function(childView, index) {
      var currentView;
      var findPosition = this.getOption('sort') && (index < this.children.length - 1);
      if (findPosition) {
        // Find the view after this one
        currentView = this.children.find(function(view) {
          return view._index === index + 1;
    ***REMOVED***);
  ***REMOVED***

      if (currentView) {
        currentView.$el.before(childView.el);
        return true;
  ***REMOVED***

      return false;
***REMOVED***,

    // Internal method. Append a view to the end of the $el
    _insertAfter: function(childView) {
      this.$el.append(childView.el);
***REMOVED***,

    // Internal method to set up the `children` object for
    // storing all of the child views
    _initChildViewStorage: function() {
      this.children = new Backbone.ChildViewContainer();
***REMOVED***,

    // Handle cleanup and other destroying needs for the collection of views
    destroy: function() {
      if (this.isDestroyed) { return this; }

      this.triggerMethod('before:destroy:collection');
      this.destroyChildren({checkEmpty: false});
      this.triggerMethod('destroy:collection');

      return Marionette.View.prototype.destroy.apply(this, arguments);
***REMOVED***,

    // Destroy the child views that this collection view
    // is holding on to, if any
    destroyChildren: function(options) {
      var destroyOptions = options || {***REMOVED***
      var shouldCheckEmpty = true;
      var childViews = this.children.map(_.identity);

      if (!_.isUndefined(destroyOptions.checkEmpty)) {
        shouldCheckEmpty = destroyOptions.checkEmpty;
  ***REMOVED***

      this.children.each(this.removeChildView, this);

      if (shouldCheckEmpty) {
        this.checkEmpty();
  ***REMOVED***
      return childViews;
***REMOVED***,

    // Return true if the given child should be shown
    // Return false otherwise
    // The filter will be passed (child, index, collection)
    // Where
    //  'child' is the given model
    //  'index' is the index of that model in the collection
    //  'collection' is the collection referenced by this CollectionView
    _shouldAddChild: function(child, index) {
      var filter = this.getOption('filter');
      return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
***REMOVED***,

    // Set up the child view event forwarding. Uses a "childview:"
    // prefix in front of all forwarded events.
    proxyChildEvents: function(view) {
      var prefix = this.getOption('childViewEventPrefix');

      // Forward all child view events through the parent,
      // prepending "childview:" to the event name
      this.listenTo(view, 'all', function() {
        var args = _.toArray(arguments);
        var rootEvent = args[0];
        var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));

        args[0] = prefix + ':' + rootEvent;
        args.splice(1, 0, view);

        // call collectionView childEvent if defined
        if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
          childEvents[rootEvent].apply(this, args.slice(1));
    ***REMOVED***

        this.triggerMethod.apply(this, args);
  ***REMOVED***);
***REMOVED***,

    _getImmediateChildren: function() {
      return _.values(this.children._views);
***REMOVED***,

    _getViewAndNested: function(view) {
      // This will not fail on Backbone.View which does not have #_getNestedViews.
      return [view].concat(_.result(view, '_getNestedViews') || []);
***REMOVED***,

    getViewComparator: function() {
      return this.getOption('viewComparator');
***REMOVED***
***REMOVED***);

  /* jshint maxstatements: 17, maxlen: 117 */

  // Composite View
  // --------------

  // Used for rendering a branch-leaf, hierarchical structure.
  // Extends directly from CollectionView and also renders an
  // a child view as `modelView`, for the top leaf
  Marionette.CompositeView = Marionette.CollectionView.extend({

    // Setting up the inheritance chain which allows changes to
    // Marionette.CollectionView.prototype.constructor which allows overriding
    // option to pass '{sort: false}' to prevent the CompositeView from
    // maintaining the sorted order of the collection.
    // This will fallback onto appending childView's to the end.
    constructor: function() {
      Marionette.CollectionView.apply(this, arguments);
***REMOVED***,

    // Configured the initial events that the composite view
    // binds to. Override this method to prevent the initial
    // events, or to add your own initial events.
    _initialEvents: function() {

      // Bind only after composite view is rendered to avoid adding child views
      // to nonexistent childViewContainer

      if (this.collection) {
        this.listenTo(this.collection, 'add', this._onCollectionAdd);
        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
        this.listenTo(this.collection, 'reset', this._renderChildren);

        if (this.getOption('sort')) {
          this.listenTo(this.collection, 'sort', this._sortViews);
    ***REMOVED***
  ***REMOVED***
***REMOVED***,

    // Retrieve the `childView` to be used when rendering each of
    // the items in the collection. The default is to return
    // `this.childView` or Marionette.CompositeView if no `childView`
    // has been defined
    getChildView: function(child) {
      var childView = this.getOption('childView') || this.constructor;

      return childView;
***REMOVED***,

    // Serialize the model for the view.
    // You can override the `serializeData` method in your own view
    // definition, to provide custom serialization for your view's data.
    serializeData: function() {
      var data = {***REMOVED***

      if (this.model) {
        data = _.partial(this.serializeModel, this.model).apply(this, arguments);
  ***REMOVED***

      return data;
***REMOVED***,

    // Renders the model and the collection.
    render: function() {
      this._ensureViewIsIntact();
      this._isRendering = true;
      this.resetChildViewContainer();

      this.triggerMethod('before:render', this);

      this._renderTemplate();
      this._renderChildren();

      this._isRendering = false;
      this.isRendered = true;
      this.triggerMethod('render', this);
      return this;
***REMOVED***,

    _renderChildren: function() {
      if (this.isRendered || this._isRendering) {
        Marionette.CollectionView.prototype._renderChildren.call(this);
  ***REMOVED***
***REMOVED***,

    // Render the root template that the children
    // views are appended to
    _renderTemplate: function() {
      var data = {***REMOVED***
      data = this.serializeData();
      data = this.mixinTemplateHelpers(data);

      this.triggerMethod('before:render:template');

      var template = this.getTemplate();
      var html = Marionette.Renderer.render(template, data, this);
      this.attachElContent(html);

      // the ui bindings is done here and not at the end of render since they
      // will not be available until after the model is rendered, but should be
      // available before the collection is rendered.
      this.bindUIElements();
      this.triggerMethod('render:template');
***REMOVED***,

    // Attaches the content of the root.
    // This method can be overridden to optimize rendering,
    // or to render in a non standard way.
    //
    // For example, using `innerHTML` instead of `$el.html`
    //
    // ```js
    // attachElContent: function(html) {
    //   this.el.innerHTML = html;
    //   return this;
    // }
    // ```
    attachElContent: function(html) {
      this.$el.html(html);

      return this;
***REMOVED***,

    // You might need to override this if you've overridden attachHtml
    attachBuffer: function(compositeView, buffer) {
      var $container = this.getChildViewContainer(compositeView);
      $container.append(buffer);
***REMOVED***,

    // Internal method. Append a view to the end of the $el.
    // Overidden from CollectionView to ensure view is appended to
    // childViewContainer
    _insertAfter: function(childView) {
      var $container = this.getChildViewContainer(this, childView);
      $container.append(childView.el);
***REMOVED***,

    // Internal method. Append reordered childView'.
    // Overidden from CollectionView to ensure reordered views
    // are appended to childViewContainer
    _appendReorderedChildren: function(children) {
      var $container = this.getChildViewContainer(this);
      $container.append(children);
***REMOVED***,

    // Internal method to ensure an `$childViewContainer` exists, for the
    // `attachHtml` method to use.
    getChildViewContainer: function(containerView, childView) {
      if (!!containerView.$childViewContainer) {
        return containerView.$childViewContainer;
  ***REMOVED***

      var container;
      var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
      if (childViewContainer) {

        var selector = Marionette._getValue(childViewContainer, containerView);

        if (selector.charAt(0) === '@' && containerView.ui) {
          container = containerView.ui[selector.substr(4)];
    ***REMOVED***
          container = containerView.$(selector);
    ***REMOVED***

        if (container.length <= 0) {
          throw new Marionette.Error({
            name: 'ChildViewContainerMissingError',
            message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
      ***REMOVED***);
    ***REMOVED***

  ***REMOVED***
        container = containerView.$el;
  ***REMOVED***

      containerView.$childViewContainer = container;
      return container;
***REMOVED***,

    // Internal method to reset the `$childViewContainer` on render
    resetChildViewContainer: function() {
      if (this.$childViewContainer) {
        this.$childViewContainer = undefined;
  ***REMOVED***
***REMOVED***
***REMOVED***);

  // Layout View
  // -----------

  // Used for managing application layoutViews, nested layoutViews and
  // multiple regions within an application or sub-application.
  //
  // A specialized view class that renders an area of HTML and then
  // attaches `Region` instances to the specified `regions`.
  // Used for composite view management and sub-application areas.
  Marionette.LayoutView = Marionette.ItemView.extend({
    regionClass: Marionette.Region,

    options: {
      destroyImmediate: false
***REMOVED***,

    // used as the prefix for child view events
    // that are forwarded through the layoutview
    childViewEventPrefix: 'childview',

    // Ensure the regions are available when the `initialize` method
    // is called.
    constructor: function(options) {
      options = options || {***REMOVED***

      this._firstRender = true;
      this._initializeRegions(options);

      Marionette.ItemView.call(this, options);
***REMOVED***,

    // LayoutView's render will use the existing region objects the
    // first time it is called. Subsequent calls will destroy the
    // views that the regions are showing and then reset the `el`
    // for the regions to the newly rendered DOM elements.
    render: function() {
      this._ensureViewIsIntact();

      if (this._firstRender) {
        // if this is the first render, don't do anything to
        // reset the regions
        this._firstRender = false;
  ***REMOVED***
        // If this is not the first render call, then we need to
        // re-initialize the `el` for each region
        this._reInitializeRegions();
  ***REMOVED***

      return Marionette.ItemView.prototype.render.apply(this, arguments);
***REMOVED***,

    // Handle destroying regions, and then destroy the view itself.
    destroy: function() {
      if (this.isDestroyed) { return this; }
      // #2134: remove parent element before destroying the child views, so
      // removing the child views doesn't retrigger repaints
      if (this.getOption('destroyImmediate') === true) {
        this.$el.remove();
  ***REMOVED***
      this.regionManager.destroy();
      return Marionette.ItemView.prototype.destroy.apply(this, arguments);
***REMOVED***,

    showChildView: function(regionName, view, options) {
      var region = this.getRegion(regionName);
      return region.show.apply(region, _.rest(arguments));
***REMOVED***,

    getChildView: function(regionName) {
      return this.getRegion(regionName).currentView;
***REMOVED***,

    // Add a single region, by name, to the layoutView
    addRegion: function(name, definition) {
      var regions = {***REMOVED***
      regions[name] = definition;
      return this._buildRegions(regions)[name];
***REMOVED***,

    // Add multiple regions as a {name: definition, name2: def2} object literal
    addRegions: function(regions) {
      this.regions = _.extend({}, this.regions, regions);
      return this._buildRegions(regions);
***REMOVED***,

    // Remove a single region from the LayoutView, by name
    removeRegion: function(name) {
      delete this.regions[name];
      return this.regionManager.removeRegion(name);
***REMOVED***,

    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this.regionManager.get(region);
***REMOVED***,

    // Get all regions
    getRegions: function() {
      return this.regionManager.getRegions();
***REMOVED***,

    // internal method to build regions
    _buildRegions: function(regions) {
      var defaults = {
        regionClass: this.getOption('regionClass'),
        parentEl: _.partial(_.result, this, 'el')
***REMOVED***

      return this.regionManager.addRegions(regions, defaults);
***REMOVED***,

    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on this layoutView.
    _initializeRegions: function(options) {
      var regions;
      this._initRegionManager();

      regions = Marionette._getValue(this.regions, this, [options]) || {***REMOVED***

      // Enable users to define `regions` as instance options.
      var regionOptions = this.getOption.call(options, 'regions');

      // enable region options to be a function
      regionOptions = Marionette._getValue(regionOptions, this, [options]);

      _.extend(regions, regionOptions);

      // Normalize region selectors hash to allow
      // a user to use the @ui. syntax.
      regions = this.normalizeUIValues(regions, ['selector', 'el']);

      this.addRegions(regions);
***REMOVED***,

    // Internal method to re-initialize all of the regions by updating the `el` that
    // they point to
    _reInitializeRegions: function() {
      this.regionManager.invoke('reset');
***REMOVED***,

    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
***REMOVED***,

    // Internal method to initialize the region manager
    // and all regions in it
    _initRegionManager: function() {
      this.regionManager = this.getRegionManager();
      this.regionManager._parent = this;

      this.listenTo(this.regionManager, 'before:add:region', function(name) {
        this.triggerMethod('before:add:region', name);
  ***REMOVED***);

      this.listenTo(this.regionManager, 'add:region', function(name, region) {
        this[name] = region;
        this.triggerMethod('add:region', name, region);
  ***REMOVED***);

      this.listenTo(this.regionManager, 'before:remove:region', function(name) {
        this.triggerMethod('before:remove:region', name);
  ***REMOVED***);

      this.listenTo(this.regionManager, 'remove:region', function(name, region) {
        delete this[name];
        this.triggerMethod('remove:region', name, region);
  ***REMOVED***);
***REMOVED***,

    _getImmediateChildren: function() {
      return _.chain(this.regionManager.getRegions())
        .pluck('currentView')
        .compact()
        .value();
***REMOVED***
***REMOVED***);


  // Behavior
  // --------

  // A Behavior is an isolated set of DOM /
  // user interactions that can be mixed into any View.
  // Behaviors allow you to blackbox View specific interactions
  // into portable logical chunks, keeping your views simple and your code DRY.

  Marionette.Behavior = Marionette.Object.extend({
    constructor: function(options, view) {
      // Setup reference to the view.
      // this comes in handle when a behavior
      // wants to directly talk up the chain
      // to the view.
      this.view = view;
      this.defaults = _.result(this, 'defaults') || {***REMOVED***
      this.options  = _.extend({}, this.defaults, options);
      // Construct an internal UI hash using
      // the views UI hash and then the behaviors UI hash.
      // This allows the user to use UI hash elements
      // defined in the parent view as well as those
      // defined in the given behavior.
      this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));

      Marionette.Object.apply(this, arguments);
***REMOVED***,

    // proxy behavior $ method to the view
    // this is useful for doing jquery DOM lookups
    // scoped to behaviors view.
    $: function() {
      return this.view.$.apply(this.view, arguments);
***REMOVED***,

    // Stops the behavior from listening to events.
    // Overrides Object#destroy to prevent additional events from being triggered.
    destroy: function() {
      this.stopListening();

      return this;
***REMOVED***,

    proxyViewProperties: function(view) {
      this.$el = view.$el;
      this.el = view.el;
***REMOVED***
***REMOVED***);

  /* jshint maxlen: 143 */
  // Behaviors
  // ---------

  // Behaviors is a utility class that takes care of
  // gluing your behavior instances to their given View.
  // The most important part of this class is that you
  // **MUST** override the class level behaviorsLookup
  // method for things to work properly.

  Marionette.Behaviors = (function(Marionette, _) {
    // Borrow event splitter from Backbone
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    function Behaviors(view, behaviors) {

      if (!_.isObject(view.behaviors)) {
        return {***REMOVED***
  ***REMOVED***

      // Behaviors defined on a view can be a flat object literal
      // or it can be a function that returns an object.
      behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));

      // Wraps several of the view's methods
      // calling the methods first on each behavior
      // and then eventually calling the method on the view.
      Behaviors.wrap(view, behaviors, _.keys(methods));
      return behaviors;
***REMOVED***

    var methods = {
      behaviorTriggers: function(behaviorTriggers, behaviors) {
        var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
        return triggerBuilder.buildBehaviorTriggers();
  ***REMOVED***,

      behaviorEvents: function(behaviorEvents, behaviors) {
        var _behaviorsEvents = {***REMOVED***

        _.each(behaviors, function(b, i) {
          var _events = {***REMOVED***
          var behaviorEvents = _.clone(_.result(b, 'events')) || {***REMOVED***

          // Normalize behavior events hash to allow
          // a user to use the @ui. syntax.
          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));

          var j = 0;
          _.each(behaviorEvents, function(behaviour, key) {
            var match     = key.match(delegateEventSplitter);

            // Set event name to be namespaced using the view cid,
            // the behavior index, and the behavior event index
            // to generate a non colliding event namespace
            // http://api.jquery.com/event.namespace/
            var eventName = match[1] + '.' + [this.cid, i, j++, ' '].join('');
            var selector  = match[2];

            var eventKey  = eventName + selector;
            var handler   = _.isFunction(behaviour) ? behaviour : b[behaviour];

            _events[eventKey] = _.bind(handler, b);
      ***REMOVED***, this);

          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
    ***REMOVED***, this);

        return _behaviorsEvents;
  ***REMOVED***
***REMOVED***;

    _.extend(Behaviors, {

      // Placeholder method to be extended by the user.
      // The method should define the object that stores the behaviors.
      // i.e.
      //
      // ```js
      // Marionette.Behaviors.behaviorsLookup: function() {
      //   return App.Behaviors
      // }
      // ```
      behaviorsLookup: function() {
        throw new Marionette.Error({
          message: 'You must define where your behaviors are stored.',
          url: 'marionette.behaviors.html#behaviorslookup'
    ***REMOVED***);
  ***REMOVED***,

      // Takes care of getting the behavior class
      // given options and a key.
      // If a user passes in options.behaviorClass
      // default to using that. Otherwise delegate
      // the lookup to the users `behaviorsLookup` implementation.
      getBehaviorClass: function(options, key) {
        if (options.behaviorClass) {
          return options.behaviorClass;
    ***REMOVED***

        // Get behavior class can be either a flat object or a method
        return Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key];
  ***REMOVED***,

      // Iterate over the behaviors object, for each behavior
      // instantiate it and get its grouped behaviors.
      parseBehaviors: function(view, behaviors) {
        return _.chain(behaviors).map(function(options, key) {
          var BehaviorClass = Behaviors.getBehaviorClass(options, key);

          var behavior = new BehaviorClass(options, view);
          var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));

          return [behavior].concat(nestedBehaviors);
    ***REMOVED***).flatten().value();
  ***REMOVED***,

      // Wrap view internal methods so that they delegate to behaviors. For example,
      // `onDestroy` should trigger destroy on all of the behaviors and then destroy itself.
      // i.e.
      //
      // `view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);`
      wrap: function(view, behaviors, methodNames) {
        _.each(methodNames, function(methodName) {
          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
    ***REMOVED***);
  ***REMOVED***
***REMOVED***);

    // Class to build handlers for `triggers` on behaviors
    // for views
    function BehaviorTriggersBuilder(view, behaviors) {
      this._view      = view;
      this._behaviors = behaviors;
      this._triggers  = {***REMOVED***
***REMOVED***

    _.extend(BehaviorTriggersBuilder.prototype, {
      // Main method to build the triggers hash with event keys and handlers
      buildBehaviorTriggers: function() {
        _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
        return this._triggers;
  ***REMOVED***,

      // Internal method to build all trigger handlers for a given behavior
      _buildTriggerHandlersForBehavior: function(behavior, i) {
        var triggersHash = _.clone(_.result(behavior, 'triggers')) || {***REMOVED***

        triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));

        _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
  ***REMOVED***,

      // Internal method to create and assign the trigger handler for a given
      // behavior
      _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
        // Unique identifier for the `this._triggers` hash
        var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
          return triggerName + '.' + 'behaviortriggers' + i;
    ***REMOVED***);

        this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
  ***REMOVED***
***REMOVED***);

    function getBehaviorsUI(behavior) {
      return behavior._uiBindings || behavior.ui;
***REMOVED***

    return Behaviors;

***REMOVED***)(Marionette, _);


  // App Router
  // ----------

  // Reduce the boilerplate code of handling route events
  // and then calling a single method on another object.
  // Have your routers configured to call the method on
  // your object, directly.
  //
  // Configure an AppRouter with `appRoutes`.
  //
  // App routers can only take one `controller` object.
  // It is recommended that you divide your controller
  // objects in to smaller pieces of related functionality
  // and have multiple routers / controllers, instead of
  // just one giant router and controller.
  //
  // You can also add standard routes to an AppRouter.

  Marionette.AppRouter = Backbone.Router.extend({

    constructor: function(options) {
      this.options = options || {***REMOVED***

      Backbone.Router.apply(this, arguments);

      var appRoutes = this.getOption('appRoutes');
      var controller = this._getController();
      this.processAppRoutes(controller, appRoutes);
      this.on('route', this._processOnRoute, this);
***REMOVED***,

    // Similar to route method on a Backbone Router but
    // method is called on the controller
    appRoute: function(route, methodName) {
      var controller = this._getController();
      this._addAppRoute(controller, route, methodName);
***REMOVED***,

    // process the route event and trigger the onRoute
    // method call, if it exists
    _processOnRoute: function(routeName, routeArgs) {
      // make sure an onRoute before trying to call it
      if (_.isFunction(this.onRoute)) {
        // find the path that matches the current route
        var routePath = _.invert(this.getOption('appRoutes'))[routeName];
        this.onRoute(routeName, routePath, routeArgs);
  ***REMOVED***
***REMOVED***,

    // Internal method to process the `appRoutes` for the
    // router, and turn them in to routes that trigger the
    // specified method on the specified `controller`.
    processAppRoutes: function(controller, appRoutes) {
      if (!appRoutes) { return; }

      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes

      _.each(routeNames, function(route) {
        this._addAppRoute(controller, route, appRoutes[route]);
  ***REMOVED***, this);
***REMOVED***,

    _getController: function() {
      return this.getOption('controller');
***REMOVED***,

    _addAppRoute: function(controller, route, methodName) {
      var method = controller[methodName];

      if (!method) {
        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
  ***REMOVED***

      this.route(route, methodName, _.bind(method, controller));
***REMOVED***,

    mergeOptions: Marionette.mergeOptions,

    // Proxy `getOption` to enable getting options from this or this.options by name.
    getOption: Marionette.proxyGetOption,

    triggerMethod: Marionette.triggerMethod,

    bindEntityEvents: Marionette.proxyBindEntityEvents,

    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
***REMOVED***);

  // Application
  // -----------

  // Contain and manage the composite application as a whole.
  // Stores and starts up `Region` objects, includes an
  // event aggregator as `app.vent`
  Marionette.Application = Marionette.Object.extend({
    constructor: function(options) {
      this._initializeRegions(options);
      this._initCallbacks = new Marionette.Callbacks();
      this.submodules = {***REMOVED***
      _.extend(this, options);
      this._initChannel();
      Marionette.Object.apply(this, arguments);
***REMOVED***,

    // Command execution, facilitated by Backbone.Wreqr.Commands
    execute: function() {
      this.commands.execute.apply(this.commands, arguments);
***REMOVED***,

    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
    request: function() {
      return this.reqres.request.apply(this.reqres, arguments);
***REMOVED***,

    // Add an initializer that is either run at when the `start`
    // method is called, or run immediately if added after `start`
    // has already been called.
    addInitializer: function(initializer) {
      this._initCallbacks.add(initializer);
***REMOVED***,

    // kick off all of the application's processes.
    // initializes all of the regions that have been added
    // to the app, and runs all of the initializer functions
    start: function(options) {
      this.triggerMethod('before:start', options);
      this._initCallbacks.run(options, this);
      this.triggerMethod('start', options);
***REMOVED***,

    // Add regions to your app.
    // Accepts a hash of named strings or Region objects
    // addRegions({something: "#someRegion"})
    // addRegions({something: Region.extend({el: "#someRegion"}) });
    addRegions: function(regions) {
      return this._regionManager.addRegions(regions);
***REMOVED***,

    // Empty all regions in the app, without removing them
    emptyRegions: function() {
      return this._regionManager.emptyRegions();
***REMOVED***,

    // Removes a region from your app, by name
    // Accepts the regions name
    // removeRegion('myRegion')
    removeRegion: function(region) {
      return this._regionManager.removeRegion(region);
***REMOVED***,

    // Provides alternative access to regions
    // Accepts the region name
    // getRegion('main')
    getRegion: function(region) {
      return this._regionManager.get(region);
***REMOVED***,

    // Get all the regions from the region manager
    getRegions: function() {
      return this._regionManager.getRegions();
***REMOVED***,

    // Create a module, attached to the application
    module: function(moduleNames, moduleDefinition) {

      // Overwrite the module class if the user specifies one
      var ModuleClass = Marionette.Module.getClass(moduleDefinition);

      var args = _.toArray(arguments);
      args.unshift(this);

      // see the Marionette.Module object for more information
      return ModuleClass.create.apply(ModuleClass, args);
***REMOVED***,

    // Enable easy overriding of the default `RegionManager`
    // for customized region interactions and business-specific
    // view logic for better control over single regions.
    getRegionManager: function() {
      return new Marionette.RegionManager();
***REMOVED***,

    // Internal method to initialize the regions that have been defined in a
    // `regions` attribute on the application instance
    _initializeRegions: function(options) {
      var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {***REMOVED***

      this._initRegionManager();

      // Enable users to define `regions` in instance options.
      var optionRegions = Marionette.getOption(options, 'regions');

      // Enable region options to be a function
      if (_.isFunction(optionRegions)) {
        optionRegions = optionRegions.call(this, options);
  ***REMOVED***

      // Overwrite current regions with those passed in options
      _.extend(regions, optionRegions);

      this.addRegions(regions);

      return this;
***REMOVED***,

    // Internal method to set up the region manager
    _initRegionManager: function() {
      this._regionManager = this.getRegionManager();
      this._regionManager._parent = this;

      this.listenTo(this._regionManager, 'before:add:region', function() {
        Marionette._triggerMethod(this, 'before:add:region', arguments);
  ***REMOVED***);

      this.listenTo(this._regionManager, 'add:region', function(name, region) {
        this[name] = region;
        Marionette._triggerMethod(this, 'add:region', arguments);
  ***REMOVED***);

      this.listenTo(this._regionManager, 'before:remove:region', function() {
        Marionette._triggerMethod(this, 'before:remove:region', arguments);
  ***REMOVED***);

      this.listenTo(this._regionManager, 'remove:region', function(name) {
        delete this[name];
        Marionette._triggerMethod(this, 'remove:region', arguments);
  ***REMOVED***);
***REMOVED***,

    // Internal method to setup the Wreqr.radio channel
    _initChannel: function() {
      this.channelName = _.result(this, 'channelName') || 'global';
      this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
      this.vent = _.result(this, 'vent') || this.channel.vent;
      this.commands = _.result(this, 'commands') || this.channel.commands;
      this.reqres = _.result(this, 'reqres') || this.channel.reqres;
***REMOVED***
***REMOVED***);

  /* jshint maxparams: 9 */

  // Module
  // ------

  // A simple module system, used to create privacy and encapsulation in
  // Marionette applications
  Marionette.Module = function(moduleName, app, options) {
    this.moduleName = moduleName;
    this.options = _.extend({}, this.options, options);
    // Allow for a user to overide the initialize
    // for a given module instance.
    this.initialize = options.initialize || this.initialize;

    // Set up an internal store for sub-modules.
    this.submodules = {***REMOVED***

    this._setupInitializersAndFinalizers();

    // Set an internal reference to the app
    // within a module.
    this.app = app;

    if (_.isFunction(this.initialize)) {
      this.initialize(moduleName, app, this.options);
***REMOVED***
***REMOVED***;

  Marionette.Module.extend = Marionette.extend;

  // Extend the Module prototype with events / listenTo, so that the module
  // can be used as an event aggregator or pub/sub.
  _.extend(Marionette.Module.prototype, Backbone.Events, {

    // By default modules start with their parents.
    startWithParent: true,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic when extending Marionette.Module.
    initialize: function() {},

    // Initializer for a specific module. Initializers are run when the
    // module's `start` method is called.
    addInitializer: function(callback) {
      this._initializerCallbacks.add(callback);
***REMOVED***,

    // Finalizers are run when a module is stopped. They are used to teardown
    // and finalize any variables, references, events and other code that the
    // module had set up.
    addFinalizer: function(callback) {
      this._finalizerCallbacks.add(callback);
***REMOVED***,

    // Start the module, and run all of its initializers
    start: function(options) {
      // Prevent re-starting a module that is already started
      if (this._isInitialized) { return; }

      // start the sub-modules (depth-first hierarchy)
      _.each(this.submodules, function(mod) {
        // check to see if we should start the sub-module with this parent
        if (mod.startWithParent) {
          mod.start(options);
    ***REMOVED***
  ***REMOVED***);

      // run the callbacks to "start" the current module
      this.triggerMethod('before:start', options);

      this._initializerCallbacks.run(options, this);
      this._isInitialized = true;

      this.triggerMethod('start', options);
***REMOVED***,

    // Stop this module by running its finalizers and then stop all of
    // the sub-modules for this module
    stop: function() {
      // if we are not initialized, don't bother finalizing
      if (!this._isInitialized) { return; }
      this._isInitialized = false;

      this.triggerMethod('before:stop');

      // stop the sub-modules; depth-first, to make sure the
      // sub-modules are stopped / finalized before parents
      _.invoke(this.submodules, 'stop');

      // run the finalizers
      this._finalizerCallbacks.run(undefined, this);

      // reset the initializers and finalizers
      this._initializerCallbacks.reset();
      this._finalizerCallbacks.reset();

      this.triggerMethod('stop');
***REMOVED***,

    // Configure the module with a definition function and any custom args
    // that are to be passed in to the definition function
    addDefinition: function(moduleDefinition, customArgs) {
      this._runModuleDefinition(moduleDefinition, customArgs);
***REMOVED***,

    // Internal method: run the module definition function with the correct
    // arguments
    _runModuleDefinition: function(definition, customArgs) {
      // If there is no definition short circut the method.
      if (!definition) { return; }

      // build the correct list of arguments for the module definition
      var args = _.flatten([
        this,
        this.app,
        Backbone,
        Marionette,
        Backbone.$, _,
        customArgs
      ]);

      definition.apply(this, args);
***REMOVED***,

    // Internal method: set up new copies of initializers and finalizers.
    // Calling this method will wipe out all existing initializers and
    // finalizers.
    _setupInitializersAndFinalizers: function() {
      this._initializerCallbacks = new Marionette.Callbacks();
      this._finalizerCallbacks = new Marionette.Callbacks();
***REMOVED***,

    // import the `triggerMethod` to trigger events with corresponding
    // methods if the method exists
    triggerMethod: Marionette.triggerMethod
***REMOVED***);

  // Class methods to create modules
  _.extend(Marionette.Module, {

    // Create a module, hanging off the app parameter as the parent object.
    create: function(app, moduleNames, moduleDefinition) {
      var module = app;

      // get the custom args passed in after the module definition and
      // get rid of the module name and definition function
      var customArgs = _.drop(arguments, 3);

      // Split the module names and get the number of submodules.
      // i.e. an example module name of `Doge.Wow.Amaze` would
      // then have the potential for 3 module definitions.
      moduleNames = moduleNames.split('.');
      var length = moduleNames.length;

      // store the module definition for the last module in the chain
      var moduleDefinitions = [];
      moduleDefinitions[length - 1] = moduleDefinition;

      // Loop through all the parts of the module definition
      _.each(moduleNames, function(moduleName, i) {
        var parentModule = module;
        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
  ***REMOVED***, this);

      // Return the last module in the definition chain
      return module;
***REMOVED***,

    _getModule: function(parentModule, moduleName, app, def, args) {
      var options = _.extend({}, def);
      var ModuleClass = this.getClass(def);

      // Get an existing module of this name if we have one
      var module = parentModule[moduleName];

      if (!module) {
        // Create a new module if we don't have one
        module = new ModuleClass(moduleName, app, options);
        parentModule[moduleName] = module;
        // store the module on the parent
        parentModule.submodules[moduleName] = module;
  ***REMOVED***

      return module;
***REMOVED***,

    // ## Module Classes
    //
    // Module classes can be used as an alternative to the define pattern.
    // The extend function of a Module is identical to the extend functions
    // on other Backbone and Marionette classes.
    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
    getClass: function(moduleDefinition) {
      var ModuleClass = Marionette.Module;

      if (!moduleDefinition) {
        return ModuleClass;
  ***REMOVED***

      // If all of the module's functionality is defined inside its class,
      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
      if (moduleDefinition.prototype instanceof ModuleClass) {
        return moduleDefinition;
  ***REMOVED***

      return moduleDefinition.moduleClass || ModuleClass;
***REMOVED***,

    // Add the module definition and add a startWithParent initializer function.
    // This is complicated because module definitions are heavily overloaded
    // and support an anonymous function, module class, or options object
    _addModuleDefinition: function(parentModule, module, def, args) {
      var fn = this._getDefine(def);
      var startWithParent = this._getStartWithParent(def, module);

      if (fn) {
        module.addDefinition(fn, args);
  ***REMOVED***

      this._addStartWithParent(parentModule, module, startWithParent);
***REMOVED***,

    _getStartWithParent: function(def, module) {
      var swp;

      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
        swp = module.constructor.prototype.startWithParent;
        return _.isUndefined(swp) ? true : swp;
  ***REMOVED***

      if (_.isObject(def)) {
        swp = def.startWithParent;
        return _.isUndefined(swp) ? true : swp;
  ***REMOVED***

      return true;
***REMOVED***,

    _getDefine: function(def) {
      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
        return def;
  ***REMOVED***

      if (_.isObject(def)) {
        return def.define;
  ***REMOVED***

      return null;
***REMOVED***,

    _addStartWithParent: function(parentModule, module, startWithParent) {
      module.startWithParent = module.startWithParent && startWithParent;

      if (!module.startWithParent || !!module.startWithParentIsConfigured) {
        return;
  ***REMOVED***

      module.startWithParentIsConfigured = true;

      parentModule.addInitializer(function(options) {
        if (module.startWithParent) {
          module.start(options);
    ***REMOVED***
  ***REMOVED***);
***REMOVED***
***REMOVED***);


  return Marionette;
}));
