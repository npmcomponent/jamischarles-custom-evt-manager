*This repository is a mirror of the [component](http://component.io) module [jamischarles/custom-evt-manager](http://github.com/jamischarles/custom-evt-manager). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jamischarles-custom-evt-manager`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# custom-evt-manager

  Sets up a global mediator which pub-subs custom events across components.
  
  This is a wrapper of gorillatron/mediator. Basic addition: Adds a single, global mediator to the window obj.

## Installation

    $ component install jamischarles/custom-evt-manager

## Usage

```js
var Mediator = require('custom-evt-manager');

//var mediator = new Mediator("JED" "custpmEvtMgr"); //Add to JED.customEvtMgr instead of default.
//ensures a single global mediator obj at default location (FS.evtMediator)
var mediator = new Mediator();

mediator.subscribe( "chat", logChatEvent );
mediator.subscribe( "chat::message", displayMessage );

// 'chat' and 'chat::message' will fire because of namespacing
mediator.publish( "chat::message", "shaggy87", "lol dope" );

//SCOPE instances by adding a unique ID to the namespace
mediator.publish( "dropdown::sign-in-dd::open", "dropdown::sign-in-dd:open has fired", "lol dope" );
mediator.subscribe( "dropdown::sign-in-dd::open", callback );

```

### Api

#### Mediator.prototype.subscribe( channel, callback, context )

Subscribe to the given channel/namespace. Call the given callback with the given context as 'this'
when that channels is published to.

#### Mediator.prototype.unsubscribe( channel, callback )

Unsubscribe from channel. If only channel is given all callbacks that match the channels namspace will be 
removed. If callback is given it will only remove subscriptions that has that specific callback

#### Mediator.prototype.publish( channel, args.. )

Publishes to the channel, calling all subscribing callbacks with the rest of the arguments as arguments
to the calback function[s].

   

## License

  MIT
