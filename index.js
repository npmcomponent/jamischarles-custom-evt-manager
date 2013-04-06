
/**
 * TODO:
 * - add scoping mechanism... Q: How does jquery do it? Can we add a custom channel for each el?
 * - There is a context... Can we use that as scope? Or should we have the scope be part of the channel?
 * - ddPopover:uniqueId:open (have this be configurable from the ddpopover config)
 * - we can still pass in *this* as part of the dom obj... That'll work really well...
 * 
 * - write solid test cases around this 

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


//@param namespace - String (what global variable should contain the custom-event-mediator)
module.exports = function(namespace){
  
  //create namespace

  //create mediator and attach it to the namespace
  window.FS = {
    customEvtMgr: new Mediator()
  };

  //Q: Should we keep a global log of what custom events are avialable?
  return window.FS.customEvtMgr;
}