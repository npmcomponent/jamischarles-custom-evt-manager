
/**
 * TODO:
 * - add scoping mechanism... Q: How does jquery do it? Can we add a custom channel for each el?
 * - There is a context... Can we use that as scope? Or should we have the scope be part of the channel?
 * - ddPopover:uniqueId:open (have this be configurable from the ddpopover config)
 * - we can still pass in *this* as part of the dom obj... That'll work really well...
 * 
 * - write solid test cases around this 
 * - add ability to conosle.log everything with window.debug? or some way of turning debug on...
 */

/**
 * Requirements:
 * - set up a global mediator that talks across components and can subscribe and publish custom events
 * - ability to scope to a unique instance in DOM or otherwise 
 */

/**
 *  Pull in DEPS
 */
var Mediator = require("Mediator");

var DEFAULT_MEDIATOR_NS = "FS";
var DEFAULT_MEDIATOR_NAME = "customEvtMgr";

//@param namespace - String (what global variable should contain the custom-event-mediator)
module.exports = function(mediator_namespace, mediator_name){
  var ns = mediator_namespace || DEFAULT_MEDIATOR_NS;
  var mediator_name = mediator_name || DEFAULT_MEDIATOR_NAME;

  //create global namespace, if it doesn't exist already.
  //FIXME: there's a better way to do this...
  if (typeof window[ns] === "undefined") {
    window[ns] = {};
  }
  

  //if it's not a mediator yet, make it one
  if (typeof window[ns][mediator_name] === "undefined") {
    window[ns][mediator_name] = new Mediator();
  }


  //Q: Should we keep a global log of what custom events are avialable?
  return window[ns][mediator_name];
}