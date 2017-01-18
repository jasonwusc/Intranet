var Intranet =
webpackJsonpIntranet([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, ko) {// ===============================
	// Application main entry point
	// ===============================
	"use strict";
	/// <reference path="../typings/globals/knockout/index.d.ts" />
	/// <reference path="../typings/globals/jquery/index.d.ts" />
	// View models for components
	var breadcrumb_viewmodel_1 = __webpack_require__(6);
	var contextualmenu_viewmodel_1 = __webpack_require__(67);
	var carousel_viewmodel_1 = __webpack_require__(68);
	var defaultdisplaytemplateitem_viewmodel_1 = __webpack_require__(88);
	var defaultfilter_mui_viewmodel_1 = __webpack_require__(200);
	var documentitem_viewmodel_1 = __webpack_require__(203);
	var headerlinks_viewmodel_1 = __webpack_require__(205);
	var knockoutcomponent_1 = __webpack_require__(206);
	var languageswitcher_viewmodel_1 = __webpack_require__(207);
	var newsitem_viewmodel_1 = __webpack_require__(208);
	var pageinfo_viewmodel_1 = __webpack_require__(209);
	var searchbox_viewmodel_1 = __webpack_require__(210);
	var searchboxmobile_viewmodel_1 = __webpack_require__(211);
	var topnav_viewmodel_1 = __webpack_require__(212);
	var translationcontrol_viewmodel_1 = __webpack_require__(213);
	// Third party libraries
	var i18n = __webpack_require__(49);
	var moment = __webpack_require__(90);
	var pnp = __webpack_require__(8);
	// Main style sheet for the application
	__webpack_require__(214);
	__webpack_require__(219);
	__webpack_require__(221);
	__webpack_require__(223);
	// Reusable contents CSS
	__webpack_require__(226);
	// Images
	__webpack_require__(228);
	__webpack_require__(217);
	__webpack_require__(225);
	__webpack_require__(229);
	// Bootstrap CSS isolation
	__webpack_require__(230);
	// Resources
	__webpack_require__(128);
	var enUSResources = __webpack_require__(232);
	var frFRResources = __webpack_require__(233);
	var Main = (function () {
	    function Main() {
	    }
	    /**
	     * Register all Knockout components for the entire application
	     * @return {String}       The stringified tree object
	     */
	    Main.prototype.registerComponents = function () {
	        // ===============================
	        // Register Knockout components   
	        // ===============================
	        // Component: "MainMenu"
	        var mainMenuTemplate = __webpack_require__(234);
	        __webpack_require__(235);
	        var mainMenuComponent = new knockoutcomponent_1.KnockoutComponent("component-topnav", topnav_viewmodel_1.TopNavViewModel, mainMenuTemplate);
	        // Component: "ContextualMenu"
	        var contextualMenuTemplate = __webpack_require__(237);
	        __webpack_require__(238);
	        var contextualMenuComponent = new knockoutcomponent_1.KnockoutComponent("component-contextualmenu", contextualmenu_viewmodel_1.ContextualMenuViewModel, contextualMenuTemplate);
	        // Component: "Breadcrumb"
	        var breadcrumbTemplate = __webpack_require__(240);
	        __webpack_require__(241);
	        var breadcrumbComponent = new knockoutcomponent_1.KnockoutComponent("component-breadcrumb", breadcrumb_viewmodel_1.BreadcrumbViewModel, breadcrumbTemplate);
	        // Component: "Header" (template only)
	        var headerTemplate = __webpack_require__(243);
	        __webpack_require__(244);
	        var headerComponent = new knockoutcomponent_1.KnockoutComponent("component-header", null, headerTemplate);
	        // Component: "Page Info"
	        var pageInfoTemplate = __webpack_require__(246);
	        __webpack_require__(247);
	        var pageInfoComponent = new knockoutcomponent_1.KnockoutComponent("component-pageinfo", pageinfo_viewmodel_1.PageInfoViewModel, pageInfoTemplate);
	        // Component: "Translation Control"
	        var translationControlTemplate = __webpack_require__(249);
	        __webpack_require__(250);
	        var translationcontrolComponent = new knockoutcomponent_1.KnockoutComponent("component-translationcontrol", translationcontrol_viewmodel_1.TranslationControlViewModel, translationControlTemplate);
	        // Component: "Language Switcher"
	        var languageSwitcherTemplate = __webpack_require__(252);
	        __webpack_require__(253);
	        var languageSwitcherComponent = new knockoutcomponent_1.KnockoutComponent("component-languageswitcher", languageswitcher_viewmodel_1.LanguageSwitcherViewModel, languageSwitcherTemplate);
	        // Component: "Searchbox"
	        var searchboxTemplate = __webpack_require__(255);
	        __webpack_require__(256);
	        var searchboxComponent = new knockoutcomponent_1.KnockoutComponent("component-searchbox", searchbox_viewmodel_1.SearchBoxViewModel, searchboxTemplate);
	        // Component: "Footer" (template only)
	        var footerTemplate = __webpack_require__(258);
	        __webpack_require__(259);
	        var footerComponent = new knockoutcomponent_1.KnockoutComponent("component-footer", null, footerTemplate);
	        // Component: "Header Links"
	        var headerLinksTemplate = __webpack_require__(261);
	        var headerLinksComponent = new knockoutcomponent_1.KnockoutComponent("component-headerlinks", headerlinks_viewmodel_1.HeaderLinksViewModel, headerLinksTemplate);
	        // Component: "Search Box (mobile)"
	        var searchboxMobileTemplate = __webpack_require__(262);
	        __webpack_require__(263);
	        var searchboxMobileComponent = new knockoutcomponent_1.KnockoutComponent("component-searchboxmobile", searchboxmobile_viewmodel_1.SearchBoxMobileViewModel, searchboxMobileTemplate);
	        // Component: "Carousel"
	        var carouselTemplate = __webpack_require__(265);
	        __webpack_require__(266);
	        __webpack_require__(268);
	        var carouselComponent = new knockoutcomponent_1.KnockoutComponent("component-carousel", carousel_viewmodel_1.CarouselViewModel, carouselTemplate);
	    };
	    Main.prototype.init = function () {
	        this.registerComponents();
	        // Init the pnp logger
	        var consoleLogger = new pnp.log.ConsoleListener();
	        pnp.log.subscribe(consoleLogger);
	        pnp.log.activeLogLevel = pnp.log.LogLevel.Verbose;
	        // Be careful, we need to apply bindings after the document is ready
	        $(document).ready(function () {
	            // Get the current page language. In this solution, the language context is given by the page itself instead of the web.
	            // By this way, we don't have to create a synchronized symetric web structure (like SharePoint variations do). We keep a flat structure with only one site.
	            // For a contributor, it is by far easier to use than variations.
	            // The "IntranetContentLanguage" is a choice field so we don't need taxonomy field here. Values of this choice field have to be 'en' or 'fr' to fit with the format below.
	            pnp.sp.web.lists.getByTitle("Pages").items.getById(_spPageContextInfo.pageItemId).select("IntranetContentLanguage").get().then(function (item) {
	                var itemLanguage = item.IntranetContentLanguage;
	                // Default language for the intranet
	                var workingLanguage = "en";
	                if (itemLanguage) {
	                    workingLanguage = itemLanguage.toLowerCase();
	                }
	                i18n.init({
	                    // Init the working language and resource files for the entire application
	                    fallbackLng: "en",
	                    lng: workingLanguage,
	                    resources: {
	                        en: {
	                            translation: enUSResources,
	                        },
	                        fr: {
	                            translation: frFRResources,
	                        },
	                    },
	                }, function (err, t) {
	                    // Init the locale for the moment object (for date manipulations)
	                    moment.locale(workingLanguage);
	                    // Apply the Knockout JS magic!
	                    ko.applyBindings();
	                    // Add Bootstrap responsive behavior for news images
	                    $("#page-image img").addClass("img-responsive");
	                });
	            });
	        });
	    };
	    // Static methods are mainly used for SharePoint display templates (it is just a public wrapper)
	    // We can't use Knockout components here because bindings are not triggered when the display template logic adds the component programmatically
	    // We have to apply bindings manually after rendering
	    Main.initNewsDisplayTemplateItemViewModel = function (currentItem, domElement) {
	        var viewModel = new newsitem_viewmodel_1.NewsDisplayTemplateItemViewModel(currentItem);
	        ko.applyBindings(viewModel, domElement);
	    };
	    Main.initDocumentDisplayTemplateItemViewModel = function (currentItem, domElement) {
	        var viewModel = new documentitem_viewmodel_1.DocumentDisplayTemplateItemViewModel(currentItem);
	        ko.applyBindings(viewModel, domElement);
	    };
	    Main.initDefaultDisplayTemplateItemViewModel = function (currentItem, domElement) {
	        var viewModel = new defaultdisplaytemplateitem_viewmodel_1.DefaultDisplayTemplateItemViewModel(currentItem);
	        ko.applyBindings(viewModel, domElement);
	    };
	    Main.initDefaultMuiFilterViewModel = function (domElement) {
	        var viewModel = new defaultfilter_mui_viewmodel_1.DefaultFilterViewModel();
	        ko.applyBindings(viewModel, domElement);
	    };
	    Main.getResource = function (resourceKey) {
	        return i18n.t(resourceKey);
	    };
	    return Main;
	}());
	exports.Main = Main;
	// Start the engine
	var main = new Main();
	main.init();
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ========================================
	// Breadcrumb Component View Model
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	__webpack_require__(7);
	var pnp = __webpack_require__(8);
	var i18n = __webpack_require__(49);
	var navigation_viewmodel_1 = __webpack_require__(65);
	var utility_1 = __webpack_require__(66);
	var BreadcrumbViewModel = (function (_super) {
	    __extends(BreadcrumbViewModel, _super);
	    function BreadcrumbViewModel(params) {
	        var _this = this;
	        _super.call(this);
	        this.errorMessage = ko.observable(i18n.t("breadcrumbErrorMessage"));
	        this.utilityModule = new utility_1.UtilityModule();
	        this.isEmptyNodes = ko.observable(false);
	        // The internal name for the site map taxonomy field
	        this.siteMapFieldName = params.siteMapFieldName;
	        this.siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;
	        // Subscribe to the main menu nodes
	        PubSub.subscribe("navigationNodes", function (msg, data) {
	            var breadcrumbNodes = [];
	            // There are two ways to determine the position of the current page in the navigation site map
	            // 1) By checking the explicit value of the property used for content classification (and mapped to the site map term set).
	            // 2) By checking the current url and try to find it in the navigation nodes data to get the corresponding term.
	            pnp.sp.web.lists.getByTitle("Pages").items.getById(_spPageContextInfo.pageItemId).select(_this.siteMapFieldName).get().then(function (item) {
	                var siteMapTermGuid = item[_this.siteMapFieldName];
	                var currentNode = undefined;
	                if (siteMapTermGuid) {
	                    // 1: Search for this guid in the site map
	                    currentNode = _this.utilityModule.getNodeByTermId(data.nodes, siteMapTermGuid.TermGuid);
	                }
	                if (currentNode === undefined) {
	                    // 2: Get the navigation node according to the current URL   
	                    currentNode = _this.utilityModule.getNodeByUrl(data.nodes, window.location.pathname);
	                }
	                if (currentNode !== undefined) {
	                    breadcrumbNodes.push(currentNode);
	                    // If there is no 'ParentId', this is a root term
	                    while (currentNode.ParentId !== null) {
	                        var parentNode = _this.utilityModule.getNodeByTermId(data.nodes, new SP.Guid(currentNode.ParentId));
	                        breadcrumbNodes.push(parentNode);
	                        currentNode = parentNode;
	                    }
	                    breadcrumbNodes = breadcrumbNodes.reverse();
	                    _this.initialize(breadcrumbNodes);
	                    _this.setCurrentNode(new SP.Guid(currentNode.Id));
	                }
	                else {
	                    _this.isEmptyNodes(true);
	                }
	            }).catch(function (errorMesssage) {
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        });
	    }
	    return BreadcrumbViewModel;
	}(navigation_viewmodel_1.NavigationViewModel));
	exports.BreadcrumbViewModel = BreadcrumbViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
	License: MIT - http://mrgnrdrck.mit-license.org

	https://github.com/mroderick/PubSubJS
	*/
	(function (root, factory){
		'use strict';

	    if (true){
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	    } else if (typeof exports === 'object'){
	        // CommonJS
	        factory(exports);

	    }

	    // Browser globals
	    var PubSub = {};
	    root.PubSub = PubSub;
	    factory(PubSub);

	}(( typeof window === 'object' && window ) || this, function (PubSub){
		'use strict';

		var messages = {},
			lastUid = -1;

		function hasKeys(obj){
			var key;

			for (key in obj){
				if ( obj.hasOwnProperty(key) ){
					return true;
				}
			}
			return false;
		}

		/**
		 *	Returns a function that throws the passed exception, for use as argument for setTimeout
		 *	@param { Object } ex An Error object
		 */
		function throwException( ex ){
			return function reThrowException(){
				throw ex;
			};
		}

		function callSubscriberWithDelayedExceptions( subscriber, message, data ){
			try {
				subscriber( message, data );
			} catch( ex ){
				setTimeout( throwException( ex ), 0);
			}
		}

		function callSubscriberWithImmediateExceptions( subscriber, message, data ){
			subscriber( message, data );
		}

		function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
			var subscribers = messages[matchedMessage],
				callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
				s;

			if ( !messages.hasOwnProperty( matchedMessage ) ) {
				return;
			}

			for (s in subscribers){
				if ( subscribers.hasOwnProperty(s)){
					callSubscriber( subscribers[s], originalMessage, data );
				}
			}
		}

		function createDeliveryFunction( message, data, immediateExceptions ){
			return function deliverNamespaced(){
				var topic = String( message ),
					position = topic.lastIndexOf( '.' );

				// deliver the message as it is now
				deliverMessage(message, message, data, immediateExceptions);

				// trim the hierarchy and deliver message to each level
				while( position !== -1 ){
					topic = topic.substr( 0, position );
					position = topic.lastIndexOf('.');
					deliverMessage( message, topic, data, immediateExceptions );
				}
			};
		}

		function messageHasSubscribers( message ){
			var topic = String( message ),
				found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
				position = topic.lastIndexOf( '.' );

			while ( !found && position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf( '.' );
				found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
			}

			return found;
		}

		function publish( message, data, sync, immediateExceptions ){
			var deliver = createDeliveryFunction( message, data, immediateExceptions ),
				hasSubscribers = messageHasSubscribers( message );

			if ( !hasSubscribers ){
				return false;
			}

			if ( sync === true ){
				deliver();
			} else {
				setTimeout( deliver, 0 );
			}
			return true;
		}

		/**
		 *	PubSub.publish( message[, data] ) -> Boolean
		 *	- message (String): The message to publish
		 *	- data: The data to pass to subscribers
		 *	Publishes the the message, passing the data to it's subscribers
		**/
		PubSub.publish = function( message, data ){
			return publish( message, data, false, PubSub.immediateExceptions );
		};

		/**
		 *	PubSub.publishSync( message[, data] ) -> Boolean
		 *	- message (String): The message to publish
		 *	- data: The data to pass to subscribers
		 *	Publishes the the message synchronously, passing the data to it's subscribers
		**/
		PubSub.publishSync = function( message, data ){
			return publish( message, data, true, PubSub.immediateExceptions );
		};

		/**
		 *	PubSub.subscribe( message, func ) -> String
		 *	- message (String): The message to subscribe to
		 *	- func (Function): The function to call when a new message is published
		 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
		 *	you need to unsubscribe
		**/
		PubSub.subscribe = function( message, func ){
			if ( typeof func !== 'function'){
				return false;
			}

			// message is not registered yet
			if ( !messages.hasOwnProperty( message ) ){
				messages[message] = {};
			}

			// forcing token as String, to allow for future expansions without breaking usage
			// and allow for easy use as key names for the 'messages' object
			var token = 'uid_' + String(++lastUid);
			messages[message][token] = func;

			// return token for unsubscribing
			return token;
		};

		/* Public: Clears all subscriptions
		 */
		PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
			messages = {};
		};

		/*Public: Clear subscriptions by the topic
		*/
		PubSub.clearSubscriptions = function clearSubscriptions(topic){
			var m;
			for (m in messages){
				if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
					delete messages[m];
				}
			}
		};

		/* Public: removes subscriptions.
		 * When passed a token, removes a specific subscription.
		 * When passed a function, removes all subscriptions for that function
		 * When passed a topic, removes all subscriptions for that topic (hierarchy)
		 *
		 * value - A token, function or topic to unsubscribe.
		 *
		 * Examples
		 *
		 *		// Example 1 - unsubscribing with a token
		 *		var token = PubSub.subscribe('mytopic', myFunc);
		 *		PubSub.unsubscribe(token);
		 *
		 *		// Example 2 - unsubscribing with a function
		 *		PubSub.unsubscribe(myFunc);
		 *
		 *		// Example 3 - unsubscribing a topic
		 *		PubSub.unsubscribe('mytopic');
		 */
		PubSub.unsubscribe = function(value){
			var isTopic    = typeof value === 'string' && messages.hasOwnProperty(value),
				isToken    = !isTopic && typeof value === 'string',
				isFunction = typeof value === 'function',
				result = false,
				m, message, t;

			if (isTopic){
				PubSub.clearSubscriptions(value);
				return;
			}

			for ( m in messages ){
				if ( messages.hasOwnProperty( m ) ){
					message = messages[m];

					if ( isToken && message[value] ){
						delete message[value];
						result = value;
						// tokens are unique, so we can just stop here
						break;
					}

					if (isFunction) {
						for ( t in message ){
							if (message.hasOwnProperty(t) && message[t] === value){
								delete message[t];
								result = true;
							}
						}
					}
				}
			}

			return result;
		};
	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(9);
	var storage_1 = __webpack_require__(10);
	var configuration_1 = __webpack_require__(11);
	var logging_1 = __webpack_require__(16);
	var rest_1 = __webpack_require__(17);
	var pnplibconfig_1 = __webpack_require__(24);
	/**
	 * Root class of the Patterns and Practices namespace, provides an entry point to the library
	 */
	/**
	 * Utility methods
	 */
	exports.util = util_1.Util;
	/**
	 * Provides access to the REST interface
	 */
	exports.sp = new rest_1.Rest();
	/**
	 * Provides access to local and session storage
	 */
	exports.storage = new storage_1.PnPClientStorage();
	/**
	 * Global configuration instance to which providers can be added
	 */
	exports.config = new configuration_1.Settings();
	/**
	 * Global logging instance to which subscribers can be registered and messages written
	 */
	exports.log = logging_1.Logger;
	/**
	 * Allows for the configuration of the library
	 */
	exports.setup = pnplibconfig_1.setRuntimeConfig;
	// creating this class instead of directly assigning to default fixes issue #116
	var Def = {
	    /**
	     * Global configuration instance to which providers can be added
	     */
	    config: exports.config,
	    /**
	     * Global logging instance to which subscribers can be registered and messages written
	     */
	    log: exports.log,
	    /**
	     * Provides access to local and session storage
	     */
	    setup: exports.setup,
	    /**
	     * Provides access to the REST interface
	     */
	    sp: exports.sp,
	    /**
	     * Provides access to local and session storage
	     */
	    storage: exports.storage,
	    /**
	     * Utility methods
	     */
	    util: exports.util,
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Def;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var Util = (function () {
	    function Util() {
	    }
	    /**
	     * Gets a callback function which will maintain context across async calls.
	     * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
	     *
	     * @param context The object that will be the 'this' value in the callback
	     * @param method The method to which we will apply the context and parameters
	     * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
	     */
	    Util.getCtxCallback = function (context, method) {
	        var params = [];
	        for (var _i = 2; _i < arguments.length; _i++) {
	            params[_i - 2] = arguments[_i];
	        }
	        return function () {
	            method.apply(context, params);
	        };
	    };
	    /**
	     * Tests if a url param exists
	     *
	     * @param name The name of the url paramter to check
	     */
	    Util.urlParamExists = function (name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	        return regex.test(location.search);
	    };
	    /**
	     * Gets a url param value by name
	     *
	     * @param name The name of the paramter for which we want the value
	     */
	    Util.getUrlParamByName = function (name) {
	        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
	        var results = regex.exec(location.search);
	        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	    };
	    /**
	     * Gets a url param by name and attempts to parse a bool value
	     *
	     * @param name The name of the paramter for which we want the boolean value
	     */
	    Util.getUrlParamBoolByName = function (name) {
	        var p = this.getUrlParamByName(name);
	        var isFalse = (p === "" || /false|0/i.test(p));
	        return !isFalse;
	    };
	    /**
	     * Inserts the string s into the string target as the index specified by index
	     *
	     * @param target The string into which we will insert s
	     * @param index The location in target to insert s (zero based)
	     * @param s The string to insert into target at position index
	     */
	    Util.stringInsert = function (target, index, s) {
	        if (index > 0) {
	            return target.substring(0, index) + s + target.substring(index, target.length);
	        }
	        return s + target;
	    };
	    /**
	     * Adds a value to a date
	     *
	     * @param date The date to which we will add units, done in local time
	     * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
	     * @param units The amount to add to date of the given interval
	     *
	     * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
	     */
	    Util.dateAdd = function (date, interval, units) {
	        var ret = new Date(date.toLocaleString()); // don't change original date
	        switch (interval.toLowerCase()) {
	            case "year":
	                ret.setFullYear(ret.getFullYear() + units);
	                break;
	            case "quarter":
	                ret.setMonth(ret.getMonth() + 3 * units);
	                break;
	            case "month":
	                ret.setMonth(ret.getMonth() + units);
	                break;
	            case "week":
	                ret.setDate(ret.getDate() + 7 * units);
	                break;
	            case "day":
	                ret.setDate(ret.getDate() + units);
	                break;
	            case "hour":
	                ret.setTime(ret.getTime() + units * 3600000);
	                break;
	            case "minute":
	                ret.setTime(ret.getTime() + units * 60000);
	                break;
	            case "second":
	                ret.setTime(ret.getTime() + units * 1000);
	                break;
	            default:
	                ret = undefined;
	                break;
	        }
	        return ret;
	    };
	    /**
	     * Loads a stylesheet into the current page
	     *
	     * @param path The url to the stylesheet
	     * @param avoidCache If true a value will be appended as a query string to avoid browser caching issues
	     */
	    Util.loadStylesheet = function (path, avoidCache) {
	        if (avoidCache) {
	            path += "?" + encodeURIComponent((new Date()).getTime().toString());
	        }
	        var head = document.getElementsByTagName("head");
	        if (head.length > 0) {
	            var e = document.createElement("link");
	            head[0].appendChild(e);
	            e.setAttribute("type", "text/css");
	            e.setAttribute("rel", "stylesheet");
	            e.setAttribute("href", path);
	        }
	    };
	    /**
	     * Combines an arbitrary set of paths ensuring that the slashes are normalized
	     *
	     * @param paths 0 to n path parts to combine
	     */
	    Util.combinePaths = function () {
	        var paths = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            paths[_i - 0] = arguments[_i];
	        }
	        var parts = [];
	        for (var i = 0; i < paths.length; i++) {
	            if (typeof paths[i] !== "undefined" && paths[i] !== null) {
	                parts.push(paths[i].replace(/^[\\|\/]/, "").replace(/[\\|\/]$/, ""));
	            }
	        }
	        return parts.join("/").replace(/\\/, "/");
	    };
	    /**
	     * Gets a random string of chars length
	     *
	     * @param chars The length of the random string to generate
	     */
	    Util.getRandomString = function (chars) {
	        var text = "";
	        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	        for (var i = 0; i < chars; i++) {
	            text += possible.charAt(Math.floor(Math.random() * possible.length));
	        }
	        return text;
	    };
	    /**
	     * Gets a random GUID value
	     *
	     * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
	     */
	    /* tslint:disable no-bitwise */
	    Util.getGUID = function () {
	        var d = new Date().getTime();
	        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	            var r = (d + Math.random() * 16) % 16 | 0;
	            d = Math.floor(d / 16);
	            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
	        });
	        return guid;
	    };
	    /* tslint:enable */
	    /**
	     * Determines if a given value is a function
	     *
	     * @param candidateFunction The thing to test for being a function
	     */
	    Util.isFunction = function (candidateFunction) {
	        return typeof candidateFunction === "function";
	    };
	    /**
	     * @returns whether the provided parameter is a JavaScript Array or not.
	    */
	    Util.isArray = function (array) {
	        if (Array.isArray) {
	            return Array.isArray(array);
	        }
	        return array && typeof array.length === "number" && array.constructor === Array;
	    };
	    /**
	     * Determines if a string is null or empty or undefined
	     *
	     * @param s The string to test
	     */
	    Util.stringIsNullOrEmpty = function (s) {
	        return typeof s === "undefined" || s === null || s === "";
	    };
	    /**
	     * Provides functionality to extend the given object by doign a shallow copy
	     *
	     * @param target The object to which properties will be copied
	     * @param source The source object from which properties will be copied
	     * @param noOverwrite If true existing properties on the target are not overwritten from the source
	     *
	     */
	    /* tslint:disable:forin */
	    Util.extend = function (target, source, noOverwrite) {
	        if (noOverwrite === void 0) { noOverwrite = false; }
	        var result = {};
	        for (var id in target) {
	            result[id] = target[id];
	        }
	        // ensure we don't overwrite things we don't want overwritten
	        var check = noOverwrite ? function (o, i) { return !o.hasOwnProperty(i); } : function (o, i) { return true; };
	        for (var id in source) {
	            if (check(result, id)) {
	                result[id] = source[id];
	            }
	        }
	        return result;
	    };
	    /* tslint:enable */
	    /**
	     * Applies one or more mixins to the supplied target
	     *
	     * @param derivedCtor The classto which we will apply the mixins
	     * @param baseCtors One or more mixin classes to apply
	     */
	    Util.applyMixins = function (derivedCtor) {
	        var baseCtors = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            baseCtors[_i - 1] = arguments[_i];
	        }
	        baseCtors.forEach(function (baseCtor) {
	            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
	                derivedCtor.prototype[name] = baseCtor.prototype[name];
	            });
	        });
	    };
	    /**
	     * Determines if a given url is absolute
	     *
	     * @param url The url to check to see if it is absolute
	     */
	    Util.isUrlAbsolute = function (url) {
	        return /^https?:\/\/|^\/\//i.test(url);
	    };
	    /**
	     * Attempts to make the supplied relative url absolute based on the _spPageContextInfo object, if available
	     *
	     * @param url The relative url to make absolute
	     */
	    Util.makeUrlAbsolute = function (url) {
	        if (Util.isUrlAbsolute(url)) {
	            return url;
	        }
	        if (typeof global._spPageContextInfo !== "undefined") {
	            if (global._spPageContextInfo.hasOwnProperty("webAbsoluteUrl")) {
	                return Util.combinePaths(global._spPageContextInfo.webAbsoluteUrl, url);
	            }
	            else if (global._spPageContextInfo.hasOwnProperty("webServerRelativeUrl")) {
	                return Util.combinePaths(global._spPageContextInfo.webServerRelativeUrl, url);
	            }
	        }
	        else {
	            return url;
	        }
	    };
	    return Util;
	}());
	exports.Util = Util;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(9);
	/**
	 * A wrapper class to provide a consistent interface to browser based storage
	 *
	 */
	var PnPClientStorageWrapper = (function () {
	    /**
	     * Creates a new instance of the PnPClientStorageWrapper class
	     *
	     * @constructor
	     */
	    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
	        this.store = store;
	        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
	        this.defaultTimeoutMinutes = (defaultTimeoutMinutes === void 0) ? 5 : defaultTimeoutMinutes;
	        this.enabled = this.test();
	    }
	    /**
	     * Get a value from storage, or null if that value does not exist
	     *
	     * @param key The key whose value we want to retrieve
	     */
	    PnPClientStorageWrapper.prototype.get = function (key) {
	        if (!this.enabled) {
	            return null;
	        }
	        var o = this.store.getItem(key);
	        if (o == null) {
	            return o;
	        }
	        var persistable = JSON.parse(o);
	        if (new Date(persistable.expiration) <= new Date()) {
	            this.delete(key);
	            return null;
	        }
	        else {
	            return persistable.value;
	        }
	    };
	    /**
	     * Adds a value to the underlying storage
	     *
	     * @param key The key to use when storing the provided value
	     * @param o The value to store
	     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
	     */
	    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
	        if (this.enabled) {
	            this.store.setItem(key, this.createPersistable(o, expire));
	        }
	    };
	    /**
	     * Deletes a value from the underlying storage
	     *
	     * @param key The key of the pair we want to remove from storage
	     */
	    PnPClientStorageWrapper.prototype.delete = function (key) {
	        if (this.enabled) {
	            this.store.removeItem(key);
	        }
	    };
	    /**
	     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
	     *
	     * @param key The key to use when storing the provided value
	     * @param getter A function which will upon execution provide the desired value
	     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
	     */
	    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
	        var _this = this;
	        if (!this.enabled) {
	            return getter();
	        }
	        if (!util_1.Util.isFunction(getter)) {
	            throw "Function expected for parameter 'getter'.";
	        }
	        return new Promise(function (resolve, reject) {
	            var o = _this.get(key);
	            if (o == null) {
	                getter().then(function (d) {
	                    _this.put(key, d);
	                    resolve(d);
	                });
	            }
	            else {
	                resolve(o);
	            }
	        });
	    };
	    /**
	     * Used to determine if the wrapped storage is available currently
	     */
	    PnPClientStorageWrapper.prototype.test = function () {
	        var str = "test";
	        try {
	            this.store.setItem(str, str);
	            this.store.removeItem(str);
	            return true;
	        }
	        catch (e) {
	            return false;
	        }
	    };
	    /**
	     * Creates the persistable to store
	     */
	    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
	        if (typeof expire === "undefined") {
	            expire = util_1.Util.dateAdd(new Date(), "minute", this.defaultTimeoutMinutes);
	        }
	        return JSON.stringify({ expiration: expire, value: o });
	    };
	    return PnPClientStorageWrapper;
	}());
	exports.PnPClientStorageWrapper = PnPClientStorageWrapper;
	/**
	 * A class that will establish wrappers for both local and session storage
	 */
	var PnPClientStorage = (function () {
	    /**
	     * Creates a new instance of the PnPClientStorage class
	     *
	     * @constructor
	     */
	    function PnPClientStorage() {
	        this.local = typeof localStorage !== "undefined" ? new PnPClientStorageWrapper(localStorage) : null;
	        this.session = typeof sessionStorage !== "undefined" ? new PnPClientStorageWrapper(sessionStorage) : null;
	    }
	    return PnPClientStorage;
	}());
	exports.PnPClientStorage = PnPClientStorage;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(12);
	var providers = __webpack_require__(13);
	/**
	 * Class used to manage the current application settings
	 *
	 */
	var Settings = (function () {
	    /**
	     * Creates a new instance of the settings class
	     *
	     * @constructor
	     */
	    function Settings() {
	        /**
	         * Set of pre-defined providers which are available from this library
	         */
	        this.Providers = providers;
	        this._settings = new Collections.Dictionary();
	    }
	    /**
	     * Adds a new single setting, or overwrites a previous setting with the same key
	     *
	     * @param {string} key The key used to store this setting
	     * @param {string} value The setting value to store
	     */
	    Settings.prototype.add = function (key, value) {
	        this._settings.add(key, value);
	    };
	    /**
	     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
	     *
	     * @param {string} key The key used to store this setting
	     * @param {any} value The setting value to store
	     */
	    Settings.prototype.addJSON = function (key, value) {
	        this._settings.add(key, JSON.stringify(value));
	    };
	    /**
	     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
	     *
	     * @param {Collections.TypedHash<any>} hash The set of values to add
	     */
	    Settings.prototype.apply = function (hash) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            try {
	                _this._settings.merge(hash);
	                resolve();
	            }
	            catch (e) {
	                reject(e);
	            }
	        });
	    };
	    /**
	     * Loads configuration settings into the collection from the supplied provider and returns a Promise
	     *
	     * @param {IConfigurationProvider} provider The provider from which we will load the settings
	     */
	    Settings.prototype.load = function (provider) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            provider.getConfiguration().then(function (value) {
	                _this._settings.merge(value);
	                resolve();
	            }).catch(function (reason) {
	                reject(reason);
	            });
	        });
	    };
	    /**
	     * Gets a value from the configuration
	     *
	     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
	     * @return {string} string value from the configuration
	     */
	    Settings.prototype.get = function (key) {
	        return this._settings.get(key);
	    };
	    /**
	     * Gets a JSON value, rehydrating the stored string to the original object
	     *
	     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
	     * @return {any} object from the configuration
	     */
	    Settings.prototype.getJSON = function (key) {
	        var o = this.get(key);
	        if (typeof o === "undefined" || o === null) {
	            return o;
	        }
	        return JSON.parse(o);
	    };
	    return Settings;
	}());
	exports.Settings = Settings;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(9);
	/**
	 * Generic dictionary
	 */
	var Dictionary = (function () {
	    /**
	     * Creates a new instance of the Dictionary<T> class
	     *
	     * @constructor
	     */
	    function Dictionary() {
	        this.keys = [];
	        this.values = [];
	    }
	    /**
	     * Gets a value from the collection using the specified key
	     *
	     * @param key The key whose value we want to return, returns null if the key does not exist
	     */
	    Dictionary.prototype.get = function (key) {
	        var index = this.keys.indexOf(key);
	        if (index < 0) {
	            return null;
	        }
	        return this.values[index];
	    };
	    /**
	     * Adds the supplied key and value to the dictionary
	     *
	     * @param key The key to add
	     * @param o The value to add
	     */
	    Dictionary.prototype.add = function (key, o) {
	        var index = this.keys.indexOf(key);
	        if (index > -1) {
	            this.values[index] = o;
	        }
	        else {
	            this.keys.push(key);
	            this.values.push(o);
	        }
	    };
	    /**
	     * Merges the supplied typed hash into this dictionary instance. Existing values are updated and new ones are created as appropriate.
	     */
	    /* tslint:disable no-string-literal */
	    Dictionary.prototype.merge = function (source) {
	        if (util_1.Util.isFunction(source["getKeys"])) {
	            var sourceAsDictionary = source;
	            var keys = sourceAsDictionary.getKeys();
	            var l = keys.length;
	            for (var i = 0; i < l; i++) {
	                this.add(keys[i], sourceAsDictionary.get(keys[i]));
	            }
	        }
	        else {
	            var sourceAsHash = source;
	            for (var key in sourceAsHash) {
	                if (sourceAsHash.hasOwnProperty(key)) {
	                    this.add(key, source[key]);
	                }
	            }
	        }
	    };
	    /* tslint:enable */
	    /**
	     * Removes a value from the dictionary
	     *
	     * @param key The key of the key/value pair to remove. Returns null if the key was not found.
	     */
	    Dictionary.prototype.remove = function (key) {
	        var index = this.keys.indexOf(key);
	        if (index < 0) {
	            // could throw an exception here
	            return null;
	        }
	        var val = this.values[index];
	        this.keys.splice(index, 1);
	        this.values.splice(index, 1);
	        return val;
	    };
	    /**
	     * Returns all the keys currently in the dictionary as an array
	     */
	    Dictionary.prototype.getKeys = function () {
	        return this.keys;
	    };
	    /**
	     * Returns all the values currently in the dictionary as an array
	     */
	    Dictionary.prototype.getValues = function () {
	        return this.values;
	    };
	    /**
	     * Clears the current dictionary
	     */
	    Dictionary.prototype.clear = function () {
	        this.keys = [];
	        this.values = [];
	    };
	    /**
	     * Gets a count of the items currently in the dictionary
	     */
	    Dictionary.prototype.count = function () {
	        return this.keys.length;
	    };
	    return Dictionary;
	}());
	exports.Dictionary = Dictionary;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cachingConfigurationProvider_1 = __webpack_require__(14);
	var spListConfigurationProvider_1 = __webpack_require__(15);
	exports.CachingConfigurationProvider = cachingConfigurationProvider_1.default;
	exports.SPListConfigurationProvider = spListConfigurationProvider_1.default;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage = __webpack_require__(10);
	/**
	 * A caching provider which can wrap other non-caching providers
	 *
	 */
	var CachingConfigurationProvider = (function () {
	    /**
	     * Creates a new caching configuration provider
	     * @constructor
	     * @param {IConfigurationProvider} wrappedProvider Provider which will be used to fetch the configuration
	     * @param {string} cacheKey Key that will be used to store cached items to the cache
	     * @param {IPnPClientStore} cacheStore OPTIONAL storage, which will be used to store cached settings.
	     */
	    function CachingConfigurationProvider(wrappedProvider, cacheKey, cacheStore) {
	        this.wrappedProvider = wrappedProvider;
	        this.store = (cacheStore) ? cacheStore : this.selectPnPCache();
	        this.cacheKey = "_configcache_" + cacheKey;
	    }
	    /**
	     * Gets the wrapped configuration providers
	     *
	     * @return {IConfigurationProvider} Wrapped configuration provider
	     */
	    CachingConfigurationProvider.prototype.getWrappedProvider = function () {
	        return this.wrappedProvider;
	    };
	    /**
	     * Loads the configuration values either from the cache or from the wrapped provider
	     *
	     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
	     */
	    CachingConfigurationProvider.prototype.getConfiguration = function () {
	        var _this = this;
	        // Cache not available, pass control to  the wrapped provider
	        if ((!this.store) || (!this.store.enabled)) {
	            return this.wrappedProvider.getConfiguration();
	        }
	        // Value is found in cache, return it directly
	        var cachedConfig = this.store.get(this.cacheKey);
	        if (cachedConfig) {
	            return new Promise(function (resolve, reject) {
	                resolve(cachedConfig);
	            });
	        }
	        // Get and cache value from the wrapped provider
	        var providerPromise = this.wrappedProvider.getConfiguration();
	        providerPromise.then(function (providedConfig) {
	            _this.store.put(_this.cacheKey, providedConfig);
	        });
	        return providerPromise;
	    };
	    CachingConfigurationProvider.prototype.selectPnPCache = function () {
	        var pnpCache = new storage.PnPClientStorage();
	        if ((pnpCache.local) && (pnpCache.local.enabled)) {
	            return pnpCache.local;
	        }
	        if ((pnpCache.session) && (pnpCache.session.enabled)) {
	            return pnpCache.session;
	        }
	        throw new Error("Cannot create a caching configuration provider since cache is not available.");
	    };
	    return CachingConfigurationProvider;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = CachingConfigurationProvider;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var cachingConfigurationProvider_1 = __webpack_require__(14);
	/**
	 * A configuration provider which loads configuration values from a SharePoint list
	 *
	 */
	var SPListConfigurationProvider = (function () {
	    /**
	     * Creates a new SharePoint list based configuration provider
	     * @constructor
	     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
	     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default = "config")
	     */
	    function SPListConfigurationProvider(sourceWeb, sourceListTitle) {
	        if (sourceListTitle === void 0) { sourceListTitle = "config"; }
	        this.sourceWeb = sourceWeb;
	        this.sourceListTitle = sourceListTitle;
	    }
	    Object.defineProperty(SPListConfigurationProvider.prototype, "web", {
	        /**
	         * Gets the url of the SharePoint site, where the configuration list is located
	         *
	         * @return {string} Url address of the site
	         */
	        get: function () {
	            return this.sourceWeb;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(SPListConfigurationProvider.prototype, "listTitle", {
	        /**
	         * Gets the title of the SharePoint list, which contains the configuration settings
	         *
	         * @return {string} List title
	         */
	        get: function () {
	            return this.sourceListTitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Loads the configuration values from the SharePoint list
	     *
	     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
	     */
	    SPListConfigurationProvider.prototype.getConfiguration = function () {
	        return this.web.lists.getByTitle(this.listTitle).items.select("Title", "Value")
	            .getAs().then(function (data) {
	            var configuration = {};
	            data.forEach(function (i) {
	                configuration[i.Title] = i.Value;
	            });
	            return configuration;
	        });
	    };
	    /**
	     * Wraps the current provider in a cache enabled provider
	     *
	     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
	     */
	    SPListConfigurationProvider.prototype.asCaching = function () {
	        var cacheKey = "splist_" + this.web.toUrl() + "+" + this.listTitle;
	        return new cachingConfigurationProvider_1.default(this, cacheKey);
	    };
	    return SPListConfigurationProvider;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SPListConfigurationProvider;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class used to subscribe ILogListener and log messages throughout an application
	 *
	 */
	var Logger = (function () {
	    function Logger() {
	    }
	    Object.defineProperty(Logger, "activeLogLevel", {
	        get: function () {
	            return Logger.instance.activeLogLevel;
	        },
	        set: function (value) {
	            Logger.instance.activeLogLevel = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Logger, "instance", {
	        get: function () {
	            if (typeof Logger._instance === "undefined" || Logger._instance === null) {
	                Logger._instance = new LoggerImpl();
	            }
	            return Logger._instance;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds an ILogListener instance to the set of subscribed listeners
	     *
	     * @param listeners One or more listeners to subscribe to this log
	     */
	    Logger.subscribe = function () {
	        var listeners = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            listeners[_i - 0] = arguments[_i];
	        }
	        for (var i = 0; i < listeners.length; i++) {
	            Logger.instance.subscribe(listeners[i]);
	        }
	    };
	    /**
	     * Clears the subscribers collection, returning the collection before modifiction
	     */
	    Logger.clearSubscribers = function () {
	        return Logger.instance.clearSubscribers();
	    };
	    Object.defineProperty(Logger, "count", {
	        /**
	         * Gets the current subscriber count
	         */
	        get: function () {
	            return Logger.instance.count;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Writes the supplied string to the subscribed listeners
	     *
	     * @param message The message to write
	     * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Verbose)
	     */
	    Logger.write = function (message, level) {
	        if (level === void 0) { level = Logger.LogLevel.Verbose; }
	        Logger.instance.log({ level: level, message: message });
	    };
	    /**
	     * Logs the supplied entry to the subscribed listeners
	     *
	     * @param entry The message to log
	     */
	    Logger.log = function (entry) {
	        Logger.instance.log(entry);
	    };
	    /**
	     * Logs performance tracking data for the the execution duration of the supplied function using console.profile
	     *
	     * @param name The name of this profile boundary
	     * @param f The function to execute and track within this performance boundary
	     */
	    Logger.measure = function (name, f) {
	        return Logger.instance.measure(name, f);
	    };
	    return Logger;
	}());
	exports.Logger = Logger;
	var LoggerImpl = (function () {
	    function LoggerImpl(activeLogLevel, subscribers) {
	        if (activeLogLevel === void 0) { activeLogLevel = Logger.LogLevel.Warning; }
	        if (subscribers === void 0) { subscribers = []; }
	        this.activeLogLevel = activeLogLevel;
	        this.subscribers = subscribers;
	    }
	    LoggerImpl.prototype.subscribe = function (listener) {
	        this.subscribers.push(listener);
	    };
	    LoggerImpl.prototype.clearSubscribers = function () {
	        var s = this.subscribers.slice(0);
	        this.subscribers.length = 0;
	        return s;
	    };
	    Object.defineProperty(LoggerImpl.prototype, "count", {
	        get: function () {
	            return this.subscribers.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LoggerImpl.prototype.write = function (message, level) {
	        if (level === void 0) { level = Logger.LogLevel.Verbose; }
	        this.log({ level: level, message: message });
	    };
	    LoggerImpl.prototype.log = function (entry) {
	        if (typeof entry === "undefined" || entry.level < this.activeLogLevel) {
	            return;
	        }
	        for (var i = 0; i < this.subscribers.length; i++) {
	            this.subscribers[i].log(entry);
	        }
	    };
	    LoggerImpl.prototype.measure = function (name, f) {
	        console.profile(name);
	        try {
	            return f();
	        }
	        finally {
	            console.profileEnd();
	        }
	    };
	    return LoggerImpl;
	}());
	/**
	 * This module is merged with the Logger class and then exposed via the API as path of pnp.log
	 */
	var Logger;
	(function (Logger) {
	    /**
	     * A set of logging levels
	     *
	     */
	    (function (LogLevel) {
	        LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
	        LogLevel[LogLevel["Info"] = 1] = "Info";
	        LogLevel[LogLevel["Warning"] = 2] = "Warning";
	        LogLevel[LogLevel["Error"] = 3] = "Error";
	        LogLevel[LogLevel["Off"] = 99] = "Off";
	    })(Logger.LogLevel || (Logger.LogLevel = {}));
	    var LogLevel = Logger.LogLevel;
	    /**
	     * Implementation of ILogListener which logs to the browser console
	     *
	     */
	    var ConsoleListener = (function () {
	        function ConsoleListener() {
	        }
	        /**
	         * Any associated data that a given logging listener may choose to log or ignore
	         *
	         * @param entry The information to be logged
	         */
	        ConsoleListener.prototype.log = function (entry) {
	            var msg = this.format(entry);
	            switch (entry.level) {
	                case LogLevel.Verbose:
	                case LogLevel.Info:
	                    console.log(msg);
	                    break;
	                case LogLevel.Warning:
	                    console.warn(msg);
	                    break;
	                case LogLevel.Error:
	                    console.error(msg);
	                    break;
	            }
	        };
	        /**
	         * Formats the message
	         *
	         * @param entry The information to format into a string
	         */
	        ConsoleListener.prototype.format = function (entry) {
	            return "Message: " + entry.message + ". Data: " + JSON.stringify(entry.data);
	        };
	        return ConsoleListener;
	    }());
	    Logger.ConsoleListener = ConsoleListener;
	    /* tslint:disable */
	    /**
	     * Implementation of ILogListener which logs to Azure Insights
	     *
	     */
	    var AzureInsightsListener = (function () {
	        /**
	         * Creats a new instance of the AzureInsightsListener class
	         *
	         * @constructor
	         * @param azureInsightsInstrumentationKey The instrumentation key created when the Azure Insights instance was created
	         */
	        function AzureInsightsListener(azureInsightsInstrumentationKey) {
	            this.azureInsightsInstrumentationKey = azureInsightsInstrumentationKey;
	            var appInsights = window["appInsights"] || function (config) {
	                function r(config) {
	                    t[config] = function () {
	                        var i = arguments;
	                        t.queue.push(function () { t[config].apply(t, i); });
	                    };
	                }
	                var t = { config: config }, u = document, e = window, o = "script", s = u.createElement(o), i, f;
	                for (s.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", u.getElementsByTagName(o)[0].parentNode.appendChild(s), t.cookie = u.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) {
	                    r("track" + i.pop());
	                }
	                return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) {
	                    var s = f && f(config, r, u, e, o);
	                    return s !== !0 && t["_" + i](config, r, u, e, o), s;
	                }), t;
	            }({
	                instrumentationKey: this.azureInsightsInstrumentationKey
	            });
	            window["appInsights"] = appInsights;
	        }
	        /**
	         * Any associated data that a given logging listener may choose to log or ignore
	         *
	         * @param entry The information to be logged
	         */
	        AzureInsightsListener.prototype.log = function (entry) {
	            var ai = window["appInsights"];
	            var msg = this.format(entry);
	            if (entry.level === LogLevel.Error) {
	                ai.trackException(msg);
	            }
	            else {
	                ai.trackEvent(msg);
	            }
	        };
	        /**
	         * Formats the message
	         *
	         * @param entry The information to format into a string
	         */
	        AzureInsightsListener.prototype.format = function (entry) {
	            return "Message: " + entry.message + ". Data: " + JSON.stringify(entry.data);
	        };
	        return AzureInsightsListener;
	    }());
	    Logger.AzureInsightsListener = AzureInsightsListener;
	    /* tslint:enable */
	    /**
	     * Implementation of ILogListener which logs to the supplied function
	     *
	     */
	    var FunctionListener = (function () {
	        /**
	         * Creates a new instance of the FunctionListener class
	         *
	         * @constructor
	         * @param  method The method to which any logging data will be passed
	         */
	        function FunctionListener(method) {
	            this.method = method;
	        }
	        /**
	         * Any associated data that a given logging listener may choose to log or ignore
	         *
	         * @param entry The information to be logged
	         */
	        FunctionListener.prototype.log = function (entry) {
	            this.method(entry);
	        };
	        return FunctionListener;
	    }());
	    Logger.FunctionListener = FunctionListener;
	})(Logger = exports.Logger || (exports.Logger = {}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var search_1 = __webpack_require__(18);
	var site_1 = __webpack_require__(28);
	var webs_1 = __webpack_require__(29);
	var util_1 = __webpack_require__(9);
	var userprofiles_1 = __webpack_require__(47);
	var odata_1 = __webpack_require__(23);
	/**
	 * Root of the SharePoint REST module
	 */
	var Rest = (function () {
	    function Rest() {
	    }
	    /**
	     * Executes a search against this web context
	     *
	     * @param query The SearchQuery definition
	     */
	    Rest.prototype.search = function (query) {
	        var finalQuery;
	        if (typeof query === "string") {
	            finalQuery = { Querytext: query };
	        }
	        else {
	            finalQuery = query;
	        }
	        return new search_1.Search("").execute(finalQuery);
	    };
	    Object.defineProperty(Rest.prototype, "site", {
	        /**
	         * Begins a site collection scoped REST request
	         *
	         */
	        get: function () {
	            return new site_1.Site("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rest.prototype, "web", {
	        /**
	         * Begins a web scoped REST request
	         *
	         */
	        get: function () {
	            return new webs_1.Web("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rest.prototype, "profiles", {
	        /**
	         * Access to user profile methods
	         *
	         */
	        get: function () {
	            return new userprofiles_1.UserProfileQuery("");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creates a new batch object for use with the Queryable.addToBatch method
	     *
	     */
	    Rest.prototype.createBatch = function () {
	        return new odata_1.ODataBatch();
	    };
	    /**
	     * Begins a cross-domain, host site scoped REST request, for use in add-in webs
	     *
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     */
	    Rest.prototype.crossDomainSite = function (addInWebUrl, hostWebUrl) {
	        return this._cdImpl(site_1.Site, addInWebUrl, hostWebUrl, "site");
	    };
	    /**
	     * Begins a cross-domain, host web scoped REST request, for use in add-in webs
	     *
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     */
	    Rest.prototype.crossDomainWeb = function (addInWebUrl, hostWebUrl) {
	        return this._cdImpl(webs_1.Web, addInWebUrl, hostWebUrl, "web");
	    };
	    /**
	     * Implements the creation of cross domain REST urls
	     *
	     * @param factory The constructor of the object to create Site | Web
	     * @param addInWebUrl The absolute url of the add-in web
	     * @param hostWebUrl The absolute url of the host web
	     * @param urlPart String part to append to the url "site" | "web"
	     */
	    Rest.prototype._cdImpl = function (factory, addInWebUrl, hostWebUrl, urlPart) {
	        if (!util_1.Util.isUrlAbsolute(addInWebUrl)) {
	            throw "The addInWebUrl parameter must be an absolute url.";
	        }
	        if (!util_1.Util.isUrlAbsolute(hostWebUrl)) {
	            throw "The hostWebUrl parameter must be an absolute url.";
	        }
	        var url = util_1.Util.combinePaths(addInWebUrl, "_api/SP.AppContextSite(@target)");
	        var instance = new factory(url, urlPart);
	        instance.query.add("@target", "'" + encodeURIComponent(hostWebUrl) + "'");
	        return instance;
	    };
	    return Rest;
	}());
	exports.Rest = Rest;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	/**
	 * Describes the search API
	 *
	 */
	var Search = (function (_super) {
	    __extends(Search, _super);
	    /**
	     * Creates a new instance of the Search class
	     *
	     * @param baseUrl The url for the search context
	     * @param query The SearchQuery object to execute
	     */
	    function Search(baseUrl, path) {
	        if (path === void 0) { path = "_api/search/postquery"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * .......
	     * @returns Promise
	     */
	    Search.prototype.execute = function (query) {
	        var formattedBody;
	        formattedBody = query;
	        if (formattedBody.SelectProperties) {
	            formattedBody.SelectProperties = { results: query.SelectProperties };
	        }
	        if (formattedBody.RefinementFilters) {
	            formattedBody.RefinementFilters = { results: query.RefinementFilters };
	        }
	        if (formattedBody.Refiners) {
	            formattedBody.Refiners = { results: query.Refiners };
	        }
	        if (formattedBody.SortList) {
	            formattedBody.SortList = { results: query.SortList };
	        }
	        if (formattedBody.HithighlightedProperties) {
	            formattedBody.HithighlightedProperties = { results: query.HithighlightedProperties };
	        }
	        if (formattedBody.ReorderingRules) {
	            formattedBody.ReorderingRules = { results: query.ReorderingRules };
	        }
	        // TODO: Properties & ReorderingRules
	        var postBody = JSON.stringify({ request: formattedBody });
	        return this.post({ body: postBody }).then(function (data) {
	            return new SearchResults(data);
	        });
	    };
	    return Search;
	}(queryable_1.QueryableInstance));
	exports.Search = Search;
	/**
	 * Describes the SearchResults class, which returns the formatted and raw version of the query response
	 */
	var SearchResults = (function () {
	    /**
	     * Creates a new instance of the SearchResult class
	     *
	     */
	    function SearchResults(rawResponse) {
	        var response = rawResponse.postquery ? rawResponse.postquery : rawResponse;
	        this.PrimarySearchResults = this.formatSearchResults(response.PrimaryQueryResult.RelevantResults.Table.Rows);
	        this.RawSearchResults = response;
	        this.ElapsedTime = response.ElapsedTime;
	        this.RowCount = response.PrimaryQueryResult.RelevantResults.RowCount;
	        this.TotalRows = response.PrimaryQueryResult.RelevantResults.TotalRows;
	        this.TotalRowsIncludingDuplicates = response.PrimaryQueryResult.RelevantResults.TotalRowsIncludingDuplicates;
	    }
	    /**
	     * Formats a search results array
	     *
	     * @param rawResults The array to process
	     */
	    SearchResults.prototype.formatSearchResults = function (rawResults) {
	        var results = new Array(), tempResults = rawResults.results ? rawResults.results : rawResults;
	        for (var _i = 0, tempResults_1 = tempResults; _i < tempResults_1.length; _i++) {
	            var i = tempResults_1[_i];
	            results.push(new SearchResult(i.Cells));
	        }
	        return results;
	    };
	    return SearchResults;
	}());
	exports.SearchResults = SearchResults;
	/**
	 * Describes the SearchResult class
	 */
	var SearchResult = (function () {
	    /**
	     * Creates a new instance of the SearchResult class
	     *
	     */
	    function SearchResult(rawItem) {
	        var item = rawItem.results ? rawItem.results : rawItem;
	        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
	            var i = item_1[_i];
	            this[i.Key] = i.Value;
	        }
	    }
	    return SearchResult;
	}());
	exports.SearchResult = SearchResult;
	/**
	 * defines the SortDirection enum
	 */
	(function (SortDirection) {
	    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
	    SortDirection[SortDirection["Descending"] = 1] = "Descending";
	    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
	})(exports.SortDirection || (exports.SortDirection = {}));
	var SortDirection = exports.SortDirection;
	/**
	 * defines the ReorderingRuleMatchType  enum
	 */
	(function (ReorderingRuleMatchType) {
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
	    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
	})(exports.ReorderingRuleMatchType || (exports.ReorderingRuleMatchType = {}));
	var ReorderingRuleMatchType = exports.ReorderingRuleMatchType;
	/**
	 * Specifies the type value for the property
	 */
	(function (QueryPropertyValueType) {
	    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
	    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
	    QueryPropertyValueType[QueryPropertyValueType["Int32TYpe"] = 2] = "Int32TYpe";
	    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
	    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
	    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
	})(exports.QueryPropertyValueType || (exports.QueryPropertyValueType = {}));
	var QueryPropertyValueType = exports.QueryPropertyValueType;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(9);
	var collections_1 = __webpack_require__(12);
	var httpclient_1 = __webpack_require__(20);
	var odata_1 = __webpack_require__(23);
	var caching_1 = __webpack_require__(27);
	var pnplibconfig_1 = __webpack_require__(24);
	/**
	 * Queryable Base Class
	 *
	 */
	var Queryable = (function () {
	    /**
	     * Creates a new instance of the Queryable class
	     *
	     * @constructor
	     * @param baseUrl A string or Queryable that should form the base part of the url
	     *
	     */
	    function Queryable(baseUrl, path) {
	        this._query = new collections_1.Dictionary();
	        this._batch = null;
	        if (typeof baseUrl === "string") {
	            // we need to do some extra parsing to get the parent url correct if we are
	            // being created from just a string.
	            var urlStr = baseUrl;
	            if (urlStr.lastIndexOf("/") < 0) {
	                this._parentUrl = urlStr;
	                this._url = util_1.Util.combinePaths(urlStr, path);
	            }
	            else if (urlStr.lastIndexOf("/") > urlStr.lastIndexOf("(")) {
	                var index = urlStr.lastIndexOf("/");
	                this._parentUrl = urlStr.slice(0, index);
	                path = util_1.Util.combinePaths(urlStr.slice(index), path);
	                this._url = util_1.Util.combinePaths(this._parentUrl, path);
	            }
	            else {
	                var index = urlStr.lastIndexOf("(");
	                this._parentUrl = urlStr.slice(0, index);
	                this._url = util_1.Util.combinePaths(urlStr, path);
	            }
	        }
	        else {
	            var q = baseUrl;
	            this._parentUrl = q._url;
	            // only copy batch if we don't already have one
	            if (!this.hasBatch && q.hasBatch) {
	                this._batch = q._batch;
	            }
	            var target = q._query.get("@target");
	            if (target !== null) {
	                this._query.add("@target", target);
	            }
	            this._url = util_1.Util.combinePaths(this._parentUrl, path);
	        }
	    }
	    /**
	     * Directly concatonates the supplied string to the current url, not normalizing "/" chars
	     *
	     * @param pathPart The string to concatonate to the url
	     */
	    Queryable.prototype.concat = function (pathPart) {
	        this._url += pathPart;
	    };
	    /**
	     * Appends the given string and normalizes "/" chars
	     *
	     * @param pathPart The string to append
	     */
	    Queryable.prototype.append = function (pathPart) {
	        this._url = util_1.Util.combinePaths(this._url, pathPart);
	    };
	    /**
	     * Blocks a batch call from occuring, MUST be cleared with clearBatchDependency before a request will execute
	     */
	    Queryable.prototype.addBatchDependency = function () {
	        if (this._batch !== null) {
	            this._batch.incrementBatchDep();
	        }
	    };
	    /**
	     * Clears a batch request dependency
	     */
	    Queryable.prototype.clearBatchDependency = function () {
	        if (this._batch !== null) {
	            this._batch.decrementBatchDep();
	        }
	    };
	    Object.defineProperty(Queryable.prototype, "hasBatch", {
	        /**
	         * Indicates if the current query has a batch associated
	         *
	         */
	        get: function () {
	            return this._batch !== null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queryable.prototype, "parentUrl", {
	        /**
	         * Gets the parent url used when creating this instance
	         *
	         */
	        get: function () {
	            return this._parentUrl;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Queryable.prototype, "query", {
	        /**
	         * Provides access to the query builder for this url
	         *
	         */
	        get: function () {
	            return this._query;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Adds this query to the supplied batch
	     *
	     * @example
	     * ```
	     *
	     * let b = pnp.sp.createBatch();
	     * pnp.sp.web.inBatch(b).get().then(...);
	     * ```
	     */
	    Queryable.prototype.inBatch = function (batch) {
	        if (this._batch !== null) {
	            // TODO: what do we want to do?
	            throw new Error("This query is already part of a batch.");
	        }
	        this._batch = batch;
	        return this;
	    };
	    /**
	     * Enables caching for this request
	     *
	     * @param options Defines the options used when caching this request
	     */
	    Queryable.prototype.usingCaching = function (options) {
	        if (!pnplibconfig_1.RuntimeConfig.globalCacheDisable) {
	            this._useCaching = true;
	            this._cachingOptions = options;
	        }
	        return this;
	    };
	    /**
	     * Gets the currentl url, made server relative or absolute based on the availability of the _spPageContextInfo object
	     *
	     */
	    Queryable.prototype.toUrl = function () {
	        return util_1.Util.makeUrlAbsolute(this._url);
	    };
	    /**
	     * Gets the full url with query information
	     *
	     */
	    Queryable.prototype.toUrlAndQuery = function () {
	        var _this = this;
	        var url = this.toUrl();
	        if (this._query.count() > 0) {
	            url += "?";
	            var keys = this._query.getKeys();
	            url += keys.map(function (key, ix, arr) { return (key + "=" + _this._query.get(key)); }).join("&");
	        }
	        return url;
	    };
	    /**
	     * Executes the currently built request
	     *
	     */
	    Queryable.prototype.get = function (parser, getOptions) {
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        if (getOptions === void 0) { getOptions = {}; }
	        return this.getImpl(getOptions, parser);
	    };
	    Queryable.prototype.getAs = function (parser, getOptions) {
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        if (getOptions === void 0) { getOptions = {}; }
	        return this.getImpl(getOptions, parser);
	    };
	    Queryable.prototype.post = function (postOptions, parser) {
	        if (postOptions === void 0) { postOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.postImpl(postOptions, parser);
	    };
	    Queryable.prototype.postAs = function (postOptions, parser) {
	        if (postOptions === void 0) { postOptions = {}; }
	        if (parser === void 0) { parser = new odata_1.ODataDefaultParser(); }
	        return this.postImpl(postOptions, parser);
	    };
	    /**
	     * Gets a parent for this isntance as specified
	     *
	     * @param factory The contructor for the class to create
	     */
	    Queryable.prototype.getParent = function (factory, baseUrl, path) {
	        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
	        var parent = new factory(baseUrl, path);
	        var target = this.query.get("@target");
	        if (target !== null) {
	            parent.query.add("@target", target);
	        }
	        return parent;
	    };
	    Queryable.prototype.getImpl = function (getOptions, parser) {
	        if (getOptions === void 0) { getOptions = {}; }
	        if (this._useCaching) {
	            var options = new caching_1.CachingOptions(this.toUrlAndQuery().toLowerCase());
	            if (typeof this._cachingOptions !== "undefined") {
	                options = util_1.Util.extend(options, this._cachingOptions);
	            }
	            // we may not have a valid store, i.e. on node
	            if (options.store !== null) {
	                // check if we have the data in cache and if so return a resolved promise
	                var data_1 = options.store.get(options.key);
	                if (data_1 !== null) {
	                    return new Promise(function (resolve) { return resolve(data_1); });
	                }
	            }
	            // if we don't then wrap the supplied parser in the caching parser wrapper
	            // and send things on their way
	            parser = new caching_1.CachingParserWrapper(parser, options);
	        }
	        if (this._batch === null) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.get(this.toUrlAndQuery(), getOptions).then(function (response) {
	                if (!response.ok) {
	                    throw "Error making GET request: " + response.statusText;
	                }
	                return parser.parse(response);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "GET", {}, parser);
	        }
	    };
	    Queryable.prototype.postImpl = function (postOptions, parser) {
	        if (this._batch === null) {
	            // we are not part of a batch, so proceed as normal
	            var client = new httpclient_1.HttpClient();
	            return client.post(this.toUrlAndQuery(), postOptions).then(function (response) {
	                // 200 = OK (delete)
	                // 201 = Created (create)
	                // 204 = No Content (update)
	                if (!response.ok) {
	                    throw "Error making POST request: " + response.statusText;
	                }
	                if ((response.headers.has("Content-Length") && parseFloat(response.headers.get("Content-Length")) === 0)
	                    || response.status === 204) {
	                    // in these cases the server has returned no content, so we create an empty object
	                    // this was done because the fetch browser methods throw exceptions with no content
	                    return new Promise(function (resolve, reject) { resolve({}); });
	                }
	                // pipe our parsed content
	                return parser.parse(response);
	            });
	        }
	        else {
	            return this._batch.add(this.toUrlAndQuery(), "POST", postOptions, parser);
	        }
	    };
	    return Queryable;
	}());
	exports.Queryable = Queryable;
	/**
	 * Represents a REST collection which can be filtered, paged, and selected
	 *
	 */
	var QueryableCollection = (function (_super) {
	    __extends(QueryableCollection, _super);
	    function QueryableCollection() {
	        _super.apply(this, arguments);
	    }
	    /**
	     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
	     *
	     * @param filter The string representing the filter query
	     */
	    QueryableCollection.prototype.filter = function (filter) {
	        this._query.add("$filter", filter);
	        return this;
	    };
	    /**
	     * Choose which fields to return
	     *
	     * @param selects One or more fields to return
	     */
	    QueryableCollection.prototype.select = function () {
	        var selects = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            selects[_i - 0] = arguments[_i];
	        }
	        this._query.add("$select", selects.join(","));
	        return this;
	    };
	    /**
	     * Expands fields such as lookups to get additional data
	     *
	     * @param expands The Fields for which to expand the values
	     */
	    QueryableCollection.prototype.expand = function () {
	        var expands = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            expands[_i - 0] = arguments[_i];
	        }
	        this._query.add("$expand", expands.join(","));
	        return this;
	    };
	    /**
	     * Orders based on the supplied fields ascending
	     *
	     * @param orderby The name of the field to sort on
	     * @param ascending If true ASC is appended, otherwise DESC (default)
	     */
	    QueryableCollection.prototype.orderBy = function (orderBy, ascending) {
	        if (ascending === void 0) { ascending = false; }
	        var keys = this._query.getKeys();
	        var query = [];
	        var asc = ascending ? " asc" : "";
	        for (var i = 0; i < keys.length; i++) {
	            if (keys[i] === "$orderby") {
	                query.push(this._query.get("$orderby"));
	                break;
	            }
	        }
	        query.push("" + orderBy + asc);
	        this._query.add("$orderby", query.join(","));
	        return this;
	    };
	    /**
	     * Skips the specified number of items
	     *
	     * @param skip The number of items to skip
	     */
	    QueryableCollection.prototype.skip = function (skip) {
	        this._query.add("$skip", skip.toString());
	        return this;
	    };
	    /**
	     * Limits the query to only return the specified number of items
	     *
	     * @param top The query row limit
	     */
	    QueryableCollection.prototype.top = function (top) {
	        this._query.add("$top", top.toString());
	        return this;
	    };
	    return QueryableCollection;
	}(Queryable));
	exports.QueryableCollection = QueryableCollection;
	/**
	 * Represents an instance that can be selected
	 *
	 */
	var QueryableInstance = (function (_super) {
	    __extends(QueryableInstance, _super);
	    function QueryableInstance() {
	        _super.apply(this, arguments);
	    }
	    /**
	     * Choose which fields to return
	     *
	     * @param selects One or more fields to return
	     */
	    QueryableInstance.prototype.select = function () {
	        var selects = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            selects[_i - 0] = arguments[_i];
	        }
	        this._query.add("$select", selects.join(","));
	        return this;
	    };
	    /**
	     * Expands fields such as lookups to get additional data
	     *
	     * @param expands The Fields for which to expand the values
	     */
	    QueryableInstance.prototype.expand = function () {
	        var expands = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            expands[_i - 0] = arguments[_i];
	        }
	        this._query.add("$expand", expands.join(","));
	        return this;
	    };
	    return QueryableInstance;
	}(Queryable));
	exports.QueryableInstance = QueryableInstance;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var fetchclient_1 = __webpack_require__(21);
	var digestcache_1 = __webpack_require__(22);
	var util_1 = __webpack_require__(9);
	var pnplibconfig_1 = __webpack_require__(24);
	var sprequestexecutorclient_1 = __webpack_require__(25);
	var nodefetchclient_1 = __webpack_require__(26);
	var HttpClient = (function () {
	    function HttpClient() {
	        this._impl = this.getFetchImpl();
	        this._digestCache = new digestcache_1.DigestCache(this);
	    }
	    HttpClient.prototype.fetch = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var self = this;
	        var opts = util_1.Util.extend(options, { cache: "no-cache", credentials: "same-origin" }, true);
	        var headers = new Headers();
	        // first we add the global headers so they can be overwritten by any passed in locally to this call
	        this.mergeHeaders(headers, pnplibconfig_1.RuntimeConfig.headers);
	        // second we add the local options so we can overwrite the globals
	        this.mergeHeaders(headers, options.headers);
	        // lastly we apply any default headers we need that may not exist
	        if (!headers.has("Accept")) {
	            headers.append("Accept", "application/json");
	        }
	        if (!headers.has("Content-Type")) {
	            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
	        }
	        if (!headers.has("X-ClientService-ClientTag")) {
	            headers.append("X-ClientService-ClientTag", "PnPCoreJS:1.0.4");
	        }
	        opts = util_1.Util.extend(opts, { headers: headers });
	        if (opts.method && opts.method.toUpperCase() !== "GET") {
	            if (!headers.has("X-RequestDigest")) {
	                var index = url.indexOf("_api/");
	                if (index < 0) {
	                    throw new Error("Unable to determine API url");
	                }
	                var webUrl = url.substr(0, index);
	                return this._digestCache.getDigest(webUrl)
	                    .then(function (digest) {
	                    headers.append("X-RequestDigest", digest);
	                    return self.fetchRaw(url, opts);
	                });
	            }
	        }
	        return self.fetchRaw(url, opts);
	    };
	    HttpClient.prototype.fetchRaw = function (url, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        // here we need to normalize the headers
	        var rawHeaders = new Headers();
	        this.mergeHeaders(rawHeaders, options.headers);
	        options = util_1.Util.extend(options, { headers: rawHeaders });
	        var retry = function (ctx) {
	            _this._impl.fetch(url, options).then(function (response) { return ctx.resolve(response); }).catch(function (response) {
	                // grab our current delay
	                var delay = ctx.delay;
	                // Check if request was throttled - http status code 429 
	                // Check is request failed due to server unavailable - http status code 503 
	                if (response.status !== 429 && response.status !== 503) {
	                    ctx.reject(response);
	                }
	                // Increment our counters.
	                ctx.delay *= 2;
	                ctx.attempts++;
	                // If we have exceeded the retry count, reject.
	                if (ctx.retryCount <= ctx.attempts) {
	                    ctx.reject(response);
	                }
	                // Set our retry timeout for {delay} milliseconds.
	                setTimeout(util_1.Util.getCtxCallback(_this, retry, ctx), delay);
	            });
	        };
	        return new Promise(function (resolve, reject) {
	            var retryContext = {
	                attempts: 0,
	                delay: 100,
	                reject: reject,
	                resolve: resolve,
	                retryCount: 7,
	            };
	            retry.call(_this, retryContext);
	        });
	    };
	    HttpClient.prototype.get = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "GET" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.post = function (url, options) {
	        if (options === void 0) { options = {}; }
	        var opts = util_1.Util.extend(options, { method: "POST" });
	        return this.fetch(url, opts);
	    };
	    HttpClient.prototype.getFetchImpl = function () {
	        if (pnplibconfig_1.RuntimeConfig.useSPRequestExecutor) {
	            return new sprequestexecutorclient_1.SPRequestExecutorClient();
	        }
	        else if (pnplibconfig_1.RuntimeConfig.useNodeFetchClient) {
	            var opts = pnplibconfig_1.RuntimeConfig.nodeRequestOptions;
	            return new nodefetchclient_1.NodeFetchClient(opts.siteUrl, opts.clientId, opts.clientSecret);
	        }
	        else {
	            return new fetchclient_1.FetchClient();
	        }
	    };
	    HttpClient.prototype.mergeHeaders = function (target, source) {
	        if (typeof source !== "undefined" && source !== null) {
	            var temp = new Request("", { headers: source });
	            temp.headers.forEach(function (value, name) {
	                target.append(name, value);
	            });
	        }
	    };
	    return HttpClient;
	}());
	exports.HttpClient = HttpClient;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	/**
	 * Makes requests using the fetch API
	 */
	var FetchClient = (function () {
	    function FetchClient() {
	    }
	    FetchClient.prototype.fetch = function (url, options) {
	        return global.fetch(url, options);
	    };
	    return FetchClient;
	}());
	exports.FetchClient = FetchClient;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(12);
	var util_1 = __webpack_require__(9);
	var odata_1 = __webpack_require__(23);
	var CachedDigest = (function () {
	    function CachedDigest() {
	    }
	    return CachedDigest;
	}());
	exports.CachedDigest = CachedDigest;
	var DigestCache = (function () {
	    function DigestCache(_httpClient, _digests) {
	        if (_digests === void 0) { _digests = new collections_1.Dictionary(); }
	        this._httpClient = _httpClient;
	        this._digests = _digests;
	    }
	    DigestCache.prototype.getDigest = function (webUrl) {
	        var self = this;
	        var cachedDigest = this._digests.get(webUrl);
	        if (cachedDigest !== null) {
	            var now = new Date();
	            if (now < cachedDigest.expiration) {
	                return Promise.resolve(cachedDigest.value);
	            }
	        }
	        var url = util_1.Util.combinePaths(webUrl, "/_api/contextinfo");
	        return self._httpClient.fetchRaw(url, {
	            cache: "no-cache",
	            credentials: "same-origin",
	            headers: {
	                "Accept": "application/json;odata=verbose",
	                "Content-type": "application/json;odata=verbose;charset=utf-8",
	            },
	            method: "POST",
	        }).then(function (response) {
	            var parser = new odata_1.ODataDefaultParser();
	            return parser.parse(response).then(function (d) { return d.GetContextWebInformation; });
	        }).then(function (data) {
	            var newCachedDigest = new CachedDigest();
	            newCachedDigest.value = data.FormDigestValue;
	            var seconds = data.FormDigestTimeoutSeconds;
	            var expiration = new Date();
	            expiration.setTime(expiration.getTime() + 1000 * seconds);
	            newCachedDigest.expiration = expiration;
	            self._digests.add(webUrl, newCachedDigest);
	            return newCachedDigest.value;
	        });
	    };
	    DigestCache.prototype.clear = function () {
	        this._digests.clear();
	    };
	    return DigestCache;
	}());
	exports.DigestCache = DigestCache;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(9);
	var logging_1 = __webpack_require__(16);
	var httpclient_1 = __webpack_require__(20);
	var pnplibconfig_1 = __webpack_require__(24);
	function extractOdataId(candidate) {
	    if (candidate.hasOwnProperty("odata.id")) {
	        return candidate["odata.id"];
	    }
	    else if (candidate.hasOwnProperty("__metadata") && candidate.__metadata.hasOwnProperty("id")) {
	        return candidate.__metadata.id;
	    }
	    else {
	        logging_1.Logger.log({
	            data: candidate,
	            level: logging_1.Logger.LogLevel.Error,
	            message: "Could not extract odata id in object, you may be using nometadata. Object data logged to logger.",
	        });
	        throw new Error("Could not extract odata id in object, you may be using nometadata. Object data logged to logger.");
	    }
	}
	exports.extractOdataId = extractOdataId;
	var ODataParserBase = (function () {
	    function ODataParserBase() {
	    }
	    ODataParserBase.prototype.parse = function (r) {
	        return r.json().then(function (json) {
	            var result = json;
	            if (json.hasOwnProperty("d")) {
	                if (json.d.hasOwnProperty("results")) {
	                    result = json.d.results;
	                }
	                else {
	                    result = json.d;
	                }
	            }
	            else if (json.hasOwnProperty("value")) {
	                result = json.value;
	            }
	            return result;
	        });
	    };
	    return ODataParserBase;
	}());
	exports.ODataParserBase = ODataParserBase;
	var ODataDefaultParser = (function (_super) {
	    __extends(ODataDefaultParser, _super);
	    function ODataDefaultParser() {
	        _super.apply(this, arguments);
	    }
	    return ODataDefaultParser;
	}(ODataParserBase));
	exports.ODataDefaultParser = ODataDefaultParser;
	var ODataRawParserImpl = (function () {
	    function ODataRawParserImpl() {
	    }
	    ODataRawParserImpl.prototype.parse = function (r) {
	        return r.json();
	    };
	    return ODataRawParserImpl;
	}());
	exports.ODataRawParserImpl = ODataRawParserImpl;
	var ODataValueParserImpl = (function (_super) {
	    __extends(ODataValueParserImpl, _super);
	    function ODataValueParserImpl() {
	        _super.apply(this, arguments);
	    }
	    ODataValueParserImpl.prototype.parse = function (r) {
	        return _super.prototype.parse.call(this, r).then(function (d) { return d; });
	    };
	    return ODataValueParserImpl;
	}(ODataParserBase));
	var ODataEntityParserImpl = (function (_super) {
	    __extends(ODataEntityParserImpl, _super);
	    function ODataEntityParserImpl(factory) {
	        _super.call(this);
	        this.factory = factory;
	    }
	    ODataEntityParserImpl.prototype.parse = function (r) {
	        var _this = this;
	        return _super.prototype.parse.call(this, r).then(function (d) {
	            var o = new _this.factory(getEntityUrl(d), null);
	            return util_1.Util.extend(o, d);
	        });
	    };
	    return ODataEntityParserImpl;
	}(ODataParserBase));
	var ODataEntityArrayParserImpl = (function (_super) {
	    __extends(ODataEntityArrayParserImpl, _super);
	    function ODataEntityArrayParserImpl(factory) {
	        _super.call(this);
	        this.factory = factory;
	    }
	    ODataEntityArrayParserImpl.prototype.parse = function (r) {
	        var _this = this;
	        return _super.prototype.parse.call(this, r).then(function (d) {
	            return d.map(function (v) {
	                var o = new _this.factory(getEntityUrl(v), null);
	                return util_1.Util.extend(o, v);
	            });
	        });
	    };
	    return ODataEntityArrayParserImpl;
	}(ODataParserBase));
	function getEntityUrl(entity) {
	    if (entity.hasOwnProperty("__metadata")) {
	        // we are dealing with verbose, which has an absolute uri
	        return entity.__metadata.uri;
	    }
	    else if (entity.hasOwnProperty("odata.editLink")) {
	        // we are dealign with minimal metadata (default)
	        return util_1.Util.combinePaths("_api", entity["odata.editLink"]);
	    }
	    else {
	        // we are likely dealing with nometadata, so don't error but we won't be able to
	        // chain off these objects (write something to log?)
	        logging_1.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", logging_1.Logger.LogLevel.Warning);
	        return "";
	    }
	}
	exports.ODataRaw = new ODataRawParserImpl();
	function ODataValue() {
	    return new ODataValueParserImpl();
	}
	exports.ODataValue = ODataValue;
	function ODataEntity(factory) {
	    return new ODataEntityParserImpl(factory);
	}
	exports.ODataEntity = ODataEntity;
	function ODataEntityArray(factory) {
	    return new ODataEntityArrayParserImpl(factory);
	}
	exports.ODataEntityArray = ODataEntityArray;
	/**
	 * Manages a batch of OData operations
	 */
	var ODataBatch = (function () {
	    function ODataBatch(_batchId) {
	        if (_batchId === void 0) { _batchId = util_1.Util.getGUID(); }
	        this._batchId = _batchId;
	        this._requests = [];
	        this._batchDepCount = 0;
	    }
	    /**
	     * Adds a request to a batch (not designed for public use)
	     *
	     * @param url The full url of the request
	     * @param method The http method GET, POST, etc
	     * @param options Any options to include in the request
	     * @param parser The parser that will hadle the results of the request
	     */
	    ODataBatch.prototype.add = function (url, method, options, parser) {
	        var info = {
	            method: method.toUpperCase(),
	            options: options,
	            parser: parser,
	            reject: null,
	            resolve: null,
	            url: url,
	        };
	        var p = new Promise(function (resolve, reject) {
	            info.resolve = resolve;
	            info.reject = reject;
	        });
	        this._requests.push(info);
	        return p;
	    };
	    ODataBatch.prototype.incrementBatchDep = function () {
	        this._batchDepCount++;
	    };
	    ODataBatch.prototype.decrementBatchDep = function () {
	        this._batchDepCount--;
	    };
	    /**
	     * Execute the current batch and resolve the associated promises
	     *
	     * @returns A promise which will be resolved once all of the batch's child promises have resolved
	     */
	    ODataBatch.prototype.execute = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            if (_this._batchDepCount > 0) {
	                setTimeout(function () { return _this.execute(); }, 100);
	            }
	            else {
	                _this.executeImpl().then(function () { return resolve(); }).catch(reject);
	            }
	        });
	    };
	    ODataBatch.prototype.executeImpl = function () {
	        var _this = this;
	        // if we don't have any requests, don't bother sending anything
	        // this could be due to caching further upstream, or just an empty batch 
	        if (this._requests.length < 1) {
	            return new Promise(function (r) { return r(); });
	        }
	        // build all the requests, send them, pipe results in order to parsers
	        var batchBody = [];
	        var currentChangeSetId = "";
	        this._requests.forEach(function (reqInfo, index) {
	            if (reqInfo.method === "GET") {
	                if (currentChangeSetId.length > 0) {
	                    // end an existing change set
	                    batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
	                    currentChangeSetId = "";
	                }
	                batchBody.push("--batch_" + _this._batchId + "\n");
	            }
	            else {
	                if (currentChangeSetId.length < 1) {
	                    // start new change set
	                    currentChangeSetId = util_1.Util.getGUID();
	                    batchBody.push("--batch_" + _this._batchId + "\n");
	                    batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
	                }
	                batchBody.push("--changeset_" + currentChangeSetId + "\n");
	            }
	            // common batch part prefix
	            batchBody.push("Content-Type: application/http\n");
	            batchBody.push("Content-Transfer-Encoding: binary\n\n");
	            var headers = {
	                "Accept": "application/json;",
	            };
	            if (reqInfo.method !== "GET") {
	                var method = reqInfo.method;
	                if (reqInfo.options && reqInfo.options.headers && reqInfo.options.headers["X-HTTP-Method"] !== typeof undefined) {
	                    method = reqInfo.options.headers["X-HTTP-Method"];
	                    delete reqInfo.options.headers["X-HTTP-Method"];
	                }
	                batchBody.push(method + " " + reqInfo.url + " HTTP/1.1\n");
	                headers = util_1.Util.extend(headers, { "Content-Type": "application/json;odata=verbose;charset=utf-8" });
	            }
	            else {
	                batchBody.push(reqInfo.method + " " + reqInfo.url + " HTTP/1.1\n");
	            }
	            if (typeof pnplibconfig_1.RuntimeConfig.headers !== "undefined") {
	                headers = util_1.Util.extend(headers, pnplibconfig_1.RuntimeConfig.headers);
	            }
	            if (reqInfo.options && reqInfo.options.headers) {
	                headers = util_1.Util.extend(headers, reqInfo.options.headers);
	            }
	            for (var name_1 in headers) {
	                if (headers.hasOwnProperty(name_1)) {
	                    batchBody.push(name_1 + ": " + headers[name_1] + "\n");
	                }
	            }
	            batchBody.push("\n");
	            if (reqInfo.options.body) {
	                batchBody.push(reqInfo.options.body + "\n\n");
	            }
	        });
	        if (currentChangeSetId.length > 0) {
	            // Close the changeset
	            batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
	            currentChangeSetId = "";
	        }
	        batchBody.push("--batch_" + this._batchId + "--\n");
	        var batchHeaders = {
	            "Content-Type": "multipart/mixed; boundary=batch_" + this._batchId,
	        };
	        var batchOptions = {
	            "body": batchBody.join(""),
	            "headers": batchHeaders,
	        };
	        var client = new httpclient_1.HttpClient();
	        return client.post(util_1.Util.makeUrlAbsolute("/_api/$batch"), batchOptions)
	            .then(function (r) { return r.text(); })
	            .then(this._parseResponse)
	            .then(function (responses) {
	            if (responses.length !== _this._requests.length) {
	                // this is unfortunate
	                throw new Error("Could not properly parse responses to match requests in batch.");
	            }
	            var resolutions = [];
	            for (var i = 0; i < responses.length; i++) {
	                var request = _this._requests[i];
	                var response = responses[i];
	                if (!response.ok) {
	                    request.reject(new Error(response.statusText));
	                }
	                resolutions.push(request.parser.parse(response).then(request.resolve).catch(request.reject));
	            }
	            return Promise.all(resolutions);
	        });
	    };
	    /**
	     * Parses the response from a batch request into an array of Response instances
	     *
	     * @param body Text body of the response from the batch request
	     */
	    ODataBatch.prototype._parseResponse = function (body) {
	        return new Promise(function (resolve, reject) {
	            var responses = [];
	            var header = "--batchresponse_";
	            // Ex. "HTTP/1.1 500 Internal Server Error"
	            var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
	            var lines = body.split("\n");
	            var state = "batch";
	            var status;
	            var statusText;
	            for (var i = 0; i < lines.length; ++i) {
	                var line = lines[i];
	                switch (state) {
	                    case "batch":
	                        if (line.substr(0, header.length) === header) {
	                            state = "batchHeaders";
	                        }
	                        else {
	                            if (line.trim() !== "") {
	                                throw new Error("Invalid response, line " + i);
	                            }
	                        }
	                        break;
	                    case "batchHeaders":
	                        if (line.trim() === "") {
	                            state = "status";
	                        }
	                        break;
	                    case "status":
	                        var parts = statusRegExp.exec(line);
	                        if (parts.length !== 3) {
	                            throw new Error("Invalid status, line " + i);
	                        }
	                        status = parseInt(parts[1], 10);
	                        statusText = parts[2];
	                        state = "statusHeaders";
	                        break;
	                    case "statusHeaders":
	                        if (line.trim() === "") {
	                            state = "body";
	                        }
	                        break;
	                    case "body":
	                        var response = void 0;
	                        if (status === 204) {
	                            // https://github.com/whatwg/fetch/issues/178
	                            response = new Response();
	                        }
	                        else {
	                            response = new Response(line, { status: status, statusText: statusText });
	                        }
	                        responses.push(response);
	                        state = "batch";
	                        break;
	                }
	            }
	            if (state !== "status") {
	                reject(new Error("Unexpected end of input"));
	            }
	            resolve(responses);
	        });
	    };
	    return ODataBatch;
	}());
	exports.ODataBatch = ODataBatch;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	var RuntimeConfigImpl = (function () {
	    function RuntimeConfigImpl() {
	        // these are our default values for the library
	        this._headers = null;
	        this._defaultCachingStore = "session";
	        this._defaultCachingTimeoutSeconds = 30;
	        this._globalCacheDisable = false;
	        this._useSPRequestExecutor = false;
	    }
	    RuntimeConfigImpl.prototype.set = function (config) {
	        if (config.hasOwnProperty("headers")) {
	            this._headers = config.headers;
	        }
	        if (config.hasOwnProperty("globalCacheDisable")) {
	            this._globalCacheDisable = config.globalCacheDisable;
	        }
	        if (config.hasOwnProperty("defaultCachingStore")) {
	            this._defaultCachingStore = config.defaultCachingStore;
	        }
	        if (config.hasOwnProperty("defaultCachingTimeoutSeconds")) {
	            this._defaultCachingTimeoutSeconds = config.defaultCachingTimeoutSeconds;
	        }
	        if (config.hasOwnProperty("useSPRequestExecutor")) {
	            this._useSPRequestExecutor = config.useSPRequestExecutor;
	        }
	        if (config.hasOwnProperty("nodeClientOptions")) {
	            this._useNodeClient = true;
	            this._useSPRequestExecutor = false; // just don't allow this conflict
	            this._nodeClientData = config.nodeClientOptions;
	            // this is to help things work when running in node.js, specifically batching
	            // we shim the _spPageContextInfo object
	            global._spPageContextInfo = {
	                webAbsoluteUrl: config.nodeClientOptions.siteUrl,
	            };
	        }
	    };
	    Object.defineProperty(RuntimeConfigImpl.prototype, "headers", {
	        get: function () {
	            return this._headers;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingStore", {
	        get: function () {
	            return this._defaultCachingStore;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "defaultCachingTimeoutSeconds", {
	        get: function () {
	            return this._defaultCachingTimeoutSeconds;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "globalCacheDisable", {
	        get: function () {
	            return this._globalCacheDisable;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "useSPRequestExecutor", {
	        get: function () {
	            return this._useSPRequestExecutor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "useNodeFetchClient", {
	        get: function () {
	            return this._useNodeClient;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RuntimeConfigImpl.prototype, "nodeRequestOptions", {
	        get: function () {
	            return this._nodeClientData;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return RuntimeConfigImpl;
	}());
	exports.RuntimeConfigImpl = RuntimeConfigImpl;
	var _runtimeConfig = new RuntimeConfigImpl();
	exports.RuntimeConfig = _runtimeConfig;
	function setRuntimeConfig(config) {
	    _runtimeConfig.set(config);
	}
	exports.setRuntimeConfig = setRuntimeConfig;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(9);
	/**
	 * Makes requests using the SP.RequestExecutor library.
	 */
	var SPRequestExecutorClient = (function () {
	    function SPRequestExecutorClient() {
	        /**
	         * Converts a SharePoint REST API response to a fetch API response.
	         */
	        this.convertToResponse = function (spResponse) {
	            var responseHeaders = new Headers();
	            for (var h in spResponse.headers) {
	                if (spResponse.headers[h]) {
	                    responseHeaders.append(h, spResponse.headers[h]);
	                }
	            }
	            return new Response(spResponse.body, {
	                headers: responseHeaders,
	                status: spResponse.statusCode,
	                statusText: spResponse.statusText,
	            });
	        };
	    }
	    /**
	     * Fetches a URL using the SP.RequestExecutor library.
	     */
	    SPRequestExecutorClient.prototype.fetch = function (url, options) {
	        var _this = this;
	        if (typeof SP === "undefined" || typeof SP.RequestExecutor === "undefined") {
	            throw new Error("SP.RequestExecutor is undefined. " +
	                "Load the SP.RequestExecutor.js library (/_layouts/15/SP.RequestExecutor.js) before loading the PnP JS Core library.");
	        }
	        var addinWebUrl = url.substring(0, url.indexOf("/_api")), executor = new SP.RequestExecutor(addinWebUrl), headers = {}, iterator, temp;
	        if (options.headers && options.headers instanceof Headers) {
	            iterator = options.headers.entries();
	            temp = iterator.next();
	            while (!temp.done) {
	                headers[temp.value[0]] = temp.value[1];
	                temp = iterator.next();
	            }
	        }
	        else {
	            headers = options.headers;
	        }
	        return new Promise(function (resolve, reject) {
	            var requestOptions = {
	                error: function (error) {
	                    reject(_this.convertToResponse(error));
	                },
	                headers: headers,
	                method: options.method,
	                success: function (response) {
	                    resolve(_this.convertToResponse(response));
	                },
	                url: url,
	            };
	            if (options.body) {
	                util_1.Util.extend(requestOptions, { body: options.body });
	            }
	            else {
	                util_1.Util.extend(requestOptions, { binaryStringRequestBody: true });
	            }
	            executor.executeAsync(requestOptions);
	        });
	    };
	    return SPRequestExecutorClient;
	}());
	exports.SPRequestExecutorClient = SPRequestExecutorClient;


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * This module is substituted for the NodeFetchClient.ts during the packaging process. This helps to reduce the pnp.js file size by
	 * not including all of the node dependencies
	 */
	var NodeFetchClient = (function () {
	    function NodeFetchClient(siteUrl, _clientId, _clientSecret, _realm) {
	        if (_realm === void 0) { _realm = ""; }
	        this.siteUrl = siteUrl;
	        this._clientId = _clientId;
	        this._clientSecret = _clientSecret;
	        this._realm = _realm;
	    }
	    /**
	     * Always throws an error that NodeFetchClient is not supported for use in the browser
	     */
	    NodeFetchClient.prototype.fetch = function (url, options) {
	        throw new Error("Using NodeFetchClient in the browser is not supported.");
	    };
	    return NodeFetchClient;
	}());
	exports.NodeFetchClient = NodeFetchClient;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var storage_1 = __webpack_require__(10);
	var util_1 = __webpack_require__(9);
	var pnplibconfig_1 = __webpack_require__(24);
	var CachingOptions = (function () {
	    function CachingOptions(key) {
	        this.key = key;
	        this.expiration = util_1.Util.dateAdd(new Date(), "second", pnplibconfig_1.RuntimeConfig.defaultCachingTimeoutSeconds);
	        this.storeName = pnplibconfig_1.RuntimeConfig.defaultCachingStore;
	    }
	    Object.defineProperty(CachingOptions.prototype, "store", {
	        get: function () {
	            if (this.storeName === "local") {
	                return CachingOptions.storage.local;
	            }
	            else {
	                return CachingOptions.storage.session;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CachingOptions.storage = new storage_1.PnPClientStorage();
	    return CachingOptions;
	}());
	exports.CachingOptions = CachingOptions;
	var CachingParserWrapper = (function () {
	    function CachingParserWrapper(_parser, _cacheOptions) {
	        this._parser = _parser;
	        this._cacheOptions = _cacheOptions;
	    }
	    CachingParserWrapper.prototype.parse = function (response) {
	        var _this = this;
	        // add this to the cache based on the options
	        return this._parser.parse(response).then(function (data) {
	            if (_this._cacheOptions.store !== null) {
	                _this._cacheOptions.store.put(_this._cacheOptions.key, data, _this._cacheOptions.expiration);
	            }
	            return data;
	        });
	    };
	    return CachingParserWrapper;
	}());
	exports.CachingParserWrapper = CachingParserWrapper;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var webs_1 = __webpack_require__(29);
	var usercustomactions_1 = __webpack_require__(43);
	/**
	 * Describes a site collection
	 *
	 */
	var Site = (function (_super) {
	    __extends(Site, _super);
	    /**
	     * Creates a new instance of the RoleAssignments class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Site(baseUrl, path) {
	        if (path === void 0) { path = "_api/site"; }
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Site.prototype, "rootWeb", {
	        /**
	         * Gets the root web of the site collection
	         *
	         */
	        get: function () {
	            return new webs_1.Web(this, "rootweb");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Site.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site collection
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the context information for the site.
	     */
	    Site.prototype.getContextInfo = function () {
	        var q = new Site("", "_api/contextinfo");
	        return q.post().then(function (data) {
	            if (data.hasOwnProperty("GetContextWebInformation")) {
	                var info = data.GetContextWebInformation;
	                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
	                return info;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the document libraries on a site. Static method. (SharePoint Online only)
	     *
	     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
	     */
	    Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
	        var q = new queryable_1.Queryable("", "_api/sp.web.getdocumentlibraries(@v)");
	        q.query.add("@v", "'" + absoluteWebUrl + "'");
	        return q.get().then(function (data) {
	            if (data.hasOwnProperty("GetDocumentLibraries")) {
	                return data.GetDocumentLibraries;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the site URL from a page URL.
	     *
	     * @param absolutePageUrl The absolute url of the page
	     */
	    Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
	        var q = new queryable_1.Queryable("", "_api/sp.web.getweburlfrompageurl(@v)");
	        q.query.add("@v", "'" + absolutePageUrl + "'");
	        return q.get().then(function (data) {
	            if (data.hasOwnProperty("GetWebUrlFromPageUrl")) {
	                return data.GetWebUrlFromPageUrl;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    return Site;
	}(queryable_1.QueryableInstance));
	exports.Site = Site;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var queryablesecurable_1 = __webpack_require__(30);
	var lists_1 = __webpack_require__(34);
	var fields_1 = __webpack_require__(40);
	var navigation_1 = __webpack_require__(44);
	var sitegroups_1 = __webpack_require__(32);
	var contenttypes_1 = __webpack_require__(38);
	var folders_1 = __webpack_require__(36);
	var roles_1 = __webpack_require__(31);
	var files_1 = __webpack_require__(37);
	var util_1 = __webpack_require__(9);
	var lists_2 = __webpack_require__(34);
	var siteusers_1 = __webpack_require__(33);
	var usercustomactions_1 = __webpack_require__(43);
	var odata_1 = __webpack_require__(23);
	var Webs = (function (_super) {
	    __extends(Webs, _super);
	    function Webs(baseUrl, webPath) {
	        if (webPath === void 0) { webPath = "webs"; }
	        _super.call(this, baseUrl, webPath);
	    }
	    /**
	     * Adds a new web to the collection
	     *
	     * @param title The new web's title
	     * @param url The new web's relative url
	     * @param description The web web's description
	     * @param template The web's template
	     * @param language The language code to use for this web
	     * @param inheritPermissions If true permissions will be inherited from the partent web
	     * @param additionalSettings Will be passed as part of the web creation body
	     */
	    Webs.prototype.add = function (title, url, description, template, language, inheritPermissions, additionalSettings) {
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = "STS"; }
	        if (language === void 0) { language = 1033; }
	        if (inheritPermissions === void 0) { inheritPermissions = true; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var props = util_1.Util.extend({
	            Description: description,
	            Language: language,
	            Title: title,
	            Url: url,
	            UseSamePermissionsAsParentSite: inheritPermissions,
	            WebTemplate: template,
	        }, additionalSettings);
	        var postBody = JSON.stringify({
	            "parameters": util_1.Util.extend({
	                "__metadata": { "type": "SP.WebCreationInformation" },
	            }, props),
	        });
	        var q = new Webs(this, "add");
	        return q.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                web: new Web(odata_1.extractOdataId(data), ""),
	            };
	        });
	    };
	    return Webs;
	}(queryable_1.QueryableCollection));
	exports.Webs = Webs;
	/**
	 * Describes a web
	 *
	 */
	var Web = (function (_super) {
	    __extends(Web, _super);
	    function Web(baseUrl, path) {
	        if (path === void 0) { path = "_api/web"; }
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Web.prototype, "webs", {
	        get: function () {
	            return new Webs(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "contentTypes", {
	        /**
	         * Get the content types available in this web
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentTypes(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "lists", {
	        /**
	         * Get the lists in this web
	         *
	         */
	        get: function () {
	            return new lists_1.Lists(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "fields", {
	        /**
	         * Gets the fields in this web
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "availablefields", {
	        /**
	         * Gets the available fields in this web
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this, "availablefields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "navigation", {
	        /**
	         * Get the navigation options in this web
	         *
	         */
	        get: function () {
	            return new navigation_1.Navigation(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "siteUsers", {
	        /**
	         * Gets the site users
	         *
	         */
	        get: function () {
	            return new siteusers_1.SiteUsers(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "siteGroups", {
	        /**
	         * Gets the site groups
	         *
	         */
	        get: function () {
	            return new sitegroups_1.SiteGroups(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "folders", {
	        /**
	         * Get the folders in this web
	         *
	         */
	        get: function () {
	            return new folders_1.Folders(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Web.prototype, "roleDefinitions", {
	        /**
	         * Gets the collection of RoleDefinition resources.
	         *
	         */
	        get: function () {
	            return new roles_1.RoleDefinitions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Get a folder by server relative url
	     *
	     * @param folderRelativeUrl the server relative path to the folder (including /sites/ if applicable)
	     */
	    Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
	        return new folders_1.Folder(this, "getFolderByServerRelativeUrl('" + folderRelativeUrl + "')");
	    };
	    /**
	     * Get a file by server relative url
	     *
	     * @param fileRelativeUrl the server relative path to the file (including /sites/ if applicable)
	     */
	    Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
	        return new files_1.File(this, "getFileByServerRelativeUrl('" + fileRelativeUrl + "')");
	    };
	    /**
	     * Updates this web intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the web
	     */
	    Web.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.Web" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                web: _this,
	            };
	        });
	    };
	    /**
	     * Delete this web
	     *
	     */
	    Web.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Applies the theme specified by the contents of each of the files specified in the arguments to the site.
	     *
	     * @param colorPaletteUrl Server-relative URL of the color palette file.
	     * @param fontSchemeUrl Server-relative URL of the font scheme.
	     * @param backgroundImageUrl Server-relative URL of the background image.
	     * @param shareGenerated true to store the generated theme files in the root site, or false to store them in this site.
	     */
	    Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
	        var postBody = JSON.stringify({
	            backgroundImageUrl: backgroundImageUrl,
	            colorPaletteUrl: colorPaletteUrl,
	            fontSchemeUrl: fontSchemeUrl,
	            shareGenerated: shareGenerated,
	        });
	        var q = new Web(this, "applytheme");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Applies the specified site definition or site template to the Web site that has no template applied to it.
	     *
	     * @param template Name of the site definition or the name of the site template
	     */
	    Web.prototype.applyWebTemplate = function (template) {
	        var q = new Web(this, "applywebtemplate");
	        q.concat("(@t)");
	        q.query.add("@t", template);
	        return q.post();
	    };
	    /**
	     * Returns whether the current user has the given set of permissions.
	     *
	     * @param perms The high and low permission range.
	     */
	    Web.prototype.doesUserHavePermissions = function (perms) {
	        var q = new Web(this, "doesuserhavepermissions");
	        q.concat("(@p)");
	        q.query.add("@p", JSON.stringify(perms));
	        return q.get();
	    };
	    /**
	     * Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, adds the user to the site.
	     *
	     * @param loginName The login name of the user (ex: i:0#.f|membership|user@domain.onmicrosoft.com)
	     */
	    Web.prototype.ensureUser = function (loginName) {
	        // TODO:: this should resolve to a User
	        var postBody = JSON.stringify({
	            logonName: loginName,
	        });
	        var q = new Web(this, "ensureuser");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Returns a collection of site templates available for the site.
	     *
	     * @param language The LCID of the site templates to get.
	     * @param true to include language-neutral site templates; otherwise false
	     */
	    Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
	        if (language === void 0) { language = 1033; }
	        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
	        return new queryable_1.QueryableCollection(this, "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")");
	    };
	    /**
	     * Returns the list gallery on the site.
	     *
	     * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
	     * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
	     */
	    /* tslint:disable member-access */
	    Web.prototype.getCatalog = function (type) {
	        var q = new Web(this, "getcatalog(" + type + ")");
	        q.select("Id");
	        return q.get().then(function (data) {
	            return new lists_2.List(odata_1.extractOdataId(data));
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
	     */
	    Web.prototype.getChanges = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
	        // don't change "this" instance, make a new one
	        var q = new Web(this, "getchanges");
	        return q.post({ body: postBody });
	    };
	    Object.defineProperty(Web.prototype, "customListTemplate", {
	        /**
	         * Gets the custom list templates for the site.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "getcustomlisttemplates");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns the user corresponding to the specified member identifier for the current site.
	     *
	     * @param id The ID of the user.
	     */
	    Web.prototype.getUserById = function (id) {
	        return new siteusers_1.SiteUser(this, "getUserById(" + id + ")");
	    };
	    /**
	     * Returns the name of the image file for the icon that is used to represent the specified file.
	     *
	     * @param filename The file name. If this parameter is empty, the server returns an empty string.
	     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1.
	     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
	     */
	    Web.prototype.mapToIcon = function (filename, size, progId) {
	        if (size === void 0) { size = 0; }
	        if (progId === void 0) { progId = ""; }
	        var q = new Web(this, "maptoicon(filename='" + filename + "', progid='" + progId + "', size=" + size + ")");
	        return q.get();
	    };
	    return Web;
	}(queryablesecurable_1.QueryableSecurable));
	exports.Web = Web;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var roles_1 = __webpack_require__(31);
	var queryable_1 = __webpack_require__(19);
	var QueryableSecurable = (function (_super) {
	    __extends(QueryableSecurable, _super);
	    function QueryableSecurable() {
	        _super.apply(this, arguments);
	    }
	    Object.defineProperty(QueryableSecurable.prototype, "roleAssignments", {
	        /**
	         * Gets the set of role assignments for this item
	         *
	         */
	        get: function () {
	            return new roles_1.RoleAssignments(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(QueryableSecurable.prototype, "firstUniqueAncestorSecurableObject", {
	        /**
	         * Gets the closest securable up the security hierarchy whose permissions are applied to this list item
	         *
	         */
	        get: function () {
	            this.append("FirstUniqueAncestorSecurableObject");
	            return new queryable_1.QueryableInstance(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the effective permissions for the user supplied
	     *
	     * @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
	     */
	    QueryableSecurable.prototype.getUserEffectivePermissions = function (loginName) {
	        this.append("getUserEffectivePermissions(@user)");
	        this._query.add("@user", "'" + encodeURIComponent(loginName) + "'");
	        return new queryable_1.Queryable(this);
	    };
	    /**
	     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
	     *
	     * @param copyRoleAssignments If true the permissions are copied from the current parent scope
	     * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
	     */
	    QueryableSecurable.prototype.breakRoleInheritance = function (copyRoleAssignments, clearSubscopes) {
	        if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
	        if (clearSubscopes === void 0) { clearSubscopes = false; }
	        var Breaker = (function (_super) {
	            __extends(Breaker, _super);
	            function Breaker(baseUrl, copy, clear) {
	                _super.call(this, baseUrl, "breakroleinheritance(copyroleassignments=" + copy + ", clearsubscopes=" + clear + ")");
	            }
	            Breaker.prototype.break = function () {
	                return this.post();
	            };
	            return Breaker;
	        }(queryable_1.Queryable));
	        var b = new Breaker(this, copyRoleAssignments, clearSubscopes);
	        return b.break();
	    };
	    /**
	     * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
	     *
	     */
	    QueryableSecurable.prototype.resetRoleInheritance = function () {
	        var Resetter = (function (_super) {
	            __extends(Resetter, _super);
	            function Resetter(baseUrl) {
	                _super.call(this, baseUrl, "resetroleinheritance");
	            }
	            Resetter.prototype.reset = function () {
	                return this.post();
	            };
	            return Resetter;
	        }(queryable_1.Queryable));
	        var r = new Resetter(this);
	        return r.reset();
	    };
	    return QueryableSecurable;
	}(queryable_1.QueryableInstance));
	exports.QueryableSecurable = QueryableSecurable;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var sitegroups_1 = __webpack_require__(32);
	var util_1 = __webpack_require__(9);
	/**
	 * Describes a set of role assignments for the current scope
	 *
	 */
	var RoleAssignments = (function (_super) {
	    __extends(RoleAssignments, _super);
	    /**
	     * Creates a new instance of the RoleAssignments class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function RoleAssignments(baseUrl, path) {
	        if (path === void 0) { path = "roleassignments"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Adds a new role assignment with the specified principal and role definitions to the collection.
	     *
	     * @param principalId The ID of the user or group to assign permissions to
	     * @param roleDefId The ID of the role definition that defines the permissions to assign
	     *
	     */
	    RoleAssignments.prototype.add = function (principalId, roleDefId) {
	        var a = new RoleAssignments(this, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")");
	        return a.post();
	    };
	    /**
	     * Removes the role assignment with the specified principal and role definition from the collection
	     *
	     * @param principalId The ID of the user or group in the role assignment.
	     * @param roleDefId The ID of the role definition in the role assignment
	     *
	     */
	    RoleAssignments.prototype.remove = function (principalId, roleDefId) {
	        var a = new RoleAssignments(this, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")");
	        return a.post();
	    };
	    /**
	     * Gets the role assignment associated with the specified principal ID from the collection.
	     *
	     * @param id The id of the role assignment
	     */
	    RoleAssignments.prototype.getById = function (id) {
	        var ra = new RoleAssignment(this);
	        ra.concat("(" + id + ")");
	        return ra;
	    };
	    return RoleAssignments;
	}(queryable_1.QueryableCollection));
	exports.RoleAssignments = RoleAssignments;
	var RoleAssignment = (function (_super) {
	    __extends(RoleAssignment, _super);
	    /**
	 * Creates a new instance of the RoleAssignment class
	 *
	 * @param baseUrl The url or Queryable which forms the parent of this fields collection
	 */
	    function RoleAssignment(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(RoleAssignment.prototype, "groups", {
	        get: function () {
	            return new sitegroups_1.SiteGroups(this, "groups");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(RoleAssignment.prototype, "bindings", {
	        /**
	         * Get the role definition bindings for this role assignment
	         *
	         */
	        get: function () {
	            return new RoleDefinitionBindings(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Delete this role assignment
	     *
	     */
	    RoleAssignment.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return RoleAssignment;
	}(queryable_1.QueryableInstance));
	exports.RoleAssignment = RoleAssignment;
	var RoleDefinitions = (function (_super) {
	    __extends(RoleDefinitions, _super);
	    /**
	     * Creates a new instance of the RoleDefinitions class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path
	     *
	     */
	    function RoleDefinitions(baseUrl, path) {
	        if (path === void 0) { path = "roledefinitions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets the role definition with the specified ID from the collection.
	     *
	     * @param id The ID of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getById = function (id) {
	        return new RoleDefinition(this, "getById(" + id + ")");
	    };
	    /**
	     * Gets the role definition with the specified name.
	     *
	     * @param name The name of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getByName = function (name) {
	        return new RoleDefinition(this, "getbyname('" + name + "')");
	    };
	    /**
	     * Gets the role definition with the specified type.
	     *
	     * @param name The name of the role definition.
	     *
	     */
	    RoleDefinitions.prototype.getByType = function (roleTypeKind) {
	        return new RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
	    };
	    /**
	     * Create a role definition
	     *
	     * @param name The new role definition's name
	     * @param description The new role definition's description
	     * @param order The order in which the role definition appears
	     * @param basePermissions The permissions mask for this role definition
	     *
	     */
	    RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
	        var _this = this;
	        var postBody = JSON.stringify({
	            BasePermissions: util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, basePermissions),
	            Description: description,
	            Name: name,
	            Order: order,
	            __metadata: { "type": "SP.RoleDefinition" },
	        });
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                definition: _this.getById(data.Id),
	            };
	        });
	    };
	    return RoleDefinitions;
	}(queryable_1.QueryableCollection));
	exports.RoleDefinitions = RoleDefinitions;
	var RoleDefinition = (function (_super) {
	    __extends(RoleDefinition, _super);
	    function RoleDefinition(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Updates this web intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the web
	     */
	    /* tslint:disable no-string-literal */
	    RoleDefinition.prototype.update = function (properties) {
	        var _this = this;
	        if (typeof properties.hasOwnProperty("BasePermissions")) {
	            properties["BasePermissions"] = util_1.Util.extend({ __metadata: { type: "SP.BasePermissions" } }, properties["BasePermissions"]);
	        }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.RoleDefinition" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retDef = _this;
	            if (properties.hasOwnProperty("Name")) {
	                var parent_1 = _this.getParent(RoleDefinitions, _this.parentUrl, "");
	                retDef = parent_1.getByName(properties["Name"]);
	            }
	            return {
	                data: data,
	                definition: retDef,
	            };
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Delete this role definition
	     *
	     */
	    RoleDefinition.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return RoleDefinition;
	}(queryable_1.QueryableInstance));
	exports.RoleDefinition = RoleDefinition;
	var RoleDefinitionBindings = (function (_super) {
	    __extends(RoleDefinitionBindings, _super);
	    function RoleDefinitionBindings(baseUrl, path) {
	        if (path === void 0) { path = "roledefinitionbindings"; }
	        _super.call(this, baseUrl, path);
	    }
	    return RoleDefinitionBindings;
	}(queryable_1.QueryableCollection));
	exports.RoleDefinitionBindings = RoleDefinitionBindings;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var siteusers_1 = __webpack_require__(33);
	var util_1 = __webpack_require__(9);
	/**
	 * Principal Type enum
	 *
	 */
	(function (PrincipalType) {
	    PrincipalType[PrincipalType["None"] = 0] = "None";
	    PrincipalType[PrincipalType["User"] = 1] = "User";
	    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
	    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
	    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
	    PrincipalType[PrincipalType["All"] = 15] = "All";
	})(exports.PrincipalType || (exports.PrincipalType = {}));
	var PrincipalType = exports.PrincipalType;
	/**
	 * Describes a collection of site users
	 *
	 */
	var SiteGroups = (function (_super) {
	    __extends(SiteGroups, _super);
	    /**
	     * Creates a new instance of the SiteUsers class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this user collection
	     */
	    function SiteGroups(baseUrl, path) {
	        if (path === void 0) { path = "sitegroups"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Adds a new group to the site collection
	     *
	     * @param props The properties to be updated
	     */
	    SiteGroups.prototype.add = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties));
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                group: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Gets a group from the collection by name
	     *
	     * @param email The name of the group
	     */
	    SiteGroups.prototype.getByName = function (groupName) {
	        return new SiteGroup(this, "getByName('" + groupName + "')");
	    };
	    /**
	     * Gets a group from the collection by id
	     *
	     * @param id The id of the group
	     */
	    SiteGroups.prototype.getById = function (id) {
	        var sg = new SiteGroup(this);
	        sg.concat("(" + id + ")");
	        return sg;
	    };
	    /**
	     * Removes the group with the specified member ID from the collection.
	     *
	     * @param id The id of the group to remove
	     */
	    SiteGroups.prototype.removeById = function (id) {
	        var g = new SiteGroups(this, "removeById('" + id + "')");
	        return g.post();
	    };
	    /**
	     * Removes a user from the collection by login name
	     *
	     * @param loginName The login name of the user
	     */
	    SiteGroups.prototype.removeByLoginName = function (loginName) {
	        var g = new SiteGroups(this, "removeByLoginName('" + loginName + "')");
	        return g.post();
	    };
	    return SiteGroups;
	}(queryable_1.QueryableCollection));
	exports.SiteGroups = SiteGroups;
	/**
	 * Describes a single group
	 *
	 */
	var SiteGroup = (function (_super) {
	    __extends(SiteGroup, _super);
	    /**
	     * Creates a new instance of the Group class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this site group
	     * @param path Optional, passes the path to the group
	     */
	    function SiteGroup(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(SiteGroup.prototype, "users", {
	        /**
	         * Get's the users for this group
	         *
	         */
	        get: function () {
	            return new siteusers_1.SiteUsers(this, "users");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Updates this group instance with the supplied properties
	    *
	    * @param properties A GroupWriteableProperties object of property names and values to update for the user
	    */
	    /* tslint:disable no-string-literal */
	    SiteGroup.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.Group" } }, properties);
	        return this.post({
	            body: JSON.stringify(postBody),
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retGroup = _this;
	            if (properties.hasOwnProperty("Title")) {
	                retGroup = _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + properties["Title"] + "')");
	            }
	            return {
	                data: data,
	                group: retGroup,
	            };
	        });
	    };
	    return SiteGroup;
	}(queryable_1.QueryableInstance));
	exports.SiteGroup = SiteGroup;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var sitegroups_1 = __webpack_require__(32);
	var util_1 = __webpack_require__(9);
	/**
	 * Describes a collection of all site collection users
	 *
	 */
	var SiteUsers = (function (_super) {
	    __extends(SiteUsers, _super);
	    /**
	     * Creates a new instance of the Users class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this user collection
	     */
	    function SiteUsers(baseUrl, path) {
	        if (path === void 0) { path = "siteusers"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a user from the collection by email
	     *
	     * @param email The email of the user
	     */
	    SiteUsers.prototype.getByEmail = function (email) {
	        return new SiteUser(this, "getByEmail('" + email + "')");
	    };
	    /**
	     * Gets a user from the collection by id
	     *
	     * @param id The id of the user
	     */
	    SiteUsers.prototype.getById = function (id) {
	        return new SiteUser(this, "getById(" + id + ")");
	    };
	    /**
	     * Gets a user from the collection by login name
	     *
	     * @param loginName The email address of the user
	     */
	    SiteUsers.prototype.getByLoginName = function (loginName) {
	        var su = new SiteUser(this);
	        su.concat("(@v)");
	        su.query.add("@v", encodeURIComponent(loginName));
	        return su;
	    };
	    /**
	     * Removes a user from the collection by id
	     *
	     * @param id The id of the user
	     */
	    SiteUsers.prototype.removeById = function (id) {
	        var o = new SiteUsers(this, "removeById(" + id + ")");
	        return o.post();
	    };
	    /**
	     * Removes a user from the collection by login name
	     *
	     * @param loginName The login name of the user
	     */
	    SiteUsers.prototype.removeByLoginName = function (loginName) {
	        var o = new SiteUsers(this, "removeByLoginName(@v)");
	        o.query.add("@v", encodeURIComponent(loginName));
	        return o.post();
	    };
	    /**
	     * Add a user to a group
	     *
	     * @param loginName The login name of the user to add to the group
	     *
	     */
	    SiteUsers.prototype.add = function (loginName) {
	        var _this = this;
	        var postBody = JSON.stringify({ "__metadata": { "type": "SP.User" }, LoginName: loginName });
	        return this.post({ body: postBody }).then(function (data) { return _this.getByLoginName(loginName); });
	    };
	    return SiteUsers;
	}(queryable_1.QueryableCollection));
	exports.SiteUsers = SiteUsers;
	/**
	 * Describes a single user
	 *
	 */
	var SiteUser = (function (_super) {
	    __extends(SiteUser, _super);
	    /**
	     * Creates a new instance of the User class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, passes the path to the user
	     */
	    function SiteUser(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(SiteUser.prototype, "groups", {
	        /**
	         * Get's the groups for this user.
	         *
	         */
	        get: function () {
	            return new sitegroups_1.SiteGroups(this, "groups");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Updates this user instance with the supplied properties
	    *
	    * @param properties A plain object of property names and values to update for the user
	    */
	    SiteUser.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = util_1.Util.extend({ "__metadata": { "type": "SP.User" } }, properties);
	        return this.post({
	            body: JSON.stringify(postBody),
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                user: _this,
	            };
	        });
	    };
	    /**
	     * Delete this user
	     *
	     */
	    SiteUser.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return SiteUser;
	}(queryable_1.QueryableInstance));
	exports.SiteUser = SiteUser;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var items_1 = __webpack_require__(35);
	var views_1 = __webpack_require__(39);
	var contenttypes_1 = __webpack_require__(38);
	var fields_1 = __webpack_require__(40);
	var forms_1 = __webpack_require__(42);
	var queryable_1 = __webpack_require__(19);
	var queryablesecurable_1 = __webpack_require__(30);
	var util_1 = __webpack_require__(9);
	var usercustomactions_1 = __webpack_require__(43);
	var odata_1 = __webpack_require__(23);
	/**
	 * Describes a collection of List objects
	 *
	 */
	var Lists = (function (_super) {
	    __extends(Lists, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Lists(baseUrl, path) {
	        if (path === void 0) { path = "lists"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a list from the collection by title
	     *
	     * @param title The title of the list
	     */
	    Lists.prototype.getByTitle = function (title) {
	        return new List(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Gets a list from the collection by guid id
	     *
	     * @param title The Id of the list
	     */
	    Lists.prototype.getById = function (id) {
	        var list = new List(this);
	        list.concat("('" + id + "')");
	        return list;
	    };
	    /**
	     * Adds a new list to the collection
	     *
	     * @param title The new list's title
	     * @param description The new list's description
	     * @param template The list template value
	     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
	     * @param additionalSettings Will be passed as part of the list creation body
	     */
	    /*tslint:disable max-line-length */
	    Lists.prototype.add = function (title, description, template, enableContentTypes, additionalSettings) {
	        var _this = this;
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = 100; }
	        if (enableContentTypes === void 0) { enableContentTypes = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.List" },
	            "AllowContentTypes": enableContentTypes,
	            "BaseTemplate": template,
	            "ContentTypesEnabled": enableContentTypes,
	            "Description": description,
	            "Title": title,
	        }, additionalSettings));
	        return this.post({ body: postBody }).then(function (data) {
	            return { data: data, list: _this.getByTitle(title) };
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Ensures that the specified list exists in the collection (note: settings are not updated if the list exists,
	     * not supported for batching)
	     *
	     * @param title The new list's title
	     * @param description The new list's description
	     * @param template The list template value
	     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
	     * @param additionalSettings Will be passed as part of the list creation body
	     */
	    /*tslint:disable max-line-length */
	    Lists.prototype.ensure = function (title, description, template, enableContentTypes, additionalSettings) {
	        var _this = this;
	        if (description === void 0) { description = ""; }
	        if (template === void 0) { template = 100; }
	        if (enableContentTypes === void 0) { enableContentTypes = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        if (this.hasBatch) {
	            throw new Error("The ensure method is not supported as part of a batch.");
	        }
	        return new Promise(function (resolve, reject) {
	            var list = _this.getByTitle(title);
	            list.get().then(function (d) { return resolve({ created: false, data: d, list: list }); }).catch(function () {
	                _this.add(title, description, template, enableContentTypes, additionalSettings).then(function (r) {
	                    resolve({ created: true, data: r.data, list: _this.getByTitle(title) });
	                });
	            }).catch(function (e) { return reject(e); });
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
	     */
	    /*tslint:disable member-access */
	    Lists.prototype.ensureSiteAssetsLibrary = function () {
	        var q = new Lists(this, "ensuresiteassetslibrary");
	        return q.post().then(function (json) {
	            return new List(odata_1.extractOdataId(json));
	        });
	    };
	    /*tslint:enable */
	    /**
	     * Gets a list that is the default location for wiki pages.
	     */
	    /*tslint:disable member-access */
	    Lists.prototype.ensureSitePagesLibrary = function () {
	        var q = new Lists(this, "ensuresitepageslibrary");
	        return q.post().then(function (json) {
	            return new List(odata_1.extractOdataId(json));
	        });
	    };
	    return Lists;
	}(queryable_1.QueryableCollection));
	exports.Lists = Lists;
	/**
	 * Describes a single List instance
	 *
	 */
	var List = (function (_super) {
	    __extends(List, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function List(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(List.prototype, "contentTypes", {
	        /**
	         * Gets the content types in this list
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentTypes(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "items", {
	        /**
	         * Gets the items in this list
	         *
	         */
	        get: function () {
	            return new items_1.Items(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "views", {
	        /**
	         * Gets the views in this list
	         *
	         */
	        get: function () {
	            return new views_1.Views(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "fields", {
	        /**
	         * Gets the fields in this list
	         *
	         */
	        get: function () {
	            return new fields_1.Fields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "forms", {
	        /**
	         * Gets the forms in this list
	         *
	         */
	        get: function () {
	            return new forms_1.Forms(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "defaultView", {
	        /**
	         * Gets the default view of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "DefaultView");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "userCustomActions", {
	        /**
	         * Get all custom actions on a site collection
	         *
	         */
	        get: function () {
	            return new usercustomactions_1.UserCustomActions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "effectiveBasePermissions", {
	        /**
	         * Gets the effective base permissions of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissions");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "eventReceivers", {
	        /**
	         * Gets the event receivers attached to this list
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "EventReceivers");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "relatedFields", {
	        /**
	         * Gets the related fields of this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "getRelatedFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(List.prototype, "informationRightsManagementSettings", {
	        /**
	         * Gets the IRM settings for this list
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "InformationRightsManagementSettings");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets a view by view guid id
	     *
	     */
	    List.prototype.getView = function (viewId) {
	        return new views_1.View(this, "getView('" + viewId + "')");
	    };
	    /**
	     * Updates this list intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    /* tslint:disable no-string-literal */
	    List.prototype.update = function (properties, eTag) {
	        var _this = this;
	        if (eTag === void 0) { eTag = "*"; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.List" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            var retList = _this;
	            if (properties.hasOwnProperty("Title")) {
	                retList = _this.getParent(List, _this.parentUrl, "getByTitle('" + properties["Title"] + "')");
	            }
	            return {
	                data: data,
	                list: retList,
	            };
	        });
	    };
	    /* tslint:enable */
	    /**
	     * Delete this list
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    List.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
	     */
	    List.prototype.getChanges = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getchanges");
	        return q.post({ body: postBody });
	    };
	    /**
	     * Returns a collection of items from the list based on the specified query.
	     *
	     * @param CamlQuery The Query schema of Collaborative Application Markup
	     * Language (CAML) is used in various ways within the context of Microsoft SharePoint Foundation
	     * to define queries against list data.
	     * see:
	     *
	     * https://msdn.microsoft.com/en-us/library/office/ms467521.aspx
	     *
	     * @param expands A URI with a $expand System Query Option indicates that Entries associated with
	     * the Entry or Collection of Entries identified by the Resource Path
	     * section of the URI must be represented inline (i.e. eagerly loaded).
	     * see:
	     *
	     * https://msdn.microsoft.com/en-us/library/office/fp142385.aspx
	     *
	     * http://www.odata.org/documentation/odata-version-2-0/uri-conventions/#ExpandSystemQueryOption
	     */
	    List.prototype.getItemsByCAMLQuery = function (query) {
	        var expands = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            expands[_i - 1] = arguments[_i];
	        }
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.CamlQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getitems");
	        q = q.expand.apply(q, expands);
	        return q.post({ body: postBody });
	    };
	    /**
	     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
	     */
	    List.prototype.getListItemChangesSinceToken = function (query) {
	        var postBody = JSON.stringify({ "query": util_1.Util.extend({ "__metadata": { "type": "SP.ChangeLogItemQuery" } }, query) });
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "getlistitemchangessincetoken");
	        // note we are using a custom parser to return text as the response is an xml doc
	        return q.post({ body: postBody }, { parse: function (r) { return r.text(); } });
	    };
	    /**
	     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    List.prototype.recycle = function () {
	        this.append("recycle");
	        return this.post().then(function (data) {
	            if (data.hasOwnProperty("Recycle")) {
	                return data.Recycle;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Renders list data based on the view xml provided
	     */
	    List.prototype.renderListData = function (viewXml) {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "renderlistdata(@viewXml)");
	        q.query.add("@viewXml", "'" + viewXml + "'");
	        return q.post().then(function (data) {
	            // data will be a string, so we parse it again
	            data = JSON.parse(data);
	            if (data.hasOwnProperty("RenderListData")) {
	                return data.RenderListData;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Gets the field values and field schema attributes for a list item.
	     */
	    List.prototype.renderListFormData = function (itemId, formId, mode) {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode=" + mode + ")");
	        return q.post().then(function (data) {
	            // data will be a string, so we parse it again
	            data = JSON.parse(data);
	            if (data.hasOwnProperty("ListData")) {
	                return data.ListData;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    /**
	     * Reserves a list item ID for idempotent list item creation.
	     */
	    List.prototype.reserveListItemId = function () {
	        // don't change "this" instance of the List, make a new one
	        var q = new List(this, "reservelistitemid");
	        return q.post().then(function (data) {
	            if (data.hasOwnProperty("ReserveListItemId")) {
	                return data.ReserveListItemId;
	            }
	            else {
	                return data;
	            }
	        });
	    };
	    return List;
	}(queryablesecurable_1.QueryableSecurable));
	exports.List = List;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var queryablesecurable_1 = __webpack_require__(30);
	var folders_1 = __webpack_require__(36);
	var contenttypes_1 = __webpack_require__(38);
	var util_1 = __webpack_require__(9);
	var odata_1 = __webpack_require__(23);
	/**
	 * Describes a collection of Item objects
	 *
	 */
	var Items = (function (_super) {
	    __extends(Items, _super);
	    /**
	     * Creates a new instance of the Items class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Items(baseUrl, path) {
	        if (path === void 0) { path = "items"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets an Item by id
	     *
	     * @param id The integer id of the item to retrieve
	     */
	    Items.prototype.getById = function (id) {
	        var i = new Item(this);
	        i.concat("(" + id + ")");
	        return i;
	    };
	    /**
	     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
	     *
	     * @param skip The starting id where the page should start, use with top to specify pages
	     */
	    Items.prototype.skip = function (skip) {
	        this._query.add("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
	        return this;
	    };
	    /**
	     * Gets a collection designed to aid in paging through data
	     *
	     */
	    Items.prototype.getPaged = function () {
	        return this.getAs(new PagedItemCollectionParser());
	    };
	    /**
	     * Adds a new item to the collection
	     *
	     * @param properties The new items's properties
	     */
	    Items.prototype.add = function (properties) {
	        var _this = this;
	        if (properties === void 0) { properties = {}; }
	        this.addBatchDependency();
	        var parentList = this.getParent(queryable_1.QueryableInstance);
	        return parentList.select("ListItemEntityTypeFullName").getAs().then(function (d) {
	            var postBody = JSON.stringify(util_1.Util.extend({
	                "__metadata": { "type": d.ListItemEntityTypeFullName },
	            }, properties));
	            var promise = _this.postAs({ body: postBody }).then(function (data) {
	                return {
	                    data: data,
	                    item: _this.getById(data.Id),
	                };
	            });
	            _this.clearBatchDependency();
	            return promise;
	        });
	    };
	    return Items;
	}(queryable_1.QueryableCollection));
	exports.Items = Items;
	var PagedItemCollectionParser = (function (_super) {
	    __extends(PagedItemCollectionParser, _super);
	    function PagedItemCollectionParser() {
	        _super.apply(this, arguments);
	    }
	    PagedItemCollectionParser.prototype.parse = function (r) {
	        return PagedItemCollection.fromResponse(r);
	    };
	    return PagedItemCollectionParser;
	}(odata_1.ODataParserBase));
	/**
	 * Descrines a single Item instance
	 *
	 */
	var Item = (function (_super) {
	    __extends(Item, _super);
	    /**
	     * Creates a new instance of the Items class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Item(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Item.prototype, "attachmentFiles", {
	        /**
	         * Gets the set of attachments for this item
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "AttachmentFiles");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "contentType", {
	        /**
	         * Gets the content type for this item
	         *
	         */
	        get: function () {
	            return new contenttypes_1.ContentType(this, "ContentType");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "effectiveBasePermissions", {
	        /**
	         * Gets the effective base permissions for the item
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissions");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "effectiveBasePermissionsForUI", {
	        /**
	         * Gets the effective base permissions for the item in a UI context
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "EffectiveBasePermissionsForUI");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesAsHTML", {
	        /**
	         * Gets the field values for this list item in their HTML representation
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesAsHTML");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesAsText", {
	        /**
	         * Gets the field values for this list item in their text representation
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesAsText");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "fieldValuesForEdit", {
	        /**
	         * Gets the field values for this list item for use in editing controls
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "FieldValuesForEdit");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Item.prototype, "folder", {
	        /**
	         * Gets the folder associated with this list item (if this item represents a folder)
	         *
	         */
	        get: function () {
	            return new folders_1.Folder(this, "Folder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates this list intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    Item.prototype.update = function (properties, eTag) {
	        var _this = this;
	        if (eTag === void 0) { eTag = "*"; }
	        this.addBatchDependency();
	        var parentList = this.getParent(queryable_1.QueryableInstance, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
	        return parentList.select("ListItemEntityTypeFullName").getAs().then(function (d) {
	            var postBody = JSON.stringify(util_1.Util.extend({
	                "__metadata": { "type": d.ListItemEntityTypeFullName },
	            }, properties));
	            var promise = _this.post({
	                body: postBody,
	                headers: {
	                    "IF-Match": eTag,
	                    "X-HTTP-Method": "MERGE",
	                },
	            }).then(function (data) {
	                return {
	                    data: data,
	                    item: _this,
	                };
	            });
	            _this.clearBatchDependency();
	            return promise;
	        });
	    };
	    /**
	     * Delete this item
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    Item.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    Item.prototype.recycle = function () {
	        var i = new Item(this, "recycle");
	        return i.post();
	    };
	    /**
	     * Gets a string representation of the full URL to the WOPI frame.
	     * If there is no associated WOPI application, or no associated action, an empty string is returned.
	     *
	     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
	     */
	    Item.prototype.getWopiFrameUrl = function (action) {
	        if (action === void 0) { action = 0; }
	        var i = new Item(this, "getWOPIFrameUrl(@action)");
	        i._query.add("@action", action);
	        return i.post().then(function (data) {
	            return data.GetWOPIFrameUrl;
	        });
	    };
	    /**
	     * Validates and sets the values of the specified collection of fields for the list item.
	     *
	     * @param formValues The fields to change and their new values.
	     * @param newDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
	     */
	    /* tslint:disable max-line-length */
	    Item.prototype.validateUpdateListItem = function (formValues, newDocumentUpdate) {
	        if (newDocumentUpdate === void 0) { newDocumentUpdate = false; }
	        var postBody = JSON.stringify({ "formValues": formValues, bNewDocumentUpdate: newDocumentUpdate });
	        var item = new Item(this, "validateupdatelistitem");
	        return item.post({ body: postBody });
	    };
	    return Item;
	}(queryablesecurable_1.QueryableSecurable));
	exports.Item = Item;
	/**
	 * Provides paging functionality for list items
	 */
	var PagedItemCollection = (function () {
	    function PagedItemCollection() {
	    }
	    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
	        /**
	         * If true there are more results available in the set, otherwise there are not
	         */
	        get: function () {
	            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Creats a new instance of the PagedItemCollection class from the response
	     *
	     * @param r Response instance from which this collection will be created
	     *
	     */
	    PagedItemCollection.fromResponse = function (r) {
	        return r.json().then(function (d) {
	            var col = new PagedItemCollection();
	            col.nextUrl = d["odata.nextLink"];
	            col.results = d.value;
	            return col;
	        });
	    };
	    /**
	     * Gets the next set of results, or resolves to null if no results are available
	     */
	    PagedItemCollection.prototype.getNext = function () {
	        if (this.hasNext) {
	            var items = new Items(this.nextUrl, null);
	            return items.getPaged();
	        }
	        return new Promise(function (r) { return r(null); });
	    };
	    return PagedItemCollection;
	}());
	exports.PagedItemCollection = PagedItemCollection;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var files_1 = __webpack_require__(37);
	var items_1 = __webpack_require__(35);
	/**
	 * Describes a collection of Folder objects
	 *
	 */
	var Folders = (function (_super) {
	    __extends(Folders, _super);
	    /**
	     * Creates a new instance of the Folders class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Folders(baseUrl, path) {
	        if (path === void 0) { path = "folders"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a folder by folder name
	     *
	     */
	    Folders.prototype.getByName = function (name) {
	        var f = new Folder(this);
	        f.concat("('" + name + "')");
	        return f;
	    };
	    /**
	     * Adds a new folder to the current folder (relative) or any folder (absolute)
	     *
	     * @param url The relative or absolute url where the new folder will be created. Urls starting with a forward slash are absolute.
	     * @returns The new Folder and the raw response.
	     */
	    Folders.prototype.add = function (url) {
	        var _this = this;
	        return new Folders(this, "add('" + url + "')").post().then(function (response) {
	            return {
	                data: response,
	                folder: _this.getByName(url),
	            };
	        });
	    };
	    return Folders;
	}(queryable_1.QueryableCollection));
	exports.Folders = Folders;
	/**
	 * Describes a single Folder instance
	 *
	 */
	var Folder = (function (_super) {
	    __extends(Folder, _super);
	    //
	    // TODO:
	    //      Properties (https://msdn.microsoft.com/en-us/library/office/dn450841.aspx#bk_FolderProperties)
	    //          UniqueContentTypeOrder (setter)
	    //          WelcomePage (setter)
	    //
	    /**
	     * Creates a new instance of the Folder class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function Folder(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Folder.prototype, "contentTypeOrder", {
	        /**
	         * Specifies the sequence in which content types are displayed.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "contentTypeOrder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "files", {
	        /**
	         * Gets this folder's files
	         *
	         */
	        get: function () {
	            return new files_1.Files(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "folders", {
	        /**
	         * Gets this folder's sub folders
	         *
	         */
	        get: function () {
	            return new Folders(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "itemCount", {
	        /**
	         * Gets this folder's item count
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "itemCount");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "listItemAllFields", {
	        /**
	         * Gets this folder's list item
	         *
	         */
	        get: function () {
	            return new items_1.Item(this, "listItemAllFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "name", {
	        /**
	         * Gets the folders name
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "name");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "parentFolder", {
	        /**
	         * Gets the parent folder, if available
	         *
	         */
	        get: function () {
	            return new Folder(this, "parentFolder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "properties", {
	        /**
	         * Gets this folder's properties
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableInstance(this, "properties");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "serverRelativeUrl", {
	        /**
	         * Gets this folder's server relative url
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "serverRelativeUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "uniqueContentTypeOrder", {
	        /**
	         * Gets a value that specifies the content type order.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "uniqueContentTypeOrder");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Folder.prototype, "welcomePage", {
	        /**
	         * Gets this folder's welcome page
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "welcomePage");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Delete this folder
	    *
	    * @param eTag Value used in the IF-Match header, by default "*"
	    */
	    Folder.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return new Folder(this).post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     */
	    Folder.prototype.recycle = function () {
	        return new Folder(this, "recycle").post();
	    };
	    return Folder;
	}(queryable_1.QueryableInstance));
	exports.Folder = Folder;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var items_1 = __webpack_require__(35);
	/**
	 * Describes a collection of File objects
	 *
	 */
	var Files = (function (_super) {
	    __extends(Files, _super);
	    /**
	     * Creates a new instance of the Files class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Files(baseUrl, path) {
	        if (path === void 0) { path = "files"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a File by filename
	     *
	     * @param name The name of the file, including extension.
	     */
	    Files.prototype.getByName = function (name) {
	        var f = new File(this);
	        f.concat("('" + name + "')");
	        return f;
	    };
	    /**
	     * Uploads a file.
	     *
	     * @param url The folder-relative url of the file.
	     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
	     * @param content The file contents blob.
	     * @returns The new File and the raw response.
	     */
	    Files.prototype.add = function (url, content, shouldOverWrite) {
	        var _this = this;
	        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
	        return new Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + url + "')")
	            .post({ body: content }).then(function (response) {
	            return {
	                data: response,
	                file: _this.getByName(url),
	            };
	        });
	    };
	    /**
	     * Adds a ghosted file to an existing list or document library.
	     *
	     * @param fileUrl The server-relative url where you want to save the file.
	     * @param templateFileType The type of use to create the file.
	     * @returns The template file that was added and the raw response.
	     */
	    Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
	        var _this = this;
	        return new Files(this, "addTemplateFile(urloffile='" + fileUrl + "',templatefiletype=" + templateFileType + ")")
	            .post().then(function (response) {
	            return {
	                data: response,
	                file: _this.getByName(fileUrl),
	            };
	        });
	    };
	    return Files;
	}(queryable_1.QueryableCollection));
	exports.Files = Files;
	/**
	 * Describes a single File instance
	 *
	 */
	var File = (function (_super) {
	    __extends(File, _super);
	    /**
	     * Creates a new instance of the File class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function File(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(File.prototype, "author", {
	        /**
	         * Gets a value that specifies the user who added the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "author");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "checkedOutByUser", {
	        /**
	         * Gets a result indicating the current user who has the file checked out.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "checkedOutByUser");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "checkInComment", {
	        /**
	         * Gets a value that returns the comment used when a document is checked in to a document library.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "checkInComment");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "checkOutType", {
	        /**
	         * Gets a value that indicates how the file is checked out of a document library.
	         * The checkout state of a file is independent of its locked state.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "checkOutType");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "contentTag", {
	        /**
	         * Returns internal version of content, used to validate document equality for read purposes.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "contentTag");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "customizedPageStatus", {
	        /**
	         * Gets a value that specifies the customization status of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "customizedPageStatus");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "eTag", {
	        /**
	         * Gets the current eTag of a file
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "eTag");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "exists", {
	        /**
	         * Gets a value that specifies whether the file exists.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "exists");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "length", {
	        /**
	         * Gets the size of the file in bytes, excluding the size of any Web Parts that are used in the file.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "length");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "level", {
	        /**
	         * Gets a value that specifies the publishing level of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "level");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "listItemAllFields", {
	        /**
	         * Gets a value that specifies the list item field values for the list item corresponding to the file.
	         *
	         */
	        get: function () {
	            return new items_1.Item(this, "listItemAllFields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "lockedByUser", {
	        /**
	         * Gets a value that returns the user that owns the current lock on the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "lockedByUser");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "majorVersion", {
	        /**
	         * Gets a value that specifies the major version of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "majorVersion");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "minorVersion", {
	        /**
	         * Gets a value that specifies the minor version of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "minorVersion");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "modifiedBy", {
	        /**
	         * Gets a value that returns the user who last modified the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "modifiedBy");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "name", {
	        /**
	         * Gets the name of the file including the extension.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "name");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "serverRelativeUrl", {
	        /**
	         * Gets the server relative url of a file
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "serverRelativeUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "timeCreated", {
	        /**
	         * Gets a value that specifies when the file was created.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "timeCreated");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "timeLastModified", {
	        /**
	         * Gets a value that specifies when the file was last modified.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "timeLastModified");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "title", {
	        /**
	         * Gets a value that specifies the display name of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "title");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "uiVersion", {
	        /**
	         * Gets a value that specifies the implementation-specific version identifier of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "uiVersion");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "uiVersionLabel", {
	        /**
	         * Gets a value that specifies the implementation-specific version identifier of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "uiVersionLabel");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "versions", {
	        /**
	         * Gets a collection of versions
	         *
	         */
	        get: function () {
	            return new Versions(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(File.prototype, "value", {
	        /**
	         * Gets the contents of the file - If the file is not JSON a custom parser function should be used with the get call
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "$value");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Approves the file submitted for content approval with the specified comment.
	     * Only documents in lists that are enabled for content approval can be approved.
	     *
	     * @param comment The comment for the approval.
	     */
	    File.prototype.approve = function (comment) {
	        return new File(this, "approve(comment='" + comment + "')").post();
	    };
	    /**
	     * Stops the chunk upload session without saving the uploaded data.
	     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
	     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     */
	    File.prototype.cancelUpload = function (uploadId) {
	        return new File(this, "cancelUpload(uploadId=guid'" + uploadId + "')").post();
	    };
	    /**
	     * Checks the file in to a document library based on the check-in type.
	     *
	     * @param comment A comment for the check-in. Its length must be <= 1023.
	     * @param checkinType The check-in type for the file.
	     */
	    File.prototype.checkin = function (comment, checkinType) {
	        if (comment === void 0) { comment = ""; }
	        if (checkinType === void 0) { checkinType = CheckinType.Major; }
	        // TODO: Enforce comment length <= 1023
	        return new File(this, "checkin(comment='" + comment + "',checkintype=" + checkinType + ")").post();
	    };
	    /**
	     * Checks out the file from a document library.
	     */
	    File.prototype.checkout = function () {
	        return new File(this, "checkout").post();
	    };
	    /**
	     * Continues the chunk upload session with an additional fragment.
	     * The current file content is not changed.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fileOffset The size of the offset into the file where the fragment starts.
	     * @param fragment The file contents.
	     * @returns The size of the total uploaded data in bytes.
	     */
	    File.prototype.continueUpload = function (uploadId, fileOffset, b) {
	        return new File(this, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")").postAs({ body: b });
	    };
	    /**
	     * Copies the file to the destination url.
	     *
	     * @param url The absolute url or server relative url of the destination file path to copy to.
	     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
	     */
	    File.prototype.copyTo = function (url, shouldOverWrite) {
	        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
	        return new File(this, "copyTo(strnewurl='" + url + "',boverwrite=" + shouldOverWrite + ")").post();
	    };
	    /**
	     * Delete this file.
	     *
	     * @param eTag Value used in the IF-Match header, by default "*"
	     */
	    File.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return new File(this).post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Denies approval for a file that was submitted for content approval.
	     * Only documents in lists that are enabled for content approval can be denied.
	     *
	     * @param comment The comment for the denial.
	     */
	    File.prototype.deny = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        return new File(this, "deny(comment='" + comment + "')").post();
	    };
	    /**
	     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
	     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fileOffset The size of the offset into the file where the fragment starts.
	     * @param fragment The file contents.
	     * @returns The newly uploaded file.
	     */
	    File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
	        return new File(this, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")")
	            .postAs({ body: fragment }).then(function (response) {
	            return {
	                data: response,
	                file: new File(response.ServerRelativeUrl),
	            };
	        });
	    };
	    /**
	     * Specifies the control set used to access, modify, or add Web Parts associated with this Web Part Page and view.
	     * An exception is thrown if the file is not an ASPX page.
	     *
	     * @param scope The WebPartsPersonalizationScope view on the Web Parts page.
	     */
	    File.prototype.getLimitedWebPartManager = function (scope) {
	        if (scope === void 0) { scope = WebPartsPersonalizationScope.User; }
	        return new queryable_1.Queryable(this, "getLimitedWebPartManager(scope=" + scope + ")");
	    };
	    /**
	     * Moves the file to the specified destination url.
	     *
	     * @param url The absolute url or server relative url of the destination file path to move to.
	     * @param moveOperations The bitwise MoveOperations value for how to move the file.
	     */
	    File.prototype.moveTo = function (url, moveOperations) {
	        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
	        return new File(this, "moveTo(newurl='" + url + "',flags=" + moveOperations + ")").post();
	    };
	    /**
	     * Opens the file as a stream.
	     *
	     */
	    File.prototype.openBinaryStream = function () {
	        return new queryable_1.Queryable(this, "openBinaryStream");
	    };
	    /**
	     * Submits the file for content approval with the specified comment.
	     *
	     * @param comment The comment for the published file. Its length must be <= 1023.
	     */
	    File.prototype.publish = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        return new File(this, "publish(comment='" + comment + "')").post();
	    };
	    /**
	     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
	     *
	     * @returns The GUID of the recycled file.
	     */
	    File.prototype.recycle = function () {
	        return new File(this, "recycle").post();
	    };
	    /**
	     * Uploads a binary file.
	     *
	     * @data The file contents.
	     */
	    File.prototype.saveBinaryStream = function (data) {
	        return new File(this, "saveBinary").post({ body: data });
	    };
	    /**
	     * Starts a new chunk upload session and uploads the first fragment.
	     * The current file content is not changed when this method completes.
	     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
	     * The upload session ends either when you use the CancelUpload method or when you successfully
	     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
	     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
	     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
	     * This method is currently available only on Office 365.
	     *
	     * @param uploadId The unique identifier of the upload session.
	     * @param fragment The file contents.
	     * @returns The size of the total uploaded data in bytes.
	     */
	    File.prototype.startUpload = function (uploadId, fragment) {
	        return new File(this, "startUpload(uploadId=guid'" + uploadId + "')").postAs({ body: fragment });
	    };
	    /**
	     * Reverts an existing checkout for the file.
	     *
	     */
	    File.prototype.undoCheckout = function () {
	        return new File(this, "undoCheckout").post();
	    };
	    /**
	     * Removes the file from content approval or unpublish a major version.
	     *
	     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
	     */
	    File.prototype.unpublish = function (comment) {
	        if (comment === void 0) { comment = ""; }
	        // TODO: Enforce comment length <= 1023
	        return new File(this, "unpublish(comment='" + comment + "')").post();
	    };
	    return File;
	}(queryable_1.QueryableInstance));
	exports.File = File;
	/**
	 * Describes a collection of Version objects
	 *
	 */
	var Versions = (function (_super) {
	    __extends(Versions, _super);
	    /**
	     * Creates a new instance of the File class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Versions(baseUrl, path) {
	        if (path === void 0) { path = "versions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a version by id
	     *
	     * @param versionId The id of the version to retrieve
	     */
	    Versions.prototype.getById = function (versionId) {
	        var v = new Version(this);
	        v.concat("(" + versionId + ")");
	        return v;
	    };
	    /**
	     * Deletes all the file version objects in the collection.
	     *
	     */
	    Versions.prototype.deleteAll = function () {
	        return new Versions(this, "deleteAll").post();
	    };
	    /**
	     * Deletes the specified version of the file.
	     *
	     * @param versionId The ID of the file version to delete.
	     */
	    Versions.prototype.deleteById = function (versionId) {
	        return new Versions(this, "deleteById(vid=" + versionId + ")").post();
	    };
	    /**
	     * Deletes the file version object with the specified version label.
	     *
	     * @param label The version label of the file version to delete, for example: 1.2
	     */
	    Versions.prototype.deleteByLabel = function (label) {
	        return new Versions(this, "deleteByLabel(versionlabel='" + label + "')").post();
	    };
	    /**
	     * Creates a new file version from the file specified by the version label.
	     *
	     * @param label The version label of the file version to restore, for example: 1.2
	     */
	    Versions.prototype.restoreByLabel = function (label) {
	        return new Versions(this, "restoreByLabel(versionlabel='" + label + "')").post();
	    };
	    return Versions;
	}(queryable_1.QueryableCollection));
	exports.Versions = Versions;
	/**
	 * Describes a single Version instance
	 *
	 */
	var Version = (function (_super) {
	    __extends(Version, _super);
	    /**
	     * Creates a new instance of the Version class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     * @param path Optional, if supplied will be appended to the supplied baseUrl
	     */
	    function Version(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Version.prototype, "checkInComment", {
	        /**
	         * Gets a value that specifies the check-in comment.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "checkInComment");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "created", {
	        /**
	         * Gets a value that specifies the creation date and time for the file version.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "created");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "createdBy", {
	        /**
	         * Gets a value that specifies the user that represents the creator of the file version.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "createdBy");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "id", {
	        /**
	         * Gets the internal identifier for the file version.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "id");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "isCurrentVersion", {
	        /**
	         * Gets a value that specifies whether the file version is the current version.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "isCurrentVersion");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "size", {
	        /**
	         * Gets a value that specifies the size of this version of the file.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "size");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "url", {
	        /**
	         * Gets a value that specifies the relative URL of the file version based on the URL for the site or subsite.
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "url");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Version.prototype, "versionLabel", {
	        /**
	         * Gets a value that specifies the implementation specific identifier of the file.
	         * Uses the majorVersionNumber.minorVersionNumber format, for example: 1.2
	         *
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "versionLabel");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	    * Delete a specific version of a file.
	    *
	    * @param eTag Value used in the IF-Match header, by default "*"
	    */
	    Version.prototype.delete = function (eTag) {
	        if (eTag === void 0) { eTag = "*"; }
	        return this.post({
	            headers: {
	                "IF-Match": eTag,
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    return Version;
	}(queryable_1.QueryableInstance));
	exports.Version = Version;
	(function (CheckinType) {
	    CheckinType[CheckinType["Minor"] = 0] = "Minor";
	    CheckinType[CheckinType["Major"] = 1] = "Major";
	    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
	})(exports.CheckinType || (exports.CheckinType = {}));
	var CheckinType = exports.CheckinType;
	(function (WebPartsPersonalizationScope) {
	    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
	    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
	})(exports.WebPartsPersonalizationScope || (exports.WebPartsPersonalizationScope = {}));
	var WebPartsPersonalizationScope = exports.WebPartsPersonalizationScope;
	(function (MoveOperations) {
	    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
	    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
	})(exports.MoveOperations || (exports.MoveOperations = {}));
	var MoveOperations = exports.MoveOperations;
	(function (TemplateFileType) {
	    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
	    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
	    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
	})(exports.TemplateFileType || (exports.TemplateFileType = {}));
	var TemplateFileType = exports.TemplateFileType;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	/**
	 * Describes a collection of content types
	 *
	 */
	var ContentTypes = (function (_super) {
	    __extends(ContentTypes, _super);
	    /**
	     * Creates a new instance of the ContentTypes class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this content types collection
	     */
	    function ContentTypes(baseUrl, path) {
	        if (path === void 0) { path = "contenttypes"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a ContentType by content type id
	     */
	    ContentTypes.prototype.getById = function (id) {
	        var ct = new ContentType(this);
	        ct.concat("('" + id + "')");
	        return ct;
	    };
	    return ContentTypes;
	}(queryable_1.QueryableCollection));
	exports.ContentTypes = ContentTypes;
	/**
	 * Describes a single ContentType instance
	 *
	 */
	var ContentType = (function (_super) {
	    __extends(ContentType, _super);
	    /**
	     * Creates a new instance of the ContentType class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this content type instance
	     */
	    function ContentType(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(ContentType.prototype, "descriptionResource", {
	        /**
	         * Gets the description resource
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "descriptionResource");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "fieldLinks", {
	        /**
	         * Gets the column (also known as field) references in the content type.
	        */
	        get: function () {
	            return new queryable_1.Queryable(this, "fieldLinks");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "fields", {
	        /**
	         * Gets a value that specifies the collection of fields for the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "fields");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "nameResource", {
	        /**
	         * Gets name resource
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "nameResource");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "parent", {
	        /**
	         * Gets the parent content type of the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "parent");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "workflowAssociations", {
	        /**
	         * Gets a value that specifies the collection of workflow associations for the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "workflowAssociations");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "description", {
	        /**
	         * Gets or sets a description of the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "description");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "displayFormTemplateName", {
	        /**
	         * Gets or sets a value that specifies the name of a custom display form template
	         * to use for list items that have been assigned the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "displayFormTemplateName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "displayFormUrl", {
	        /**
	         * Gets or sets a value that specifies the URL of a custom display form
	         * to use for list items that have been assigned the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "displayFormUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "documentTemplate", {
	        /**
	         * Gets or sets a value that specifies the file path to the document template
	         * used for a new list item that has been assigned the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "documentTemplate");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "documentTemplateUrl", {
	        /**
	         * Gets a value that specifies the URL of the document template assigned to the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "documentTemplateUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "editFormTemplateName", {
	        /**
	         * Gets or sets a value that specifies the name of a custom edit form template
	         * to use for list items that have been assigned the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "editFormTemplateName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "editFormUrl", {
	        /**
	         * Gets or sets a value that specifies the URL of a custom edit form
	         * to use for list items that have been assigned the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "editFormUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "group", {
	        /**
	         * Gets or sets a value that specifies the content type group for the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "group");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "hidden", {
	        /**
	        * Gets or sets a value that specifies whether the content type is unavailable
	        * for creation or usage directly from a user interface.
	        */
	        get: function () {
	            return new queryable_1.Queryable(this, "hidden");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "jsLink", {
	        /**
	         * Gets or sets the JSLink for the content type custom form template.
	         * NOTE!
	         * The JSLink property is not supported on Survey or Events lists.
	         * A SharePoint calendar is an Events list.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "jsLink");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "name", {
	        /**
	         * Gets a value that specifies the name of the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "name");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "newFormTemplateName", {
	        /**
	         * Gets a value that specifies new form template name of the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "newFormTemplateName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "newFormUrl", {
	        /**
	        * Gets a value that specifies new form url of the content type.
	        */
	        get: function () {
	            return new queryable_1.Queryable(this, "newFormUrl");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "readOnly", {
	        /**
	         * Gets or sets a value that specifies whether changes
	         * to the content type properties are denied.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "readOnly");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "schemaXml", {
	        /**
	         * Gets a value that specifies the XML Schema representing the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "schemaXml");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "scope", {
	        /**
	         * Gets a value that specifies a server-relative path to the content type scope of the content type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "scope");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "sealed", {
	        /**
	         * Gets or sets whether the content type can be modified.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "sealed");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ContentType.prototype, "stringId", {
	        /**
	         * A string representation of the value of the Id.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "stringId");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return ContentType;
	}(queryable_1.QueryableInstance));
	exports.ContentType = ContentType;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var util_1 = __webpack_require__(9);
	/**
	 * Describes the views available in the current context
	 *
	 */
	var Views = (function (_super) {
	    __extends(Views, _super);
	    /**
	     * Creates a new instance of the Views class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Views(baseUrl) {
	        _super.call(this, baseUrl, "views");
	    }
	    /**
	     * Gets a view by guid id
	     *
	     * @param id The GUID id of the view
	     */
	    Views.prototype.getById = function (id) {
	        var v = new View(this);
	        v.concat("('" + id + "')");
	        return v;
	    };
	    /**
	     * Gets a view by title (case-sensitive)
	     *
	     * @param title The case-sensitive title of the view
	     */
	    Views.prototype.getByTitle = function (title) {
	        return new View(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Adds a new view to the collection
	     *
	     * @param title The new views's title
	     * @param personalView True if this is a personal view, otherwise false, default = false
	     * @param additionalSettings Will be passed as part of the view creation body
	     */
	    /*tslint:disable max-line-length */
	    Views.prototype.add = function (title, personalView, additionalSettings) {
	        var _this = this;
	        if (personalView === void 0) { personalView = false; }
	        if (additionalSettings === void 0) { additionalSettings = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.View" },
	            "Title": title,
	            "PersonalView": personalView,
	        }, additionalSettings));
	        return this.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                view: _this.getById(data.Id),
	            };
	        });
	    };
	    return Views;
	}(queryable_1.QueryableCollection));
	exports.Views = Views;
	/**
	 * Describes a single View instance
	 *
	 */
	var View = (function (_super) {
	    __extends(View, _super);
	    /**
	     * Creates a new instance of the View class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function View(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(View.prototype, "fields", {
	        get: function () {
	            return new ViewFields(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates this view intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the view
	     */
	    View.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.View" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                view: _this,
	            };
	        });
	    };
	    /**
	     * Delete this view
	     *
	     */
	    View.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Returns the list view as HTML.
	     *
	     */
	    View.prototype.renderAsHtml = function () {
	        var q = new queryable_1.Queryable(this, "renderashtml");
	        return q.get();
	    };
	    return View;
	}(queryable_1.QueryableInstance));
	exports.View = View;
	var ViewFields = (function (_super) {
	    __extends(ViewFields, _super);
	    function ViewFields(baseUrl, path) {
	        if (path === void 0) { path = "viewfields"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a value that specifies the XML schema that represents the collection.
	     */
	    ViewFields.prototype.getSchemaXml = function () {
	        var q = new queryable_1.Queryable(this, "schemaxml");
	        return q.get();
	    };
	    /**
	     * Adds the field with the specified field internal name or display name to the collection.
	     *
	     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
	     */
	    ViewFields.prototype.add = function (fieldTitleOrInternalName) {
	        var q = new ViewFields(this, "addviewfield('" + fieldTitleOrInternalName + "')");
	        return q.post();
	    };
	    /**
	     * Moves the field with the specified field internal name to the specified position in the collection.
	     *
	     * @param fieldInternalName The case-sensitive internal name of the field to move.
	     * @param index The zero-based index of the new position for the field.
	     */
	    ViewFields.prototype.move = function (fieldInternalName, index) {
	        var q = new ViewFields(this, "moveviewfieldto");
	        var postBody = JSON.stringify({ "field": fieldInternalName, "index": index });
	        return q.post({ body: postBody });
	    };
	    /**
	     * Removes all the fields from the collection.
	     */
	    ViewFields.prototype.removeAll = function () {
	        var q = new ViewFields(this, "removeallviewfields");
	        return q.post();
	    };
	    /**
	     * Removes the field with the specified field internal name from the collection.
	     *
	     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
	     */
	    ViewFields.prototype.remove = function (fieldInternalName) {
	        var q = new ViewFields(this, "removeviewfield('" + fieldInternalName + "')");
	        return q.post();
	    };
	    return ViewFields;
	}(queryable_1.QueryableCollection));
	exports.ViewFields = ViewFields;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var util_1 = __webpack_require__(9);
	var Types = __webpack_require__(41);
	/**
	 * Describes a collection of Field objects
	 *
	 */
	var Fields = (function (_super) {
	    __extends(Fields, _super);
	    /**
	     * Creates a new instance of the Fields class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Fields(baseUrl, path) {
	        if (path === void 0) { path = "fields"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a field from the collection by title
	     *
	     * @param title The case-sensitive title of the field
	     */
	    Fields.prototype.getByTitle = function (title) {
	        return new Field(this, "getByTitle('" + title + "')");
	    };
	    /**
	     * Gets a field from the collection by using internal name or title
	     *
	     * @param name The case-sensitive internal name or title of the field
	     */
	    Fields.prototype.getByInternalNameOrTitle = function (name) {
	        return new Field(this, "getByInternalNameOrTitle('" + name + "')");
	    };
	    /**
	     * Gets a list from the collection by guid id
	     *
	     * @param title The Id of the list
	     */
	    Fields.prototype.getById = function (id) {
	        var f = new Field(this);
	        f.concat("('" + id + "')");
	        return f;
	    };
	    /**
	     * Creates a field based on the specified schema
	     */
	    Fields.prototype.createFieldAsXml = function (xml) {
	        var _this = this;
	        var info;
	        if (typeof xml === "string") {
	            info = { SchemaXml: xml };
	        }
	        else {
	            info = xml;
	        }
	        var postBody = JSON.stringify({
	            "parameters": util_1.Util.extend({
	                "__metadata": {
	                    "type": "SP.XmlSchemaFieldCreationInformation",
	                },
	            }, info),
	        });
	        var q = new Fields(this, "createfieldasxml");
	        return q.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                field: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Adds a new list to the collection
	     *
	     * @param title The new field's title
	     * @param fieldType The new field's type (ex: SP.FieldText)
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.add = function (title, fieldType, properties) {
	        var _this = this;
	        if (properties === void 0) { properties = {}; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": fieldType },
	            "Title": title,
	        }, properties));
	        return this.postAs({ body: postBody }).then(function (data) {
	            return {
	                data: data,
	                field: _this.getById(data.Id),
	            };
	        });
	    };
	    /**
	     * Adds a new SP.FieldText to the collection
	     *
	     * @param title The field title
	     * @param maxLength The maximum number of characters allowed in the value of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addText = function (title, maxLength, properties) {
	        if (maxLength === void 0) { maxLength = 255; }
	        var props = {
	            FieldTypeKind: 2,
	        };
	        return this.add(title, "SP.FieldText", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldCalculated to the collection
	     *
	     * @param title The field title.
	     * @param formula The formula for the field.
	     * @param dateFormat The date and time format that is displayed in the field.
	     * @param outputType Specifies the output format for the field. Represents a FieldType value.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
	        if (outputType === void 0) { outputType = Types.FieldTypes.Text; }
	        var props = {
	            DateFormat: dateFormat,
	            FieldTypeKind: 17,
	            Formula: formula,
	            OutputType: outputType,
	        };
	        return this.add(title, "SP.FieldCalculated", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldDateTime to the collection
	     *
	     * @param title The field title
	     * @param displayFormat The format of the date and time that is displayed in the field.
	     * @param calendarType Specifies the calendar type of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
	        if (displayFormat === void 0) { displayFormat = Types.DateTimeFieldFormatType.DateOnly; }
	        if (calendarType === void 0) { calendarType = Types.CalendarType.Gregorian; }
	        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = 0; }
	        var props = {
	            DateTimeCalendarType: calendarType,
	            DisplayFormat: displayFormat,
	            FieldTypeKind: 4,
	            FriendlyDisplayFormat: friendlyDisplayFormat,
	        };
	        return this.add(title, "SP.FieldDateTime", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldNumber to the collection
	     *
	     * @param title The field title
	     * @param minValue The field's minimum value
	     * @param maxValue The field's maximum value
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
	        var props = { FieldTypeKind: 9 };
	        if (typeof minValue !== "undefined") {
	            props = util_1.Util.extend({ MinimumValue: minValue }, props);
	        }
	        if (typeof maxValue !== "undefined") {
	            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
	        }
	        return this.add(title, "SP.FieldNumber", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldCurrency to the collection
	     *
	     * @param title The field title
	     * @param minValue The field's minimum value
	     * @param maxValue The field's maximum value
	     * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     */
	    Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
	        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
	        var props = {
	            CurrencyLocaleId: currencyLocalId,
	            FieldTypeKind: 10,
	        };
	        if (typeof minValue !== "undefined") {
	            props = util_1.Util.extend({ MinimumValue: minValue }, props);
	        }
	        if (typeof maxValue !== "undefined") {
	            props = util_1.Util.extend({ MaximumValue: maxValue }, props);
	        }
	        return this.add(title, "SP.FieldCurrency", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldMultiLineText to the collection
	     *
	     * @param title The field title
	     * @param numberOfLines Specifies the number of lines of text to display for the field.
	     * @param richText Specifies whether the field supports rich formatting.
	     * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
	     * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
	     * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
	     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
	     *
	     */
	    Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
	        if (numberOfLines === void 0) { numberOfLines = 6; }
	        if (richText === void 0) { richText = true; }
	        if (restrictedMode === void 0) { restrictedMode = false; }
	        if (appendOnly === void 0) { appendOnly = false; }
	        if (allowHyperlink === void 0) { allowHyperlink = true; }
	        var props = {
	            AllowHyperlink: allowHyperlink,
	            AppendOnly: appendOnly,
	            FieldTypeKind: 3,
	            NumberOfLines: numberOfLines,
	            RestrictedMode: restrictedMode,
	            RichText: richText,
	        };
	        return this.add(title, "SP.FieldMultiLineText", util_1.Util.extend(props, properties));
	    };
	    /**
	     * Adds a new SP.FieldUrl to the collection
	     *
	     * @param title The field title
	     */
	    Fields.prototype.addUrl = function (title, displayFormat, properties) {
	        if (displayFormat === void 0) { displayFormat = Types.UrlFieldFormatType.Hyperlink; }
	        var props = {
	            DisplayFormat: displayFormat,
	            FieldTypeKind: 11,
	        };
	        return this.add(title, "SP.FieldUrl", util_1.Util.extend(props, properties));
	    };
	    return Fields;
	}(queryable_1.QueryableCollection));
	exports.Fields = Fields;
	/**
	 * Describes a single of Field instance
	 *
	 */
	var Field = (function (_super) {
	    __extends(Field, _super);
	    /**
	     * Creates a new instance of the Field class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this field instance
	     */
	    function Field(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    Object.defineProperty(Field.prototype, "canBeDeleted", {
	        /**
	          * Gets a value that specifies whether the field can be deleted.
	          */
	        get: function () {
	            return new queryable_1.Queryable(this, "canBeDeleted");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "defaultValue", {
	        /**
	         * Gets a value that specifies the default value for the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "defaultValue");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "description", {
	        /**
	         * Gets a value that specifies the description of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "description");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "direction", {
	        /**
	         * Gets a value that specifies the reading order of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "direction");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "enforceUniqueValues", {
	        /**
	         * Gets a value that specifies whether to require unique field values in a list or library column.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "enforceUniqueValues");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "entityPropertyName", {
	        /**
	         * Gets the name of the entity property for the list item entity that uses this field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "entityPropertyName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "filterable", {
	        /**
	         * Gets a value that specifies whether list items in the list can be filtered by the field value.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "filterable");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "fromBaseType", {
	        /**
	         * Gets a Boolean value that indicates whether the field derives from a base field type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "fromBaseType");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "group", {
	        /**
	         * Gets a value that specifies the field group.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "group");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "hidden", {
	        /**
	         * Gets a value that specifies whether the field is hidden in list views and list forms.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "hidden");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "id", {
	        /**
	         * Gets a value that specifies the field identifier.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "id");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "indexed", {
	        /**
	         * Gets a Boolean value that specifies whether the field is indexed.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "indexed");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "internalName", {
	        /**
	         * Gets a value that specifies the field internal name.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "internalName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "jsLink", {
	        /**
	         * Gets the name of an external JS file containing any client rendering logic for fields of this type.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "jsLink");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "readOnlyField", {
	        /**
	         * Gets a value that specifies whether the value of the field is read-only.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "readOnlyField");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "required", {
	        /**
	         * Gets a value that specifies whether the field requires a value.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "required");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "schemaXml", {
	        /**
	         * Gets a value that specifies the XML schema that defines the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "schemaXml");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "scope", {
	        /**
	         * Gets a value that specifies the server-relative URL of the list or the site to which the field belongs.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "scope");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "sealed", {
	        /**
	         * Gets a value that specifies whether properties on the field cannot be changed and whether the field cannot be deleted.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "sealed");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "sortable", {
	        /**
	         * Gets a value that specifies whether list items in the list can be sorted by the field value.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "sortable");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "staticName", {
	        /**
	         * Gets a value that specifies a customizable identifier of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "staticName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "title", {
	        /**
	         * Gets value that specifies the display name of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "title");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "fieldTypeKind", {
	        /**
	         * Gets a value that specifies the type of the field. Represents a FieldType value.
	         * See FieldType in the .NET client object model reference for a list of field type values.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "fieldTypeKind");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "typeAsString", {
	        /**
	         * Gets a value that specifies the type of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "typeAsString");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "typeDisplayName", {
	        /**
	         * Gets a value that specifies the display name for the type of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "typeDisplayName");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "typeShortDescription", {
	        /**
	         * Gets a value that specifies the description for the type of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "typeShortDescription");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "validationFormula", {
	        /**
	         * Gets a value that specifies the data validation criteria for the value of the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "validationFormula");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Field.prototype, "validationMessage", {
	        /**
	         * Gets a value that specifies the error message returned when data validation fails for the field.
	         */
	        get: function () {
	            return new queryable_1.Queryable(this, "validationMessage");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Updates this field intance with the supplied properties
	     *
	     * @param properties A plain object hash of values to update for the list
	     * @param fieldType The type value, required to update child field type properties
	     */
	    Field.prototype.update = function (properties, fieldType) {
	        var _this = this;
	        if (fieldType === void 0) { fieldType = "SP.Field"; }
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": fieldType },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                data: data,
	                field: _this,
	            };
	        });
	    };
	    /**
	     * Delete this fields
	     *
	     */
	    Field.prototype.delete = function () {
	        return this.post({
	            headers: {
	                "X-HTTP-Method": "DELETE",
	            },
	        });
	    };
	    /**
	     * Sets the value of the ShowInDisplayForm property for this field.
	     */
	    Field.prototype.setShowInDisplayForm = function (show) {
	        var q = new Field(this, "setshowindisplayform(" + show + ")");
	        return q.post();
	    };
	    /**
	     * Sets the value of the ShowInEditForm property for this field.
	     */
	    Field.prototype.setShowInEditForm = function (show) {
	        var q = new Field(this, "setshowineditform(" + show + ")");
	        return q.post();
	    };
	    /**
	     * Sets the value of the ShowInNewForm property for this field.
	     */
	    Field.prototype.setShowInNewForm = function (show) {
	        var q = new Field(this, "setshowinnewform(" + show + ")");
	        return q.post();
	    };
	    return Field;
	}(queryable_1.QueryableInstance));
	exports.Field = Field;


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Determines the display mode of the given control or view
	 */
	(function (ControlMode) {
	    ControlMode[ControlMode["Display"] = 1] = "Display";
	    ControlMode[ControlMode["Edit"] = 2] = "Edit";
	    ControlMode[ControlMode["New"] = 3] = "New";
	})(exports.ControlMode || (exports.ControlMode = {}));
	var ControlMode = exports.ControlMode;
	/**
	 * Specifies the type of the field.
	 */
	(function (FieldTypes) {
	    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
	    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
	    FieldTypes[FieldTypes["Text"] = 2] = "Text";
	    FieldTypes[FieldTypes["Note"] = 3] = "Note";
	    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
	    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
	    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
	    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
	    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
	    FieldTypes[FieldTypes["Number"] = 9] = "Number";
	    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
	    FieldTypes[FieldTypes["URL"] = 11] = "URL";
	    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
	    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
	    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
	    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
	    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
	    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
	    FieldTypes[FieldTypes["File"] = 18] = "File";
	    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
	    FieldTypes[FieldTypes["User"] = 20] = "User";
	    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
	    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
	    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
	    FieldTypes[FieldTypes["Error"] = 24] = "Error";
	    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
	    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
	    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
	    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
	    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
	    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
	})(exports.FieldTypes || (exports.FieldTypes = {}));
	var FieldTypes = exports.FieldTypes;
	(function (DateTimeFieldFormatType) {
	    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
	    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
	})(exports.DateTimeFieldFormatType || (exports.DateTimeFieldFormatType = {}));
	var DateTimeFieldFormatType = exports.DateTimeFieldFormatType;
	/**
	 * Specifies the control settings while adding a field.
	 */
	(function (AddFieldOptions) {
	    /**
	     *  Specify that a new field added to the list must also be added to the default content type in the site collection
	     */
	    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
	    /**
	     * Specify that a new field added to the list must also be added to the default content type in the site collection.
	     */
	    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
	    /**
	     * Specify that a new field must not be added to any other content type
	     */
	    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
	    /**
	     *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
	     */
	    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
	    /**
	     * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
	    /**
	     * Specify that a new field that is added to the specified list must also be added to the default list view
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
	    /**
	     * Specify to confirm that no other field has the same display name
	     */
	    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
	})(exports.AddFieldOptions || (exports.AddFieldOptions = {}));
	var AddFieldOptions = exports.AddFieldOptions;
	(function (CalendarType) {
	    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
	    CalendarType[CalendarType["Japan"] = 3] = "Japan";
	    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
	    CalendarType[CalendarType["Korea"] = 5] = "Korea";
	    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
	    CalendarType[CalendarType["Thai"] = 7] = "Thai";
	    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
	    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
	    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
	    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
	    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
	    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
	    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
	    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
	    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
	})(exports.CalendarType || (exports.CalendarType = {}));
	var CalendarType = exports.CalendarType;
	(function (UrlFieldFormatType) {
	    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
	    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
	})(exports.UrlFieldFormatType || (exports.UrlFieldFormatType = {}));
	var UrlFieldFormatType = exports.UrlFieldFormatType;
	(function (PrincipalType) {
	    PrincipalType[PrincipalType["None"] = 0] = "None";
	    PrincipalType[PrincipalType["User"] = 1] = "User";
	    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
	    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
	    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
	    PrincipalType[PrincipalType["All"] = 15] = "All";
	})(exports.PrincipalType || (exports.PrincipalType = {}));
	var PrincipalType = exports.PrincipalType;
	(function (PageType) {
	    PageType[PageType["Invalid"] = -1] = "Invalid";
	    PageType[PageType["DefaultView"] = 0] = "DefaultView";
	    PageType[PageType["NormalView"] = 1] = "NormalView";
	    PageType[PageType["DialogView"] = 2] = "DialogView";
	    PageType[PageType["View"] = 3] = "View";
	    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
	    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
	    PageType[PageType["EditForm"] = 6] = "EditForm";
	    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
	    PageType[PageType["NewForm"] = 8] = "NewForm";
	    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
	    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
	    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
	})(exports.PageType || (exports.PageType = {}));
	var PageType = exports.PageType;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	/**
	 * Describes a collection of Field objects
	 *
	 */
	var Forms = (function (_super) {
	    __extends(Forms, _super);
	    /**
	     * Creates a new instance of the Fields class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Forms(baseUrl, path) {
	        if (path === void 0) { path = "forms"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Gets a form by id
	     *
	     * @param id The guid id of the item to retrieve
	     */
	    Forms.prototype.getById = function (id) {
	        var i = new Form(this);
	        i.concat("('" + id + "')");
	        return i;
	    };
	    return Forms;
	}(queryable_1.QueryableCollection));
	exports.Forms = Forms;
	/**
	 * Describes a single of Form instance
	 *
	 */
	var Form = (function (_super) {
	    __extends(Form, _super);
	    /**
	     * Creates a new instance of the Form class
	     *
	     * @param baseUrl The url or Queryable which is the parent of this form instance
	     */
	    function Form(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    return Form;
	}(queryable_1.QueryableInstance));
	exports.Form = Form;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var util_1 = __webpack_require__(9);
	var UserCustomActions = (function (_super) {
	    __extends(UserCustomActions, _super);
	    function UserCustomActions(baseUrl, path) {
	        if (path === void 0) { path = "usercustomactions"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Returns the custom action with the specified identifier.
	     *
	     * @param id The GUID ID of the user custom action to get.
	     */
	    UserCustomActions.prototype.getById = function (id) {
	        return new UserCustomAction(this, "(" + id + ")");
	    };
	    /**
	     * Create a custom action
	     *
	     * @param creationInfo The information which defines the new custom action
	     *
	     */
	    UserCustomActions.prototype.add = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({ __metadata: { "type": "SP.UserCustomAction" } }, properties));
	        return this.post({ body: postBody }).then(function (data) {
	            return {
	                action: _this.getById(data.Id),
	                data: data,
	            };
	        });
	    };
	    /**
	     * Deletes all custom actions in the collection.
	     *
	     */
	    UserCustomActions.prototype.clear = function () {
	        var a = new UserCustomActions(this, "clear");
	        return a.post();
	    };
	    return UserCustomActions;
	}(queryable_1.QueryableCollection));
	exports.UserCustomActions = UserCustomActions;
	var UserCustomAction = (function (_super) {
	    __extends(UserCustomAction, _super);
	    function UserCustomAction(baseUrl, path) {
	        _super.call(this, baseUrl, path);
	    }
	    UserCustomAction.prototype.update = function (properties) {
	        var _this = this;
	        var postBody = JSON.stringify(util_1.Util.extend({
	            "__metadata": { "type": "SP.UserCustomAction" },
	        }, properties));
	        return this.post({
	            body: postBody,
	            headers: {
	                "X-HTTP-Method": "MERGE",
	            },
	        }).then(function (data) {
	            return {
	                action: _this,
	                data: data,
	            };
	        });
	    };
	    return UserCustomAction;
	}(queryable_1.QueryableInstance));
	exports.UserCustomAction = UserCustomAction;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var quicklaunch_1 = __webpack_require__(45);
	var topnavigationbar_1 = __webpack_require__(46);
	/**
	 * Exposes the navigation components
	 *
	 */
	var Navigation = (function (_super) {
	    __extends(Navigation, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function Navigation(baseUrl) {
	        _super.call(this, baseUrl, "navigation");
	    }
	    Object.defineProperty(Navigation.prototype, "quicklaunch", {
	        /**
	         * Gets the quicklaunch navigation for the current context
	         *
	         */
	        get: function () {
	            return new quicklaunch_1.QuickLaunch(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Navigation.prototype, "topNavigationBar", {
	        /**
	         * Gets the top bar navigation navigation for the current context
	         *
	         */
	        get: function () {
	            return new topnavigationbar_1.TopNavigationBar(this);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Navigation;
	}(queryable_1.Queryable));
	exports.Navigation = Navigation;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	/**
	 * Describes the quick launch navigation
	 *
	 */
	var QuickLaunch = (function (_super) {
	    __extends(QuickLaunch, _super);
	    /**
	     * Creates a new instance of the Lists class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function QuickLaunch(baseUrl) {
	        _super.call(this, baseUrl, "QuickLaunch");
	    }
	    return QuickLaunch;
	}(queryable_1.Queryable));
	exports.QuickLaunch = QuickLaunch;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	/**
	 * Describes the top navigation on the site
	 *
	 */
	var TopNavigationBar = (function (_super) {
	    __extends(TopNavigationBar, _super);
	    /**
	     * Creates a new instance of the SiteUsers class
	     *
	     * @param baseUrl The url or Queryable which forms the parent of this fields collection
	     */
	    function TopNavigationBar(baseUrl) {
	        _super.call(this, baseUrl, "TopNavigationBar");
	    }
	    return TopNavigationBar;
	}(queryable_1.QueryableInstance));
	exports.TopNavigationBar = TopNavigationBar;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var queryable_1 = __webpack_require__(19);
	var FileUtil = __webpack_require__(48);
	var odata_1 = __webpack_require__(23);
	var UserProfileQuery = (function (_super) {
	    __extends(UserProfileQuery, _super);
	    function UserProfileQuery(baseUrl, path) {
	        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
	        _super.call(this, baseUrl, path);
	        this.profileLoader = new ProfileLoader(baseUrl);
	    }
	    Object.defineProperty(UserProfileQuery.prototype, "editProfileLink", {
	        /**
	         * The URL of the edit profile page for the current user.
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, "EditProfileLink");
	            return q.getAs(odata_1.ODataValue());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "isMyPeopleListPublic", {
	        /**
	         * A Boolean value that indicates whether the current user's People I'm Following list is public.
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, "IsMyPeopleListPublic");
	            return q.getAs(odata_1.ODataValue());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * A Boolean value that indicates whether the current user's People I'm Following list is public.
	     *
	     * @param loginName The account name of the user
	     */
	    UserProfileQuery.prototype.amIFollowedBy = function (loginName) {
	        var q = new UserProfileQuery(this, "amifollowedby(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Checks whether the current user is following the specified user.
	     *
	     * @param loginName The account name of the user
	     */
	    UserProfileQuery.prototype.amIFollowing = function (loginName) {
	        var q = new UserProfileQuery(this, "amifollowing(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Gets tags that the user is following.
	     *
	     * @param maxCount The maximum number of tags to get.
	     */
	    UserProfileQuery.prototype.getFollowedTags = function (maxCount) {
	        if (maxCount === void 0) { maxCount = 20; }
	        var q = new UserProfileQuery(this, "getfollowedtags(" + maxCount + ")");
	        return q.get();
	    };
	    /**
	     * Gets the people who are following the specified user.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getFollowersFor = function (loginName) {
	        var q = new UserProfileQuery(this, "getfollowersfor(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "myFollowers", {
	        /**
	         * Gets the people who are following the current user.
	         *
	         */
	        get: function () {
	            return new queryable_1.QueryableCollection(this, "getmyfollowers");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "myProperties", {
	        /**
	         * Gets user properties for the current user.
	         *
	         */
	        get: function () {
	            return new UserProfileQuery(this, "getmyproperties");
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the people who the specified user is following.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getPeopleFollowedBy = function (loginName) {
	        var q = new UserProfileQuery(this, "getpeoplefollowedby(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Gets user properties for the specified user.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.getPropertiesFor = function (loginName) {
	        var q = new UserProfileQuery(this, "getpropertiesfor(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "trendingTags", {
	        /**
	         * Gets the most popular tags.
	         *
	         */
	        get: function () {
	            var q = new UserProfileQuery(this, null);
	            q.concat(".gettrendingtags");
	            return q.get();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Gets the specified user profile property for the specified user.
	     *
	     * @param loginName The account name of the user.
	     * @param propertyName The case-sensitive name of the property to get.
	     */
	    UserProfileQuery.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
	        var q = new UserProfileQuery(this, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.get();
	    };
	    /**
	     * Removes the specified user from the user's list of suggested people to follow.
	     *
	     * @param loginName The account name of the user.
	     */
	    UserProfileQuery.prototype.hideSuggestion = function (loginName) {
	        var q = new UserProfileQuery(this, "hidesuggestion(@v)");
	        q.query.add("@v", "'" + encodeURIComponent(loginName) + "'");
	        return q.post();
	    };
	    /**
	     * Checks whether the first user is following the second user.
	     *
	     * @param follower The account name of the user who might be following followee.
	     * @param followee The account name of the user who might be followed.
	     */
	    UserProfileQuery.prototype.isFollowing = function (follower, followee) {
	        var q = new UserProfileQuery(this, null);
	        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
	        q.query.add("@v", "'" + encodeURIComponent(follower) + "'");
	        q.query.add("@y", "'" + encodeURIComponent(followee) + "'");
	        return q.get();
	    };
	    /**
	     * Uploads and sets the user profile picture
	     *
	     * @param profilePicSource Blob data representing the user's picture
	     */
	    UserProfileQuery.prototype.setMyProfilePic = function (profilePicSource) {
	        var _this = this;
	        return FileUtil.readBlobAsArrayBuffer(profilePicSource).then(function (buffer) {
	            var request = new UserProfileQuery(_this, "setmyprofilepicture");
	            return request.post({
	                body: String.fromCharCode.apply(null, new Uint16Array(buffer)),
	            });
	        });
	    };
	    /**
	     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
	     *
	     * @param emails The email addresses of the users to provision sites for
	     */
	    UserProfileQuery.prototype.createPersonalSiteEnqueueBulk = function () {
	        var emails = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            emails[_i - 0] = arguments[_i];
	        }
	        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
	    };
	    Object.defineProperty(UserProfileQuery.prototype, "ownerUserProfile", {
	        /**
	         * Gets the user profile of the site owner.
	         *
	         */
	        get: function () {
	            return this.profileLoader.ownerUserProfile;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UserProfileQuery.prototype, "userProfile", {
	        /**
	         * Gets the user profile that corresponds to the current user.
	         */
	        get: function () {
	            return this.profileLoader.userProfile;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
	     *
	     * @param interactiveRequest true if interactively (web) initiated request, or false if non-interactively (client) initiated request
	     */
	    UserProfileQuery.prototype.createPersonalSite = function (interactiveRequest) {
	        if (interactiveRequest === void 0) { interactiveRequest = false; }
	        return this.profileLoader.createPersonalSite(interactiveRequest);
	    };
	    /**
	     * Sets the privacy settings for this profile.
	     *
	     * @param share true to make all social data public; false to make all social data private.
	     */
	    UserProfileQuery.prototype.shareAllSocialData = function (share) {
	        return this.profileLoader.shareAllSocialData(share);
	    };
	    return UserProfileQuery;
	}(queryable_1.QueryableInstance));
	exports.UserProfileQuery = UserProfileQuery;
	var ProfileLoader = (function (_super) {
	    __extends(ProfileLoader, _super);
	    function ProfileLoader(baseUrl, path) {
	        if (path === void 0) { path = "_api/sp.userprofiles.profileloader.getprofileloader"; }
	        _super.call(this, baseUrl, path);
	    }
	    /**
	     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
	     *
	     * @param emails The email addresses of the users to provision sites for
	     */
	    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
	        var q = new ProfileLoader(this, "createpersonalsiteenqueuebulk");
	        var postBody = JSON.stringify({ "emailIDs": emails });
	        return q.post({
	            body: postBody,
	        });
	    };
	    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
	        /**
	         * Gets the user profile of the site owner.
	         *
	         */
	        get: function () {
	            var q = this.getParent(ProfileLoader, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
	            return q.postAs();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
	        /**
	         * Gets the user profile that corresponds to the current user.
	         *
	         */
	        get: function () {
	            var q = new ProfileLoader(this, "getuserprofile");
	            return q.postAs();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
	     *
	     * @param interactiveRequest true if interactively (web) initiated request, or false if non-interactively (client) initiated request
	     */
	    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
	        if (interactiveRequest === void 0) { interactiveRequest = false; }
	        var q = new ProfileLoader(this, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")\",");
	        return q.post();
	    };
	    /**
	     * Sets the privacy settings for this profile.
	     *
	     * @param share true to make all social data public; false to make all social data private.
	     */
	    ProfileLoader.prototype.shareAllSocialData = function (share) {
	        var q = new ProfileLoader(this, "getuserprofile/shareallsocialdata(" + share + ")\",");
	        return q.post();
	    };
	    return ProfileLoader;
	}(queryable_1.Queryable));


/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Reads a blob as text
	 *
	 * @param blob The data to read
	 */
	function readBlobAsText(blob) {
	    return readBlobAs(blob, "string");
	}
	exports.readBlobAsText = readBlobAsText;
	/**
	 * Reads a blob into an array buffer
	 *
	 * @param blob The data to read
	 */
	function readBlobAsArrayBuffer(blob) {
	    return readBlobAs(blob, "buffer");
	}
	exports.readBlobAsArrayBuffer = readBlobAsArrayBuffer;
	/**
	 * Generic method to read blob's content
	 *
	 * @param blob The data to read
	 * @param mode The read mode
	 */
	function readBlobAs(blob, mode) {
	    return new Promise(function (resolve, reject) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            resolve(e.target.result);
	        };
	        switch (mode) {
	            case "string":
	                reader.readAsText(blob);
	                break;
	            case "buffer":
	                reader.readAsArrayBuffer(blob);
	                break;
	        }
	    });
	}


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(50).default;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _i18next = __webpack_require__(51);

	var _i18next2 = _interopRequireDefault(_i18next);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _i18next2.default;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(53);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _ResourceStore = __webpack_require__(54);

	var _ResourceStore2 = _interopRequireDefault(_ResourceStore);

	var _Translator = __webpack_require__(56);

	var _Translator2 = _interopRequireDefault(_Translator);

	var _LanguageUtils = __webpack_require__(59);

	var _LanguageUtils2 = _interopRequireDefault(_LanguageUtils);

	var _PluralResolver = __webpack_require__(60);

	var _PluralResolver2 = _interopRequireDefault(_PluralResolver);

	var _Interpolator = __webpack_require__(61);

	var _Interpolator2 = _interopRequireDefault(_Interpolator);

	var _BackendConnector = __webpack_require__(62);

	var _BackendConnector2 = _interopRequireDefault(_BackendConnector);

	var _CacheConnector = __webpack_require__(63);

	var _CacheConnector2 = _interopRequireDefault(_CacheConnector);

	var _defaults2 = __webpack_require__(64);

	var _postProcessor = __webpack_require__(57);

	var _postProcessor2 = _interopRequireDefault(_postProcessor);

	var _v = __webpack_require__(58);

	var compat = _interopRequireWildcard(_v);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var I18n = function (_EventEmitter) {
	  _inherits(I18n, _EventEmitter);

	  function I18n() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var callback = arguments[1];

	    _classCallCheck(this, I18n);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.options = (0, _defaults2.transformOptions)(options);
	    _this.services = {};
	    _this.logger = _logger2.default;
	    _this.modules = {};

	    if (callback && !_this.isInitialized) _this.init(options, callback);
	    return _this;
	  }

	  I18n.prototype.init = function init(options, callback) {
	    var _this2 = this;

	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!options) options = {};

	    if (options.compatibilityAPI === 'v1') {
	      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertAPIOptions(options)), {});
	    } else if (options.compatibilityJSON === 'v1') {
	      this.options = _extends({}, (0, _defaults2.get)(), (0, _defaults2.transformOptions)(compat.convertJSONOptions(options)), {});
	    } else {
	      this.options = _extends({}, (0, _defaults2.get)(), this.options, (0, _defaults2.transformOptions)(options));
	    }
	    if (!callback) callback = function callback() {};

	    function createClassOnDemand(ClassOrObject) {
	      if (!ClassOrObject) return;
	      if (typeof ClassOrObject === 'function') return new ClassOrObject();
	      return ClassOrObject;
	    }

	    // init services
	    if (!this.options.isClone) {
	      if (this.modules.logger) {
	        _logger2.default.init(createClassOnDemand(this.modules.logger), this.options);
	      } else {
	        _logger2.default.init(null, this.options);
	      }

	      var lu = new _LanguageUtils2.default(this.options);
	      this.store = new _ResourceStore2.default(this.options.resources, this.options);

	      var s = this.services;
	      s.logger = _logger2.default;
	      s.resourceStore = this.store;
	      s.resourceStore.on('added removed', function (lng, ns) {
	        s.cacheConnector.save();
	      });
	      s.languageUtils = lu;
	      s.pluralResolver = new _PluralResolver2.default(lu, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON });
	      s.interpolator = new _Interpolator2.default(this.options);

	      s.backendConnector = new _BackendConnector2.default(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
	      // pipe events from backendConnector
	      s.backendConnector.on('*', function (event) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });

	      s.backendConnector.on('loaded', function (loaded) {
	        s.cacheConnector.save();
	      });

	      s.cacheConnector = new _CacheConnector2.default(createClassOnDemand(this.modules.cache), s.resourceStore, s, this.options);
	      // pipe events from backendConnector
	      s.cacheConnector.on('*', function (event) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	          args[_key2 - 1] = arguments[_key2];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });

	      if (this.modules.languageDetector) {
	        s.languageDetector = createClassOnDemand(this.modules.languageDetector);
	        s.languageDetector.init(s, this.options.detection, this.options);
	      }

	      this.translator = new _Translator2.default(this.services, this.options);
	      // pipe events from translator
	      this.translator.on('*', function (event) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	          args[_key3 - 1] = arguments[_key3];
	        }

	        _this2.emit.apply(_this2, [event].concat(args));
	      });
	    }

	    // append api
	    var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle'];
	    storeApi.forEach(function (fcName) {
	      _this2[fcName] = function () {
	        return this.store[fcName].apply(this.store, arguments);
	      };
	    });

	    // TODO: COMPATIBILITY remove this
	    if (this.options.compatibilityAPI === 'v1') compat.appendBackwardsAPI(this);

	    var load = function load() {
	      _this2.changeLanguage(_this2.options.lng, function (err, t) {
	        _this2.emit('initialized', _this2.options);
	        _this2.logger.log('initialized', _this2.options);

	        callback(err, t);
	      });
	    };

	    if (this.options.resources || !this.options.initImmediate) {
	      load();
	    } else {
	      setTimeout(load, 0);
	    }

	    return this;
	  };

	  I18n.prototype.loadResources = function loadResources(callback) {
	    var _this3 = this;

	    if (!callback) callback = function callback() {};

	    if (!this.options.resources) {
	      var _ret = function () {
	        if (_this3.language && _this3.language.toLowerCase() === 'cimode') return {
	            v: callback()
	          }; // avoid loading resources for cimode

	        var toLoad = [];

	        var append = function append(lng) {
	          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);
	          lngs.forEach(function (l) {
	            if (toLoad.indexOf(l) < 0) toLoad.push(l);
	          });
	        };

	        append(_this3.language);

	        if (_this3.options.preload) {
	          _this3.options.preload.forEach(function (l) {
	            append(l);
	          });
	        }

	        _this3.services.cacheConnector.load(toLoad, _this3.options.ns, function () {
	          _this3.services.backendConnector.load(toLoad, _this3.options.ns, callback);
	        });
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      callback(null);
	    }
	  };

	  I18n.prototype.reloadResources = function reloadResources(lngs, ns) {
	    if (!lngs) lngs = this.languages;
	    if (!ns) ns = this.options.ns;
	    this.services.backendConnector.reload(lngs, ns);
	  };

	  I18n.prototype.use = function use(module) {
	    if (module.type === 'backend') {
	      this.modules.backend = module;
	    }

	    if (module.type === 'cache') {
	      this.modules.cache = module;
	    }

	    if (module.type === 'logger' || module.log && module.warn && module.warn) {
	      this.modules.logger = module;
	    }

	    if (module.type === 'languageDetector') {
	      this.modules.languageDetector = module;
	    }

	    if (module.type === 'postProcessor') {
	      _postProcessor2.default.addPostProcessor(module);
	    }

	    return this;
	  };

	  I18n.prototype.changeLanguage = function changeLanguage(lng, callback) {
	    var _this4 = this;

	    var done = function done(err) {
	      if (lng) {
	        _this4.emit('languageChanged', lng);
	        _this4.logger.log('languageChanged', lng);
	      }

	      if (callback) callback(err, function () {
	        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        return _this4.t.apply(_this4, args);
	      });
	    };

	    if (!lng && this.services.languageDetector) lng = this.services.languageDetector.detect();

	    if (lng) {
	      this.language = lng;
	      this.languages = this.services.languageUtils.toResolveHierarchy(lng);

	      this.translator.changeLanguage(lng);

	      if (this.services.languageDetector) this.services.languageDetector.cacheUserLanguage(lng);
	    }

	    this.loadResources(function (err) {
	      done(err);
	    });
	  };

	  I18n.prototype.getFixedT = function getFixedT(lng, ns) {
	    var _this5 = this;

	    var fixedT = function fixedT(key, options) {
	      options = options || {};
	      options.lng = options.lng || fixedT.lng;
	      options.ns = options.ns || fixedT.ns;
	      return _this5.t(key, options);
	    };
	    fixedT.lng = lng;
	    fixedT.ns = ns;
	    return fixedT;
	  };

	  I18n.prototype.t = function t() {
	    return this.translator && this.translator.translate.apply(this.translator, arguments);
	  };

	  I18n.prototype.exists = function exists() {
	    return this.translator && this.translator.exists.apply(this.translator, arguments);
	  };

	  I18n.prototype.setDefaultNamespace = function setDefaultNamespace(ns) {
	    this.options.defaultNS = ns;
	  };

	  I18n.prototype.loadNamespaces = function loadNamespaces(ns, callback) {
	    var _this6 = this;

	    if (!this.options.ns) return callback && callback();
	    if (typeof ns === 'string') ns = [ns];

	    ns.forEach(function (n) {
	      if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
	    });

	    this.loadResources(callback);
	  };

	  I18n.prototype.loadLanguages = function loadLanguages(lngs, callback) {
	    if (typeof lngs === 'string') lngs = [lngs];
	    var preloaded = this.options.preload || [];

	    var newLngs = lngs.filter(function (lng) {
	      return preloaded.indexOf(lng) < 0;
	    });
	    // Exit early if all given languages are already preloaded
	    if (!newLngs.length) return callback();

	    this.options.preload = preloaded.concat(newLngs);
	    this.loadResources(callback);
	  };

	  I18n.prototype.dir = function dir(lng) {
	    if (!lng) lng = this.language;
	    if (!lng) return 'rtl';

	    var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];

	    return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
	  };

	  I18n.prototype.createInstance = function createInstance() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var callback = arguments[1];

	    return new I18n(options, callback);
	  };

	  I18n.prototype.cloneInstance = function cloneInstance() {
	    var _this7 = this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var callback = arguments[1];

	    var clone = new I18n(_extends({}, options, this.options, { isClone: true }), callback);
	    var membersToCopy = ['store', 'services', 'language'];
	    membersToCopy.forEach(function (m) {
	      clone[m] = _this7[m];
	    });
	    clone.translator = new _Translator2.default(clone.services, clone.options);
	    clone.translator.on('*', function (event) {
	      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	        args[_key5 - 1] = arguments[_key5];
	      }

	      clone.emit.apply(clone, [event].concat(args));
	    });

	    return clone;
	  };

	  return I18n;
	}(_EventEmitter3.default);

	exports.default = new I18n();

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var consoleLogger = {
	  type: 'logger',

	  log: function log(args) {
	    this._output('log', args);
	  },
	  warn: function warn(args) {
	    this._output('warn', args);
	  },
	  error: function error(args) {
	    this._output('error', args);
	  },
	  _output: function _output(type, args) {
	    if (console && console[type]) console[type].apply(console, Array.prototype.slice.call(args));
	  }
	};

	var Logger = function () {
	  function Logger(concreteLogger) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Logger);

	    this.subs = [];
	    this.init(concreteLogger, options);
	  }

	  Logger.prototype.init = function init(concreteLogger) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    this.prefix = options.prefix || 'i18next:';
	    this.logger = concreteLogger || consoleLogger;
	    this.options = options;
	    this.debug = options.debug === false ? false : true;
	  };

	  Logger.prototype.setDebug = function setDebug(bool) {
	    this.debug = bool;
	    this.subs.forEach(function (sub) {
	      sub.setDebug(bool);
	    });
	  };

	  Logger.prototype.log = function log() {
	    this.forward(arguments, 'log', '', true);
	  };

	  Logger.prototype.warn = function warn() {
	    this.forward(arguments, 'warn', '', true);
	  };

	  Logger.prototype.error = function error() {
	    this.forward(arguments, 'error', '');
	  };

	  Logger.prototype.deprecate = function deprecate() {
	    this.forward(arguments, 'warn', 'WARNING DEPRECATED: ', true);
	  };

	  Logger.prototype.forward = function forward(args, lvl, prefix, debugOnly) {
	    if (debugOnly && !this.debug) return;
	    if (typeof args[0] === 'string') args[0] = prefix + this.prefix + ' ' + args[0];
	    this.logger[lvl](args);
	  };

	  Logger.prototype.create = function create(moduleName) {
	    var sub = new Logger(this.logger, _extends({ prefix: this.prefix + ':' + moduleName + ':' }, this.options));
	    this.subs.push(sub);

	    return sub;
	  };

	  // createInstance(options = {}) {
	  //   return new Logger(options, callback);
	  // }

	  return Logger;
	}();

	;

	exports.default = new Logger();

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventEmitter = function () {
		function EventEmitter() {
			_classCallCheck(this, EventEmitter);

			this.observers = {};
		}

		EventEmitter.prototype.on = function on(events, listener) {
			var _this = this;

			events.split(' ').forEach(function (event) {
				_this.observers[event] = _this.observers[event] || [];
				_this.observers[event].push(listener);
			});
		};

		EventEmitter.prototype.off = function off(event, listener) {
			var _this2 = this;

			if (!this.observers[event]) {
				return;
			}

			this.observers[event].forEach(function () {
				if (!listener) {
					delete _this2.observers[event];
				} else {
					var index = _this2.observers[event].indexOf(listener);
					if (index > -1) {
						_this2.observers[event].splice(index, 1);
					}
				}
			});
		};

		EventEmitter.prototype.emit = function emit(event) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			if (this.observers[event]) {
				this.observers[event].forEach(function (observer) {
					observer.apply(undefined, args);
				});
			}

			if (this.observers['*']) {
				this.observers['*'].forEach(function (observer) {
					var _ref;

					observer.apply(observer, (_ref = [event]).concat.apply(_ref, args));
				});
			}
		};

		return EventEmitter;
	}();

	exports.default = EventEmitter;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _EventEmitter2 = __webpack_require__(53);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _utils = __webpack_require__(55);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var ResourceStore = function (_EventEmitter) {
	  _inherits(ResourceStore, _EventEmitter);

	  function ResourceStore() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };

	    _classCallCheck(this, ResourceStore);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.data = data;
	    _this.options = options;
	    return _this;
	  }

	  ResourceStore.prototype.addNamespaces = function addNamespaces(ns) {
	    if (this.options.ns.indexOf(ns) < 0) {
	      this.options.ns.push(ns);
	    }
	  };

	  ResourceStore.prototype.removeNamespaces = function removeNamespaces(ns) {
	    var index = this.options.ns.indexOf(ns);
	    if (index > -1) {
	      this.options.ns.splice(index, 1);
	    }
	  };

	  ResourceStore.prototype.getResource = function getResource(lng, ns, key) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    var keySeparator = options.keySeparator || this.options.keySeparator;
	    if (keySeparator === undefined) keySeparator = '.';

	    var path = [lng, ns];
	    if (key && typeof key !== 'string') path = path.concat(key);
	    if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	    }

	    return utils.getPath(this.data, path);
	  };

	  ResourceStore.prototype.addResource = function addResource(lng, ns, key, value) {
	    var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : { silent: false };

	    var keySeparator = this.options.keySeparator;
	    if (keySeparator === undefined) keySeparator = '.';

	    var path = [lng, ns];
	    if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      value = ns;
	      ns = path[1];
	    }

	    this.addNamespaces(ns);

	    utils.setPath(this.data, path, value);

	    if (!options.silent) this.emit('added', lng, ns, key, value);
	  };

	  ResourceStore.prototype.addResources = function addResources(lng, ns, resources) {
	    for (var m in resources) {
	      if (typeof resources[m] === 'string') this.addResource(lng, ns, m, resources[m], { silent: true });
	    }
	    this.emit('added', lng, ns, resources);
	  };

	  ResourceStore.prototype.addResourceBundle = function addResourceBundle(lng, ns, resources, deep, overwrite) {
	    var path = [lng, ns];
	    if (lng.indexOf('.') > -1) {
	      path = lng.split('.');
	      deep = resources;
	      resources = ns;
	      ns = path[1];
	    }

	    this.addNamespaces(ns);

	    var pack = utils.getPath(this.data, path) || {};

	    if (deep) {
	      utils.deepExtend(pack, resources, overwrite);
	    } else {
	      pack = _extends({}, pack, resources);
	    }

	    utils.setPath(this.data, path, pack);

	    this.emit('added', lng, ns, resources);
	  };

	  ResourceStore.prototype.removeResourceBundle = function removeResourceBundle(lng, ns) {
	    if (this.hasResourceBundle(lng, ns)) {
	      delete this.data[lng][ns];
	    }
	    this.removeNamespaces(ns);

	    this.emit('removed', lng, ns);
	  };

	  ResourceStore.prototype.hasResourceBundle = function hasResourceBundle(lng, ns) {
	    return this.getResource(lng, ns) !== undefined;
	  };

	  ResourceStore.prototype.getResourceBundle = function getResourceBundle(lng, ns) {
	    if (!ns) ns = this.options.defaultNS;

	    // TODO: COMPATIBILITY remove extend in v2.1.0
	    if (this.options.compatibilityAPI === 'v1') return _extends({}, this.getResource(lng, ns));

	    return this.getResource(lng, ns);
	  };

	  ResourceStore.prototype.toJSON = function toJSON() {
	    return this.data;
	  };

	  return ResourceStore;
	}(_EventEmitter3.default);

	exports.default = ResourceStore;

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.makeString = makeString;
	exports.copy = copy;
	exports.setPath = setPath;
	exports.pushPath = pushPath;
	exports.getPath = getPath;
	exports.deepExtend = deepExtend;
	exports.regexEscape = regexEscape;
	exports.escape = escape;
	function makeString(object) {
	  if (object == null) return '';
	  return '' + object;
	}

	function copy(a, s, t) {
	  a.forEach(function (m) {
	    if (s[m]) t[m] = s[m];
	  });
	}

	function getLastOfPath(object, path, Empty) {
	  function cleanKey(key) {
	    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
	  }

	  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
	  while (stack.length > 1) {
	    if (!object) return {};

	    var key = cleanKey(stack.shift());
	    if (!object[key] && Empty) object[key] = new Empty();
	    object = object[key];
	  }

	  if (!object) return {};
	  return {
	    obj: object,
	    k: cleanKey(stack.shift())
	  };
	}

	function setPath(object, path, newValue) {
	  var _getLastOfPath = getLastOfPath(object, path, Object),
	      obj = _getLastOfPath.obj,
	      k = _getLastOfPath.k;

	  obj[k] = newValue;
	}

	function pushPath(object, path, newValue, concat) {
	  var _getLastOfPath2 = getLastOfPath(object, path, Object),
	      obj = _getLastOfPath2.obj,
	      k = _getLastOfPath2.k;

	  obj[k] = obj[k] || [];
	  if (concat) obj[k] = obj[k].concat(newValue);
	  if (!concat) obj[k].push(newValue);
	}

	function getPath(object, path) {
	  var _getLastOfPath3 = getLastOfPath(object, path),
	      obj = _getLastOfPath3.obj,
	      k = _getLastOfPath3.k;

	  if (!obj) return undefined;
	  return obj[k];
	}

	function deepExtend(target, source, overwrite) {
	  for (var prop in source) {
	    if (prop in target) {
	      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
	      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
	        if (overwrite) target[prop] = source[prop];
	      } else {
	        deepExtend(target[prop], source[prop], overwrite);
	      }
	    } else {
	      target[prop] = source[prop];
	    }
	  }return target;
	}

	function regexEscape(str) {
	  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
	}

	/* eslint-disable */
	var _entityMap = {
	  "&": "&amp;",
	  "<": "&lt;",
	  ">": "&gt;",
	  '"': '&quot;',
	  "'": '&#39;',
	  "/": '&#x2F;'
	};
	/* eslint-enable */

	function escape(data) {
	  if (typeof data === 'string') {
	    return data.replace(/[&<>"'\/]/g, function (s) {
	      return _entityMap[s];
	    });
	  } else {
	    return data;
	  }
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(53);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	var _postProcessor = __webpack_require__(57);

	var _postProcessor2 = _interopRequireDefault(_postProcessor);

	var _v = __webpack_require__(58);

	var compat = _interopRequireWildcard(_v);

	var _utils = __webpack_require__(55);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Translator = function (_EventEmitter) {
	  _inherits(Translator, _EventEmitter);

	  function Translator(services) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Translator);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    utils.copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector'], services, _this);

	    _this.options = options;
	    _this.logger = _logger2.default.create('translator');
	    return _this;
	  }

	  Translator.prototype.changeLanguage = function changeLanguage(lng) {
	    if (lng) this.language = lng;
	  };

	  Translator.prototype.exists = function exists(key) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { interpolation: {} };

	    if (this.options.compatibilityAPI === 'v1') {
	      options = compat.convertTOptions(options);
	    }

	    return this.resolve(key, options) !== undefined;
	  };

	  Translator.prototype.extractFromKey = function extractFromKey(key, options) {
	    var nsSeparator = options.nsSeparator || this.options.nsSeparator;
	    if (nsSeparator === undefined) nsSeparator = ':';

	    var namespaces = options.ns || this.options.defaultNS;
	    if (nsSeparator && key.indexOf(nsSeparator) > -1) {
	      var parts = key.split(nsSeparator);
	      namespaces = parts[0];
	      key = parts[1];
	    }
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    return {
	      key: key,
	      namespaces: namespaces
	    };
	  };

	  Translator.prototype.translate = function translate(keys) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
	      options = this.options.overloadTranslationOptionHandler(arguments);
	    } else if (this.options.compatibilityAPI === 'v1') {
	      options = compat.convertTOptions(options);
	    }

	    // non valid keys handling
	    if (keys === undefined || keys === null || keys === '') return '';
	    if (typeof keys === 'number') keys = String(keys);
	    if (typeof keys === 'string') keys = [keys];

	    // return key on CIMode
	    var lng = options.lng || this.language;
	    if (lng && lng.toLowerCase() === 'cimode') return keys[keys.length - 1];

	    // separators
	    var keySeparator = options.keySeparator || this.options.keySeparator || '.';

	    // get namespace(s)

	    var _extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
	        key = _extractFromKey.key,
	        namespaces = _extractFromKey.namespaces;

	    var namespace = namespaces[namespaces.length - 1];

	    // resolve from store
	    var res = this.resolve(keys, options);

	    var resType = Object.prototype.toString.apply(res);
	    var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
	    var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays;

	    // object
	    if (res && typeof res !== 'string' && noObject.indexOf(resType) < 0 && !(joinArrays && resType === '[object Array]')) {
	      if (!options.returnObjects && !this.options.returnObjects) {
	        this.logger.warn('accessing an object - but returnObjects options is not enabled!');
	        return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(key, res, options) : 'key \'' + key + ' (' + this.language + ')\' returned an object instead of string.';
	      }

	      var copy = resType === '[object Array]' ? [] : {}; // apply child translation on a copy

	      for (var m in res) {
	        copy[m] = this.translate('' + key + keySeparator + m, _extends({ joinArrays: false, ns: namespaces }, options));
	      }
	      res = copy;
	    }
	    // array special treatment
	    else if (joinArrays && resType === '[object Array]') {
	        res = res.join(joinArrays);
	        if (res) res = this.extendTranslation(res, key, options);
	      }
	      // string, empty or null
	      else {
	          var usedDefault = false,
	              usedKey = false;

	          // fallback value
	          if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
	            usedDefault = true;
	            res = options.defaultValue;
	          }
	          if (!this.isValidLookup(res)) {
	            usedKey = true;
	            res = key;
	          }

	          // save missing
	          if (usedKey || usedDefault) {
	            this.logger.log('missingKey', lng, namespace, key, res);

	            var lngs = [];
	            var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);
	            if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
	              for (var i = 0; i < fallbackLngs.length; i++) {
	                lngs.push(fallbackLngs[i]);
	              }
	            } else if (this.options.saveMissingTo === 'all') {
	              lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
	            } else {
	              //(this.options.saveMissingTo === 'current' || (this.options.saveMissingTo === 'fallback' && this.options.fallbackLng[0] === false) ) {
	              lngs.push(options.lng || this.language);
	            }

	            if (this.options.saveMissing) {
	              if (this.options.missingKeyHandler) {
	                this.options.missingKeyHandler(lngs, namespace, key, res);
	              } else if (this.backendConnector && this.backendConnector.saveMissing) {
	                this.backendConnector.saveMissing(lngs, namespace, key, res);
	              }
	            }

	            this.emit('missingKey', lngs, namespace, key, res);
	          }

	          // extend
	          res = this.extendTranslation(res, key, options);

	          // append namespace if still key
	          if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = namespace + ':' + key;

	          // parseMissingKeyHandler
	          if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
	        }

	    // return
	    return res;
	  };

	  Translator.prototype.extendTranslation = function extendTranslation(res, key, options) {
	    var _this2 = this;

	    if (options.interpolation) this.interpolator.init(_extends({}, options, { interpolation: _extends({}, this.options.interpolation, options.interpolation) }));

	    // interpolate
	    var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
	    if (this.options.interpolation.defaultVariables) data = _extends({}, this.options.interpolation.defaultVariables, data);
	    res = this.interpolator.interpolate(res, data, this.language);

	    // nesting
	    res = this.interpolator.nest(res, function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _this2.translate.apply(_this2, args);
	    }, options);

	    if (options.interpolation) this.interpolator.reset();

	    // post process
	    var postProcess = options.postProcess || this.options.postProcess;
	    var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

	    if (res !== undefined && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
	      res = _postProcessor2.default.handle(postProcessorNames, res, key, options, this);
	    }

	    return res;
	  };

	  Translator.prototype.resolve = function resolve(keys) {
	    var _this3 = this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var found = void 0;

	    if (typeof keys === 'string') keys = [keys];

	    // forEach possible key
	    keys.forEach(function (k) {
	      if (_this3.isValidLookup(found)) return;

	      var _extractFromKey2 = _this3.extractFromKey(k, options),
	          key = _extractFromKey2.key,
	          namespaces = _extractFromKey2.namespaces;

	      if (_this3.options.fallbackNS) namespaces = namespaces.concat(_this3.options.fallbackNS);

	      var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
	      var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';

	      var codes = options.lngs ? options.lngs : _this3.languageUtils.toResolveHierarchy(options.lng || _this3.language);

	      namespaces.forEach(function (ns) {
	        if (_this3.isValidLookup(found)) return;

	        codes.forEach(function (code) {
	          if (_this3.isValidLookup(found)) return;

	          var finalKey = key;
	          var finalKeys = [finalKey];

	          var pluralSuffix = void 0;
	          if (needsPluralHandling) pluralSuffix = _this3.pluralResolver.getSuffix(code, options.count);

	          // fallback for plural if context not found
	          if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix);

	          // get key for context if needed
	          if (needsContextHandling) finalKeys.push(finalKey += '' + _this3.options.contextSeparator + options.context);

	          // get key for plural if needed
	          if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);

	          // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only
	          var possibleKey = void 0;
	          while (possibleKey = finalKeys.pop()) {
	            if (_this3.isValidLookup(found)) continue;
	            found = _this3.getResource(code, ns, possibleKey, options);
	          }
	        });
	      });
	    });

	    return found;
	  };

	  Translator.prototype.isValidLookup = function isValidLookup(res) {
	    return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
	  };

	  Translator.prototype.getResource = function getResource(code, ns, key) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    return this.resourceStore.getResource(code, ns, key, options);
	  };

	  return Translator;
	}(_EventEmitter3.default);

	exports.default = Translator;

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  processors: {},

	  addPostProcessor: function addPostProcessor(module) {
	    this.processors[module.name] = module;
	  },
	  handle: function handle(processors, value, key, options, translator) {
	    var _this = this;

	    processors.forEach(function (processor) {
	      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
	    });

	    return value;
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertAPIOptions = convertAPIOptions;
	exports.convertJSONOptions = convertJSONOptions;
	exports.convertTOptions = convertTOptions;
	exports.appendBackwardsAPI = appendBackwardsAPI;

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function convertInterpolation(options) {

	  options.interpolation = {
	    unescapeSuffix: 'HTML'
	  };

	  options.interpolation.prefix = options.interpolationPrefix || '__';
	  options.interpolation.suffix = options.interpolationSuffix || '__';
	  options.interpolation.escapeValue = options.escapeInterpolation || false;

	  options.interpolation.nestingPrefix = options.reusePrefix || '$t(';
	  options.interpolation.nestingSuffix = options.reuseSuffix || ')';

	  return options;
	}

	function convertAPIOptions(options) {
	  if (options.resStore) options.resources = options.resStore;

	  if (options.ns && options.ns.defaultNs) {
	    options.defaultNS = options.ns.defaultNs;
	    options.ns = options.ns.namespaces;
	  } else {
	    options.defaultNS = options.ns || 'translation';
	  }

	  if (options.fallbackToDefaultNS && options.defaultNS) options.fallbackNS = options.defaultNS;

	  options.saveMissing = options.sendMissing;
	  options.saveMissingTo = options.sendMissingTo || 'current';
	  options.returnNull = options.fallbackOnNull ? false : true;
	  options.returnEmptyString = options.fallbackOnEmpty ? false : true;
	  options.returnObjects = options.returnObjectTrees;
	  options.joinArrays = '\n';

	  options.returnedObjectHandler = options.objectTreeKeyHandler;
	  options.parseMissingKeyHandler = options.parseMissingKey;
	  options.appendNamespaceToMissingKey = true;

	  options.nsSeparator = options.nsseparator;
	  options.keySeparator = options.keyseparator;

	  if (options.shortcutFunction === 'sprintf') {
	    options.overloadTranslationOptionHandler = function (args) {
	      var values = [];

	      for (var i = 1; i < args.length; i++) {
	        values.push(args[i]);
	      }

	      return {
	        postProcess: 'sprintf',
	        sprintf: values
	      };
	    };
	  }

	  options.whitelist = options.lngWhitelist;
	  options.preload = options.preload;
	  if (options.load === 'current') options.load = 'currentOnly';
	  if (options.load === 'unspecific') options.load = 'languageOnly';

	  // backend
	  options.backend = options.backend || {};
	  options.backend.loadPath = options.resGetPath || 'locales/__lng__/__ns__.json';
	  options.backend.addPath = options.resPostPath || 'locales/add/__lng__/__ns__';
	  options.backend.allowMultiLoading = options.dynamicLoad;

	  // cache
	  options.cache = options.cache || {};
	  options.cache.prefix = 'res_';
	  options.cache.expirationTime = 7 * 24 * 60 * 60 * 1000;
	  options.cache.enabled = options.useLocalStorage ? true : false;

	  options = convertInterpolation(options);
	  if (options.defaultVariables) options.interpolation.defaultVariables = options.defaultVariables;

	  // TODO: deprecation
	  // if (options.getAsync === false) throw deprecation error

	  return options;
	}

	function convertJSONOptions(options) {
	  options = convertInterpolation(options);
	  options.joinArrays = '\n';

	  return options;
	}

	function convertTOptions(options) {
	  if (options.interpolationPrefix || options.interpolationSuffix || options.escapeInterpolation) {
	    options = convertInterpolation(options);
	  }

	  options.nsSeparator = options.nsseparator;
	  options.keySeparator = options.keyseparator;

	  options.returnObjects = options.returnObjectTrees;

	  return options;
	}

	function appendBackwardsAPI(i18n) {
	  i18n.lng = function () {
	    _logger2.default.deprecate('i18next.lng() can be replaced by i18next.language for detected language or i18next.languages for languages ordered by translation lookup.');
	    return i18n.services.languageUtils.toResolveHierarchy(i18n.language)[0];
	  };

	  i18n.preload = function (lngs, cb) {
	    _logger2.default.deprecate('i18next.preload() can be replaced with i18next.loadLanguages()');
	    i18n.loadLanguages(lngs, cb);
	  };

	  i18n.setLng = function (lng, options, callback) {
	    _logger2.default.deprecate('i18next.setLng() can be replaced with i18next.changeLanguage() or i18next.getFixedT() to get a translation function with fixed language or namespace.');
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!options) options = {};

	    if (options.fixLng === true) {
	      if (callback) return callback(null, i18n.getFixedT(lng));
	    }

	    i18n.changeLanguage(lng, callback);
	  };

	  i18n.addPostProcessor = function (name, fc) {
	    _logger2.default.deprecate('i18next.addPostProcessor() can be replaced by i18next.use({ type: \'postProcessor\', name: \'name\', process: fc })');
	    i18n.use({
	      type: 'postProcessor',
	      name: name,
	      process: fc
	    });
	  };
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function capitalize(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

	var LanguageUtil = function () {
	  function LanguageUtil(options) {
	    _classCallCheck(this, LanguageUtil);

	    this.options = options;

	    this.whitelist = this.options.whitelist || false;
	    this.logger = _logger2.default.create('languageUtils');
	  }

	  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
	    if (code.indexOf('-') < 0) return code;

	    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
	    var p = code.split('-');
	    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
	  };

	  LanguageUtil.prototype.getScriptPartFromCode = function getScriptPartFromCode(code) {
	    if (code.indexOf('-') < 0) return null;

	    var p = code.split('-');
	    if (p.length === 2) return null;
	    p.pop();
	    return this.formatLanguageCode(p.join('-'));
	  };

	  LanguageUtil.prototype.getLanguagePartFromCode = function getLanguagePartFromCode(code) {
	    if (code.indexOf('-') < 0) return code;

	    var specialCases = ['NB-NO', 'NN-NO', 'nb-NO', 'nn-NO', 'nb-no', 'nn-no'];
	    var p = code.split('-');
	    return this.formatLanguageCode(specialCases.indexOf(code) > -1 ? p[1].toLowerCase() : p[0]);
	  };

	  LanguageUtil.prototype.formatLanguageCode = function formatLanguageCode(code) {
	    // http://www.iana.org/assignments/language-tags/language-tags.xhtml
	    if (typeof code === 'string' && code.indexOf('-') > -1) {
	      var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
	      var p = code.split('-');

	      if (this.options.lowerCaseLng) {
	        p = p.map(function (part) {
	          return part.toLowerCase();
	        });
	      } else if (p.length === 2) {
	        p[0] = p[0].toLowerCase();
	        p[1] = p[1].toUpperCase();

	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	      } else if (p.length === 3) {
	        p[0] = p[0].toLowerCase();

	        // if lenght 2 guess it's a country
	        if (p[1].length === 2) p[1] = p[1].toUpperCase();
	        if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();

	        if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
	        if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
	      }

	      return p.join('-');
	    } else {
	      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
	    }
	  };

	  LanguageUtil.prototype.isWhitelisted = function isWhitelisted(code, exactMatch) {
	    if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist && !exactMatch) {
	      code = this.getLanguagePartFromCode(code);
	    }
	    return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1 ? true : false;
	  };

	  LanguageUtil.prototype.getFallbackCodes = function getFallbackCodes(fallbacks, code) {
	    if (!fallbacks) return [];
	    if (typeof fallbacks === 'string') fallbacks = [fallbacks];
	    if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;

	    // asume we have an object defining fallbacks
	    var found = fallbacks[code];
	    if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
	    if (!found) found = fallbacks[this.formatLanguageCode(code)];
	    if (!found) found = fallbacks.default;

	    return found || [];
	  };

	  LanguageUtil.prototype.toResolveHierarchy = function toResolveHierarchy(code, fallbackCode) {
	    var _this = this;

	    var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);

	    var codes = [];
	    var addCode = function addCode(code) {
	      var exactMatch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (!code) return;
	      if (_this.isWhitelisted(code, exactMatch)) {
	        codes.push(code);
	      } else {
	        _this.logger.warn('rejecting non-whitelisted language code: ' + code);
	      }
	    };

	    if (typeof code === 'string' && code.indexOf('-') > -1) {
	      if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code), true);
	      if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code), true);
	      if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
	    } else if (typeof code === 'string') {
	      addCode(this.formatLanguageCode(code));
	    }

	    fallbackCodes.forEach(function (fc) {
	      if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
	    });

	    return codes;
	  };

	  return LanguageUtil;
	}();

	;

	exports.default = LanguageUtil;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// definition http://translate.sourceforge.net/wiki/l10n/pluralforms
	/* eslint-disable */
	var sets = [{ lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'tg', 'ti', 'tr', 'uz', 'wa'], nr: [1, 2], fc: 1 }, { lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'es_ar', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'he', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt', 'pt_br', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'], nr: [1, 2], fc: 2 }, { lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'], nr: [1], fc: 3 }, { lngs: ['be', 'bs', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 }, { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 }, { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 }, { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ['fr'], nr: [1, 2], fc: 9 }, { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ['is'], nr: [1, 2], fc: 12 }, { lngs: ['jv'], nr: [0, 1], fc: 13 }, { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ['lt'], nr: [1, 2, 10], fc: 15 }, { lngs: ['lv'], nr: [1, 2, 0], fc: 16 }, { lngs: ['mk'], nr: [1, 2], fc: 17 }, { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 }, { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ['or'], nr: [2, 1], fc: 2 }, { lngs: ['ro'], nr: [1, 2, 20], fc: 20 }, { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 }];

	var _rulesPluralsTypes = {
	  1: function _(n) {
	    return Number(n > 1);
	  },
	  2: function _(n) {
	    return Number(n != 1);
	  },
	  3: function _(n) {
	    return 0;
	  },
	  4: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  5: function _(n) {
	    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
	  },
	  6: function _(n) {
	    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
	  },
	  7: function _(n) {
	    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  8: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
	  },
	  9: function _(n) {
	    return Number(n >= 2);
	  },
	  10: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
	  },
	  11: function _(n) {
	    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
	  },
	  12: function _(n) {
	    return Number(n % 10 != 1 || n % 100 == 11);
	  },
	  13: function _(n) {
	    return Number(n !== 0);
	  },
	  14: function _(n) {
	    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
	  },
	  15: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
	  },
	  16: function _(n) {
	    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
	  },
	  17: function _(n) {
	    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
	  },
	  18: function _(n) {
	    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
	  },
	  19: function _(n) {
	    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
	  },
	  20: function _(n) {
	    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
	  },
	  21: function _(n) {
	    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
	  }
	};
	/* eslint-enable */

	function createRules() {
	  var l,
	      rules = {};
	  sets.forEach(function (set) {
	    set.lngs.forEach(function (l) {
	      return rules[l] = {
	        numbers: set.nr,
	        plurals: _rulesPluralsTypes[set.fc]
	      };
	    });
	  });
	  return rules;
	}

	var PluralResolver = function () {
	  function PluralResolver(languageUtils) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, PluralResolver);

	    this.languageUtils = languageUtils;
	    this.options = options;

	    this.logger = _logger2.default.create('pluralResolver');

	    this.rules = createRules();
	  }

	  PluralResolver.prototype.addRule = function addRule(lng, obj) {
	    this.rules[lng] = obj;
	  };

	  PluralResolver.prototype.getRule = function getRule(code) {
	    return this.rules[this.languageUtils.getLanguagePartFromCode(code)];
	  };

	  PluralResolver.prototype.needsPlural = function needsPlural(code) {
	    var rule = this.getRule(code);

	    return rule && rule.numbers.length <= 1 ? false : true;
	  };

	  PluralResolver.prototype.getSuffix = function getSuffix(code, count) {
	    var _this = this;

	    var rule = this.getRule(code);

	    if (rule) {
	      var _ret = function () {
	        if (rule.numbers.length === 1) return {
	            v: ''
	          }; // only singular

	        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
	        var suffix = rule.numbers[idx];

	        // special treatment for lngs only having singular and plural
	        if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
	          if (suffix === 2) {
	            suffix = 'plural';
	          } else if (suffix === 1) {
	            suffix = '';
	          }
	        }

	        var returnSuffix = function returnSuffix() {
	          return _this.options.prepend && suffix.toString() ? _this.options.prepend + suffix.toString() : suffix.toString();
	        };

	        // COMPATIBILITY JSON
	        // v1
	        if (_this.options.compatibilityJSON === 'v1') {
	          if (suffix === 1) return {
	              v: ''
	            };
	          if (typeof suffix === 'number') return {
	              v: '_plural_' + suffix.toString()
	            };
	          return {
	            v: returnSuffix()
	          };
	        }
	        // v2
	        else if (_this.options.compatibilityJSON === 'v2' || rule.numbers.length === 2 && rule.numbers[0] === 1) {
	            return {
	              v: returnSuffix()
	            };
	          }
	          // v3 - gettext index
	          else if (rule.numbers.length === 2 && rule.numbers[0] === 1) {
	              return {
	                v: returnSuffix()
	              };
	            }
	        return {
	          v: _this.options.prepend && idx.toString() ? _this.options.prepend + idx.toString() : idx.toString()
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      this.logger.warn('no plural rule found for: ' + code);
	      return '';
	    }
	  };

	  return PluralResolver;
	}();

	;

	exports.default = PluralResolver;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(55);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Interpolator = function () {
	  function Interpolator() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Interpolator);

	    this.logger = _logger2.default.create('interpolator');

	    this.init(options, true);
	  }

	  Interpolator.prototype.init = function init() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var reset = arguments[1];

	    if (reset) {
	      this.options = options;
	      this.format = options.interpolation && options.interpolation.format || function (value) {
	        return value;
	      };
	    }
	    if (!options.interpolation) options.interpolation = { escapeValue: true };

	    var iOpts = options.interpolation;

	    this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;

	    this.prefix = iOpts.prefix ? utils.regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
	    this.suffix = iOpts.suffix ? utils.regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
	    this.formatSeparator = iOpts.formatSeparator ? utils.regexEscape(iOpts.formatSeparator) : iOpts.formatSeparator || ',';

	    this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
	    this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';

	    this.nestingPrefix = iOpts.nestingPrefix ? utils.regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || utils.regexEscape('$t(');
	    this.nestingSuffix = iOpts.nestingSuffix ? utils.regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || utils.regexEscape(')');

	    // the regexp
	    this.resetRegExp();
	  };

	  Interpolator.prototype.reset = function reset() {
	    if (this.options) this.init(this.options);
	  };

	  Interpolator.prototype.resetRegExp = function resetRegExp() {
	    // the regexp
	    var regexpStr = this.prefix + '(.+?)' + this.suffix;
	    this.regexp = new RegExp(regexpStr, 'g');

	    var regexpUnescapeStr = this.prefix + this.unescapePrefix + '(.+?)' + this.unescapeSuffix + this.suffix;
	    this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');

	    var nestingRegexpStr = this.nestingPrefix + '(.+?)' + this.nestingSuffix;
	    this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
	  };

	  Interpolator.prototype.interpolate = function interpolate(str, data, lng) {
	    var _this = this;

	    var match = void 0,
	        value = void 0;

	    function regexSafe(val) {
	      return val.replace(/\$/g, '$$$$');
	    }

	    var handleFormat = function handleFormat(key) {
	      if (key.indexOf(_this.formatSeparator) < 0) return utils.getPath(data, key);

	      var p = key.split(_this.formatSeparator);
	      var k = p.shift().trim();
	      var f = p.join(_this.formatSeparator).trim();

	      return _this.format(utils.getPath(data, k), f, lng);
	    };

	    this.resetRegExp();

	    // unescape if has unescapePrefix/Suffix
	    while (match = this.regexpUnescape.exec(str)) {
	      var _value = handleFormat(match[1].trim());
	      str = str.replace(match[0], _value);
	      this.regexpUnescape.lastIndex = 0;
	    }

	    // regular escape on demand
	    while (match = this.regexp.exec(str)) {
	      value = handleFormat(match[1].trim());
	      if (typeof value !== 'string') value = utils.makeString(value);
	      if (!value) {
	        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
	        value = '';
	      }
	      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
	      str = str.replace(match[0], value);
	      this.regexp.lastIndex = 0;
	    }
	    return str;
	  };

	  Interpolator.prototype.nest = function nest(str, fc) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    var match = void 0,
	        value = void 0;

	    var clonedOptions = JSON.parse(JSON.stringify(options));
	    clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup

	    function regexSafe(val) {
	      return val.replace(/\$/g, '$$$$');
	    }

	    // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"
	    function handleHasOptions(key) {
	      if (key.indexOf(',') < 0) return key;

	      var p = key.split(',');
	      key = p.shift();
	      var optionsString = p.join(',');
	      optionsString = this.interpolate(optionsString, clonedOptions);

	      try {
	        clonedOptions = JSON.parse(optionsString);
	      } catch (e) {
	        this.logger.error('failed parsing options string in nesting for key ' + key, e);
	      }

	      return key;
	    }

	    // regular escape on demand
	    while (match = this.nestingRegexp.exec(str)) {
	      value = fc(handleHasOptions.call(this, match[1].trim()), clonedOptions);
	      if (typeof value !== 'string') value = utils.makeString(value);
	      if (!value) {
	        this.logger.warn('missed to pass in variable ' + match[1] + ' for interpolating ' + str);
	        value = '';
	      }
	      value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);
	      str = str.replace(match[0], value);
	      this.regexp.lastIndex = 0;
	    }
	    return str;
	  };

	  return Interpolator;
	}();

	exports.default = Interpolator;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _utils = __webpack_require__(55);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(53);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	function remove(arr, what) {
	  var found = arr.indexOf(what);

	  while (found !== -1) {
	    arr.splice(found, 1);
	    found = arr.indexOf(what);
	  }
	}

	var Connector = function (_EventEmitter) {
	  _inherits(Connector, _EventEmitter);

	  function Connector(backend, store, services) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    _classCallCheck(this, Connector);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.backend = backend;
	    _this.store = store;
	    _this.services = services;
	    _this.options = options;
	    _this.logger = _logger2.default.create('backendConnector');

	    _this.state = {};
	    _this.queue = [];

	    _this.backend && _this.backend.init && _this.backend.init(services, options.backend, options);
	    return _this;
	  }

	  Connector.prototype.queueLoad = function queueLoad(languages, namespaces, callback) {
	    var _this2 = this;

	    // find what needs to be loaded
	    var toLoad = [],
	        pending = [],
	        toLoadLanguages = [],
	        toLoadNamespaces = [];

	    languages.forEach(function (lng) {
	      var hasAllNamespaces = true;

	      namespaces.forEach(function (ns) {
	        var name = lng + '|' + ns;

	        if (_this2.store.hasResourceBundle(lng, ns)) {
	          _this2.state[name] = 2; // loaded
	        } else if (_this2.state[name] < 0) {
	          // nothing to do for err
	        } else if (_this2.state[name] === 1) {
	          if (pending.indexOf(name) < 0) pending.push(name);
	        } else {
	          _this2.state[name] = 1; // pending

	          hasAllNamespaces = false;

	          if (pending.indexOf(name) < 0) pending.push(name);
	          if (toLoad.indexOf(name) < 0) toLoad.push(name);
	          if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
	        }
	      });

	      if (!hasAllNamespaces) toLoadLanguages.push(lng);
	    });

	    if (toLoad.length || pending.length) {
	      this.queue.push({
	        pending: pending,
	        loaded: {},
	        errors: [],
	        callback: callback
	      });
	    }

	    return {
	      toLoad: toLoad,
	      pending: pending,
	      toLoadLanguages: toLoadLanguages,
	      toLoadNamespaces: toLoadNamespaces
	    };
	  };

	  Connector.prototype.loaded = function loaded(name, err, data) {
	    var _this3 = this;

	    var _name$split = name.split('|'),
	        _name$split2 = _slicedToArray(_name$split, 2),
	        lng = _name$split2[0],
	        ns = _name$split2[1];

	    if (err) this.emit('failedLoading', lng, ns, err);

	    if (data) {
	      this.store.addResourceBundle(lng, ns, data);
	    }

	    // set loaded
	    this.state[name] = err ? -1 : 2;
	    // callback if ready
	    this.queue.forEach(function (q) {
	      utils.pushPath(q.loaded, [lng], ns);
	      remove(q.pending, name);

	      if (err) q.errors.push(err);

	      if (q.pending.length === 0 && !q.done) {
	        q.errors.length ? q.callback(q.errors) : q.callback();
	        _this3.emit('loaded', q.loaded);
	        q.done = true;
	      }
	    });

	    // remove done load requests
	    this.queue = this.queue.filter(function (q) {
	      return !q.done;
	    });
	  };

	  Connector.prototype.read = function read(lng, ns, fcName, tried, wait, callback) {
	    var _this4 = this;

	    if (!tried) tried = 0;
	    if (!wait) wait = 250;

	    if (!lng.length) return callback(null, {}); // noting to load

	    this.backend[fcName](lng, ns, function (err, data) {
	      if (err && data /* = retryFlag */ && tried < 5) {
	        setTimeout(function () {
	          _this4.read.call(_this4, lng, ns, fcName, ++tried, wait * 2, callback);
	        }, wait);
	        return;
	      }
	      callback(err, data);
	    });
	  };

	  Connector.prototype.load = function load(languages, namespaces, callback) {
	    var _this5 = this;

	    if (!this.backend) {
	      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
	      return callback && callback();
	    }
	    var options = _extends({}, this.backend.options, this.options.backend);

	    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    var toLoad = this.queueLoad(languages, namespaces, callback);
	    if (!toLoad.toLoad.length) {
	      if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now
	      return; // pendings will trigger callback
	    }

	    // load with multi-load
	    if (options.allowMultiLoading && this.backend.readMulti) {
	      this.read(toLoad.toLoadLanguages, toLoad.toLoadNamespaces, 'readMulti', null, null, function (err, data) {
	        if (err) _this5.logger.warn('loading namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading failed', err);
	        if (!err && data) _this5.logger.log('loaded namespaces ' + toLoad.toLoadNamespaces.join(', ') + ' for languages ' + toLoad.toLoadLanguages.join(', ') + ' via multiloading', data);

	        toLoad.toLoad.forEach(function (name) {
	          var _name$split3 = name.split('|'),
	              _name$split4 = _slicedToArray(_name$split3, 2),
	              l = _name$split4[0],
	              n = _name$split4[1];

	          var bundle = utils.getPath(data, [l, n]);
	          if (bundle) {
	            _this5.loaded(name, err, bundle);
	          } else {
	            var _err = 'loading namespace ' + n + ' for language ' + l + ' via multiloading failed';
	            _this5.loaded(name, _err);
	            _this5.logger.error(_err);
	          }
	        });
	      });
	    }

	    // load one by one
	    else {
	        (function () {
	          var readOne = function readOne(name) {
	            var _this6 = this;

	            var _name$split5 = name.split('|'),
	                _name$split6 = _slicedToArray(_name$split5, 2),
	                lng = _name$split6[0],
	                ns = _name$split6[1];

	            this.read(lng, ns, 'read', null, null, function (err, data) {
	              if (err) _this6.logger.warn('loading namespace ' + ns + ' for language ' + lng + ' failed', err);
	              if (!err && data) _this6.logger.log('loaded namespace ' + ns + ' for language ' + lng, data);

	              _this6.loaded(name, err, data);
	            });
	          };

	          ;

	          toLoad.toLoad.forEach(function (name) {
	            readOne.call(_this5, name);
	          });
	        })();
	      }
	  };

	  Connector.prototype.reload = function reload(languages, namespaces) {
	    var _this7 = this;

	    if (!this.backend) {
	      this.logger.warn('No backend was added via i18next.use. Will not load resources.');
	    }
	    var options = _extends({}, this.backend.options, this.options.backend);

	    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    // load with multi-load
	    if (options.allowMultiLoading && this.backend.readMulti) {
	      this.read(languages, namespaces, 'readMulti', null, null, function (err, data) {
	        if (err) _this7.logger.warn('reloading namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading failed', err);
	        if (!err && data) _this7.logger.log('reloaded namespaces ' + namespaces.join(', ') + ' for languages ' + languages.join(', ') + ' via multiloading', data);

	        languages.forEach(function (l) {
	          namespaces.forEach(function (n) {
	            var bundle = utils.getPath(data, [l, n]);
	            if (bundle) {
	              _this7.loaded(l + '|' + n, err, bundle);
	            } else {
	              var _err2 = 'reloading namespace ' + n + ' for language ' + l + ' via multiloading failed';
	              _this7.loaded(l + '|' + n, _err2);
	              _this7.logger.error(_err2);
	            }
	          });
	        });
	      });
	    }

	    // load one by one
	    else {
	        (function () {
	          var readOne = function readOne(name) {
	            var _this8 = this;

	            var _name$split7 = name.split('|'),
	                _name$split8 = _slicedToArray(_name$split7, 2),
	                lng = _name$split8[0],
	                ns = _name$split8[1];

	            this.read(lng, ns, 'read', null, null, function (err, data) {
	              if (err) _this8.logger.warn('reloading namespace ' + ns + ' for language ' + lng + ' failed', err);
	              if (!err && data) _this8.logger.log('reloaded namespace ' + ns + ' for language ' + lng, data);

	              _this8.loaded(name, err, data);
	            });
	          };

	          ;

	          languages.forEach(function (l) {
	            namespaces.forEach(function (n) {
	              readOne.call(_this7, l + '|' + n);
	            });
	          });
	        })();
	      }
	  };

	  Connector.prototype.saveMissing = function saveMissing(languages, namespace, key, fallbackValue) {
	    if (this.backend && this.backend.create) this.backend.create(languages, namespace, key, fallbackValue);

	    // write to store to avoid resending
	    if (!languages || !languages[0]) return;
	    this.store.addResource(languages[0], namespace, key, fallbackValue);
	  };

	  return Connector;
	}(_EventEmitter3.default);

	exports.default = Connector;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _utils = __webpack_require__(55);

	var utils = _interopRequireWildcard(_utils);

	var _logger = __webpack_require__(52);

	var _logger2 = _interopRequireDefault(_logger);

	var _EventEmitter2 = __webpack_require__(53);

	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var Connector = function (_EventEmitter) {
	  _inherits(Connector, _EventEmitter);

	  function Connector(cache, store, services) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	    _classCallCheck(this, Connector);

	    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

	    _this.cache = cache;
	    _this.store = store;
	    _this.services = services;
	    _this.options = options;
	    _this.logger = _logger2.default.create('cacheConnector');

	    _this.cache && _this.cache.init && _this.cache.init(services, options.cache, options);
	    return _this;
	  }

	  Connector.prototype.load = function load(languages, namespaces, callback) {
	    var _this2 = this;

	    if (!this.cache) return callback && callback();
	    var options = _extends({}, this.cache.options, this.options.cache);

	    if (typeof languages === 'string') languages = this.services.languageUtils.toResolveHierarchy(languages);
	    if (typeof namespaces === 'string') namespaces = [namespaces];

	    if (options.enabled) {
	      this.cache.load(languages, function (err, data) {
	        if (err) _this2.logger.error('loading languages ' + languages.join(', ') + ' from cache failed', err);
	        if (data) {
	          for (var l in data) {
	            for (var n in data[l]) {
	              if (n === 'i18nStamp') continue;
	              var bundle = data[l][n];
	              if (bundle) _this2.store.addResourceBundle(l, n, bundle);
	            }
	          }
	        }
	        if (callback) callback();
	      });
	    } else {
	      if (callback) callback();
	    }
	  };

	  Connector.prototype.save = function save() {
	    if (this.cache && this.options.cache && this.options.cache.enabled) this.cache.save(this.store.data);
	  };

	  return Connector;
	}(_EventEmitter3.default);

	exports.default = Connector;

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.get = get;
	exports.transformOptions = transformOptions;
	function get() {
	  return {
	    debug: false,
	    initImmediate: true,

	    ns: ['translation'],
	    defaultNS: ['translation'],
	    fallbackLng: ['dev'],
	    fallbackNS: false, // string or array of namespaces

	    whitelist: false, // array with whitelisted languages
	    nonExplicitWhitelist: false,
	    load: 'all', // | currentOnly | languageOnly
	    preload: false, // array with preload languages

	    keySeparator: '.',
	    nsSeparator: ':',
	    pluralSeparator: '_',
	    contextSeparator: '_',

	    saveMissing: false, // enable to send missing values
	    saveMissingTo: 'fallback', // 'current' || 'all'
	    missingKeyHandler: false, // function(lng, ns, key, fallbackValue) -> override if prefer on handling

	    postProcess: false, // string or array of postProcessor names
	    returnNull: true, // allows null value as valid translation
	    returnEmptyString: true, // allows empty string value as valid translation
	    returnObjects: false,
	    joinArrays: false, // or string to join array
	    returnedObjectHandler: function returnedObjectHandler() {}, // function(key, value, options) triggered if key returns object but returnObjects is set to false
	    parseMissingKeyHandler: false, // function(key) parsed a key that was not found in t() before returning
	    appendNamespaceToMissingKey: false,
	    overloadTranslationOptionHandler: function overloadTranslationOptionHandler(args) {
	      return { defaultValue: args[1] };
	    },

	    interpolation: {
	      escapeValue: true,
	      format: function format(value, _format, lng) {
	        return value;
	      },
	      prefix: '{{',
	      suffix: '}}',
	      formatSeparator: ',',
	      // prefixEscaped: '{{',
	      // suffixEscaped: '}}',
	      // unescapeSuffix: '',
	      unescapePrefix: '-',

	      nestingPrefix: '$t(',
	      nestingSuffix: ')',
	      // nestingPrefixEscaped: '$t(',
	      // nestingSuffixEscaped: ')',
	      defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
	    }
	  };
	}

	function transformOptions(options) {
	  // create namespace object if namespace is passed in as string
	  if (typeof options.ns === 'string') options.ns = [options.ns];
	  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
	  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS];

	  // extend whitelist with cimode
	  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) options.whitelist.push('cimode');

	  return options;
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	"use strict";
	var NavigationViewModel = (function () {
	    function NavigationViewModel() {
	        this.nodes = ko.observableArray([]);
	    }
	    NavigationViewModel.populateObservableNodeArray = function (nodes, observableArray) {
	        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	            var node = nodes_1[_i];
	            observableArray.push(new NodeViewModel(node));
	        }
	    };
	    NavigationViewModel.prototype.initialize = function (navigationNodes) {
	        NavigationViewModel.populateObservableNodeArray(navigationNodes, this.nodes);
	    };
	    NavigationViewModel.prototype.setCurrentNode = function (nodeId) {
	        var match = ko.utils.arrayFirst(this.nodes(), function (item) {
	            return nodeId.toString() === item.id();
	        });
	        if (match) {
	            match.isCurrentNode(true);
	        }
	    };
	    ;
	    return NavigationViewModel;
	}());
	exports.NavigationViewModel = NavigationViewModel;
	var NodeViewModel = (function () {
	    function NodeViewModel(node) {
	        var _this = this;
	        this.title = ko.observable(node.Title);
	        this.id = ko.observable(node.Id.toString());
	        this.url = ko.pureComputed(function () {
	            // Empty simple link URL or header for the term
	            if (node.Url.localeCompare("") === 0) {
	                return "#";
	            }
	            else {
	                return node.Url;
	            }
	        });
	        this.hasChildren = ko.observable(node.ChildNodes.length > 0);
	        this.hasParent = ko.observable(node.ParentUrl !== null);
	        this.dataToggle = ko.computed(function () {
	            if (_this.hasChildren()) {
	                return "dropdown";
	            }
	            else {
	                return "";
	            }
	        });
	        this.children = ko.observableArray([]);
	        this.friendlyUrlSegment = ko.observable(node.FriendlyUrlSegment);
	        this.isCurrentNode = ko.observable(false);
	        this.excludeFromGlobalNavigation = ko.observable(node.ExcludeFromGlobalNavigation);
	        this.excludeFromCurrentNavigation = ko.observable(node.ExcludeFromCurrentNavigation);
	        this.properties = ko.observable(node.Properties);
	        // Populate children recursively
	        NavigationViewModel.populateObservableNodeArray(node.ChildNodes, this.children);
	    }
	    return NodeViewModel;
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 66 */
/***/ function(module, exports) {

	// ====================
	// Utility module
	// ====================
	"use strict";
	var UtilityModule = (function () {
	    function UtilityModule() {
	    }
	    /**
	     * Stringify a tree object with circular dependencies
	     * @return {String}       The stringified tree object
	     */
	    UtilityModule.prototype.stringifyTreeObject = function (object) {
	        var cache = [];
	        var stringified = JSON.stringify(object, function (key, value) {
	            if (typeof value === "object" && value !== null) {
	                if (cache.indexOf(value) !== -1) {
	                    // Circular reference found, discard key
	                    return;
	                }
	                // Store value in our collection
	                cache.push(value);
	            }
	            return value;
	        });
	        cache = null;
	        return stringified;
	    };
	    /**
	     * Create a new Guid
	     * @return {String}       A new guid as tring
	     */
	    UtilityModule.prototype.getNewGuid = function () {
	        var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	            var r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
	            return v.toString(16);
	        });
	        return guid;
	    };
	    /**
	     * Get the navigation node in the specified array by its resolved display URL
	     * @param  {Array<NavigationNode>} nodes The navigation nodes array to search in
	     * @param  {string} pageUrl The page URL. Can be the current window.location
	     * @return {NavigationNode}       The corresponding node, null otherwise
	     */
	    UtilityModule.prototype.getNodeByUrl = function (nodes, pageUrl) {
	        if (nodes) {
	            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
	                var node = nodes_1[_i];
	                // Does a node in the whole site map have this current page url as resolved display URL (friendly or simple link)
	                if (node.Url.replace(/(\/*|#*|\?*)$/g, "").toUpperCase().localeCompare(decodeURI(pageUrl).replace(/(\/*|#*|\?*)$/g, "").toUpperCase()) === 0) {
	                    // If there are multiple nodes with the same simple link url, only the first match is returned (and you probably have some problems with your navigation consistency...)
	                    return node;
	                }
	                var found = this.getNodeByUrl(node.ChildNodes, pageUrl);
	                if (found) {
	                    return found;
	                }
	            }
	        }
	    };
	    /**
	     * Get the navigation node in the specified array by its id
	     * @param  {Array<NavigationNode>} nodes The navigation nodes array to search in
	     * @param  {SP.Guid} termId The navigation node id
	     * @return {NavigationNode}       The corresponding node, null otherwise
	     */
	    UtilityModule.prototype.getNodeByTermId = function (nodes, termId) {
	        if (nodes) {
	            for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
	                var node = nodes_2[_i];
	                // Does a node in the whole site map have this current page url as resolved display URL (friendly or simple link)
	                if (node.Id.toString().toUpperCase().localeCompare(termId.toString().toUpperCase()) === 0) {
	                    return node;
	                }
	                var found = this.getNodeByTermId(node.ChildNodes, termId);
	                if (found) {
	                    return found;
	                }
	            }
	        }
	    };
	    /**
	     * Get the value of a querystring
	     * @param  {String} field The field to get the value of
	     * @param  {String} url   The URL to get the value from (optional)
	     * @return {String}       The field value
	     */
	    UtilityModule.prototype.getQueryString = function (field, url) {
	        var href = url ? url : window.location.href;
	        var reg = new RegExp("[?&]" + field + "=([^&#]*)", "i");
	        var qs = reg.exec(href);
	        return qs ? qs[1] : null;
	    };
	    /**
	     * Check if the cache value from the local storage is still valid
	     * A valid cache value is when:
	     *  - Not null or empty string
	     *  - Not an empty array
	     *  - Not expired
	     * @param  {String} localStorageKey The key in the browser local storage
	     * @return {String}       The cache value is valid, null otherwise
	     */
	    UtilityModule.prototype.isCacheValueValid = function (localStorageKey) {
	        var value = null;
	        // Get the current value in local storage
	        var cachedValue = localStorage.getItem(localStorageKey);
	        if (cachedValue !== null && cachedValue !== undefined) {
	            // Get the cached value
	            var navigationTree = JSON.parse(JSON.parse(cachedValue).value);
	            // Make sure there is a valid value in the cache (not [])
	            if (navigationTree.length > 0) {
	                // Check if the cache value is expired
	                var expiration = new Date(JSON.parse(cachedValue).expiration);
	                var now = new Date();
	                if (now < expiration) {
	                    value = navigationTree;
	                }
	            }
	        }
	        return value;
	    };
	    /**
	     * Transform an URL to a DOM link element to be able to parse it more easily
	     * @param  {String} url The url to convert
	     * @return {String}       The link DOM element
	     */
	    UtilityModule.prototype.getLocation = function (url) {
	        var l = document.createElement("a");
	        l.href = url;
	        return l;
	    };
	    ;
	    /**
	     * Move an item inside an array by changing its index
	     * @param  {number} oldIndex The index of the item to move
	     * @param  {number} newIndex The new desired index in the array
	     * @return {Array<any>}       The modified array
	     */
	    UtilityModule.prototype.moveItem = function (array, oldIndex, newIndex) {
	        if (newIndex >= array.length) {
	            var k = newIndex - array.length;
	            while ((k--) + 1) {
	                array.push(undefined);
	            }
	        }
	        array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
	        return array;
	    };
	    ;
	    return UtilityModule;
	}());
	exports.UtilityModule = UtilityModule;
	

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Contextual Menu Component View Model
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var navigation_viewmodel_1 = __webpack_require__(65);
	var utility_1 = __webpack_require__(66);
	__webpack_require__(7);
	var pnp = __webpack_require__(8);
	var ContextualMenuViewModel = (function (_super) {
	    __extends(ContextualMenuViewModel, _super);
	    function ContextualMenuViewModel(params) {
	        var _this = this;
	        _super.call(this);
	        this.utilityModule = new utility_1.UtilityModule();
	        // The internal name for the site map taxonomy field
	        this.siteMapFieldName = params.siteMapFieldName;
	        this.parentSection = ko.observable(null);
	        this.wait = ko.observable(true);
	        // Collapse events
	        $("#contextualmenu").on("hide.bs.collapse", function (event) {
	            var iconElt = $("[data-target='#" + event.target.id + "']").find("i");
	            if (iconElt) {
	                iconElt.removeClass("ms-Icon--chevronUp");
	                iconElt.addClass("ms-Icon--chevronDown");
	            }
	        });
	        $("#contextualmenu").on("show.bs.collapse", function (event) {
	            event.stopPropagation();
	            // Get the parent with the data-target attribute equals to my id.
	            var iconElt = $("[data-target='#" + event.target.id + "']").find("i");
	            if (iconElt) {
	                iconElt.removeClass("ms-Icon--chevronDown");
	                iconElt.addClass("ms-Icon--chevronUp");
	            }
	        });
	        // Subscribe to the main menu nodes
	        PubSub.subscribe("navigationNodes", function (msg, data) {
	            var navigationTree = data.nodes;
	            pnp.sp.web.lists.getByTitle("Pages").items.getById(_spPageContextInfo.pageItemId).select(_this.siteMapFieldName).get().then(function (item) {
	                var siteMapTermGuid = item[_this.siteMapFieldName];
	                var currentNode = undefined;
	                if (siteMapTermGuid) {
	                    // 1: Search for this guid in the site map
	                    currentNode = _this.utilityModule.getNodeByTermId(navigationTree, siteMapTermGuid.TermGuid);
	                }
	                if (currentNode === undefined) {
	                    // 2: Get the navigation node according to the current URL   
	                    currentNode = _this.utilityModule.getNodeByUrl(navigationTree, window.location.pathname);
	                }
	                if (currentNode !== undefined) {
	                    // If there is no 'ParentId', this is a root term
	                    if (currentNode.ParentId !== null) {
	                        var parentNode = _this.utilityModule.getNodeByTermId(navigationTree, new SP.Guid(currentNode.ParentId));
	                        // Set the parent section
	                        _this.parentSection(parentNode);
	                        if (parentNode.ChildNodes.length > 0) {
	                            // Display all siblings and child nodes from the current node (just like the CSOM results)
	                            // Siblings = children of my own parent ;)
	                            navigationTree = parentNode.ChildNodes;
	                            // Set the current node as first item
	                            navigationTree = _this.utilityModule.moveItem(navigationTree, navigationTree.indexOf(currentNode), 0);
	                        }
	                    }
	                }
	                else {
	                    pnp.log.write("[Contextual Menu] Unable to determine the current position in the site map", pnp.log.LogLevel.Warning);
	                }
	                _this.initialize(navigationTree);
	                _this.wait(false);
	                if (currentNode !== undefined) {
	                    _this.setCurrentNode(new SP.Guid(currentNode.Id));
	                }
	            }).catch(function (errorMesssage) {
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        });
	    }
	    return ContextualMenuViewModel;
	}(navigation_viewmodel_1.NavigationViewModel));
	exports.ContextualMenuViewModel = ContextualMenuViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Carousel Component View Model
	// ========================================
	"use strict";
	var pnp = __webpack_require__(8);
	__webpack_require__(69);
	var CarouselViewModel = (function () {
	    function CarouselViewModel(params) {
	        var _this = this;
	        this.items = ko.observableArray([]);
	        this.siteLogoUrl = ko.observable("");
	        var listTitle = "Carousel Items";
	        var Flickity = __webpack_require__(70);
	        var languageFieldName = "IntranetContentLanguage";
	        this.siteLogoUrl(_spPageContextInfo.webLogoUrl);
	        var trunk8Options = {
	            lines: 1,
	            tooltip: false,
	        };
	        // Get the current page language
	        pnp.sp.web.lists.getByTitle("Pages").items.getById(_spPageContextInfo.pageItemId).select("ID", languageFieldName).get().then(function (item) {
	            var currentPageLanguage = item[languageFieldName];
	            if (currentPageLanguage) {
	                var now = new Date();
	                var filterQuery = "CarouselItemEndDate ge datetime'" + now.toISOString() + "' and CarouselItemStartDate le datetime'" + now.toISOString() + "' and IntranetContentLanguage eq '" + currentPageLanguage + "'";
	                pnp.sp.web.lists.getByTitle(listTitle).items.orderBy("CarouselItemOrder", true).filter(filterQuery).get().then(function (elements) {
	                    // Fill the observable array
	                    _this.items(elements);
	                    // Setup the carousels
	                    // See http://flickity.metafizzy.co/ for more customizations
	                    var flkty = new Flickity(".carousel", {
	                        prevNextButtons: false,
	                        setGallerySize: true,
	                        imageLoaded: true,
	                        lazyLoad: 1,
	                        adaptiveHeight: true
	                    });
	                    // Truncate the label
	                    $(".carousel-label").trunk8(trunk8Options);
	                    // Adjust automatically slide label on resize
	                    $(window).resize(function (event) {
	                        $(".carousel-label").trunk8(trunk8Options);
	                    });
	                });
	            }
	        });
	    }
	    return CarouselViewModel;
	}());
	exports.CarouselViewModel = CarouselViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
	 * trunk8 v1.3.3
	 * https://github.com/rviscomi/trunk8
	 * 
	 * Copyright 2012 Rick Viscomi
	 * Released under the MIT License.
	 * 
	 * Date: September 26, 2012
	 */

	(function (root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        factory(require('jquery'));
	    } else {
	        factory(root.jQuery);
	    }
	}(this, function ($) {
		var methods,
			utils,
			SIDES = {
				/* cen...ter */
				center: 'center',
				/* ...left */
				left: 'left',
				/* right... */
				right: 'right'
			},
			WIDTH = {
				auto: 'auto'
			};
		
		function trunk8(element) {
			this.$element = $(element);
			this.original_text = $.trim(this.$element.html());
			this.settings = $.extend({}, $.fn.trunk8.defaults);
		}
		
		trunk8.prototype.updateSettings = function (options) {
			this.settings = $.extend(this.settings, options);
		};

		function stripHTML(html) {
			var tmp = document.createElement("DIV");
			tmp.innerHTML = html;
			
			if (typeof tmp.textContent != 'undefined') {
				return tmp.textContent;
			}

			return tmp.innerText
		}

		function getHtmlArr(str) {
			/* Builds an array of strings and designated */
			/* HTML tags around them. */
			if (stripHTML(str) === str) {
				return str.split(/\s/g);
			}
			var allResults = [],
				reg = /<([a-z]+)([^<]*)(?:>(.*?(?!<\1>))<\/\1>|\s+\/>)(['.?!,]*)|((?:[^<>\s])+['.?!,]*\w?|<br\s?\/?>)/ig,
				outArr = reg.exec(str),
				lastI,
				ind;
			while (outArr && lastI !== reg.lastIndex) {
				lastI = reg.lastIndex;
				if (outArr[5]) {
					allResults.push(outArr[5]);
				} else if (outArr[1]) {
					allResults.push({
						tag: outArr[1],
						attribs: outArr[2],
						content: outArr[3],
						after: outArr[4]
					});
				}
				outArr = reg.exec(str);
			}
			for (ind = 0; ind < allResults.length; ind++) {
				if (typeof allResults[ind] !== 'string' &&
						allResults[ind].content) {
					allResults[ind].content = getHtmlArr(allResults[ind].content);
				}
			}
			return allResults;
		}

		function rebuildHtmlFromBite(bite, htmlObject, fill) {
			// Take the processed bite after binary-search
			// truncated and re-build the original HTML
			// tags around the processed string.
			bite = bite.replace(fill, '');

			var biteHelper = function(contentArr, tagInfo) {
					var retStr = '',
						content,
						biteContent,
						biteLength,
						nextWord,
						i;
					for (i = 0; i < contentArr.length; i++) {
						content = contentArr[i];
						biteLength = $.trim(bite).split(' ').length;
						if ($.trim(bite).length) {
							if (typeof content === 'string') {
								if (!/<br\s*\/?>/i.test(content)) {
									if (biteLength === 1 && $.trim(bite).length <= content.length) {
										content = bite;
										// We want the fill to go inside of the last HTML
										// element if the element is a container.
										if (tagInfo === 'p' || tagInfo === 'div') {
											content += fill;
										}
										bite = '';
									} else {
										bite = bite.replace(content, '');
									}
								}
								retStr += $.trim(content) + ((i === contentArr.length-1 || biteLength <= 1) ? '' : ' ');
							} else {
								biteContent = biteHelper(content.content, content.tag);
								if (content.after) bite = bite.replace(content.after, '');
								if (biteContent) {
									if (!content.after) content.after = ' ';
									retStr += '<'+content.tag+content.attribs+'>'+biteContent+'</'+content.tag+'>' + content.after;
								}
							}
						}
					}
					return retStr;
				},
				htmlResults = biteHelper(htmlObject);

			// Add fill if doesn't exist. This will place it outside the HTML elements.
			if (htmlResults.slice(htmlResults.length - fill.length) === fill) {
				htmlResults += fill;
			}

			return htmlResults;
		}

		function truncate() {
			var data = this.data('trunk8'),
				settings = data.settings,
				width = settings.width,
				side = settings.side,
				fill = settings.fill,
				parseHTML = settings.parseHTML,
				line_height = utils.getLineHeight(this) * settings.lines,
				str = data.original_text,
				length = str.length,
				max_bite = '',
				lower, upper,
				bite_size,
				bite,
				text,
				htmlObject;
			
			/* Reset the field to the original string. */
			this.html(str);
			text = this.text();

			/* If string has HTML and parse HTML is set, build */
			/* the data struct to house the tags */
			if (parseHTML && stripHTML(str) !== str) {
				htmlObject = getHtmlArr(str);
				str = stripHTML(str);
				length = str.length;
			}

			if (width === WIDTH.auto) {
				/* Assuming there is no "overflow: hidden". */
				if (this.height() <= line_height) {
					/* Text is already at the optimal trunkage. */
					return;
				}

				/* Binary search technique for finding the optimal trunkage. */
				/* Find the maximum bite without overflowing. */
				lower = 0;
				upper = length - 1;

				while (lower <= upper) {
					bite_size = lower + ((upper - lower) >> 1);
					
					bite = utils.eatStr(str, side, length - bite_size, fill);

					if (parseHTML && htmlObject) {
						bite = rebuildHtmlFromBite(bite, htmlObject, fill);
					}
					
					this.html(bite);

					/* Check for overflow. */
					if (this.height() > line_height) {
						upper = bite_size - 1;
					}
					else {
						lower = bite_size + 1;

						/* Save the bigger bite. */
						max_bite = (max_bite.length > bite.length) ? max_bite : bite;
					}
				}

				/* Reset the content to eliminate possible existing scroll bars. */
				this.html('');
				
				/* Display the biggest bite. */
				this.html(max_bite);
				
				if (settings.tooltip) {
					this.attr('title', text);
				}
			}
			else if (!isNaN(width)) {
				bite_size = length - width;

				bite = utils.eatStr(str, side, bite_size, fill);

				this.html(bite);
				
				if (settings.tooltip) {
					this.attr('title', str);
				}
			}
			else {
				$.error('Invalid width "' + width + '".');
				return;
			}
			settings.onTruncate();
		}

		methods = {
			init: function (options) {
				return this.each(function () {
					var $this = $(this),
						data = $this.data('trunk8');
					
					if (!data) {
						$this.data('trunk8', (data = new trunk8(this)));
					}
					
					data.updateSettings(options);
					
					truncate.call($this);
				});
			},

			/** Updates the text value of the elements while maintaining truncation. */
			update: function (new_string) {
				return this.each(function () {
					var $this = $(this);
					
					/* Update text. */
					if (new_string) {
						$this.data('trunk8').original_text = new_string;
					}

					/* Truncate accordingly. */
					truncate.call($this);
				});
			},
			
			revert: function () {
				return this.each(function () {
					/* Get original text. */
					var text = $(this).data('trunk8').original_text;
					
					/* Revert element to original text. */
					$(this).html(text);
				});
			},

			/** Returns this instance's settings object. NOT CHAINABLE. */
			getSettings: function () {
				return $(this.get(0)).data('trunk8').settings;
			}
		};

		utils = {
			/** Replaces [bite_size] [side]-most chars in [str] with [fill]. */
			eatStr: function (str, side, bite_size, fill) {
				var length = str.length,
					key = utils.eatStr.generateKey.apply(null, arguments),
					half_length,
					half_bite_size;

				/* If the result is already in the cache, return it. */
				if (utils.eatStr.cache[key]) {
					return utils.eatStr.cache[key];
				}
				
				/* Common error handling. */
				if ((typeof str !== 'string') || (length === 0)) {
					$.error('Invalid source string "' + str + '".');
				}
				if ((bite_size < 0) || (bite_size > length)) {
					$.error('Invalid bite size "' + bite_size + '".');
				}
				else if (bite_size === 0) {
					/* No bite should show no truncation. */
					return str;
				}
				if (false) {
					$.error('Fill unable to be converted to a string.');
				}

				/* Compute the result, store it in the cache, and return it. */
				switch (side) {
					case SIDES.right:
						/* str... */
						return utils.eatStr.cache[key] =
								$.trim(str.substr(0, length - bite_size)) + fill;
						
					case SIDES.left:
						/* ...str */
						return utils.eatStr.cache[key] =
								fill + $.trim(str.substr(bite_size));
						
					case SIDES.center:
						/* Bit-shift to the right by one === Math.floor(x / 2) */
						half_length = length >> 1; // halve the length
						half_bite_size = bite_size >> 1; // halve the bite_size

						/* st...r */
						return utils.eatStr.cache[key] =
								$.trim(utils.eatStr(str.substr(0, length - half_length), SIDES.right, bite_size - half_bite_size, '')) +
								fill +
								$.trim(utils.eatStr(str.substr(length - half_length), SIDES.left, half_bite_size, ''));
						
					default:
						$.error('Invalid side "' + side + '".');
				}
			},
			
			getLineHeight: function (elem) {
					var floats = $(elem).css('float');
					if (floats !== 'none') {
						$(elem).css('float', 'none');
					}
					var pos = $(elem).css('position');
					if (pos === 'absolute') {
						$(elem).css('position', 'static');
					}
		
					var html = $(elem).html(),
					wrapper_id = 'line-height-test',
					line_height;
		
					/* Set the content to a small single character and wrap. */
					$(elem).html('i').wrap('<div id="' + wrapper_id + '" />');
		
					/* Calculate the line height by measuring the wrapper.*/
					line_height = $('#' + wrapper_id).innerHeight();
		
					/* Remove the wrapper and reset the content. */
					$(elem).html(html).css({ 'float': floats, 'position': pos }).unwrap();
		
					return line_height;
				}
		};

		utils.eatStr.cache = {};
		utils.eatStr.generateKey = function () {
			return Array.prototype.join.call(arguments, '');
		};
		
		$.fn.trunk8 = function (method) {
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			}
			else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			}
			else {
				$.error('Method ' + method + ' does not exist on jQuery.trunk8');
			}
		};
		
		/* Default trunk8 settings. */
		$.fn.trunk8.defaults = {
			fill: '&hellip;',
			lines: 1,
			side: SIDES.right,
			tooltip: true,
			width: WIDTH.auto,
			parseHTML: false,
			onTruncate: function () {}
		};
	}));


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Flickity v2.0.5
	 * Touch, responsive, flickable carousels
	 *
	 * Licensed GPLv3 for open source use
	 * or Flickity Commercial License for commercial use
	 *
	 * http://flickity.metafizzy.co
	 * Copyright 2016 Metafizzy
	 */

	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(79),
	      __webpack_require__(82),
	      __webpack_require__(84),
	      __webpack_require__(85),
	      __webpack_require__(86),
	      __webpack_require__(87)
	    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('./flickity'),
	      require('./drag'),
	      require('./prev-next-button'),
	      require('./page-dots'),
	      require('./player'),
	      require('./add-remove-cell'),
	      require('./lazyload')
	    );
	  }

	})( window, function factory( Flickity ) {
	  /*jshint strict: false*/
	  return Flickity;
	});


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(72),
	      __webpack_require__(73),
	      __webpack_require__(74),
	      __webpack_require__(76),
	      __webpack_require__(77),
	      __webpack_require__(78)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
	      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter'),
	      require('get-size'),
	      require('fizzy-ui-utils'),
	      require('./cell'),
	      require('./slide'),
	      require('./animate')
	    );
	  } else {
	    // browser global
	    var _Flickity = window.Flickity;

	    window.Flickity = factory(
	      window,
	      window.EvEmitter,
	      window.getSize,
	      window.fizzyUIUtils,
	      _Flickity.Cell,
	      _Flickity.Slide,
	      _Flickity.animatePrototype
	    );
	  }

	}( window, function factory( window, EvEmitter, getSize,
	  utils, Cell, Slide, animatePrototype ) {

	'use strict';

	// vars
	var jQuery = window.jQuery;
	var getComputedStyle = window.getComputedStyle;
	var console = window.console;

	function moveElements( elems, toElem ) {
	  elems = utils.makeArray( elems );
	  while ( elems.length ) {
	    toElem.appendChild( elems.shift() );
	  }
	}

	// -------------------------- Flickity -------------------------- //

	// globally unique identifiers
	var GUID = 0;
	// internal store of all Flickity intances
	var instances = {};

	function Flickity( element, options ) {
	  var queryElement = utils.getQueryElement( element );
	  if ( !queryElement ) {
	    if ( console ) {
	      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
	    }
	    return;
	  }
	  this.element = queryElement;
	  // do not initialize twice on same element
	  if ( this.element.flickityGUID ) {
	    var instance = instances[ this.element.flickityGUID ];
	    instance.option( options );
	    return instance;
	  }

	  // add jQuery
	  if ( jQuery ) {
	    this.$element = jQuery( this.element );
	  }
	  // options
	  this.options = utils.extend( {}, this.constructor.defaults );
	  this.option( options );

	  // kick things off
	  this._create();
	}

	Flickity.defaults = {
	  accessibility: true,
	  // adaptiveHeight: false,
	  cellAlign: 'center',
	  // cellSelector: undefined,
	  // contain: false,
	  freeScrollFriction: 0.075, // friction when free-scrolling
	  friction: 0.28, // friction when selecting
	  namespaceJQueryEvents: true,
	  // initialIndex: 0,
	  percentPosition: true,
	  resize: true,
	  selectedAttraction: 0.025,
	  setGallerySize: true
	  // watchCSS: false,
	  // wrapAround: false
	};

	// hash of methods triggered on _create()
	Flickity.createMethods = [];

	var proto = Flickity.prototype;
	// inherit EventEmitter
	utils.extend( proto, EvEmitter.prototype );

	proto._create = function() {
	  // add id for Flickity.data
	  var id = this.guid = ++GUID;
	  this.element.flickityGUID = id; // expando
	  instances[ id ] = this; // associate via id
	  // initial properties
	  this.selectedIndex = 0;
	  // how many frames slider has been in same position
	  this.restingFrames = 0;
	  // initial physics properties
	  this.x = 0;
	  this.velocity = 0;
	  this.originSide = this.options.rightToLeft ? 'right' : 'left';
	  // create viewport & slider
	  this.viewport = document.createElement('div');
	  this.viewport.className = 'flickity-viewport';
	  this._createSlider();

	  if ( this.options.resize || this.options.watchCSS ) {
	    window.addEventListener( 'resize', this );
	  }

	  Flickity.createMethods.forEach( function( method ) {
	    this[ method ]();
	  }, this );

	  if ( this.options.watchCSS ) {
	    this.watchCSS();
	  } else {
	    this.activate();
	  }

	};

	/**
	 * set options
	 * @param {Object} opts
	 */
	proto.option = function( opts ) {
	  utils.extend( this.options, opts );
	};

	proto.activate = function() {
	  if ( this.isActive ) {
	    return;
	  }
	  this.isActive = true;
	  this.element.classList.add('flickity-enabled');
	  if ( this.options.rightToLeft ) {
	    this.element.classList.add('flickity-rtl');
	  }

	  this.getSize();
	  // move initial cell elements so they can be loaded as cells
	  var cellElems = this._filterFindCellElements( this.element.children );
	  moveElements( cellElems, this.slider );
	  this.viewport.appendChild( this.slider );
	  this.element.appendChild( this.viewport );
	  // get cells from children
	  this.reloadCells();

	  if ( this.options.accessibility ) {
	    // allow element to focusable
	    this.element.tabIndex = 0;
	    // listen for key presses
	    this.element.addEventListener( 'keydown', this );
	  }

	  this.emitEvent('activate');

	  var index;
	  var initialIndex = this.options.initialIndex;
	  if ( this.isInitActivated ) {
	    index = this.selectedIndex;
	  } else if ( initialIndex !== undefined ) {
	    index = this.cells[ initialIndex ] ? initialIndex : 0;
	  } else {
	    index = 0;
	  }
	  // select instantly
	  this.select( index, false, true );
	  // flag for initial activation, for using initialIndex
	  this.isInitActivated = true;
	};

	// slider positions the cells
	proto._createSlider = function() {
	  // slider element does all the positioning
	  var slider = document.createElement('div');
	  slider.className = 'flickity-slider';
	  slider.style[ this.originSide ] = 0;
	  this.slider = slider;
	};

	proto._filterFindCellElements = function( elems ) {
	  return utils.filterFindElements( elems, this.options.cellSelector );
	};

	// goes through all children
	proto.reloadCells = function() {
	  // collection of item elements
	  this.cells = this._makeCells( this.slider.children );
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	};

	/**
	 * turn elements into Flickity.Cells
	 * @param {Array or NodeList or HTMLElement} elems
	 * @returns {Array} items - collection of new Flickity Cells
	 */
	proto._makeCells = function( elems ) {
	  var cellElems = this._filterFindCellElements( elems );

	  // create new Flickity for collection
	  var cells = cellElems.map( function( cellElem ) {
	    return new Cell( cellElem, this );
	  }, this );

	  return cells;
	};

	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};

	proto.getLastSlide = function() {
	  return this.slides[ this.slides.length - 1 ];
	};

	// positions all cells
	proto.positionCells = function() {
	  // size all cells
	  this._sizeCells( this.cells );
	  // position all cells
	  this._positionCells( 0 );
	};

	/**
	 * position certain cells
	 * @param {Integer} index - which cell to start with
	 */
	proto._positionCells = function( index ) {
	  index = index || 0;
	  // also measure maxCellHeight
	  // start 0 if positioning all cells
	  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
	  var cellX = 0;
	  // get cellX
	  if ( index > 0 ) {
	    var startCell = this.cells[ index - 1 ];
	    cellX = startCell.x + startCell.size.outerWidth;
	  }
	  var len = this.cells.length;
	  for ( var i=index; i < len; i++ ) {
	    var cell = this.cells[i];
	    cell.setPosition( cellX );
	    cellX += cell.size.outerWidth;
	    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
	  }
	  // keep track of cellX for wrap-around
	  this.slideableWidth = cellX;
	  // slides
	  this.updateSlides();
	  // contain slides target
	  this._containSlides();
	  // update slidesWidth
	  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
	};

	/**
	 * cell.getSize() on multiple cells
	 * @param {Array} cells
	 */
	proto._sizeCells = function( cells ) {
	  cells.forEach( function( cell ) {
	    cell.getSize();
	  });
	};

	// --------------------------  -------------------------- //

	proto.updateSlides = function() {
	  this.slides = [];
	  if ( !this.cells.length ) {
	    return;
	  }

	  var slide = new Slide( this );
	  this.slides.push( slide );
	  var isOriginLeft = this.originSide == 'left';
	  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

	  var canCellFit = this._getCanCellFit();

	  this.cells.forEach( function( cell, i ) {
	    // just add cell if first cell in slide
	    if ( !slide.cells.length ) {
	      slide.addCell( cell );
	      return;
	    }

	    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
	      ( cell.size.outerWidth - cell.size[ nextMargin ] );

	    if ( canCellFit.call( this, i, slideWidth ) ) {
	      slide.addCell( cell );
	    } else {
	      // doesn't fit, new slide
	      slide.updateTarget();

	      slide = new Slide( this );
	      this.slides.push( slide );
	      slide.addCell( cell );
	    }
	  }, this );
	  // last slide
	  slide.updateTarget();
	  // update .selectedSlide
	  this.updateSelectedSlide();
	};

	proto._getCanCellFit = function() {
	  var groupCells = this.options.groupCells;
	  if ( !groupCells ) {
	    return function() {
	      return false;
	    };
	  } else if ( typeof groupCells == 'number' ) {
	    // group by number. 3 -> [0,1,2], [3,4,5], ...
	    var number = parseInt( groupCells, 10 );
	    return function( i ) {
	      return ( i % number ) !== 0;
	    };
	  }
	  // default, group by width of slide
	  // parse '75%
	  var percentMatch = typeof groupCells == 'string' &&
	    groupCells.match(/^(\d+)%$/);
	  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
	  return function( i, slideWidth ) {
	    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
	  };
	};

	// alias _init for jQuery plugin .flickity()
	proto._init =
	proto.reposition = function() {
	  this.positionCells();
	  this.positionSliderAtSelected();
	};

	proto.getSize = function() {
	  this.size = getSize( this.element );
	  this.setCellAlign();
	  this.cursorPosition = this.size.innerWidth * this.cellAlign;
	};

	var cellAlignShorthands = {
	  // cell align, then based on origin side
	  center: {
	    left: 0.5,
	    right: 0.5
	  },
	  left: {
	    left: 0,
	    right: 1
	  },
	  right: {
	    right: 0,
	    left: 1
	  }
	};

	proto.setCellAlign = function() {
	  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
	  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
	};

	proto.setGallerySize = function() {
	  if ( this.options.setGallerySize ) {
	    var height = this.options.adaptiveHeight && this.selectedSlide ?
	      this.selectedSlide.height : this.maxCellHeight;
	    this.viewport.style.height = height + 'px';
	  }
	};

	proto._getWrapShiftCells = function() {
	  // only for wrap-around
	  if ( !this.options.wrapAround ) {
	    return;
	  }
	  // unshift previous cells
	  this._unshiftCells( this.beforeShiftCells );
	  this._unshiftCells( this.afterShiftCells );
	  // get before cells
	  // initial gap
	  var gapX = this.cursorPosition;
	  var cellIndex = this.cells.length - 1;
	  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
	  // get after cells
	  // ending gap between last cell and end of gallery viewport
	  gapX = this.size.innerWidth - this.cursorPosition;
	  // start cloning at first cell, working forwards
	  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
	};

	proto._getGapCells = function( gapX, cellIndex, increment ) {
	  // keep adding cells until the cover the initial gap
	  var cells = [];
	  while ( gapX > 0 ) {
	    var cell = this.cells[ cellIndex ];
	    if ( !cell ) {
	      break;
	    }
	    cells.push( cell );
	    cellIndex += increment;
	    gapX -= cell.size.outerWidth;
	  }
	  return cells;
	};

	// ----- contain ----- //

	// contain cell targets so no excess sliding
	proto._containSlides = function() {
	  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
	    return;
	  }
	  var isRightToLeft = this.options.rightToLeft;
	  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
	  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
	  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
	  // content is less than gallery size
	  var isContentSmaller = contentWidth < this.size.innerWidth;
	  // bounds
	  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
	  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
	  // contain each cell target
	  this.slides.forEach( function( slide ) {
	    if ( isContentSmaller ) {
	      // all cells fit inside gallery
	      slide.target = contentWidth * this.cellAlign;
	    } else {
	      // contain to bounds
	      slide.target = Math.max( slide.target, beginBound );
	      slide.target = Math.min( slide.target, endBound );
	    }
	  }, this );
	};

	// -----  ----- //

	/**
	 * emits events via eventEmitter and jQuery events
	 * @param {String} type - name of event
	 * @param {Event} event - original event
	 * @param {Array} args - extra arguments
	 */
	proto.dispatchEvent = function( type, event, args ) {
	  var emitArgs = event ? [ event ].concat( args ) : args;
	  this.emitEvent( type, emitArgs );

	  if ( jQuery && this.$element ) {
	    // default trigger with type if no event
	    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
	    var $event = type;
	    if ( event ) {
	      // create jQuery event
	      var jQEvent = jQuery.Event( event );
	      jQEvent.type = type;
	      $event = jQEvent;
	    }
	    this.$element.trigger( $event, args );
	  }
	};

	// -------------------------- select -------------------------- //

	/**
	 * @param {Integer} index - index of the slide
	 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
	 * @param {Boolean} isInstant - will immediately set position at selected cell
	 */
	proto.select = function( index, isWrap, isInstant ) {
	  if ( !this.isActive ) {
	    return;
	  }
	  index = parseInt( index, 10 );
	  this._wrapSelect( index );

	  if ( this.options.wrapAround || isWrap ) {
	    index = utils.modulo( index, this.slides.length );
	  }
	  // bail if invalid index
	  if ( !this.slides[ index ] ) {
	    return;
	  }
	  this.selectedIndex = index;
	  this.updateSelectedSlide();
	  if ( isInstant ) {
	    this.positionSliderAtSelected();
	  } else {
	    this.startAnimation();
	  }
	  if ( this.options.adaptiveHeight ) {
	    this.setGallerySize();
	  }

	  this.dispatchEvent('select');
	  // old v1 event name, remove in v3
	  this.dispatchEvent('cellSelect');
	};

	// wraps position for wrapAround, to move to closest slide. #113
	proto._wrapSelect = function( index ) {
	  var len = this.slides.length;
	  var isWrapping = this.options.wrapAround && len > 1;
	  if ( !isWrapping ) {
	    return index;
	  }
	  var wrapIndex = utils.modulo( index, len );
	  // go to shortest
	  var delta = Math.abs( wrapIndex - this.selectedIndex );
	  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
	  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
	  if ( !this.isDragSelect && backWrapDelta < delta ) {
	    index += len;
	  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
	    index -= len;
	  }
	  // wrap position so slider is within normal area
	  if ( index < 0 ) {
	    this.x -= this.slideableWidth;
	  } else if ( index >= len ) {
	    this.x += this.slideableWidth;
	  }
	};

	proto.previous = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex - 1, isWrap, isInstant );
	};

	proto.next = function( isWrap, isInstant ) {
	  this.select( this.selectedIndex + 1, isWrap, isInstant );
	};

	proto.updateSelectedSlide = function() {
	  var slide = this.slides[ this.selectedIndex ];
	  // selectedIndex could be outside of slides, if triggered before resize()
	  if ( !slide ) {
	    return;
	  }
	  // unselect previous selected slide
	  this.unselectSelectedSlide();
	  // update new selected slide
	  this.selectedSlide = slide;
	  slide.select();
	  this.selectedCells = slide.cells;
	  this.selectedElements = slide.getCellElements();
	  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
	  // Remove in v3?
	  this.selectedCell = slide.cells[0];
	  this.selectedElement = this.selectedElements[0];
	};

	proto.unselectSelectedSlide = function() {
	  if ( this.selectedSlide ) {
	    this.selectedSlide.unselect();
	  }
	};

	/**
	 * select slide from number or cell element
	 * @param {Element or Number} elem
	 */
	proto.selectCell = function( value, isWrap, isInstant ) {
	  // get cell
	  var cell;
	  if ( typeof value == 'number' ) {
	    cell = this.cells[ value ];
	  } else {
	    // use string as selector
	    if ( typeof value == 'string' ) {
	      value = this.element.querySelector( value );
	    }
	    // get cell from element
	    cell = this.getCell( value );
	  }
	  // select slide that has cell
	  for ( var i=0; cell && i < this.slides.length; i++ ) {
	    var slide = this.slides[i];
	    var index = slide.cells.indexOf( cell );
	    if ( index != -1 ) {
	      this.select( i, isWrap, isInstant );
	      return;
	    }
	  }
	};

	// -------------------------- get cells -------------------------- //

	/**
	 * get Flickity.Cell, given an Element
	 * @param {Element} elem
	 * @returns {Flickity.Cell} item
	 */
	proto.getCell = function( elem ) {
	  // loop through cells to get the one that matches
	  for ( var i=0; i < this.cells.length; i++ ) {
	    var cell = this.cells[i];
	    if ( cell.element == elem ) {
	      return cell;
	    }
	  }
	};

	/**
	 * get collection of Flickity.Cells, given Elements
	 * @param {Element, Array, NodeList} elems
	 * @returns {Array} cells - Flickity.Cells
	 */
	proto.getCells = function( elems ) {
	  elems = utils.makeArray( elems );
	  var cells = [];
	  elems.forEach( function( elem ) {
	    var cell = this.getCell( elem );
	    if ( cell ) {
	      cells.push( cell );
	    }
	  }, this );
	  return cells;
	};

	/**
	 * get cell elements
	 * @returns {Array} cellElems
	 */
	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};

	/**
	 * get parent cell from an element
	 * @param {Element} elem
	 * @returns {Flickit.Cell} cell
	 */
	proto.getParentCell = function( elem ) {
	  // first check if elem is cell
	  var cell = this.getCell( elem );
	  if ( cell ) {
	    return cell;
	  }
	  // try to get parent cell elem
	  elem = utils.getParent( elem, '.flickity-slider > *' );
	  return this.getCell( elem );
	};

	/**
	 * get cells adjacent to a slide
	 * @param {Integer} adjCount - number of adjacent slides
	 * @param {Integer} index - index of slide to start
	 * @returns {Array} cells - array of Flickity.Cells
	 */
	proto.getAdjacentCellElements = function( adjCount, index ) {
	  if ( !adjCount ) {
	    return this.selectedSlide.getCellElements();
	  }
	  index = index === undefined ? this.selectedIndex : index;

	  var len = this.slides.length;
	  if ( 1 + ( adjCount * 2 ) >= len ) {
	    return this.getCellElements();
	  }

	  var cellElems = [];
	  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
	    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
	    var slide = this.slides[ slideIndex ];
	    if ( slide ) {
	      cellElems = cellElems.concat( slide.getCellElements() );
	    }
	  }
	  return cellElems;
	};

	// -------------------------- events -------------------------- //

	proto.uiChange = function() {
	  this.emitEvent('uiChange');
	};

	proto.childUIPointerDown = function( event ) {
	  this.emitEvent( 'childUIPointerDown', [ event ] );
	};

	// ----- resize ----- //

	proto.onresize = function() {
	  this.watchCSS();
	  this.resize();
	};

	utils.debounceMethod( Flickity, 'onresize', 150 );

	proto.resize = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.getSize();
	  // wrap values
	  if ( this.options.wrapAround ) {
	    this.x = utils.modulo( this.x, this.slideableWidth );
	  }
	  this.positionCells();
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent('resize');
	  // update selected index for group slides, instant
	  // TODO: position can be lost between groups of various numbers
	  var selectedElement = this.selectedElements && this.selectedElements[0];
	  this.selectCell( selectedElement, false, true );
	};

	// watches the :after property, activates/deactivates
	proto.watchCSS = function() {
	  var watchOption = this.options.watchCSS;
	  if ( !watchOption ) {
	    return;
	  }

	  var afterContent = getComputedStyle( this.element, ':after' ).content;
	  // activate if :after { content: 'flickity' }
	  if ( afterContent.indexOf('flickity') != -1 ) {
	    this.activate();
	  } else {
	    this.deactivate();
	  }
	};

	// ----- keydown ----- //

	// go previous/next if left/right keys pressed
	proto.onkeydown = function( event ) {
	  // only work if element is in focus
	  if ( !this.options.accessibility ||
	    ( document.activeElement && document.activeElement != this.element ) ) {
	    return;
	  }

	  if ( event.keyCode == 37 ) {
	    // go left
	    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
	    this.uiChange();
	    this[ leftMethod ]();
	  } else if ( event.keyCode == 39 ) {
	    // go right
	    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
	    this.uiChange();
	    this[ rightMethod ]();
	  }
	};

	// -------------------------- destroy -------------------------- //

	// deactivate all Flickity functionality, but keep stuff available
	proto.deactivate = function() {
	  if ( !this.isActive ) {
	    return;
	  }
	  this.element.classList.remove('flickity-enabled');
	  this.element.classList.remove('flickity-rtl');
	  // destroy cells
	  this.cells.forEach( function( cell ) {
	    cell.destroy();
	  });
	  this.unselectSelectedSlide();
	  this.element.removeChild( this.viewport );
	  // move child elements back into element
	  moveElements( this.slider.children, this.element );
	  if ( this.options.accessibility ) {
	    this.element.removeAttribute('tabIndex');
	    this.element.removeEventListener( 'keydown', this );
	  }
	  // set flags
	  this.isActive = false;
	  this.emitEvent('deactivate');
	};

	proto.destroy = function() {
	  this.deactivate();
	  window.removeEventListener( 'resize', this );
	  this.emitEvent('destroy');
	  if ( jQuery && this.$element ) {
	    jQuery.removeData( this.element, 'flickity' );
	  }
	  delete this.element.flickityGUID;
	  delete instances[ this.guid ];
	};

	// -------------------------- prototype -------------------------- //

	utils.extend( proto, animatePrototype );

	// -------------------------- extras -------------------------- //

	/**
	 * get Flickity instance from element
	 * @param {Element} elem
	 * @returns {Flickity}
	 */
	Flickity.data = function( elem ) {
	  elem = utils.getQueryElement( elem );
	  var id = elem && elem.flickityGUID;
	  return id && instances[ id ];
	};

	utils.htmlInit( Flickity, 'flickity' );

	if ( jQuery && jQuery.bridget ) {
	  jQuery.bridget( 'flickity', Flickity );
	}

	Flickity.Cell = Cell;

	return Flickity;

	}));


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * EvEmitter v1.0.3
	 * Lil' event emitter
	 * MIT License
	 */

	/* jshint unused: true, undef: true, strict: true */

	( function( global, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /* globals define, module, window */
	  if ( true ) {
	    // AMD - RequireJS
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS - Browserify, Webpack
	    module.exports = factory();
	  } else {
	    // Browser globals
	    global.EvEmitter = factory();
	  }

	}( typeof window != 'undefined' ? window : this, function() {

	"use strict";

	function EvEmitter() {}

	var proto = EvEmitter.prototype;

	proto.on = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // set events hash
	  var events = this._events = this._events || {};
	  // set listeners array
	  var listeners = events[ eventName ] = events[ eventName ] || [];
	  // only add once
	  if ( listeners.indexOf( listener ) == -1 ) {
	    listeners.push( listener );
	  }

	  return this;
	};

	proto.once = function( eventName, listener ) {
	  if ( !eventName || !listener ) {
	    return;
	  }
	  // add event
	  this.on( eventName, listener );
	  // set once flag
	  // set onceEvents hash
	  var onceEvents = this._onceEvents = this._onceEvents || {};
	  // set onceListeners object
	  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
	  // set flag
	  onceListeners[ listener ] = true;

	  return this;
	};

	proto.off = function( eventName, listener ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var index = listeners.indexOf( listener );
	  if ( index != -1 ) {
	    listeners.splice( index, 1 );
	  }

	  return this;
	};

	proto.emitEvent = function( eventName, args ) {
	  var listeners = this._events && this._events[ eventName ];
	  if ( !listeners || !listeners.length ) {
	    return;
	  }
	  var i = 0;
	  var listener = listeners[i];
	  args = args || [];
	  // once stuff
	  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

	  while ( listener ) {
	    var isOnce = onceListeners && onceListeners[ listener ];
	    if ( isOnce ) {
	      // remove listener
	      // remove before trigger to prevent recursion
	      this.off( eventName, listener );
	      // unset once flag
	      delete onceListeners[ listener ];
	    }
	    // trigger listener
	    listener.apply( this, args );
	    // get next listener
	    i += isOnce ? 0 : 1;
	    listener = listeners[i];
	  }

	  return this;
	};

	return EvEmitter;

	}));


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * getSize v2.0.2
	 * measure size of elements
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */
	/*global define: false, module: false, console: false */

	( function( window, factory ) {
	  'use strict';

	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.getSize = factory();
	  }

	})( window, function factory() {
	'use strict';

	// -------------------------- helpers -------------------------- //

	// get a number from a string, not a percentage
	function getStyleSize( value ) {
	  var num = parseFloat( value );
	  // not a percent like '100%', and a number
	  var isValid = value.indexOf('%') == -1 && !isNaN( num );
	  return isValid && num;
	}

	function noop() {}

	var logError = typeof console == 'undefined' ? noop :
	  function( message ) {
	    console.error( message );
	  };

	// -------------------------- measurements -------------------------- //

	var measurements = [
	  'paddingLeft',
	  'paddingRight',
	  'paddingTop',
	  'paddingBottom',
	  'marginLeft',
	  'marginRight',
	  'marginTop',
	  'marginBottom',
	  'borderLeftWidth',
	  'borderRightWidth',
	  'borderTopWidth',
	  'borderBottomWidth'
	];

	var measurementsLength = measurements.length;

	function getZeroSize() {
	  var size = {
	    width: 0,
	    height: 0,
	    innerWidth: 0,
	    innerHeight: 0,
	    outerWidth: 0,
	    outerHeight: 0
	  };
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    size[ measurement ] = 0;
	  }
	  return size;
	}

	// -------------------------- getStyle -------------------------- //

	/**
	 * getStyle, get style of element, check for Firefox bug
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	 */
	function getStyle( elem ) {
	  var style = getComputedStyle( elem );
	  if ( !style ) {
	    logError( 'Style returned ' + style +
	      '. Are you running this code in a hidden iframe on Firefox? ' +
	      'See http://bit.ly/getsizebug1' );
	  }
	  return style;
	}

	// -------------------------- setup -------------------------- //

	var isSetup = false;

	var isBoxSizeOuter;

	/**
	 * setup
	 * check isBoxSizerOuter
	 * do on first getSize() rather than on page load for Firefox bug
	 */
	function setup() {
	  // setup once
	  if ( isSetup ) {
	    return;
	  }
	  isSetup = true;

	  // -------------------------- box sizing -------------------------- //

	  /**
	   * WebKit measures the outer-width on style.width on border-box elems
	   * IE & Firefox<29 measures the inner-width
	   */
	  var div = document.createElement('div');
	  div.style.width = '200px';
	  div.style.padding = '1px 2px 3px 4px';
	  div.style.borderStyle = 'solid';
	  div.style.borderWidth = '1px 2px 3px 4px';
	  div.style.boxSizing = 'border-box';

	  var body = document.body || document.documentElement;
	  body.appendChild( div );
	  var style = getStyle( div );

	  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
	  body.removeChild( div );

	}

	// -------------------------- getSize -------------------------- //

	function getSize( elem ) {
	  setup();

	  // use querySeletor if elem is string
	  if ( typeof elem == 'string' ) {
	    elem = document.querySelector( elem );
	  }

	  // do not proceed on non-objects
	  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
	    return;
	  }

	  var style = getStyle( elem );

	  // if hidden, everything is 0
	  if ( style.display == 'none' ) {
	    return getZeroSize();
	  }

	  var size = {};
	  size.width = elem.offsetWidth;
	  size.height = elem.offsetHeight;

	  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

	  // get all measurements
	  for ( var i=0; i < measurementsLength; i++ ) {
	    var measurement = measurements[i];
	    var value = style[ measurement ];
	    var num = parseFloat( value );
	    // any 'auto', 'medium' value will be 0
	    size[ measurement ] = !isNaN( num ) ? num : 0;
	  }

	  var paddingWidth = size.paddingLeft + size.paddingRight;
	  var paddingHeight = size.paddingTop + size.paddingBottom;
	  var marginWidth = size.marginLeft + size.marginRight;
	  var marginHeight = size.marginTop + size.marginBottom;
	  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
	  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

	  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

	  // overwrite width and height if we can get it from style
	  var styleWidth = getStyleSize( style.width );
	  if ( styleWidth !== false ) {
	    size.width = styleWidth +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
	  }

	  var styleHeight = getStyleSize( style.height );
	  if ( styleHeight !== false ) {
	    size.height = styleHeight +
	      // add padding and border unless it's already including it
	      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
	  }

	  size.innerWidth = size.width - ( paddingWidth + borderWidth );
	  size.innerHeight = size.height - ( paddingHeight + borderHeight );

	  size.outerWidth = size.width + marginWidth;
	  size.outerHeight = size.height + marginHeight;

	  return size;
	}

	return getSize;

	});


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Fizzy UI utils v2.0.3
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */

	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(75)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
	      return factory( window, matchesSelector );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('desandro-matches-selector')
	    );
	  } else {
	    // browser global
	    window.fizzyUIUtils = factory(
	      window,
	      window.matchesSelector
	    );
	  }

	}( window, function factory( window, matchesSelector ) {

	'use strict';

	var utils = {};

	// ----- extend ----- //

	// extends objects
	utils.extend = function( a, b ) {
	  for ( var prop in b ) {
	    a[ prop ] = b[ prop ];
	  }
	  return a;
	};

	// ----- modulo ----- //

	utils.modulo = function( num, div ) {
	  return ( ( num % div ) + div ) % div;
	};

	// ----- makeArray ----- //

	// turn element or nodeList into an array
	utils.makeArray = function( obj ) {
	  var ary = [];
	  if ( Array.isArray( obj ) ) {
	    // use object if already an array
	    ary = obj;
	  } else if ( obj && typeof obj.length == 'number' ) {
	    // convert nodeList to array
	    for ( var i=0; i < obj.length; i++ ) {
	      ary.push( obj[i] );
	    }
	  } else {
	    // array of single index
	    ary.push( obj );
	  }
	  return ary;
	};

	// ----- removeFrom ----- //

	utils.removeFrom = function( ary, obj ) {
	  var index = ary.indexOf( obj );
	  if ( index != -1 ) {
	    ary.splice( index, 1 );
	  }
	};

	// ----- getParent ----- //

	utils.getParent = function( elem, selector ) {
	  while ( elem != document.body ) {
	    elem = elem.parentNode;
	    if ( matchesSelector( elem, selector ) ) {
	      return elem;
	    }
	  }
	};

	// ----- getQueryElement ----- //

	// use element as selector string
	utils.getQueryElement = function( elem ) {
	  if ( typeof elem == 'string' ) {
	    return document.querySelector( elem );
	  }
	  return elem;
	};

	// ----- handleEvent ----- //

	// enable .ontype to trigger from .addEventListener( elem, 'type' )
	utils.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	// ----- filterFindElements ----- //

	utils.filterFindElements = function( elems, selector ) {
	  // make array of elems
	  elems = utils.makeArray( elems );
	  var ffElems = [];

	  elems.forEach( function( elem ) {
	    // check that elem is an actual element
	    if ( !( elem instanceof HTMLElement ) ) {
	      return;
	    }
	    // add elem if no selector
	    if ( !selector ) {
	      ffElems.push( elem );
	      return;
	    }
	    // filter & find items if we have a selector
	    // filter
	    if ( matchesSelector( elem, selector ) ) {
	      ffElems.push( elem );
	    }
	    // find children
	    var childElems = elem.querySelectorAll( selector );
	    // concat childElems to filterFound array
	    for ( var i=0; i < childElems.length; i++ ) {
	      ffElems.push( childElems[i] );
	    }
	  });

	  return ffElems;
	};

	// ----- debounceMethod ----- //

	utils.debounceMethod = function( _class, methodName, threshold ) {
	  // original method
	  var method = _class.prototype[ methodName ];
	  var timeoutName = methodName + 'Timeout';

	  _class.prototype[ methodName ] = function() {
	    var timeout = this[ timeoutName ];
	    if ( timeout ) {
	      clearTimeout( timeout );
	    }
	    var args = arguments;

	    var _this = this;
	    this[ timeoutName ] = setTimeout( function() {
	      method.apply( _this, args );
	      delete _this[ timeoutName ];
	    }, threshold || 100 );
	  };
	};

	// ----- docReady ----- //

	utils.docReady = function( callback ) {
	  var readyState = document.readyState;
	  if ( readyState == 'complete' || readyState == 'interactive' ) {
	    // do async to allow for other scripts to run. metafizzy/flickity#441
	    setTimeout( callback );
	  } else {
	    document.addEventListener( 'DOMContentLoaded', callback );
	  }
	};

	// ----- htmlInit ----- //

	// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
	utils.toDashed = function( str ) {
	  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
	    return $1 + '-' + $2;
	  }).toLowerCase();
	};

	var console = window.console;
	/**
	 * allow user to initialize classes via [data-namespace] or .js-namespace class
	 * htmlInit( Widget, 'widgetName' )
	 * options are parsed from data-namespace-options
	 */
	utils.htmlInit = function( WidgetClass, namespace ) {
	  utils.docReady( function() {
	    var dashedNamespace = utils.toDashed( namespace );
	    var dataAttr = 'data-' + dashedNamespace;
	    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
	    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
	    var elems = utils.makeArray( dataAttrElems )
	      .concat( utils.makeArray( jsDashElems ) );
	    var dataOptionsAttr = dataAttr + '-options';
	    var jQuery = window.jQuery;

	    elems.forEach( function( elem ) {
	      var attr = elem.getAttribute( dataAttr ) ||
	        elem.getAttribute( dataOptionsAttr );
	      var options;
	      try {
	        options = attr && JSON.parse( attr );
	      } catch ( error ) {
	        // log error, do not initialize
	        if ( console ) {
	          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
	          ': ' + error );
	        }
	        return;
	      }
	      // initialize
	      var instance = new WidgetClass( elem, options );
	      // make available via $().data('namespace')
	      if ( jQuery ) {
	        jQuery.data( elem, namespace, instance );
	      }
	    });

	  });
	};

	// -----  ----- //

	return utils;

	}));


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * matchesSelector v2.0.1
	 * matchesSelector( element, '.selector' )
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true */

	( function( window, factory ) {
	  /*global define: false, module: false */
	  'use strict';
	  // universal module definition
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.matchesSelector = factory();
	  }

	}( window, function factory() {
	  'use strict';

	  var matchesMethod = ( function() {
	    var ElemProto = Element.prototype;
	    // check for the standard method name first
	    if ( ElemProto.matches ) {
	      return 'matches';
	    }
	    // check un-prefixed
	    if ( ElemProto.matchesSelector ) {
	      return 'matchesSelector';
	    }
	    // check vendor prefixes
	    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

	    for ( var i=0; i < prefixes.length; i++ ) {
	      var prefix = prefixes[i];
	      var method = prefix + 'MatchesSelector';
	      if ( ElemProto[ method ] ) {
	        return method;
	      }
	    }
	  })();

	  return function matchesSelector( elem, selector ) {
	    return elem[ matchesMethod ]( selector );
	  };

	}));


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(73)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( getSize ) {
	      return factory( window, getSize );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('get-size')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Cell = factory(
	      window,
	      window.getSize
	    );
	  }

	}( window, function factory( window, getSize ) {

	'use strict';

	function Cell( elem, parent ) {
	  this.element = elem;
	  this.parent = parent;

	  this.create();
	}

	var proto = Cell.prototype;

	proto.create = function() {
	  this.element.style.position = 'absolute';
	  this.x = 0;
	  this.shift = 0;
	};

	proto.destroy = function() {
	  // reset style
	  this.element.style.position = '';
	  var side = this.parent.originSide;
	  this.element.style[ side ] = '';
	};

	proto.getSize = function() {
	  this.size = getSize( this.element );
	};

	proto.setPosition = function( x ) {
	  this.x = x;
	  this.updateTarget();
	  this.renderPosition( x );
	};

	// setDefaultTarget v1 method, backwards compatibility, remove in v3
	proto.updateTarget = proto.setDefaultTarget = function() {
	  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
	  this.target = this.x + this.size[ marginProperty ] +
	    this.size.width * this.parent.cellAlign;
	};

	proto.renderPosition = function( x ) {
	  // render position of cell with in slider
	  var side = this.parent.originSide;
	  this.element.style[ side ] = this.parent.getPositionValue( x );
	};

	/**
	 * @param {Integer} factor - 0, 1, or -1
	**/
	proto.wrapShift = function( shift ) {
	  this.shift = shift;
	  this.renderPosition( this.x + this.parent.slideableWidth * shift );
	};

	proto.remove = function() {
	  this.element.parentNode.removeChild( this.element );
	};

	return Cell;

	}));


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory();
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.Slide = factory();
	  }

	}( window, function factory() {
	'use strict';

	function Slide( parent ) {
	  this.parent = parent;
	  this.isOriginLeft = parent.originSide == 'left';
	  this.cells = [];
	  this.outerWidth = 0;
	  this.height = 0;
	}

	var proto = Slide.prototype;

	proto.addCell = function( cell ) {
	  this.cells.push( cell );
	  this.outerWidth += cell.size.outerWidth;
	  this.height = Math.max( cell.size.outerHeight, this.height );
	  // first cell stuff
	  if ( this.cells.length == 1 ) {
	    this.x = cell.x; // x comes from first cell
	    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
	    this.firstMargin = cell.size[ beginMargin ];
	  }
	};

	proto.updateTarget = function() {
	  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
	  var lastCell = this.getLastCell();
	  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
	  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
	  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
	};

	proto.getLastCell = function() {
	  return this.cells[ this.cells.length - 1 ];
	};

	proto.select = function() {
	  this.changeSelectedClass('add');
	};

	proto.unselect = function() {
	  this.changeSelectedClass('remove');
	};

	proto.changeSelectedClass = function( method ) {
	  this.cells.forEach( function( cell ) {
	    cell.element.classList[ method ]('is-selected');
	  });
	};

	proto.getCellElements = function() {
	  return this.cells.map( function( cell ) {
	    return cell.element;
	  });
	};

	return Slide;

	}));


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( utils ) {
	      return factory( window, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = window.Flickity || {};
	    window.Flickity.animatePrototype = factory(
	      window,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, utils ) {

	'use strict';

	// -------------------------- requestAnimationFrame -------------------------- //

	// get rAF, prefixed, if present
	var requestAnimationFrame = window.requestAnimationFrame ||
	  window.webkitRequestAnimationFrame;

	// fallback to setTimeout
	var lastTime = 0;
	if ( !requestAnimationFrame )  {
	  requestAnimationFrame = function( callback ) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
	    var id = setTimeout( callback, timeToCall );
	    lastTime = currTime + timeToCall;
	    return id;
	  };
	}

	// -------------------------- animate -------------------------- //

	var proto = {};

	proto.startAnimation = function() {
	  if ( this.isAnimating ) {
	    return;
	  }

	  this.isAnimating = true;
	  this.restingFrames = 0;
	  this.animate();
	};

	proto.animate = function() {
	  this.applyDragForce();
	  this.applySelectedAttraction();

	  var previousX = this.x;

	  this.integratePhysics();
	  this.positionSlider();
	  this.settle( previousX );
	  // animate next frame
	  if ( this.isAnimating ) {
	    var _this = this;
	    requestAnimationFrame( function animateFrame() {
	      _this.animate();
	    });
	  }
	};


	var transformProperty = ( function () {
	  var style = document.documentElement.style;
	  if ( typeof style.transform == 'string' ) {
	    return 'transform';
	  }
	  return 'WebkitTransform';
	})();

	proto.positionSlider = function() {
	  var x = this.x;
	  // wrap position around
	  if ( this.options.wrapAround && this.cells.length > 1 ) {
	    x = utils.modulo( x, this.slideableWidth );
	    x = x - this.slideableWidth;
	    this.shiftWrapCells( x );
	  }

	  x = x + this.cursorPosition;
	  // reverse if right-to-left and using transform
	  x = this.options.rightToLeft && transformProperty ? -x : x;
	  var value = this.getPositionValue( x );
	  // use 3D tranforms for hardware acceleration on iOS
	  // but use 2D when settled, for better font-rendering
	  this.slider.style[ transformProperty ] = this.isAnimating ?
	    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

	  // scroll event
	  var firstSlide = this.slides[0];
	  if ( firstSlide ) {
	    var positionX = -this.x - firstSlide.target;
	    var progress = positionX / this.slidesWidth;
	    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
	  }
	};

	proto.positionSliderAtSelected = function() {
	  if ( !this.cells.length ) {
	    return;
	  }
	  this.x = -this.selectedSlide.target;
	  this.positionSlider();
	};

	proto.getPositionValue = function( position ) {
	  if ( this.options.percentPosition ) {
	    // percent position, round to 2 digits, like 12.34%
	    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
	  } else {
	    // pixel positioning
	    return Math.round( position ) + 'px';
	  }
	};

	proto.settle = function( previousX ) {
	  // keep track of frames where x hasn't moved
	  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
	    this.restingFrames++;
	  }
	  // stop animating if resting for 3 or more frames
	  if ( this.restingFrames > 2 ) {
	    this.isAnimating = false;
	    delete this.isFreeScrolling;
	    // render position with translateX when settled
	    this.positionSlider();
	    this.dispatchEvent('settle');
	  }
	};

	proto.shiftWrapCells = function( x ) {
	  // shift before cells
	  var beforeGap = this.cursorPosition + x;
	  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
	  // shift after cells
	  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
	  this._shiftCells( this.afterShiftCells, afterGap, 1 );
	};

	proto._shiftCells = function( cells, gap, shift ) {
	  for ( var i=0; i < cells.length; i++ ) {
	    var cell = cells[i];
	    var cellShift = gap > 0 ? shift : 0;
	    cell.wrapShift( cellShift );
	    gap -= cell.size.outerWidth;
	  }
	};

	proto._unshiftCells = function( cells ) {
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  for ( var i=0; i < cells.length; i++ ) {
	    cells[i].wrapShift( 0 );
	  }
	};

	// -------------------------- physics -------------------------- //

	proto.integratePhysics = function() {
	  this.x += this.velocity;
	  this.velocity *= this.getFrictionFactor();
	};

	proto.applyForce = function( force ) {
	  this.velocity += force;
	};

	proto.getFrictionFactor = function() {
	  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
	};

	proto.getRestingPosition = function() {
	  // my thanks to Steven Wittens, who simplified this math greatly
	  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
	};

	proto.applyDragForce = function() {
	  if ( !this.isPointerDown ) {
	    return;
	  }
	  // change the position to drag position by applying force
	  var dragVelocity = this.dragX - this.x;
	  var dragForce = dragVelocity - this.velocity;
	  this.applyForce( dragForce );
	};

	proto.applySelectedAttraction = function() {
	  // do not attract if pointer down or no cells
	  if ( this.isPointerDown || this.isFreeScrolling || !this.cells.length ) {
	    return;
	  }
	  var distance = this.selectedSlide.target * -1 - this.x;
	  var force = distance * this.options.selectedAttraction;
	  this.applyForce( force );
	};

	return proto;

	}));


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(80),
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, Unidragger, utils ) {
	      return factory( window, Flickity, Unidragger, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('unidragger'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    window.Flickity = factory(
	      window,
	      window.Flickity,
	      window.Unidragger,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, Flickity, Unidragger, utils ) {

	'use strict';

	// ----- defaults ----- //

	utils.extend( Flickity.defaults, {
	  draggable: true,
	  dragThreshold: 3,
	});

	// ----- create ----- //

	Flickity.createMethods.push('_createDrag');

	// -------------------------- drag prototype -------------------------- //

	var proto = Flickity.prototype;
	utils.extend( proto, Unidragger.prototype );

	// --------------------------  -------------------------- //

	var isTouch = 'createTouch' in document;
	var isTouchmoveScrollCanceled = false;

	proto._createDrag = function() {
	  this.on( 'activate', this.bindDrag );
	  this.on( 'uiChange', this._uiChangeDrag );
	  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
	  this.on( 'deactivate', this.unbindDrag );
	  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
	  // #457, RubaXa/Sortable#973
	  if ( isTouch && !isTouchmoveScrollCanceled ) {
	    window.addEventListener( 'touchmove', function() {});
	    isTouchmoveScrollCanceled = true;
	  }
	};

	proto.bindDrag = function() {
	  if ( !this.options.draggable || this.isDragBound ) {
	    return;
	  }
	  this.element.classList.add('is-draggable');
	  this.handles = [ this.viewport ];
	  this.bindHandles();
	  this.isDragBound = true;
	};

	proto.unbindDrag = function() {
	  if ( !this.isDragBound ) {
	    return;
	  }
	  this.element.classList.remove('is-draggable');
	  this.unbindHandles();
	  delete this.isDragBound;
	};

	proto._uiChangeDrag = function() {
	  delete this.isFreeScrolling;
	};

	proto._childUIPointerDownDrag = function( event ) {
	  event.preventDefault();
	  this.pointerDownFocus( event );
	};

	// -------------------------- pointer events -------------------------- //

	// nodes that have text fields
	var cursorNodes = {
	  TEXTAREA: true,
	  INPUT: true,
	  OPTION: true,
	};

	// input types that do not have text fields
	var clickTypes = {
	  radio: true,
	  checkbox: true,
	  button: true,
	  submit: true,
	  image: true,
	  file: true,
	};

	proto.pointerDown = function( event, pointer ) {
	  // dismiss inputs with text fields. #403, #404
	  var isCursorInput = cursorNodes[ event.target.nodeName ] &&
	    !clickTypes[ event.target.type ];
	  if ( isCursorInput ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }

	  this._dragPointerDown( event, pointer );

	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur && focused != this.element &&
	    // do not blur body for IE9 & 10, #117
	    focused != document.body ) {
	    focused.blur();
	  }
	  this.pointerDownFocus( event );
	  // stop if it was moving
	  this.dragX = this.x;
	  this.viewport.classList.add('is-pointer-down');
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  // track scrolling
	  this.pointerDownScroll = getScrollPosition();
	  window.addEventListener( 'scroll', this );

	  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
	};

	var touchStartEvents = {
	  touchstart: true,
	  MSPointerDown: true
	};

	var focusNodes = {
	  INPUT: true,
	  SELECT: true
	};

	proto.pointerDownFocus = function( event ) {
	  // focus element, if not touch, and its not an input or select
	  if ( !this.options.accessibility || touchStartEvents[ event.type ] ||
	      focusNodes[ event.target.nodeName ] ) {
	    return;
	  }
	  var prevScrollY = window.pageYOffset;
	  this.element.focus();
	  // hack to fix scroll jump after focus, #76
	  if ( window.pageYOffset != prevScrollY ) {
	    window.scrollTo( window.pageXOffset, prevScrollY );
	  }
	};

	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  var isTouchstart = event.type == 'touchstart';
	  var targetNodeName = event.target.nodeName;
	  return !isTouchstart && targetNodeName != 'SELECT';
	};

	// ----- move ----- //

	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > this.options.dragThreshold;
	};

	// ----- up ----- //

	proto.pointerUp = function( event, pointer ) {
	  delete this.isTouchScrolling;
	  this.viewport.classList.remove('is-pointer-down');
	  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
	  this._dragPointerUp( event, pointer );
	};

	proto.pointerDone = function() {
	  window.removeEventListener( 'scroll', this );
	  delete this.pointerDownScroll;
	};

	// -------------------------- dragging -------------------------- //

	proto.dragStart = function( event, pointer ) {
	  this.dragStartPosition = this.x;
	  this.startAnimation();
	  window.removeEventListener( 'scroll', this );
	  this.dispatchEvent( 'dragStart', event, [ pointer ] );
	};

	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};

	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();

	  this.previousDragX = this.dragX;
	  // reverse if right-to-left
	  var direction = this.options.rightToLeft ? -1 : 1;
	  var dragX = this.dragStartPosition + moveVector.x * direction;

	  if ( !this.options.wrapAround && this.slides.length ) {
	    // slow drag
	    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
	    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
	    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
	    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
	  }

	  this.dragX = dragX;

	  this.dragMoveTime = new Date();
	  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
	};

	proto.dragEnd = function( event, pointer ) {
	  if ( this.options.freeScroll ) {
	    this.isFreeScrolling = true;
	  }
	  // set selectedIndex based on where flick will end up
	  var index = this.dragEndRestingSelect();

	  if ( this.options.freeScroll && !this.options.wrapAround ) {
	    // if free-scroll & not wrap around
	    // do not free-scroll if going outside of bounding slides
	    // so bounding slides can attract slider, and keep it in bounds
	    var restingX = this.getRestingPosition();
	    this.isFreeScrolling = -restingX > this.slides[0].target &&
	      -restingX < this.getLastSlide().target;
	  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
	    // boost selection if selected index has not changed
	    index += this.dragEndBoostSelect();
	  }
	  delete this.previousDragX;
	  // apply selection
	  // TODO refactor this, selecting here feels weird
	  // HACK, set flag so dragging stays in correct direction
	  this.isDragSelect = this.options.wrapAround;
	  this.select( index );
	  delete this.isDragSelect;
	  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
	};

	proto.dragEndRestingSelect = function() {
	  var restingX = this.getRestingPosition();
	  // how far away from selected slide
	  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
	  // get closet resting going up and going down
	  var positiveResting = this._getClosestResting( restingX, distance, 1 );
	  var negativeResting = this._getClosestResting( restingX, distance, -1 );
	  // use closer resting for wrap-around
	  var index = positiveResting.distance < negativeResting.distance ?
	    positiveResting.index : negativeResting.index;
	  return index;
	};

	/**
	 * given resting X and distance to selected cell
	 * get the distance and index of the closest cell
	 * @param {Number} restingX - estimated post-flick resting position
	 * @param {Number} distance - distance to selected cell
	 * @param {Integer} increment - +1 or -1, going up or down
	 * @returns {Object} - { distance: {Number}, index: {Integer} }
	 */
	proto._getClosestResting = function( restingX, distance, increment ) {
	  var index = this.selectedIndex;
	  var minDistance = Infinity;
	  var condition = this.options.contain && !this.options.wrapAround ?
	    // if contain, keep going if distance is equal to minDistance
	    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
	  while ( condition( distance, minDistance ) ) {
	    // measure distance to next cell
	    index += increment;
	    minDistance = distance;
	    distance = this.getSlideDistance( -restingX, index );
	    if ( distance === null ) {
	      break;
	    }
	    distance = Math.abs( distance );
	  }
	  return {
	    distance: minDistance,
	    // selected was previous index
	    index: index - increment
	  };
	};

	/**
	 * measure distance between x and a slide target
	 * @param {Number} x
	 * @param {Integer} index - slide index
	 */
	proto.getSlideDistance = function( x, index ) {
	  var len = this.slides.length;
	  // wrap around if at least 2 slides
	  var isWrapAround = this.options.wrapAround && len > 1;
	  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
	  var slide = this.slides[ slideIndex ];
	  if ( !slide ) {
	    return null;
	  }
	  // add distance for wrap-around slides
	  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
	  return x - ( slide.target + wrap );
	};

	proto.dragEndBoostSelect = function() {
	  // do not boost if no previousDragX or dragMoveTime
	  if ( this.previousDragX === undefined || !this.dragMoveTime ||
	    // or if drag was held for 100 ms
	    new Date() - this.dragMoveTime > 100 ) {
	    return 0;
	  }

	  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
	  var delta = this.previousDragX - this.dragX;
	  if ( distance > 0 && delta > 0 ) {
	    // boost to next if moving towards the right, and positive velocity
	    return 1;
	  } else if ( distance < 0 && delta < 0 ) {
	    // boost to previous if moving towards the left, and negative velocity
	    return -1;
	  }
	  return 0;
	};

	// ----- staticClick ----- //

	proto.staticClick = function( event, pointer ) {
	  // get clickedCell, if cell was clicked
	  var clickedCell = this.getParentCell( event.target );
	  var cellElem = clickedCell && clickedCell.element;
	  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
	  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
	};

	// ----- scroll ----- //

	proto.onscroll = function() {
	  var scroll = getScrollPosition();
	  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
	  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
	  // cancel click/tap if scroll is too much
	  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
	    this._pointerDone();
	  }
	};

	// ----- utils ----- //

	function getScrollPosition() {
	  return {
	    x: window.pageXOffset,
	    y: window.pageYOffset
	  };
	}

	// -----  ----- //

	return Flickity;

	}));


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unidragger v2.1.0
	 * Draggable base class
	 * MIT license
	 */

	/*jshint browser: true, unused: true, undef: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false */ /*globals define, module, require */

	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(81)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.Unidragger = factory(
	      window,
	      window.Unipointer
	    );
	  }

	}( window, function factory( window, Unipointer ) {

	'use strict';

	// -----  ----- //

	function noop() {}

	// -------------------------- Unidragger -------------------------- //

	function Unidragger() {}

	// inherit Unipointer & EvEmitter
	var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

	// ----- bind start ----- //

	proto.bindHandles = function() {
	  this._bindHandles( true );
	};

	proto.unbindHandles = function() {
	  this._bindHandles( false );
	};

	var navigator = window.navigator;
	/**
	 * works as unbinder, as you can .bindHandles( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindHandles = function( isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  // extra bind logic
	  var binderExtra;
	  if ( navigator.pointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.touchAction = isBind ? 'none' : '';
	    };
	  } else if ( navigator.msPointerEnabled ) {
	    binderExtra = function( handle ) {
	      // disable scrolling on the element
	      handle.style.msTouchAction = isBind ? 'none' : '';
	    };
	  } else {
	    binderExtra = noop;
	  }
	  // bind each handle
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
	  for ( var i=0; i < this.handles.length; i++ ) {
	    var handle = this.handles[i];
	    this._bindStartEvent( handle, isBind );
	    binderExtra( handle );
	    handle[ bindMethod ]( 'click', this );
	  }
	};

	// ----- start event ----- //

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerDown = function( event, pointer ) {
	  // dismiss range sliders
	  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
	    // reset pointerDown logic
	    this.isPointerDown = false;
	    delete this.pointerIdentifier;
	    return;
	  }

	  this._dragPointerDown( event, pointer );
	  // kludge to blur focused inputs in dragger
	  var focused = document.activeElement;
	  if ( focused && focused.blur ) {
	    focused.blur();
	  }
	  // bind move and end events
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

	// base pointer down logic
	proto._dragPointerDown = function( event, pointer ) {
	  // track to see when dragging starts
	  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );

	  var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
	  if ( canPreventDefault ) {
	    event.preventDefault();
	  }
	};

	// overwriteable method so Flickity can prevent for scrolling
	proto.canPreventDefaultOnPointerDown = function( event ) {
	  // prevent default, unless touchstart or <select>
	  return event.target.nodeName != 'SELECT';
	};

	// ----- move event ----- //

	/**
	 * drag move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerMove = function( event, pointer ) {
	  var moveVector = this._dragPointerMove( event, pointer );
	  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
	  this._dragMove( event, pointer, moveVector );
	};

	// base pointer move logic
	proto._dragPointerMove = function( event, pointer ) {
	  var movePoint = Unipointer.getPointerPoint( pointer );
	  var moveVector = {
	    x: movePoint.x - this.pointerDownPoint.x,
	    y: movePoint.y - this.pointerDownPoint.y
	  };
	  // start drag if pointer has moved far enough to start drag
	  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
	    this._dragStart( event, pointer );
	  }
	  return moveVector;
	};

	// condition if pointer has moved far enough to start drag
	proto.hasDragStarted = function( moveVector ) {
	  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
	};


	// ----- end event ----- //

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	  this._dragPointerUp( event, pointer );
	};

	proto._dragPointerUp = function( event, pointer ) {
	  if ( this.isDragging ) {
	    this._dragEnd( event, pointer );
	  } else {
	    // pointer didn't move enough for drag to start
	    this._staticClick( event, pointer );
	  }
	};

	// -------------------------- drag -------------------------- //

	// dragStart
	proto._dragStart = function( event, pointer ) {
	  this.isDragging = true;
	  this.dragStartPoint = Unipointer.getPointerPoint( pointer );
	  // prevent clicks
	  this.isPreventingClicks = true;

	  this.dragStart( event, pointer );
	};

	proto.dragStart = function( event, pointer ) {
	  this.emitEvent( 'dragStart', [ event, pointer ] );
	};

	// dragMove
	proto._dragMove = function( event, pointer, moveVector ) {
	  // do not drag if not dragging yet
	  if ( !this.isDragging ) {
	    return;
	  }

	  this.dragMove( event, pointer, moveVector );
	};

	proto.dragMove = function( event, pointer, moveVector ) {
	  event.preventDefault();
	  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
	};

	// dragEnd
	proto._dragEnd = function( event, pointer ) {
	  // set flags
	  this.isDragging = false;
	  // re-enable clicking async
	  setTimeout( function() {
	    delete this.isPreventingClicks;
	  }.bind( this ) );

	  this.dragEnd( event, pointer );
	};

	proto.dragEnd = function( event, pointer ) {
	  this.emitEvent( 'dragEnd', [ event, pointer ] );
	};

	// ----- onclick ----- //

	// handle all clicks and prevent clicks when dragging
	proto.onclick = function( event ) {
	  if ( this.isPreventingClicks ) {
	    event.preventDefault();
	  }
	};

	// ----- staticClick ----- //

	// triggered after pointer down & up with no/tiny movement
	proto._staticClick = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }

	  // allow click in <input>s and <textarea>s
	  var nodeName = event.target.nodeName;
	  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
	    event.target.focus();
	  }
	  this.staticClick( event, pointer );

	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    setTimeout( function() {
	      delete this.isIgnoringMouseUp;
	    }.bind( this ), 400 );
	  }
	};

	proto.staticClick = function( event, pointer ) {
	  this.emitEvent( 'staticClick', [ event, pointer ] );
	};

	// ----- utils ----- //

	Unidragger.getPointerPoint = Unipointer.getPointerPoint;

	// -----  ----- //

	return Unidragger;

	}));


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Unipointer v2.1.0
	 * base class for doing one thing with pointer event
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */ /*global define, module, require */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(72)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
	      return factory( window, EvEmitter );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('ev-emitter')
	    );
	  } else {
	    // browser global
	    window.Unipointer = factory(
	      window,
	      window.EvEmitter
	    );
	  }

	}( window, function factory( window, EvEmitter ) {

	'use strict';

	function noop() {}

	function Unipointer() {}

	// inherit EvEmitter
	var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

	proto.bindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, true );
	};

	proto.unbindStartEvent = function( elem ) {
	  this._bindStartEvent( elem, false );
	};

	/**
	 * works as unbinder, as you can ._bindStart( false ) to unbind
	 * @param {Boolean} isBind - will unbind if falsey
	 */
	proto._bindStartEvent = function( elem, isBind ) {
	  // munge isBind, default to true
	  isBind = isBind === undefined ? true : !!isBind;
	  var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

	  if ( window.navigator.pointerEnabled ) {
	    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
	    elem[ bindMethod ]( 'pointerdown', this );
	  } else if ( window.navigator.msPointerEnabled ) {
	    // IE10 Pointer Events
	    elem[ bindMethod ]( 'MSPointerDown', this );
	  } else {
	    // listen for both, for devices like Chrome Pixel
	    elem[ bindMethod ]( 'mousedown', this );
	    elem[ bindMethod ]( 'touchstart', this );
	  }
	};

	// trigger handler methods for events
	proto.handleEvent = function( event ) {
	  var method = 'on' + event.type;
	  if ( this[ method ] ) {
	    this[ method ]( event );
	  }
	};

	// returns the touch that we're keeping track of
	proto.getTouch = function( touches ) {
	  for ( var i=0; i < touches.length; i++ ) {
	    var touch = touches[i];
	    if ( touch.identifier == this.pointerIdentifier ) {
	      return touch;
	    }
	  }
	};

	// ----- start event ----- //

	proto.onmousedown = function( event ) {
	  // dismiss clicks from right or middle buttons
	  var button = event.button;
	  if ( button && ( button !== 0 && button !== 1 ) ) {
	    return;
	  }
	  this._pointerDown( event, event );
	};

	proto.ontouchstart = function( event ) {
	  this._pointerDown( event, event.changedTouches[0] );
	};

	proto.onMSPointerDown =
	proto.onpointerdown = function( event ) {
	  this._pointerDown( event, event );
	};

	/**
	 * pointer start
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto._pointerDown = function( event, pointer ) {
	  // dismiss other pointers
	  if ( this.isPointerDown ) {
	    return;
	  }

	  this.isPointerDown = true;
	  // save pointer identifier to match up touch events
	  this.pointerIdentifier = pointer.pointerId !== undefined ?
	    // pointerId for pointer events, touch.indentifier for touch events
	    pointer.pointerId : pointer.identifier;

	  this.pointerDown( event, pointer );
	};

	proto.pointerDown = function( event, pointer ) {
	  this._bindPostStartEvents( event );
	  this.emitEvent( 'pointerDown', [ event, pointer ] );
	};

	// hash of events to be bound after start event
	var postStartEvents = {
	  mousedown: [ 'mousemove', 'mouseup' ],
	  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
	  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
	  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
	};

	proto._bindPostStartEvents = function( event ) {
	  if ( !event ) {
	    return;
	  }
	  // get proper events to match start event
	  var events = postStartEvents[ event.type ];
	  // bind events to node
	  events.forEach( function( eventName ) {
	    window.addEventListener( eventName, this );
	  }, this );
	  // save these arguments
	  this._boundPointerEvents = events;
	};

	proto._unbindPostStartEvents = function() {
	  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
	  if ( !this._boundPointerEvents ) {
	    return;
	  }
	  this._boundPointerEvents.forEach( function( eventName ) {
	    window.removeEventListener( eventName, this );
	  }, this );

	  delete this._boundPointerEvents;
	};

	// ----- move event ----- //

	proto.onmousemove = function( event ) {
	  this._pointerMove( event, event );
	};

	proto.onMSPointerMove =
	proto.onpointermove = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerMove( event, event );
	  }
	};

	proto.ontouchmove = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerMove( event, touch );
	  }
	};

	/**
	 * pointer move
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerMove = function( event, pointer ) {
	  this.pointerMove( event, pointer );
	};

	// public
	proto.pointerMove = function( event, pointer ) {
	  this.emitEvent( 'pointerMove', [ event, pointer ] );
	};

	// ----- end event ----- //


	proto.onmouseup = function( event ) {
	  this._pointerUp( event, event );
	};

	proto.onMSPointerUp =
	proto.onpointerup = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerUp( event, event );
	  }
	};

	proto.ontouchend = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerUp( event, touch );
	  }
	};

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerUp = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerUp( event, pointer );
	};

	// public
	proto.pointerUp = function( event, pointer ) {
	  this.emitEvent( 'pointerUp', [ event, pointer ] );
	};

	// ----- pointer done ----- //

	// triggered on pointer up & pointer cancel
	proto._pointerDone = function() {
	  // reset properties
	  this.isPointerDown = false;
	  delete this.pointerIdentifier;
	  // remove events
	  this._unbindPostStartEvents();
	  this.pointerDone();
	};

	proto.pointerDone = noop;

	// ----- pointer cancel ----- //

	proto.onMSPointerCancel =
	proto.onpointercancel = function( event ) {
	  if ( event.pointerId == this.pointerIdentifier ) {
	    this._pointerCancel( event, event );
	  }
	};

	proto.ontouchcancel = function( event ) {
	  var touch = this.getTouch( event.changedTouches );
	  if ( touch ) {
	    this._pointerCancel( event, touch );
	  }
	};

	/**
	 * pointer cancel
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 * @private
	 */
	proto._pointerCancel = function( event, pointer ) {
	  this._pointerDone();
	  this.pointerCancel( event, pointer );
	};

	// public
	proto.pointerCancel = function( event, pointer ) {
	  this.emitEvent( 'pointerCancel', [ event, pointer ] );
	};

	// -----  ----- //

	// utility function for getting x/y coords from event
	Unipointer.getPointerPoint = function( pointer ) {
	  return {
	    x: pointer.pageX,
	    y: pointer.pageY
	  };
	};

	// -----  ----- //

	return Unipointer;

	}));


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(83),
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, Flickity, TapListener, utils ) {
	'use strict';

	var svgURI = 'http://www.w3.org/2000/svg';

	// -------------------------- PrevNextButton -------------------------- //

	function PrevNextButton( direction, parent ) {
	  this.direction = direction;
	  this.parent = parent;
	  this._create();
	}

	PrevNextButton.prototype = new TapListener();

	PrevNextButton.prototype._create = function() {
	  // properties
	  this.isEnabled = true;
	  this.isPrevious = this.direction == -1;
	  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
	  this.isLeft = this.direction == leftDirection;

	  var element = this.element = document.createElement('button');
	  element.className = 'flickity-prev-next-button';
	  element.className += this.isPrevious ? ' previous' : ' next';
	  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
	  element.setAttribute( 'type', 'button' );
	  // init as disabled
	  this.disable();

	  element.setAttribute( 'aria-label', this.isPrevious ? 'previous' : 'next' );

	  // create arrow
	  var svg = this.createSVG();
	  element.appendChild( svg );
	  // events
	  this.on( 'tap', this.onTap );
	  this.parent.on( 'select', this.update.bind( this ) );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};

	PrevNextButton.prototype.activate = function() {
	  this.bindTap( this.element );
	  // click events from keyboard
	  this.element.addEventListener( 'click', this );
	  // add to DOM
	  this.parent.element.appendChild( this.element );
	};

	PrevNextButton.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.element );
	  // do regular TapListener destroy
	  TapListener.prototype.destroy.call( this );
	  // click events from keyboard
	  this.element.removeEventListener( 'click', this );
	};

	PrevNextButton.prototype.createSVG = function() {
	  var svg = document.createElementNS( svgURI, 'svg');
	  svg.setAttribute( 'viewBox', '0 0 100 100' );
	  var path = document.createElementNS( svgURI, 'path');
	  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
	  path.setAttribute( 'd', pathMovements );
	  path.setAttribute( 'class', 'arrow' );
	  // rotate arrow
	  if ( !this.isLeft ) {
	    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
	  }
	  svg.appendChild( path );
	  return svg;
	};

	// get SVG path movmement
	function getArrowMovements( shape ) {
	  // use shape as movement if string
	  if ( typeof shape == 'string' ) {
	    return shape;
	  }
	  // create movement string
	  return 'M ' + shape.x0 + ',50' +
	    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
	    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
	    ' L ' + shape.x3 + ',50 ' +
	    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
	    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
	    ' Z';
	}

	PrevNextButton.prototype.onTap = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.parent.uiChange();
	  var method = this.isPrevious ? 'previous' : 'next';
	  this.parent[ method ]();
	};

	PrevNextButton.prototype.handleEvent = utils.handleEvent;

	PrevNextButton.prototype.onclick = function() {
	  // only allow clicks from keyboard
	  var focused = document.activeElement;
	  if ( focused && focused == this.element ) {
	    this.onTap();
	  }
	};

	// -----  ----- //

	PrevNextButton.prototype.enable = function() {
	  if ( this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = false;
	  this.isEnabled = true;
	};

	PrevNextButton.prototype.disable = function() {
	  if ( !this.isEnabled ) {
	    return;
	  }
	  this.element.disabled = true;
	  this.isEnabled = false;
	};

	PrevNextButton.prototype.update = function() {
	  // index of first or last slide, if previous or next
	  var slides = this.parent.slides;
	  // enable is wrapAround and at least 2 slides
	  if ( this.parent.options.wrapAround && slides.length > 1 ) {
	    this.enable();
	    return;
	  }
	  var lastIndex = slides.length ? slides.length - 1 : 0;
	  var boundIndex = this.isPrevious ? 0 : lastIndex;
	  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
	  this[ method ]();
	};

	PrevNextButton.prototype.destroy = function() {
	  this.deactivate();
	};

	// -------------------------- Flickity prototype -------------------------- //

	utils.extend( Flickity.defaults, {
	  prevNextButtons: true,
	  arrowShape: {
	    x0: 10,
	    x1: 60, y1: 50,
	    x2: 70, y2: 40,
	    x3: 30
	  }
	});

	Flickity.createMethods.push('_createPrevNextButtons');
	var proto = Flickity.prototype;

	proto._createPrevNextButtons = function() {
	  if ( !this.options.prevNextButtons ) {
	    return;
	  }

	  this.prevButton = new PrevNextButton( -1, this );
	  this.nextButton = new PrevNextButton( 1, this );

	  this.on( 'activate', this.activatePrevNextButtons );
	};

	proto.activatePrevNextButtons = function() {
	  this.prevButton.activate();
	  this.nextButton.activate();
	  this.on( 'deactivate', this.deactivatePrevNextButtons );
	};

	proto.deactivatePrevNextButtons = function() {
	  this.prevButton.deactivate();
	  this.nextButton.deactivate();
	  this.off( 'deactivate', this.deactivatePrevNextButtons );
	};

	// --------------------------  -------------------------- //

	Flickity.PrevNextButton = PrevNextButton;

	return Flickity;

	}));


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Tap listener v2.0.0
	 * listens to taps
	 * MIT license
	 */

	/*jshint browser: true, unused: true, undef: true, strict: true */

	( function( window, factory ) {
	  // universal module definition
	  /*jshint strict: false*/ /*globals define, module, require */

	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(81)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Unipointer ) {
	      return factory( window, Unipointer );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('unipointer')
	    );
	  } else {
	    // browser global
	    window.TapListener = factory(
	      window,
	      window.Unipointer
	    );
	  }

	}( window, function factory( window, Unipointer ) {

	'use strict';

	// --------------------------  TapListener -------------------------- //

	function TapListener( elem ) {
	  this.bindTap( elem );
	}

	// inherit Unipointer & EventEmitter
	var proto = TapListener.prototype = Object.create( Unipointer.prototype );

	/**
	 * bind tap event to element
	 * @param {Element} elem
	 */
	proto.bindTap = function( elem ) {
	  if ( !elem ) {
	    return;
	  }
	  this.unbindTap();
	  this.tapElement = elem;
	  this._bindStartEvent( elem, true );
	};

	proto.unbindTap = function() {
	  if ( !this.tapElement ) {
	    return;
	  }
	  this._bindStartEvent( this.tapElement, true );
	  delete this.tapElement;
	};

	/**
	 * pointer up
	 * @param {Event} event
	 * @param {Event or Touch} pointer
	 */
	proto.pointerUp = function( event, pointer ) {
	  // ignore emulated mouse up clicks
	  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
	    return;
	  }

	  var pointerPoint = Unipointer.getPointerPoint( pointer );
	  var boundingRect = this.tapElement.getBoundingClientRect();
	  var scrollX = window.pageXOffset;
	  var scrollY = window.pageYOffset;
	  // calculate if pointer is inside tapElement
	  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
	    pointerPoint.x <= boundingRect.right + scrollX &&
	    pointerPoint.y >= boundingRect.top + scrollY &&
	    pointerPoint.y <= boundingRect.bottom + scrollY;
	  // trigger callback if pointer is inside element
	  if ( isInside ) {
	    this.emitEvent( 'tap', [ event, pointer ] );
	  }

	  // set flag for emulated clicks 300ms after touchend
	  if ( event.type != 'mouseup' ) {
	    this.isIgnoringMouseUp = true;
	    // reset flag after 300ms
	    var _this = this;
	    setTimeout( function() {
	      delete _this.isIgnoringMouseUp;
	    }, 400 );
	  }
	};

	proto.destroy = function() {
	  this.pointerDone();
	  this.unbindTap();
	};

	// -----  ----- //

	return TapListener;

	}));


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(83),
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, TapListener, utils ) {
	      return factory( window, Flickity, TapListener, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('tap-listener'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.TapListener,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, Flickity, TapListener, utils ) {

	// -------------------------- PageDots -------------------------- //

	'use strict';

	function PageDots( parent ) {
	  this.parent = parent;
	  this._create();
	}

	PageDots.prototype = new TapListener();

	PageDots.prototype._create = function() {
	  // create holder element
	  this.holder = document.createElement('ol');
	  this.holder.className = 'flickity-page-dots';
	  // create dots, array of elements
	  this.dots = [];
	  // events
	  this.on( 'tap', this.onTap );
	  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
	};

	PageDots.prototype.activate = function() {
	  this.setDots();
	  this.bindTap( this.holder );
	  // add to DOM
	  this.parent.element.appendChild( this.holder );
	};

	PageDots.prototype.deactivate = function() {
	  // remove from DOM
	  this.parent.element.removeChild( this.holder );
	  TapListener.prototype.destroy.call( this );
	};

	PageDots.prototype.setDots = function() {
	  // get difference between number of slides and number of dots
	  var delta = this.parent.slides.length - this.dots.length;
	  if ( delta > 0 ) {
	    this.addDots( delta );
	  } else if ( delta < 0 ) {
	    this.removeDots( -delta );
	  }
	};

	PageDots.prototype.addDots = function( count ) {
	  var fragment = document.createDocumentFragment();
	  var newDots = [];
	  while ( count ) {
	    var dot = document.createElement('li');
	    dot.className = 'dot';
	    fragment.appendChild( dot );
	    newDots.push( dot );
	    count--;
	  }
	  this.holder.appendChild( fragment );
	  this.dots = this.dots.concat( newDots );
	};

	PageDots.prototype.removeDots = function( count ) {
	  // remove from this.dots collection
	  var removeDots = this.dots.splice( this.dots.length - count, count );
	  // remove from DOM
	  removeDots.forEach( function( dot ) {
	    this.holder.removeChild( dot );
	  }, this );
	};

	PageDots.prototype.updateSelected = function() {
	  // remove selected class on previous
	  if ( this.selectedDot ) {
	    this.selectedDot.className = 'dot';
	  }
	  // don't proceed if no dots
	  if ( !this.dots.length ) {
	    return;
	  }
	  this.selectedDot = this.dots[ this.parent.selectedIndex ];
	  this.selectedDot.className = 'dot is-selected';
	};

	PageDots.prototype.onTap = function( event ) {
	  var target = event.target;
	  // only care about dot clicks
	  if ( target.nodeName != 'LI' ) {
	    return;
	  }

	  this.parent.uiChange();
	  var index = this.dots.indexOf( target );
	  this.parent.select( index );
	};

	PageDots.prototype.destroy = function() {
	  this.deactivate();
	};

	Flickity.PageDots = PageDots;

	// -------------------------- Flickity -------------------------- //

	utils.extend( Flickity.defaults, {
	  pageDots: true
	});

	Flickity.createMethods.push('_createPageDots');

	var proto = Flickity.prototype;

	proto._createPageDots = function() {
	  if ( !this.options.pageDots ) {
	    return;
	  }
	  this.pageDots = new PageDots( this );
	  // events
	  this.on( 'activate', this.activatePageDots );
	  this.on( 'select', this.updateSelectedPageDots );
	  this.on( 'cellChange', this.updatePageDots );
	  this.on( 'resize', this.updatePageDots );
	  this.on( 'deactivate', this.deactivatePageDots );
	};

	proto.activatePageDots = function() {
	  this.pageDots.activate();
	};

	proto.updateSelectedPageDots = function() {
	  this.pageDots.updateSelected();
	};

	proto.updatePageDots = function() {
	  this.pageDots.setDots();
	};

	proto.deactivatePageDots = function() {
	  this.pageDots.deactivate();
	};

	// -----  ----- //

	Flickity.PageDots = PageDots;

	return Flickity;

	}));


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(72),
	      __webpack_require__(74),
	      __webpack_require__(71)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, utils, Flickity ) {
	      return factory( EvEmitter, utils, Flickity );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      require('ev-emitter'),
	      require('fizzy-ui-utils'),
	      require('./flickity')
	    );
	  } else {
	    // browser global
	    factory(
	      window.EvEmitter,
	      window.fizzyUIUtils,
	      window.Flickity
	    );
	  }

	}( window, function factory( EvEmitter, utils, Flickity ) {

	'use strict';

	// -------------------------- Page Visibility -------------------------- //
	// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

	var hiddenProperty, visibilityEvent;
	if ( 'hidden' in document ) {
	  hiddenProperty = 'hidden';
	  visibilityEvent = 'visibilitychange';
	} else if ( 'webkitHidden' in document ) {
	  hiddenProperty = 'webkitHidden';
	  visibilityEvent = 'webkitvisibilitychange';
	}

	// -------------------------- Player -------------------------- //

	function Player( parent ) {
	  this.parent = parent;
	  this.state = 'stopped';
	  // visibility change event handler
	  if ( visibilityEvent ) {
	    this.onVisibilityChange = function() {
	      this.visibilityChange();
	    }.bind( this );
	    this.onVisibilityPlay = function() {
	      this.visibilityPlay();
	    }.bind( this );
	  }
	}

	Player.prototype = Object.create( EvEmitter.prototype );

	// start play
	Player.prototype.play = function() {
	  if ( this.state == 'playing' ) {
	    return;
	  }
	  // do not play if page is hidden, start playing when page is visible
	  var isPageHidden = document[ hiddenProperty ];
	  if ( visibilityEvent && isPageHidden ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityPlay );
	    return;
	  }

	  this.state = 'playing';
	  // listen to visibility change
	  if ( visibilityEvent ) {
	    document.addEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	  // start ticking
	  this.tick();
	};

	Player.prototype.tick = function() {
	  // do not tick if not playing
	  if ( this.state != 'playing' ) {
	    return;
	  }

	  var time = this.parent.options.autoPlay;
	  // default to 3 seconds
	  time = typeof time == 'number' ? time : 3000;
	  var _this = this;
	  // HACK: reset ticks if stopped and started within interval
	  this.clear();
	  this.timeout = setTimeout( function() {
	    _this.parent.next( true );
	    _this.tick();
	  }, time );
	};

	Player.prototype.stop = function() {
	  this.state = 'stopped';
	  this.clear();
	  // remove visibility change event
	  if ( visibilityEvent ) {
	    document.removeEventListener( visibilityEvent, this.onVisibilityChange );
	  }
	};

	Player.prototype.clear = function() {
	  clearTimeout( this.timeout );
	};

	Player.prototype.pause = function() {
	  if ( this.state == 'playing' ) {
	    this.state = 'paused';
	    this.clear();
	  }
	};

	Player.prototype.unpause = function() {
	  // re-start play if paused
	  if ( this.state == 'paused' ) {
	    this.play();
	  }
	};

	// pause if page visibility is hidden, unpause if visible
	Player.prototype.visibilityChange = function() {
	  var isPageHidden = document[ hiddenProperty ];
	  this[ isPageHidden ? 'pause' : 'unpause' ]();
	};

	Player.prototype.visibilityPlay = function() {
	  this.play();
	  document.removeEventListener( visibilityEvent, this.onVisibilityPlay );
	};

	// -------------------------- Flickity -------------------------- //

	utils.extend( Flickity.defaults, {
	  pauseAutoPlayOnHover: true
	});

	Flickity.createMethods.push('_createPlayer');
	var proto = Flickity.prototype;

	proto._createPlayer = function() {
	  this.player = new Player( this );

	  this.on( 'activate', this.activatePlayer );
	  this.on( 'uiChange', this.stopPlayer );
	  this.on( 'pointerDown', this.stopPlayer );
	  this.on( 'deactivate', this.deactivatePlayer );
	};

	proto.activatePlayer = function() {
	  if ( !this.options.autoPlay ) {
	    return;
	  }
	  this.player.play();
	  this.element.addEventListener( 'mouseenter', this );
	};

	// Player API, don't hate the ... thanks I know where the door is

	proto.playPlayer = function() {
	  this.player.play();
	};

	proto.stopPlayer = function() {
	  this.player.stop();
	};

	proto.pausePlayer = function() {
	  this.player.pause();
	};

	proto.unpausePlayer = function() {
	  this.player.unpause();
	};

	proto.deactivatePlayer = function() {
	  this.player.stop();
	  this.element.removeEventListener( 'mouseenter', this );
	};

	// ----- mouseenter/leave ----- //

	// pause auto-play on hover
	proto.onmouseenter = function() {
	  if ( !this.options.pauseAutoPlayOnHover ) {
	    return;
	  }
	  this.player.pause();
	  this.element.addEventListener( 'mouseleave', this );
	};

	// resume auto-play on hover off
	proto.onmouseleave = function() {
	  this.player.unpause();
	  this.element.removeEventListener( 'mouseleave', this );
	};

	// -----  ----- //

	Flickity.Player = Player;

	return Flickity;

	}));


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, Flickity, utils ) {

	'use strict';

	// append cells to a document fragment
	function getCellsFragment( cells ) {
	  var fragment = document.createDocumentFragment();
	  cells.forEach( function( cell ) {
	    fragment.appendChild( cell.element );
	  });
	  return fragment;
	}

	// -------------------------- add/remove cell prototype -------------------------- //

	var proto = Flickity.prototype;

	/**
	 * Insert, prepend, or append cells
	 * @param {Element, Array, NodeList} elems
	 * @param {Integer} index
	 */
	proto.insert = function( elems, index ) {
	  var cells = this._makeCells( elems );
	  if ( !cells || !cells.length ) {
	    return;
	  }
	  var len = this.cells.length;
	  // default to append
	  index = index === undefined ? len : index;
	  // add cells with document fragment
	  var fragment = getCellsFragment( cells );
	  // append to slider
	  var isAppend = index == len;
	  if ( isAppend ) {
	    this.slider.appendChild( fragment );
	  } else {
	    var insertCellElement = this.cells[ index ].element;
	    this.slider.insertBefore( fragment, insertCellElement );
	  }
	  // add to this.cells
	  if ( index === 0 ) {
	    // prepend, add to start
	    this.cells = cells.concat( this.cells );
	  } else if ( isAppend ) {
	    // append, add to end
	    this.cells = this.cells.concat( cells );
	  } else {
	    // insert in this.cells
	    var endCells = this.cells.splice( index, len - index );
	    this.cells = this.cells.concat( cells ).concat( endCells );
	  }

	  this._sizeCells( cells );

	  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
	  this._cellAddedRemoved( index, selectedIndexDelta );
	};

	proto.append = function( elems ) {
	  this.insert( elems, this.cells.length );
	};

	proto.prepend = function( elems ) {
	  this.insert( elems, 0 );
	};

	/**
	 * Remove cells
	 * @param {Element, Array, NodeList} elems
	 */
	proto.remove = function( elems ) {
	  var cells = this.getCells( elems );
	  var selectedIndexDelta = 0;
	  var len = cells.length;
	  var i, cell;
	  // calculate selectedIndexDelta, easier if done in seperate loop
	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    var wasBefore = this.cells.indexOf( cell ) < this.selectedIndex;
	    selectedIndexDelta -= wasBefore ? 1 : 0;
	  }

	  for ( i=0; i < len; i++ ) {
	    cell = cells[i];
	    cell.remove();
	    // remove item from collection
	    utils.removeFrom( this.cells, cell );
	  }

	  if ( cells.length ) {
	    // update stuff
	    this._cellAddedRemoved( 0, selectedIndexDelta );
	  }
	};

	// updates when cells are added or removed
	proto._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
	  // TODO this math isn't perfect with grouped slides
	  selectedIndexDelta = selectedIndexDelta || 0;
	  this.selectedIndex += selectedIndexDelta;
	  this.selectedIndex = Math.max( 0, Math.min( this.slides.length - 1, this.selectedIndex ) );

	  this.cellChange( changedCellIndex, true );
	  // backwards compatibility
	  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
	};

	/**
	 * logic to be run after a cell's size changes
	 * @param {Element} elem - cell's element
	 */
	proto.cellSizeChange = function( elem ) {
	  var cell = this.getCell( elem );
	  if ( !cell ) {
	    return;
	  }
	  cell.getSize();

	  var index = this.cells.indexOf( cell );
	  this.cellChange( index );
	};

	/**
	 * logic any time a cell is changed: added, removed, or size changed
	 * @param {Integer} changedCellIndex - index of the changed cell, optional
	 */
	proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
	  var prevSlideableWidth = this.slideableWidth;
	  this._positionCells( changedCellIndex );
	  this._getWrapShiftCells();
	  this.setGallerySize();
	  this.emitEvent( 'cellChange', [ changedCellIndex ] );
	  // position slider
	  if ( this.options.freeScroll ) {
	    // shift x by change in slideableWidth
	    // TODO fix position shifts when prepending w/ freeScroll
	    var deltaX = prevSlideableWidth - this.slideableWidth;
	    this.x += deltaX * this.cellAlign;
	    this.positionSlider();
	  } else {
	    // do not position slider after lazy load
	    if ( isPositioningSlider ) {
	      this.positionSliderAtSelected();
	    }
	    this.select( this.selectedIndex );
	  }
	};

	// -----  ----- //

	return Flickity;

	}));


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
	( function( window, factory ) {
	  // universal module definition
	  /* jshint strict: false */
	  if ( true ) {
	    // AMD
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
	      __webpack_require__(71),
	      __webpack_require__(74)
	    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( Flickity, utils ) {
	      return factory( window, Flickity, utils );
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ( typeof module == 'object' && module.exports ) {
	    // CommonJS
	    module.exports = factory(
	      window,
	      require('./flickity'),
	      require('fizzy-ui-utils')
	    );
	  } else {
	    // browser global
	    factory(
	      window,
	      window.Flickity,
	      window.fizzyUIUtils
	    );
	  }

	}( window, function factory( window, Flickity, utils ) {
	'use strict';

	Flickity.createMethods.push('_createLazyload');
	var proto = Flickity.prototype;

	proto._createLazyload = function() {
	  this.on( 'select', this.lazyLoad );
	};

	proto.lazyLoad = function() {
	  var lazyLoad = this.options.lazyLoad;
	  if ( !lazyLoad ) {
	    return;
	  }
	  // get adjacent cells, use lazyLoad option for adjacent count
	  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
	  var cellElems = this.getAdjacentCellElements( adjCount );
	  // get lazy images in those cells
	  var lazyImages = [];
	  cellElems.forEach( function( cellElem ) {
	    var lazyCellImages = getCellLazyImages( cellElem );
	    lazyImages = lazyImages.concat( lazyCellImages );
	  });
	  // load lazy images
	  lazyImages.forEach( function( img ) {
	    new LazyLoader( img, this );
	  }, this );
	};

	function getCellLazyImages( cellElem ) {
	  // check if cell element is lazy image
	  if ( cellElem.nodeName == 'IMG' &&
	    cellElem.getAttribute('data-flickity-lazyload') ) {
	    return [ cellElem ];
	  }
	  // select lazy images in cell
	  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
	  return utils.makeArray( imgs );
	}

	// -------------------------- LazyLoader -------------------------- //

	/**
	 * class to handle loading images
	 */
	function LazyLoader( img, flickity ) {
	  this.img = img;
	  this.flickity = flickity;
	  this.load();
	}

	LazyLoader.prototype.handleEvent = utils.handleEvent;

	LazyLoader.prototype.load = function() {
	  this.img.addEventListener( 'load', this );
	  this.img.addEventListener( 'error', this );
	  // load image
	  this.img.src = this.img.getAttribute('data-flickity-lazyload');
	  // remove attr
	  this.img.removeAttribute('data-flickity-lazyload');
	};

	LazyLoader.prototype.onload = function( event ) {
	  this.complete( event, 'flickity-lazyloaded' );
	};

	LazyLoader.prototype.onerror = function( event ) {
	  this.complete( event, 'flickity-lazyerror' );
	};

	LazyLoader.prototype.complete = function( event, className ) {
	  // unbind events
	  this.img.removeEventListener( 'load', this );
	  this.img.removeEventListener( 'error', this );

	  var cell = this.flickity.getParentCell( this.img );
	  var cellElem = cell && cell.element;
	  this.flickity.cellSizeChange( cellElem );

	  this.img.classList.add( className );
	  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
	};

	// -----  ----- //

	Flickity.LazyLoader = LazyLoader;

	return Flickity;

	}));


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Base Display Template Item View Model
	// ========================================
	"use strict";
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/trunk8/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	__webpack_require__(89);
	var moment = __webpack_require__(90);
	__webpack_require__(69); // Trunk8 typings are exposed through an interface, so we have just to import it globally
	var DefaultDisplayTemplateItemViewModel = (function () {
	    function DefaultDisplayTemplateItemViewModel(currentItem) {
	        var _this = this;
	        this.summaryLinesCount = 3;
	        this.dateFormat = "LL";
	        this.item = ko.observable(currentItem);
	        ko.bindingHandlers.summarize = {
	            init: function (element, valueAccessor) {
	                // Get the current value of the current property we're bound to
	                var value = ko.unwrap(valueAccessor());
	                var trunk8Options = {
	                    lines: _this.summaryLinesCount,
	                    tooltip: false,
	                };
	                // 1) Output the HTML string without modifications
	                if (value.html) {
	                    $(element).html(value.html);
	                }
	                // 2) Output the text only from an HTML string (For example to trim complex HTML elements likes tables or images)
	                if (value.text) {
	                    var decodedHtmlString = $("<textarea/>").html(value.text).text();
	                    $(element).text($(decodedHtmlString).text());
	                }
	                // 3) Output the hit Highlighted summary with matched terms in bold
	                if (value.hitHighlightedSummary) {
	                    // Call the specific SharePoint function for this case
	                    $(element).html(Srch.U.processHHXML(value.hitHighlightedSummary));
	                }
	                // Truncate the news summary
	                $(element).trunk8(trunk8Options);
	                // Adjust automatically news summary on resize
	                $(window).resize(function (event) {
	                    $(element).trunk8(trunk8Options);
	                });
	            },
	        };
	        ko.bindingHandlers.formatDateField = {
	            init: function (element, valueAccessor) {
	                // Get the current value of the current property we're bound to
	                var value = ko.unwrap(valueAccessor());
	                var date = moment(value).format(_this.dateFormat);
	                $(element).text(date);
	            },
	        };
	        // This binding handlers is used to avoid applying bindings twice (from the main script for components)
	        // More info here http://www.knockmeout.net/2012/05/quick-tip-skip-binding.html
	        ko.bindingHandlers.stopBinding = {
	            init: function () {
	                return { controlsDescendantBindings: true };
	            },
	        };
	    }
	    return DefaultDisplayTemplateItemViewModel;
	}());
	exports.DefaultDisplayTemplateItemViewModel = DefaultDisplayTemplateItemViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 89 */
/***/ function(module, exports) {

	/// <reference path="../../typings/globals/knockout/index.d.ts" />


/***/ },
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Taxonomy Refinement Filter View Model (Display Template)
	// ========================================
	"use strict";
	// Note: to get this display template work, you have to use a managed property mapped to a taxonomy crawl property like ows_taxid_xxx (not the ows_xxx in string format)
	// By this way, we are able to get the term id and retrieve the correct label according to the language
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/trunk8/index.d.ts" />
	var taxonomy_1 = __webpack_require__(201);
	__webpack_require__(89);
	var pnp = __webpack_require__(8);
	__webpack_require__(69); // Trunk8 typings are exposed through an interface, so we have just to import it globally
	var DefaultFilterViewModel = (function () {
	    function DefaultFilterViewModel() {
	        var _this = this;
	        this.taxonomyModule = new taxonomy_1.TaxonomyModule();
	        ko.bindingHandlers.localizedTermLabel = {
	            init: function (element, valueAccessor) {
	                var value = ko.unwrap(valueAccessor());
	                // Check if the value seems to be a taxonomy term
	                var isTerm = /L0\|#/i.test(value);
	                if (isTerm) {
	                    // Extract the id
	                    var termId_1 = value.match(/[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}/);
	                    if (termId_1.length > 0) {
	                        $(element).addClass("spinner");
	                        _this.taxonomyModule.init().then(function () {
	                            _this.taxonomyModule.getTermById(new SP.Guid(termId_1[0])).then(function (term) {
	                                $(element).text(term.get_name());
	                                $(element).removeClass("spinner");
	                            });
	                        }).catch(function (errorMesssage) {
	                            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                        });
	                    }
	                }
	                else {
	                    // Return the original value
	                    $(element).text(value);
	                }
	            },
	        };
	        // This binding handlers is used to avoid applying bindings twice (from the main script for components)
	        // More info here http://www.knockmeout.net/2012/05/quick-tip-skip-binding.html
	        ko.bindingHandlers.stopBinding = {
	            init: function () {
	                return { controlsDescendantBindings: true };
	            },
	        };
	    }
	    return DefaultFilterViewModel;
	}());
	exports.DefaultFilterViewModel = DefaultFilterViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// ====================
	// Taxonomy module
	// ====================
	"use strict";
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	/// <reference path="../../typings/globals/es6-promise/index.d.ts" />
	var navigationnode_1 = __webpack_require__(202);
	var i18n = __webpack_require__(49);
	var pnp = __webpack_require__(8);
	var TaxonomyModule = (function () {
	    function TaxonomyModule() {
	        // Get the current working language from the global i18n object
	        // We ensure a default language by the "fallbackLng" property (see main.ts for initialization)
	        this.workingLanguage = parseInt(i18n.t("LCID"), 10);
	    }
	    /**
	     * Ensure all script dependencies are loaded before using the taxonomy SharePoint CSOM functions
	     * @return {Promise<void>}       A promise allowing you to execute your code logic.
	     */
	    TaxonomyModule.prototype.init = function () {
	        // Initialize SharePoint script dependencies
	        SP.SOD.registerSod("sp.runtime.js", "/_layouts/15/sp.runtime.js");
	        SP.SOD.registerSod("sp.js", "/_layouts/15/sp.js");
	        SP.SOD.registerSod("sp.taxonomy.js", "/_layouts/15/sp.taxonomy.js");
	        SP.SOD.registerSod("sp.publishing.js", "/_layouts/15/sp.publishing.js");
	        SP.SOD.registerSodDep("sp.js", "sp.runtime.js");
	        SP.SOD.registerSodDep("sp.taxonomy.js", "sp.js");
	        SP.SOD.registerSodDep("sp.publishing.js", "sp.js");
	        var p = new Promise(function (resolve) {
	            SP.SOD.loadMultiple(["sp.runtime.js", "sp.js", "sp.taxonomy.js", "sp.publishing.js"], function () {
	                resolve();
	            });
	        });
	        return p;
	    };
	    /**
	     * Get a taxonomy term set custom property value
	     * @param  {SP.Guid} termSetId The taxonomy term set Id
	     * @param  {string} customPropertyName The name of the property to retrieve
	     * @return {Promise<string>}       A promise containing the value of the property as string
	     */
	    TaxonomyModule.prototype.getTermSetCustomPropertyValue = function (termSetId, customPropertyName) {
	        var context = SP.ClientContext.get_current();
	        var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
	        var termStore = taxSession.getDefaultSiteCollectionTermStore();
	        termStore.set_workingLanguage(this.workingLanguage);
	        var termSet = termStore.getTermSet(termSetId);
	        context.load(termSet, "CustomProperties");
	        var p = new Promise(function (resolve, reject) {
	            context.executeQueryAsync(function () {
	                var propertyValue = termSet.get_customProperties()[customPropertyName] !== undefined ? termSet.get_customProperties()[customPropertyName] : "";
	                resolve(propertyValue);
	            }, function (sender, args) {
	                reject("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
	            });
	        });
	        return p;
	    };
	    /**
	     * Get the taxonomy navigation terms for a specific term set
	     * @param  {SP.Guid} termSetId The taxonomy term set Id
	     * @return {Promise<Array<NavigationNode>>}       A promise containing the array of navigation nodes for the term set
	     */
	    TaxonomyModule.prototype.getNavigationTaxonomyNodes = function (termSetId) {
	        var _this = this;
	        var context = SP.ClientContext.get_current();
	        var currentWeb = SP.ClientContext.get_current().get_web();
	        var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
	        var termStore = taxSession.getDefaultSiteCollectionTermStore();
	        termStore.set_workingLanguage(this.workingLanguage);
	        var termSet = termStore.getTermSet(termSetId);
	        // The method 'getTermSetForWeb' gets the cached read only version of the term set
	        // https://msdn.microsoft.com/EN-US/library/office/microsoft.sharepoint.publishing.navigation.taxonomynavigation.gettermsetforweb.aspx
	        // Ex: var webNavigationTermSet = SP.Publishing.Navigation.TaxonomyNavigation.getTermSetForWeb(context, currentWeb, 'GlobalNavigationTaxonomyProvider', true);
	        // In our case, we use 'getAsResolvedByWeb' method instead to retrieve a taxonomy term set as a navigation term set regardless if it is bound to the current web.
	        // The downside of this approach is that the results are not retrieved from the navigation cache that can cause performance issues during the initial load
	        var webNavigationTermSet = SP.Publishing.Navigation.NavigationTermSet.getAsResolvedByWeb(context, termSet, currentWeb, "GlobalNavigationTaxonomyProvider");
	        // Get the existing view from the navigation term set
	        var termSetView = webNavigationTermSet.get_view().getCopy();
	        // Return global and current navigation terms (the subsequent filtering can be done in the Knockout html view)
	        termSetView.set_excludeTermsByProvider(false);
	        // Sets a value that indicates whether NavigationTerm objects are trimmed if the current user does not have permissions to view the target page (the aspx physical page) for the friendly URL
	        // If you don't see anything in the menu, check the node type (term driven page or simple link). In the case of term driven page, the target page must be accessible for the current user 
	        termSetView.set_excludeTermsByPermissions(true);
	        // Apply the new view filters
	        webNavigationTermSet = webNavigationTermSet.getWithNewView(termSetView);
	        var firstLevelNavigationTerms = webNavigationTermSet.get_terms();
	        var allNavigationterms = webNavigationTermSet.getAllTerms();
	        context.load(allNavigationterms, "Include(Id, Terms, Title, FriendlyUrlSegment, ExcludeFromCurrentNavigation, ExcludeFromGlobalNavigation)");
	        context.load(firstLevelNavigationTerms, "Include(Id, Terms, Title, FriendlyUrlSegment, ExcludeFromCurrentNavigation, ExcludeFromGlobalNavigation)");
	        var p = new Promise(function (resolve, reject) {
	            context.executeQueryAsync(function () {
	                _this.getTermNodesAsFlat(context, allNavigationterms).then(function (nodes) {
	                    var navigationTree = _this.getTermNodesAsTree(context, nodes, firstLevelNavigationTerms, null);
	                    resolve(navigationTree);
	                });
	            }, function (sender, args) {
	                reject("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
	            });
	        });
	        return p;
	    };
	    /**
	     * Get a single term by its Id using the current taxonomy context.
	     * @param  {SP.Guid} termId The taxonomy term Id
	     * @return {Promise<SP.Taxonomy.Term>}       A promise containing the term infos.
	     */
	    TaxonomyModule.prototype.getTermById = function (termId) {
	        if (termId) {
	            var context_1 = SP.ClientContext.get_current();
	            var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context_1);
	            var termStore = taxSession.getDefaultSiteCollectionTermStore();
	            termStore.set_workingLanguage(this.workingLanguage);
	            var term_1 = termStore.getTerm(termId);
	            context_1.load(term_1, "Name");
	            var p = new Promise(function (resolve, reject) {
	                context_1.executeQueryAsync(function () {
	                    resolve(term_1);
	                }, function (sender, args) {
	                    reject("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
	                });
	            });
	            return p;
	        }
	        else {
	            pnp.log.write("TaxonomyModule.getTermById: the provided term id is null!", pnp.log.LogLevel.Error);
	        }
	    };
	    // Get the navigation hierarchy as a flat list
	    // This list will be used to easily find a node without dealing too much with asynchronous calls and recursion 
	    TaxonomyModule.prototype.getTermNodesAsFlat = function (context, allTerms) {
	        var _this = this;
	        var termNodes = [];
	        var termsEnumerator = allTerms.getEnumerator();
	        while (termsEnumerator.moveNext()) {
	            var p = new Promise(function (resolve, reject) {
	                var currentTerm = termsEnumerator.get_current();
	                var termNode = new navigationnode_1.NavigationNode();
	                termNode.Id = currentTerm.get_id().toString();
	                termNode.Title = currentTerm.get_title().get_value();
	                termNode.TaxonomyTerm = currentTerm;
	                termNode.FriendlyUrlSegment = currentTerm.get_friendlyUrlSegment().get_value();
	                termNode.ExcludeFromCurrentNavigation = currentTerm.get_excludeFromCurrentNavigation();
	                termNode.ExcludeFromGlobalNavigation = currentTerm.get_excludeFromGlobalNavigation();
	                _this.getNavigationTermUrlInfo(context, currentTerm).then(function (termUrlInfo) {
	                    termNode.Url = termUrlInfo;
	                    _this.getTermCustomPropertiesForTerm(context, currentTerm.getTaxonomyTerm()).then(function (properties) {
	                        termNode.Properties = properties;
	                        resolve(termNode);
	                        termsEnumerator.moveNext();
	                    });
	                });
	            });
	            termNodes.push(p);
	        }
	        return Promise.all(termNodes);
	    };
	    // Find a specific navigation term in the flat list of all navigation terms
	    TaxonomyModule.prototype.findTermNode = function (allTerms, termId) {
	        for (var _i = 0, allTerms_1 = allTerms; _i < allTerms_1.length; _i++) {
	            var term = allTerms_1[_i];
	            if (term.Id.toString().localeCompare(termId.toString()) === 0) {
	                return term;
	            }
	        }
	        return null;
	    };
	    // Get the navigation nodes as tree
	    TaxonomyModule.prototype.getTermNodesAsTree = function (context, allTerms, currentNodeTerms, parentNode) {
	        // Special thanks to this blog post
	        // https://social.msd#n.microsoft.com/Forums/office/en-US/ede1aa39-4c47-4308-9aef-3b036ec9b318/get-navigation-taxonomy-term-tree-in-sharepoint-app?forum=appsforsharepoint
	        var termsEnumerator = currentNodeTerms.getEnumerator();
	        var termNodes = [];
	        while (termsEnumerator.moveNext()) {
	            // Get the corresponding navigation node in the flat tree
	            var currentNode = this.findTermNode(allTerms, termsEnumerator.get_current().get_id());
	            var subTerms = currentNode.TaxonomyTerm.get_terms();
	            if (subTerms.get_count() > 0) {
	                currentNode.ChildNodes = this.getTermNodesAsTree(context, allTerms, subTerms, currentNode);
	            }
	            // Clear TaxonomyTerm property to simplify JSON string (property not useful anymore after this step)
	            currentNode.TaxonomyTerm = null;
	            if (parentNode !== null) {
	                // Set the parent infos for the current node (used by the contextual menu and the breadcrumb components)            
	                currentNode.ParentUrl = parentNode.Url;
	                currentNode.ParentId = parentNode.Id;
	            }
	            termNodes.push(currentNode);
	        }
	        return termNodes;
	    };
	    // Get the term URL info (simple link or friendly URL)
	    TaxonomyModule.prototype.getNavigationTermUrlInfo = function (context, navigationTerm) {
	        // This method gets the resolved URL whatever if it is a simple link or a friendly URL
	        var resolvedDisplayUrl = navigationTerm.getResolvedDisplayUrl("");
	        context.load(navigationTerm);
	        var p = new Promise(function (resolve, reject) {
	            context.executeQueryAsync(function () {
	                resolve(resolvedDisplayUrl.get_value());
	            }, function (sender, args) {
	                reject("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
	            });
	        });
	        return p;
	    };
	    // Get all custom proeprties for the term
	    TaxonomyModule.prototype.getTermCustomPropertiesForTerm = function (context, taxonomyTerm) {
	        context.load(taxonomyTerm, "CustomProperties");
	        var p = new Promise(function (resolve, reject) {
	            context.executeQueryAsync(function () {
	                var properties = taxonomyTerm.get_customProperties();
	                resolve(properties);
	            }, function (sender, args) {
	                reject("Request failed. " + args.get_message() + "\n" + args.get_stackTrace());
	            });
	        });
	        return p;
	    };
	    return TaxonomyModule;
	}());
	exports.TaxonomyModule = TaxonomyModule;
	

/***/ },
/* 202 */
/***/ function(module, exports) {

	// ====================
	// Navigation node class
	// ====================
	"use strict";
	var NavigationNode = (function () {
	    function NavigationNode() {
	        this.ChildNodes = [];
	        this.ParentId = null;
	        this.ParentUrl = null;
	    }
	    return NavigationNode;
	}());
	exports.NavigationNode = NavigationNode;
	

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ========================================
	// Document Item View Model (Display Template)
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/trunk8/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	__webpack_require__(89);
	var defaultdisplaytemplateitem_viewmodel_ts_1 = __webpack_require__(88);
	var i18n = __webpack_require__(49);
	var sprintf = __webpack_require__(204);
	var DocumentDisplayTemplateItemViewModel = (function (_super) {
	    __extends(DocumentDisplayTemplateItemViewModel, _super);
	    function DocumentDisplayTemplateItemViewModel(currentItem) {
	        var _this = this;
	        _super.call(this, currentItem);
	        this.searchPageUrl = ko.observable("");
	        this.allDocumentsLabel = ko.observable(sprintf.sprintf(i18n.t("allDocumentsLabel"), _spPageContextInfo.webTitle.toLowerCase()));
	        ko.bindingHandlers.getDocumentsSearchUrl = {
	            init: function () {
	                _this.searchPageUrl(_spPageContextInfo.siteAbsoluteUrl + "/Pages/" + i18n.t("documentsSearchPageUrl"));
	            },
	        };
	    }
	    return DocumentDisplayTemplateItemViewModel;
	}(defaultdisplaytemplateitem_viewmodel_ts_1.DefaultDisplayTemplateItemViewModel));
	exports.DocumentDisplayTemplateItemViewModel = DocumentDisplayTemplateItemViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	(function(window) {
	    var re = {
	        not_string: /[^s]/,
	        number: /[diefg]/,
	        json: /[j]/,
	        not_json: /[^j]/,
	        text: /^[^\x25]+/,
	        modulo: /^\x25{2}/,
	        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
	        key: /^([a-z_][a-z_\d]*)/i,
	        key_access: /^\.([a-z_][a-z_\d]*)/i,
	        index_access: /^\[(\d+)\]/,
	        sign: /^[\+\-]/
	    }

	    function sprintf() {
	        var key = arguments[0], cache = sprintf.cache
	        if (!(cache[key] && cache.hasOwnProperty(key))) {
	            cache[key] = sprintf.parse(key)
	        }
	        return sprintf.format.call(null, cache[key], arguments)
	    }

	    sprintf.format = function(parse_tree, argv) {
	        var cursor = 1, tree_length = parse_tree.length, node_type = "", arg, output = [], i, k, match, pad, pad_character, pad_length, is_positive = true, sign = ""
	        for (i = 0; i < tree_length; i++) {
	            node_type = get_type(parse_tree[i])
	            if (node_type === "string") {
	                output[output.length] = parse_tree[i]
	            }
	            else if (node_type === "array") {
	                match = parse_tree[i] // convenience purposes only
	                if (match[2]) { // keyword argument
	                    arg = argv[cursor]
	                    for (k = 0; k < match[2].length; k++) {
	                        if (!arg.hasOwnProperty(match[2][k])) {
	                            throw new Error(sprintf("[sprintf] property '%s' does not exist", match[2][k]))
	                        }
	                        arg = arg[match[2][k]]
	                    }
	                }
	                else if (match[1]) { // positional argument (explicit)
	                    arg = argv[match[1]]
	                }
	                else { // positional argument (implicit)
	                    arg = argv[cursor++]
	                }

	                if (get_type(arg) == "function") {
	                    arg = arg()
	                }

	                if (re.not_string.test(match[8]) && re.not_json.test(match[8]) && (get_type(arg) != "number" && isNaN(arg))) {
	                    throw new TypeError(sprintf("[sprintf] expecting number but found %s", get_type(arg)))
	                }

	                if (re.number.test(match[8])) {
	                    is_positive = arg >= 0
	                }

	                switch (match[8]) {
	                    case "b":
	                        arg = arg.toString(2)
	                    break
	                    case "c":
	                        arg = String.fromCharCode(arg)
	                    break
	                    case "d":
	                    case "i":
	                        arg = parseInt(arg, 10)
	                    break
	                    case "j":
	                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
	                    break
	                    case "e":
	                        arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential()
	                    break
	                    case "f":
	                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
	                    break
	                    case "g":
	                        arg = match[7] ? parseFloat(arg).toPrecision(match[7]) : parseFloat(arg)
	                    break
	                    case "o":
	                        arg = arg.toString(8)
	                    break
	                    case "s":
	                        arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg)
	                    break
	                    case "u":
	                        arg = arg >>> 0
	                    break
	                    case "x":
	                        arg = arg.toString(16)
	                    break
	                    case "X":
	                        arg = arg.toString(16).toUpperCase()
	                    break
	                }
	                if (re.json.test(match[8])) {
	                    output[output.length] = arg
	                }
	                else {
	                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
	                        sign = is_positive ? "+" : "-"
	                        arg = arg.toString().replace(re.sign, "")
	                    }
	                    else {
	                        sign = ""
	                    }
	                    pad_character = match[4] ? match[4] === "0" ? "0" : match[4].charAt(1) : " "
	                    pad_length = match[6] - (sign + arg).length
	                    pad = match[6] ? (pad_length > 0 ? str_repeat(pad_character, pad_length) : "") : ""
	                    output[output.length] = match[5] ? sign + arg + pad : (pad_character === "0" ? sign + pad + arg : pad + sign + arg)
	                }
	            }
	        }
	        return output.join("")
	    }

	    sprintf.cache = {}

	    sprintf.parse = function(fmt) {
	        var _fmt = fmt, match = [], parse_tree = [], arg_names = 0
	        while (_fmt) {
	            if ((match = re.text.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = match[0]
	            }
	            else if ((match = re.modulo.exec(_fmt)) !== null) {
	                parse_tree[parse_tree.length] = "%"
	            }
	            else if ((match = re.placeholder.exec(_fmt)) !== null) {
	                if (match[2]) {
	                    arg_names |= 1
	                    var field_list = [], replacement_field = match[2], field_match = []
	                    if ((field_match = re.key.exec(replacement_field)) !== null) {
	                        field_list[field_list.length] = field_match[1]
	                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== "") {
	                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
	                                field_list[field_list.length] = field_match[1]
	                            }
	                            else {
	                                throw new SyntaxError("[sprintf] failed to parse named argument key")
	                            }
	                        }
	                    }
	                    else {
	                        throw new SyntaxError("[sprintf] failed to parse named argument key")
	                    }
	                    match[2] = field_list
	                }
	                else {
	                    arg_names |= 2
	                }
	                if (arg_names === 3) {
	                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")
	                }
	                parse_tree[parse_tree.length] = match
	            }
	            else {
	                throw new SyntaxError("[sprintf] unexpected placeholder")
	            }
	            _fmt = _fmt.substring(match[0].length)
	        }
	        return parse_tree
	    }

	    var vsprintf = function(fmt, argv, _argv) {
	        _argv = (argv || []).slice(0)
	        _argv.splice(0, 0, fmt)
	        return sprintf.apply(null, _argv)
	    }

	    /**
	     * helpers
	     */
	    function get_type(variable) {
	        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase()
	    }

	    function str_repeat(input, multiplier) {
	        return Array(multiplier + 1).join(input)
	    }

	    /**
	     * export to either browser or node.js
	     */
	    if (true) {
	        exports.sprintf = sprintf
	        exports.vsprintf = vsprintf
	    }
	    else {
	        window.sprintf = sprintf
	        window.vsprintf = vsprintf

	        if (typeof define === "function" && define.amd) {
	            define(function() {
	                return {
	                    sprintf: sprintf,
	                    vsprintf: vsprintf
	                }
	            })
	        }
	    }
	})(typeof window === "undefined" ? this : window);


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ========================================
	// Main Menu Component View Model
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	var taxonomy_1 = __webpack_require__(201);
	var utility_1 = __webpack_require__(66);
	var navigation_viewmodel_1 = __webpack_require__(65);
	var pnp = __webpack_require__(8);
	var i18n = __webpack_require__(49);
	var HeaderLinksViewModel = (function (_super) {
	    __extends(HeaderLinksViewModel, _super);
	    function HeaderLinksViewModel() {
	        var _this = this;
	        _super.call(this);
	        this.taxonomyModule = new taxonomy_1.TaxonomyModule();
	        this.utilityModule = new utility_1.UtilityModule();
	        this.wait = ko.observable(true);
	        var currentLanguage = i18n.t("LanguageLabel");
	        var configListName = "Configuration";
	        this.localStorageKey = i18n.t("headerLinksLocalStorageKey");
	        var filterQuery = "IntranetContentLanguage eq '" + currentLanguage + "'";
	        // Read the configuration value from a configuration list instead from a term set property to improve performances
	        // Get only the first item
	        pnp.sp.site.rootWeb.lists.getByTitle(configListName).items.filter(filterQuery).top(1).get().then(function (item) {
	            if (item.length > 0) {
	                // Get the boolean value
	                var noCache = item[0].ForceCacheRefresh;
	                // Get the term set id
	                var termSetId = item[0].HeaderLinksTermSetId;
	                if (noCache) {
	                    // Clear the local storage value
	                    pnp.storage.local.delete(_this.localStorageKey);
	                    // Get navigation nodes
	                    _this.getNavigationNodes(termSetId);
	                }
	                else {
	                    var navigationTree = _this.utilityModule.isCacheValueValid(_this.localStorageKey);
	                    // Check if the local storage value is still valid
	                    if (navigationTree) {
	                        _this.initialize(navigationTree);
	                        _this.wait(false);
	                    }
	                    else {
	                        _this.getNavigationNodes(termSetId);
	                    }
	                }
	            }
	            else {
	                pnp.log.write("There is no configuration item for this site", pnp.log.LogLevel.Warning);
	            }
	        }).catch(function (errorMesssage) {
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	        });
	    }
	    HeaderLinksViewModel.prototype.getNavigationNodes = function (termSetId) {
	        var _this = this;
	        if (!termSetId) {
	            pnp.log.write("The term set id for the header links is null. Please specify a valid term set id in the configuration list", pnp.log.LogLevel.Error);
	        }
	        else {
	            // Ensure all SP dependencies are loaded before retrieving navigation nodes
	            this.taxonomyModule.init().then(function () {
	                // Initialize the main menu with taxonomy terms            
	                _this.taxonomyModule.getNavigationTaxonomyNodes(new SP.Guid(termSetId)).then(function (navigationTree) {
	                    // Initialize the mainMenu view model
	                    _this.initialize(navigationTree);
	                    _this.wait(false);
	                    var now = new Date();
	                    // Set the navigation tree in the local storage of the browser
	                    pnp.storage.local.put(_this.localStorageKey, _this.utilityModule.stringifyTreeObject(navigationTree), new Date(now.setDate(now.getDate() + 7)));
	                }).catch(function (errorMesssage) {
	                    pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                });
	            }).catch(function (errorMesssage) {
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        }
	    };
	    return HeaderLinksViewModel;
	}(navigation_viewmodel_1.NavigationViewModel));
	exports.HeaderLinksViewModel = HeaderLinksViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {"use strict";
	var KnockoutComponent = (function () {
	    function KnockoutComponent(name, viewModel, template) {
	        ko.components.register(name, {
	            template: template,
	            viewModel: viewModel,
	        });
	    }
	    return KnockoutComponent;
	}());
	exports.KnockoutComponent = KnockoutComponent;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ====================
	// Language Switcher Component
	// ====================
	"use strict";
	/* ****************TEST CASES********************
	 *
	 * - Scenario: "The current pas has no translation"
	 *  - Init: The current page langauge is "FR" but it doesn't have an "EN" translation
	 *  - Expected behavior:
	 *      - The current language of the page is selected in the switcher (non clickable). The "EN" label is disabled with a message displaying that there is no translation for this page.
	 *
	 *  - Scenario: "The current has a translation"
	 *      - Init: The current page langauge is "FR" and have and "EN" translation
	 *      - Expected behavior:
	 *           - The current language of the page is selected in the switcher (non clickable) and the "EN" label redirect to the translated page.
	 *
	 *  - Scenario: "The current has a no language"
	 *      - Init: The current page doesn't have a language property
	 *      - Expected behavior:
	 *          - Both "FR" and "EN" labels are disabled with a message displaying that there is no translation for these pages
	 *
	 *  - Scenario: "The current page has more than one translations for a label"
	 *      - Init: The current page langauge is "FR" but it has multiple "EN" translations
	 *      - Expected behavior:
	 *          - Only the most recent translation is shown for the "EN" label, in the component.
	 *
	 * **********************************************/
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/sprintf-js/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	/// <reference path="../../typings/globals/es6-promise/index.d.ts" />
	var pnp = __webpack_require__(8);
	var i18n = __webpack_require__(49);
	var LanguageSwitcherViewModel = (function () {
	    function LanguageSwitcherViewModel(params) {
	        var languages = params.availableLanguages;
	        this.languageFieldName = params.languageFieldName;
	        this.associationKeyFieldName = params.associationKeyFieldName;
	        // Get context informations for the current page
	        this.currentPageId = _spPageContextInfo.pageItemId;
	        this.availableLanguages = ko.observableArray([]);
	        this.noTranslationMessage = ko.observable("");
	        this.getPeerUrls(languages);
	    }
	    /**
	     * Get all available translations for the current page
	     *
	     * @param languages: the arbitrary languages set up for the component
	     */
	    LanguageSwitcherViewModel.prototype.getPeerUrls = function (languages) {
	        var _this = this;
	        // Get the info for the current page
	        pnp.sp.web.lists.getByTitle("Pages").items.getById(this.currentPageId).select(this.associationKeyFieldName, "ID", this.languageFieldName).get().then(function (item) {
	            var allLanguages = [];
	            var currentPageLanguage = item[_this.languageFieldName];
	            // Does a page in the 'Pages' library exist with the same GUID as me and an other language?
	            var filterQuery = _this.associationKeyFieldName + " eq '" + item[_this.associationKeyFieldName] + "' and ID ne '" + item.ID + "' and " + _this.languageFieldName + " ne '" + currentPageLanguage + "'";
	            // Return only one element ordered descending by the Modified date
	            // It can't have more than one translation for the current page
	            pnp.sp.web.lists.getByTitle("Pages").items.filter(filterQuery).orderBy("Modified").top(1).select("FileRef, Title", _this.languageFieldName).get().then(function (item) {
	                // Loop through each available languages and map the correct information according to the page context and its translations.
	                // We want to notifiy the users if there is not translation for a target language so that's why we map an arbitrary array of languages with the results
	                languages.map(function (element) {
	                    var languageLink = new LanguageLinkViewModel();
	                    // The label is given by the component parameters
	                    languageLink.label(element);
	                    // This is the current language
	                    if (element.localeCompare(currentPageLanguage) === 0) {
	                        languageLink.isCurrentLanguage(true);
	                    }
	                    else {
	                        // If there is a translation, fill the appropriate information
	                        if (item.length > 0) {
	                            var itemLanguage = item[0][_this.languageFieldName];
	                            var itemUrl = item[0].FileRef;
	                            if (element.localeCompare(itemLanguage) === 0) {
	                                languageLink.url(itemUrl);
	                                languageLink.isValidTranslation(true);
	                            }
	                            else {
	                                // This is a translation for an other language not listed in the available languages for the component...
	                                languageLink.isValidTranslation(false);
	                                _this.noTranslationMessage(i18n.t("noTranslationMessage"));
	                            }
	                        }
	                        else {
	                            // Not item = no translation at all
	                            languageLink.isValidTranslation(false);
	                            _this.noTranslationMessage(i18n.t("noTranslationMessage"));
	                        }
	                    }
	                    allLanguages.push(languageLink);
	                });
	                // Init available languages for the user
	                _this.availableLanguages(allLanguages);
	            }).catch(function (errorMesssage) {
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        }).catch(function (errorMesssage) {
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	        });
	    };
	    return LanguageSwitcherViewModel;
	}());
	exports.LanguageSwitcherViewModel = LanguageSwitcherViewModel;
	var LanguageLinkViewModel = (function () {
	    function LanguageLinkViewModel() {
	        this.label = ko.observable("");
	        this.url = ko.observable("");
	        this.isCurrentLanguage = ko.observable(false);
	        this.isValidTranslation = ko.observable(false);
	    }
	    return LanguageLinkViewModel;
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ====================
	// News Item View Model (Display Template)
	// ====================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/trunk8/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	__webpack_require__(89);
	var defaultdisplaytemplateitem_viewmodel_ts_1 = __webpack_require__(88);
	var i18n = __webpack_require__(49);
	var sprintf = __webpack_require__(204);
	var NewsDisplayTemplateItemViewModel = (function (_super) {
	    __extends(NewsDisplayTemplateItemViewModel, _super);
	    function NewsDisplayTemplateItemViewModel(currentItem) {
	        var _this = this;
	        _super.call(this, currentItem);
	        this.searchPageUrl = ko.observable("");
	        this.allNewsLabel = ko.observable(sprintf.sprintf(i18n.t("allNewsLabel"), _spPageContextInfo.webTitle.toLowerCase()));
	        ko.bindingHandlers.getNewsSearchUrl = {
	            init: function () {
	                var newsContentTypeId = "0x010100C568DB52D9D0A14D9B2FDCC96666E9F2007948130EC3DB064584E219954237AF39000650D0E024D0AE42B88AF5AF825F709C02";
	                var refinementString = '{"k":"","r":[{"n":"ContentTypeId","t":["' + newsContentTypeId + '*"],"o":"and","k":false,"m":null}';
	                _this.searchPageUrl(_spPageContextInfo.siteAbsoluteUrl + "/Pages/" + i18n.t("intranetSearchPageUrl") + "#Default=" + encodeURIComponent(refinementString));
	            },
	        };
	    }
	    return NewsDisplayTemplateItemViewModel;
	}(defaultdisplaytemplateitem_viewmodel_ts_1.DefaultDisplayTemplateItemViewModel));
	exports.NewsDisplayTemplateItemViewModel = NewsDisplayTemplateItemViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ====================
	// Page Info Menu Component
	// ====================
	"use strict";
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/knockout.mapping/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	var taxonomy_1 = __webpack_require__(201);
	__webpack_require__(89);
	var moment = __webpack_require__(90);
	var pnp = __webpack_require__(8);
	var PageInfoViewModel = (function () {
	    function PageInfoViewModel(params) {
	        var _this = this;
	        this.taxonomyModule = new taxonomy_1.TaxonomyModule();
	        // Internal name of fields to retrieve in the page
	        this.selectedFields = params.selectedFields;
	        this.expandedFields = params.expandedFields;
	        this.pageItem = ko.observable();
	        ko.bindingHandlers.formatDateField = {
	            init: function (element, valueAccessor) {
	                // Get the current value of the current property we"re bound to
	                var value = ko.unwrap(valueAccessor());
	                var date = moment(value).format("LL");
	                $(element).text(date);
	            },
	        };
	        // Note 1: Be careful, there is a bug with GET REST API for taxonomy fields when they have only a single value (i.e the Label property is not correct)
	        // In our case, we don"t use directly the label because we have to get it according the current language so it does not matter. Remember, by default, the returned label follows the current web language
	        // Note 2: If no fields are specified, the pnp call return all fields from the item (without expand)
	        pnp.sp.web.lists.getByTitle("Pages").items.getById(_spPageContextInfo.pageItemId).select(this.selectedFields).expand(this.expandedFields).get().then(function (item) {
	            var allItemProperties = [];
	            // Loop through each returned properties for the item and build an array of promises
	            var _loop_1 = function(key) {
	                if (item.hasOwnProperty(key)) {
	                    var value_1 = item[key];
	                    var p = new Promise(function (resolve) {
	                        if (value_1) {
	                            // Mutiple values taxonomy (returned as an array of objects)
	                            if (Array.isArray(value_1)) {
	                                var arrayValues_1 = [];
	                                value_1.forEach(function (element) {
	                                    if (element.hasOwnProperty("TermGuid")) {
	                                        var p2 = new Promise(function (resolve) {
	                                            _this.taxonomyModule.init().then(function () {
	                                                _this.taxonomyModule.getTermById(new SP.Guid(element.TermGuid)).then(function (term) {
	                                                    resolve(term.get_name());
	                                                });
	                                            });
	                                        });
	                                        arrayValues_1.push(p2);
	                                    }
	                                });
	                                Promise.all(arrayValues_1).then(function (multiValues) {
	                                    resolve({ key: key, value: multiValues.join(" - ") });
	                                });
	                            }
	                            else {
	                                // Single value taxonomy (returned as a single object)
	                                if (value_1.hasOwnProperty("TermGuid")) {
	                                    var termId_1 = value_1.TermGuid;
	                                    _this.taxonomyModule.init().then(function () {
	                                        _this.taxonomyModule.getTermById(new SP.Guid(termId_1)).then(function (term) {
	                                            resolve({ key: key, value: term.get_name() });
	                                        });
	                                    });
	                                }
	                                else {
	                                    resolve({ key: key, value: value_1 });
	                                }
	                            }
	                        }
	                        else {
	                            resolve({ key: key, value: null });
	                        }
	                    });
	                    allItemProperties.push(p);
	                }
	            };
	            for (var key in item) {
	                _loop_1(key);
	            }
	            // Resolve all nested async calls
	            Promise.all(allItemProperties).then(function (properties) {
	                var listItem = {};
	                // Build a single object from the array of resolved properties
	                for (var i = 0; i < properties.length; i++) {
	                    listItem[properties[i].key] = properties[i].value;
	                }
	                // Build dynamically the view model via knockout mapping plugin
	                _this.pageItem(ko.mapping.fromJS(listItem));
	            });
	        }).catch(function (errorMesssage) {
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	        });
	    }
	    return PageInfoViewModel;
	}());
	exports.PageInfoViewModel = PageInfoViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ====================
	// Search box View Model (Desktop)
	// ====================
	"use strict";
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	var utility_1 = __webpack_require__(66);
	var i18n = __webpack_require__(49);
	var SearchBoxViewModel = (function () {
	    function SearchBoxViewModel() {
	        var _this = this;
	        this.selectCategory = function (data) {
	            _this.selectedCategory(data);
	        };
	        this.doSearch = function () {
	            // Check if the input text is empty
	            if (_this.isSearchEmpty()) {
	                _this.isError(true);
	            }
	            else {
	                var queryUrl = "";
	                // Check if people search. In this case, we use the Delve portal instead of SharePoint
	                if (_this.selectedCategory().isPeople) {
	                    var profileUrl = _spPageContextInfo["ProfileUrl"];
	                    profileUrl = _this.utilityModule.getLocation(profileUrl);
	                    // Build the search query for Delve
	                    queryUrl = profileUrl.protocol + "//" + profileUrl.hostname + "/_layouts/15/me.aspx?q=" + _this.inputQuery();
	                    // Open the page in a new tab
	                    window.open(queryUrl);
	                }
	                else {
	                    queryUrl = _spPageContextInfo.siteAbsoluteUrl + "/Pages/" + _this.selectedCategory().searchPageUrl + "?k=" + _this.inputQuery();
	                    // Redirect to the correct page according to selected category
	                    window.location.href = queryUrl;
	                }
	            }
	        };
	        this.searchPlaceHolderLabel = ko.observable(i18n.t("searchPlaceholderLabel"));
	        this.utilityModule = new utility_1.UtilityModule();
	        // Check if there is already a query performed
	        var k = this.utilityModule.getQueryString("k", window.location.href);
	        var keywords;
	        if (k) {
	            keywords = decodeURIComponent(k);
	        }
	        else {
	            keywords = "";
	        }
	        this.inputQuery = ko.observable(keywords);
	        this.isError = ko.observable(false);
	        this.isSearchEmpty = ko.computed(function () {
	            if (_this.inputQuery().length > 0) {
	                _this.isError(false);
	                return false;
	            }
	            else {
	                return true;
	            }
	        });
	        this.searchCategories = ko.observableArray([
	            new SearchCategory(i18n.t("intranetSearchCategory"), "ms-Icon--globe", i18n.t("intranetSearchPageUrl")),
	            new SearchCategory(i18n.t("documentsSearchCategory"), "ms-Icon--documents", i18n.t("documentsSearchPageUrl")),
	            new SearchCategory(i18n.t("peopleSearchCategory"), "ms-Icon--people", null, true),
	        ]);
	        var currentPageName = window.location.pathname;
	        var currentCategory = ko.utils.arrayFirst(this.searchCategories(), function (item) {
	            return item.searchPageUrl === currentPageName.substring(currentPageName.lastIndexOf("/") + 1);
	        });
	        if (currentCategory) {
	            this.selectedCategory = ko.observable(currentCategory);
	        }
	        else {
	            this.selectedCategory = ko.observable(this.searchCategories()[0]);
	        }
	    }
	    return SearchBoxViewModel;
	}());
	exports.SearchBoxViewModel = SearchBoxViewModel;
	var SearchCategory = (function () {
	    function SearchCategory(name, iconClass, searchPageUrl, isPeople) {
	        this.isPeople = false;
	        this.name = name;
	        this.iconClass = iconClass;
	        this.searchPageUrl = searchPageUrl;
	        this.isPeople = isPeople;
	    }
	    return SearchCategory;
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Search box View Model (Mobile)
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	__webpack_require__(89);
	var searchbox_viewmodel_1 = __webpack_require__(210);
	var SearchBoxMobileViewModel = (function (_super) {
	    __extends(SearchBoxMobileViewModel, _super);
	    function SearchBoxMobileViewModel() {
	        var _this = this;
	        _super.call(this);
	        this.toggleSearchBox = function () {
	            _this.displaySearchBox(!_this.displaySearchBox());
	        };
	        this.toggleCategory = function () {
	            if (_this.selectedIndex() === (_this.searchCategories().length - 1)) {
	                // Reset the index
	                _this.selectedIndex(0);
	            }
	            else {
	                _this.selectedIndex(_this.selectedIndex() + 1);
	            }
	            _this.selectedCategory(_this.searchCategories()[_this.selectedIndex()]);
	        };
	        this.displaySearchBox = ko.observable(false);
	        this.selectedIndex = ko.observable(0);
	        this.toggleUIElements = ko.computed(function () {
	            // Give more space to the searchbox by hidding the burger menu and the language switcher
	            if (_this.displaySearchBox()) {
	                $(".navbar-header .navbar-toggle").hide();
	                $("#languageswitcher-mobile").hide();
	            }
	            else {
	                // Reset to the default behavior (managed by Bootstrap, not by our code)
	                $(".navbar-header .navbar-toggle").css("display", "");
	                // Manually show the element (controlled by our code)
	                $("#languageswitcher-mobile").show();
	            }
	        });
	        if (this.inputQuery().length > 0) {
	            // If a search query was already performed
	            this.displaySearchBox(true);
	        }
	        ko.bindingHandlers.inputFocus = {
	            init: function (element, valueAccessor) {
	                var value = valueAccessor();
	                ko.unwrap(value) ? $(element).focus() : $(element).blur();
	            },
	        };
	    }
	    return SearchBoxMobileViewModel;
	}(searchbox_viewmodel_1.SearchBoxViewModel));
	exports.SearchBoxMobileViewModel = SearchBoxMobileViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko, $) {// ========================================
	// Main Menu Component View Model
	// ========================================
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	__webpack_require__(7);
	var pnp = __webpack_require__(8);
	var i18n = __webpack_require__(49);
	var taxonomy_1 = __webpack_require__(201);
	var utility_1 = __webpack_require__(66);
	var navigation_viewmodel_1 = __webpack_require__(65);
	var TopNavViewModel = (function (_super) {
	    __extends(TopNavViewModel, _super);
	    function TopNavViewModel() {
	        var _this = this;
	        _super.call(this);
	        this.taxonomyModule = new taxonomy_1.TaxonomyModule();
	        this.utilityModule = new utility_1.UtilityModule();
	        this.errorMessage = ko.observable("");
	        this.wait = ko.observable(true);
	        this.localStorageKey = i18n.t("siteMapLocalStorageKey");
	        // The current language is determined at the entry point of the application
	        // Instead of making a second call to get the current langauge, we get the corresponding resource value according to the current context (like we already do for LCID)
	        var currentLanguage = i18n.t("LanguageLabel");
	        var configListName = "Configuration";
	        // Yamm3! MegaMenu
	        $(document).on("click", ".yamm .dropdown-menu", function (e) {
	            e.stopPropagation();
	        });
	        var filterQuery = "IntranetContentLanguage eq '" + currentLanguage + "'";
	        // Read the configuration value from the configuration list and for the current langauge. We use a list item instead of a term set property to improve performances (SOD loading is slow compared to a simple REST call).
	        pnp.sp.site.rootWeb.lists.getByTitle(configListName).items.filter(filterQuery).top(1).get().then(function (item) {
	            if (item.length > 0) {
	                // Get the boolean value
	                var noCache = item[0].ForceCacheRefresh;
	                // Get the term set id
	                var termSetId = item[0].SiteMapTermSetId;
	                if (noCache) {
	                    // Clear the local storage value
	                    pnp.storage.local.delete(_this.localStorageKey);
	                    // Get navigation nodes
	                    _this.getNavigationNodes(termSetId);
	                }
	                else {
	                    var navigationTree = _this.utilityModule.isCacheValueValid(_this.localStorageKey);
	                    // Check if the local storage value is still valid (i.e not null)
	                    if (navigationTree) {
	                        _this.initialize(navigationTree);
	                        _this.wait(false);
	                        // Publish the data to all subscribers (contextual menu and breadcrumb) 
	                        PubSub.publish("navigationNodes", { nodes: navigationTree });
	                    }
	                    else {
	                        _this.getNavigationNodes(termSetId);
	                    }
	                }
	            }
	            else {
	                pnp.log.write("There is no configuration item for the site map for the language '" + currentLanguage + "'", pnp.log.LogLevel.Error);
	            }
	        }).catch(function (errorMesssage) {
	            _this.errorMessage(errorMesssage);
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	        });
	    }
	    TopNavViewModel.prototype.getNavigationNodes = function (termSetId) {
	        var _this = this;
	        if (!termSetId) {
	            var errorMesssage = "The term set id for the site map is null. Please specify a valid term set id in the configuration list";
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            this.errorMessage(errorMesssage);
	        }
	        else {
	            // Ensure all SP dependencies are loaded before retrieving navigation nodes
	            this.taxonomyModule.init().then(function () {
	                // Initialize the main menu with taxonomy terms            
	                _this.taxonomyModule.getNavigationTaxonomyNodes(new SP.Guid(termSetId)).then(function (navigationTree) {
	                    // Initialize the mainMenu view model
	                    _this.initialize(navigationTree);
	                    _this.wait(false);
	                    // Publish the data to all subscribers (contextual menu and breadcrumb) 
	                    PubSub.publish("navigationNodes", { nodes: navigationTree });
	                    var now = new Date();
	                    // Set the navigation tree in the local storage of the browser
	                    pnp.storage.local.put(_this.localStorageKey, _this.utilityModule.stringifyTreeObject(navigationTree), new Date(now.setDate(now.getDate() + 7)));
	                }).catch(function (errorMesssage) {
	                    _this.errorMessage(errorMesssage);
	                    pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                });
	            }).catch(function (errorMesssage) {
	                _this.errorMessage(errorMesssage);
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        }
	    };
	    return TopNavViewModel;
	}(navigation_viewmodel_1.NavigationViewModel));
	exports.TopNavViewModel = TopNavViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(2)))

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(ko) {// ====================
	// Translation Control Component
	// ====================
	"use strict";
	/* ****************TEST CASES********************
	 *
	 *  - Scenario: "New page creation - Component UI"
	 *    - Init: Create a new blank page in the 'Pages' library
	 *    - Expected behavior:
	 *        - The component must show only the languages available for target.
	 *        - Ex: if "EN" and "FR" was specified in the component parameters and the current page language is "EN", so only "FR" is displayed.
	 *        - The component must allow the user to create a new translation for the selected language (button + file name control displayed).
	 *        - The target page name can't contain special characters or have the same name as the source page.
	 *
	 *  - Scenario: "Add a new translation when no translation exist"
	 *    - Init: Create a new blank page "EN", and add a translation for "FR"
	 *    - Expected behavior:
	 *       - A new page is created with a different physical page name (.aspx) at the same level in the 'Pages' library. Ex: Source = "Home.aspx", Target = "Accueil.aspx"
	 *      - The language of the new page must be the one selected on the component (the "FR" language)
	 *       - A new association key is created in the source item before the copy, doing the link between the translations
	 *       - All metadata from the original page are copied to the target (like variations do)
	 *       - The created file is checkout after the operation
	 *       - The component must display a link to the new created page with a succes message
	 *
	 *  - Scenario: "Add a new translations when one or more translations already exist for other available languages."
	 *    - Init: Add the "ES" translation on the "EN" page where there is already a translation for "FR"
	 *    - Expected behavior:
	 *       - The new page used the same association key as the other pages
	 *       - The language of the new page must be the one selected on the component ("ES" here)
	 *
	 *  - Scenario: "Remove an existing translations other than the original"
	 *    - Init: Remove an existing translation "EN" for the orignal "FR" page
	 *    - Expected behavior:
	 *       - The original page keeps its association key in its metadata
	 *
	 *  - Scenario: "Recreate a translation after removal"
	 *    - Init: recreate the "EN" translation after removing it previously
	 *    - Expected behavior
	 *       - The association key is kept. The new created translation used the same association key as the orignal page
	 *
	 * **********************************************/
	/// <reference path="../../typings/globals/knockout/index.d.ts" />
	/// <reference path="../../typings/globals/sprintf-js/index.d.ts" />
	/// <reference path="../../typings/globals/sharepoint/index.d.ts" />
	/// <reference path="../../typings/globals/es6-promise/index.d.ts" />
	var utility_1 = __webpack_require__(66);
	var pnp = __webpack_require__(8);
	var i18n = __webpack_require__(49);
	var sprintf = __webpack_require__(204);
	var TranslationControlViewModel = (function () {
	    function TranslationControlViewModel(params) {
	        var _this = this;
	        // ------------------
	        // Callback functions
	        // Note for callback syntax with TypeScript: https://blogs.msdn.microsoft.com/typescript/2013/08/06/announcing-0-9-1/
	        // ------------------
	        /**
	         * Check existing translations for the current page.
	         *
	         */
	        this.checkForExistingTranslations = function () {
	            // Reset internal states
	            _this.wait(true);
	            _this.isError(false);
	            // Get the info for the current page
	            pnp.sp.web.lists.getByTitle("Pages").items.getById(_this.currentPageId).select(_this.associationKeyFieldName, "ID", _this.languageFieldName).get().then(function (item) {
	                var targetLanguage = _this.selectedLanguage();
	                // Does a page in the 'Pages' library exist with the same GUID as me for the selected target language ?
	                var filterQuery = _this.associationKeyFieldName + " eq '" + item[_this.associationKeyFieldName] + "' and ID ne '" + item.ID + "' and " + _this.languageFieldName + " eq '" + targetLanguage + "'";
	                pnp.sp.web.lists.getByTitle("Pages").items.filter(filterQuery).select("FileRef, FileLeafRef").get().then(function (item) {
	                    var msg;
	                    if (item.length > 0) {
	                        if (_this.isNewCreation()) {
	                            msg = sprintf.sprintf(i18n.t("successTranslationCreation"), _this.selectedLanguage());
	                            _this.messageStatusClass("ms-MessageBar--success");
	                            _this.messageStatusIcon("ms-Icon--checkboxCheck");
	                        }
	                        else {
	                            msg = sprintf.sprintf(i18n.t("existingTranslations"), _this.selectedLanguage());
	                            _this.messageStatusClass("warning-msg");
	                            _this.messageStatusIcon("ms-Icon--infoCircle");
	                        }
	                        _this.infoMessage(msg);
	                        _this.isNewCreation(false);
	                    }
	                    _this.existingTranslations(item);
	                    _this.wait(false);
	                }).catch(function (data) {
	                    _this.showErrorMessage(data);
	                });
	            }).catch(function (data) {
	                _this.showErrorMessage(data);
	            });
	        };
	        /**
	         * Call back function that creates a new translation for the current page according the selected target language
	         */
	        this.createPageTranslation = function () {
	            // Reset internal states
	            _this.wait(true);
	            _this.isError(false);
	            // Build the destination file URL
	            var destinationFile = _this.currentPageUrl.replace(/(.*)\/.*(\.aspx$)/i, "$1/" + _this.inputDestinationFileName() + "$2");
	            _this.ensurePageGuid().then(function () {
	                // Copy the page in the Pages library with the new language
	                // Note: during the copy operation, all original metadata are retained by default 
	                pnp.sp.web.getFileByServerRelativeUrl(_this.currentPageUrl).copyTo(destinationFile, true).then(function () {
	                    // Checkout the file before making any changes
	                    pnp.sp.web.getFileByServerRelativeUrl(destinationFile).checkout().then(function () {
	                        // Get the ID the copied file and update the language (update does not work with a single operation)
	                        pnp.sp.web.getFileByServerRelativeUrl(destinationFile).listItemAllFields.select("ID").get().then(function (item) {
	                            // Set the peer language on the destination file
	                            pnp.sp.web.lists.getByTitle("Pages").items.getById(item.ID).update((_a = {}, _a[_this.languageFieldName] = _this.selectedLanguage(), _a)).then(function (item) {
	                                _this.isNewCreation(true);
	                                _this.checkForExistingTranslations();
	                            }).catch(function (errorMesssage) {
	                                _this.showErrorMessage(errorMesssage);
	                                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                            });
	                            var _a;
	                        }).catch(function (errorMesssage) {
	                            _this.showErrorMessage(errorMesssage);
	                            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                        });
	                    }).catch(function (errorMesssage) {
	                        _this.showErrorMessage(errorMesssage);
	                        pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                    });
	                }).catch(function (errorMesssage) {
	                    _this.showErrorMessage(errorMesssage);
	                    pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	                });
	            }).catch(function (errorMesssage) {
	                _this.showErrorMessage(errorMesssage);
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        };
	        this.utilityModule = new utility_1.UtilityModule();
	        // Get the available languages from the the component parameters (arbitrary)
	        // These languages must correspond to the column values used for the language column (choice field in this case)
	        var languages = params.availableLanguages;
	        this.languageFieldName = params.languageFieldName;
	        this.associationKeyFieldName = params.associationKeyFieldName;
	        // Get context informations for the current page
	        this.currentPageId = _spPageContextInfo.pageItemId;
	        this.currentPageUrl = _spPageContextInfo.serverRequestPath; // Note: _spPageContextInfo.serverRequestPath works with friendly URLs as well
	        // Init observables
	        this.wait = ko.observable(true);
	        this.isNewCreation = ko.observable(false);
	        this.availableLanguages = ko.observableArray([]);
	        this.selectedLanguage = ko.observable("");
	        this.selectedLanguage.subscribe(this.checkForExistingTranslations, this); // Avoid the "click" binding on the radio button. More info here: http://jsfiddle.net/rniemeyer/cnkVA/2/ 
	        this.invalidFilenameMessage = ko.observable("");
	        this.inputDestinationFileName = ko.observable("");
	        this.isFileNameValid = ko.pureComputed(function () {
	            var destinationName = _this.inputDestinationFileName();
	            var currentFileName = _this.currentPageUrl.match(/([^\/]+)(?=\.\w+$)/)[0];
	            if (destinationName.length === 0) {
	                _this.invalidFilenameMessage(i18n.t("emptyFilenameMessage"));
	                return false;
	            }
	            else {
	                if (/[#%\*\[\]\\/|\\":<>\?]/.test(destinationName) || destinationName.localeCompare(currentFileName) === 0) {
	                    _this.invalidFilenameMessage(i18n.t("invalidFilenameMessage"));
	                    return false;
	                }
	                else {
	                    _this.invalidFilenameMessage("");
	                    return true;
	                }
	            }
	        });
	        this.buttonLabel = ko.computed(function () {
	            return sprintf.sprintf(i18n.t("translateButtonLabel"), _this.selectedLanguage());
	        });
	        this.selectLanguageMessage = i18n.t("selectLanguageMessage");
	        this.selectPageNameMessage = i18n.t("selectPageNameMessage");
	        this.translationComponentTitle = i18n.t("translationComponentTitle");
	        this.messageStatusClass = ko.observable("");
	        this.messageStatusIcon = ko.observable("");
	        this.existingTranslations = ko.observableArray([]);
	        this.isTranslationExist = ko.computed(function () {
	            if (_this.existingTranslations().length > 0) {
	                return true;
	            }
	            else {
	                return false;
	            }
	        });
	        this.isError = ko.observable(false);
	        this.infoMessage = ko.observable("");
	        // Pre-flight check
	        this.initAvailableLanguages(languages);
	        this.checkForExistingTranslations();
	    }
	    /**
	     * Init the available languages for the user
	     *
	     * @param languages: the arbitrary languages set up for the component
	     */
	    TranslationControlViewModel.prototype.initAvailableLanguages = function (languages) {
	        var _this = this;
	        // Get the current page language
	        pnp.sp.web.lists.getByTitle("Pages").items.getById(this.currentPageId).select(this.languageFieldName, this.associationKeyFieldName).get().then(function (item) {
	            // Remove the current page language from the available languages
	            var index = languages.indexOf(item[_this.languageFieldName]);
	            if (index > -1) {
	                languages.splice(index, 1);
	            }
	            // Select by default the first item for left languages
	            if (languages.length > 0) {
	                _this.selectedLanguage(languages[0]);
	            }
	            // Init available languages for the user
	            _this.availableLanguages(languages);
	        });
	    };
	    /**
	     * Ensure that the page has an unique identifier for translations linking. If it doesn't a new one is created in the appropriate field.
	     * This field is configurable via the "associationKeyFieldName" parameter for the component
	     *
	     * @param languages: the arbitrary languages set up for the component
	     */
	    TranslationControlViewModel.prototype.ensurePageGuid = function () {
	        var _this = this;
	        var p = new Promise(function (resolve) {
	            // Get the association key for the current item
	            pnp.sp.web.lists.getByTitle("Pages").items.getById(_this.currentPageId).select(_this.associationKeyFieldName).get().then(function (item) {
	                var currentContentAssociationKey = item[_this.associationKeyFieldName];
	                if (currentContentAssociationKey) {
	                    // Keep the existing guid
	                    resolve();
	                }
	                else {
	                    var guid = _this.utilityModule.getNewGuid();
	                    // Set a new unique identifier for this page
	                    pnp.sp.web.lists.getByTitle("Pages").items.getById(_this.currentPageId).update((_a = {}, _a[_this.associationKeyFieldName] = guid, _a)).then(function (item) {
	                        resolve();
	                    });
	                }
	                var _a;
	            }).catch(function (errorMesssage) {
	                _this.showErrorMessage(errorMesssage);
	                pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	            });
	        }).catch(function (errorMesssage) {
	            _this.showErrorMessage(errorMesssage);
	            pnp.log.write(errorMesssage, pnp.log.LogLevel.Error);
	        });
	        return p;
	    };
	    TranslationControlViewModel.prototype.showErrorMessage = function (error) {
	        this.isError(true);
	        this.wait(false);
	        this.messageStatusClass("ms-MessageBar--error");
	        this.messageStatusIcon("ms-Icon ms-Icon--xCircle");
	        this.infoMessage(error);
	    };
	    return TranslationControlViewModel;
	}());
	exports.TranslationControlViewModel = TranslationControlViewModel;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 214 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/spinner.gif";

/***/ },
/* 218 */,
/* 219 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 220 */,
/* 221 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 222 */,
/* 223 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 224 */,
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/default_image.png";

/***/ },
/* 226 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 227 */,
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/logo_intranet.png";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "./img/favicon_intranet.ico";

/***/ },
/* 230 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 231 */,
/* 232 */
/***/ function(module, exports) {

	module.exports = {
		"LCID": "1033",
		"LanguageLabel": "EN",
		"siteMapLocalStorageKey": "siteMapNodesEN",
		"headerLinksLocalStorageKey": "headerLinksNodesEN",
		"translateButtonLabel": "Create a translation for '%s'",
		"existingTranslations": "One or more translations already exist for this page and for the selected language '%s':",
		"successTranslationCreation": "Your '%s' translation has been created successfully",
		"selectLanguageMessage": "Select a language:",
		"selectPageNameMessage": "Page name (file URL)",
		"invalidFilenameMessage": "The file name is invalid. You can't use special characters \" # % * : < > ? \\ / | or use the same name of the current page.",
		"emptyFilenameMessage": "The filename cannot be empty",
		"translationComponentTitle": "Translate this page",
		"noTranslationMessage": "This page doesn't have a translation for this language",
		"allNewsLabel": "See all '%s' news",
		"allDocumentsLabel": "See all '%s' documents",
		"intranetSearchPageUrl": "Search.aspx",
		"documentsSearchPageUrl": "SearchDocuments.aspx",
		"allNewsQueryRuleToken": "News",
		"searchPlaceholderLabel": "Search in",
		"intranetSearchCategory": "Intranet",
		"documentsSearchCategory": "Documents",
		"peopleSearchCategory": "People",
		"rf_All": "See all filters",
		"rf_EarlierThan": "Earlier than {0}",
		"rf_EarlierThanOneYearAgo": "Earlier than One Year Ago",
		"rf_OneYearAgo": "One year ago",
		"rf_OneYearAgoOneMonthAgo": "One Year Ago - One Month Ago",
		"rf_OneMonthAgo": "One Month Ago",
		"rf_OneMonthAgoOneWeekAgo": "One Month Ago - One Week Ago",
		"rf_OneWeekAgo": "One Week Ago",
		"rf_OneWeekAgoToday": "One Week Ago - Today",
		"rf_Today": "Today",
		"rf_CategoryRefinerTitle": "Category",
		"rf_ContentTypeRefinerTitle": "Content Type",
		"rf_PublishingDateRefinerTitle": "Publishing Date",
		"rf_AuthorRefinerTitle": "Author",
		"rf_KeywordsRefinerTitle": "Keywords",
		"rf_ResultTypeRefinerTitle": "Result Type",
		"rf_EmptyRefinement": "No filter available",
		"rs_NoResultsTitle": "Nothing here matches your search",
		"rs_countDisplayString": "About &lt;strong&gt;{0}&lt;/strong&gt; results",
		"rs_submittedKeywords": " for '&lt;strong&gt;{0}&lt;/strong&gt;'",
		"rs_SingleResultCount": "&lt;strong&gt;{0}&lt;/strong&gt; result",
		"rs_ResultCount": "&lt;strong&gt;{0}&lt;/strong&gt; results",
		"breadcrumbErrorMessage": "Unable to determine the site map position for this page. Ensure you have filled the \"Site Map Position\" field for this page or set this page as target url for a term in the site map.",
		"hp_Tooltip_Open": "Open this result",
		"hp_Open": "Open",
		"hp_Edit": "Edit",
		"hp_Tooltip_OpenInClient": "Open this file",
		"hp_Post": "Post",
		"hp_Tooltip_Post": "Talk about this document on Yammer.",
		"hp_Tooltip_Follow": "Click to follow this result",
		"hp_Follow": "Follow",
		"hp_Tooltip_Send": "Send this result to someone by email",
		"hp_Send": "Send",
		"hp_Tooltip_ViewLibrary": "Open the library that contains this result",
		"hp_ViewLibrary": "View Library",
		"hp_Tooltip_ViewDuplicates": "Show duplicates of this result",
		"hp_ViewDuplicates": "View Duplicates",
		"hp_Views_Singular": "view",
		"hp_Views_Plural": "views",
		"hp_Tooltip_Views": "This result has been viewed {0} times.",
		"hp_Tooltip_Close": "Close panel",
		"hp_ChangedByAuthorDate": "Changed by {0} on {1} {2}",
		"hp_LastModified": "Last modified",
		"hp_RecentlyEdited": "Contributors include",
		"hp_NoData": "We didn't find any more information about this result.",
		"file_Access": "Microsoft Access",
		"file_Audio": "Music / Audio",
		"file_CSS": "CSS File",
		"file_Document": "Document",
		"file_Excel": "Microsoft Excel",
		"file_Help": "Help File",
		"file_InfoPath": "Microsoft InfoPath",
		"file_Installer": "Installer File",
		"file_JavaScript": "JavaScript",
		"file_Log": "Log File",
		"file_Mail": "Mail",
		"file_OneNote": "Microsoft OneNote",
		"file_PDF": "PDF File",
		"file_PowerPoint": "Microsoft PowerPoint",
		"file_Project": "Microsoft Project",
		"file_Publisher": "Microsoft Publisher",
		"file_RTF": "Rich Text File",
		"file_SPDesigner": "Microsoft SharePoint Designer",
		"file_Text": "Text File",
		"file_Visio": "Microsoft Visio",
		"file_WebPage": "Web Page",
		"file_Word": "Microsoft Word",
		"file_XML": "XML File",
		"file_XPS": "Microsoft XPS",
		"file_XSL": "XSL Transform File",
		"file_Zip": "Zip Compressed File",
		"workphone": "Work Phone",
		"mobilephone": "Cellular"
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = {
		"LCID": "1036",
		"LanguageLabel": "FR",
		"siteMapLocalStorageKey": "siteMapNodesFR",
		"headerLinksLocalStorageKey": "headerLinksNodesFR",
		"translateButtonLabel": "Créer une traduction pour '%s'",
		"existingTranslations": "Une ou plusieurs traductions pour cette page existent déjà pour la langue sélectionnée '%s':",
		"successTranslationCreation": "Votre traduction '%s' a été créée avec succès",
		"selectLanguageMessage": "Sélectionnez une langue:",
		"selectPageNameMessage": "Nom de la page (URL du fichier)",
		"invalidFilenameMessage": "Le nom de fichier est invalide. Vous ne pouvez pas utiliser les caractères spéciaux \" # % * : < > ? \\ / | ou utiliser le même nom que la page courante.",
		"emptyFilenameMessage": "Le nom de fichier ne peut pas être vide",
		"translationComponentTitle": "Traduire cette page",
		"noTranslationMessage": "Cette page ne possède pas de traduction pour cette langue",
		"allNewsLabel": "Voir toutes les nouvelles '%s'",
		"allDocumentsLabel": "Voir tous les documents '%s'",
		"intranetSearchPageUrl": "Recherche.aspx",
		"documentsSearchPageUrl": "RechercheDocuments.aspx",
		"allNewsQueryRuleToken": "Nouvelles",
		"searchPlaceholderLabel": "Rechercher dans",
		"intranetSearchCategory": "Intranet",
		"documentsSearchCategory": "Documents",
		"peopleSearchCategory": "Personnes",
		"rf_All": "Voir tous les filtres",
		"rf_EarlierThan": "Antérieur à  {0}",
		"rf_EarlierThanOneYearAgo": "Antérieur à un an",
		"rf_OneYearAgo": "Il y a un an",
		"rf_OneYearAgoOneMonthAgo": "Il y a un an - Il y a un mois",
		"rf_OneMonthAgo": "Il y a un mois",
		"rf_OneMonthAgoOneWeekAgo": "Il y a un mois - Il y a une semaine",
		"rf_OneWeekAgo": "Il y a une semaine",
		"rf_OneWeekAgoToday": "Il y a une semaine - Aujourd'hui",
		"rf_Today": "Aujourd'hui",
		"rf_CategoryRefinerTitle": "Catégorie",
		"rf_ContentTypeRefinerTitle": "Type de contenu",
		"rf_PublishingDateRefinerTitle": "Date de publication",
		"rf_AuthorRefinerTitle": "Auteur",
		"rf_KeywordsRefinerTitle": "Mots clés",
		"rf_ResultTypeRefinerTitle": "Type de résultat",
		"rf_EmptyRefinement": "Aucun filtre disponible pour cette recherche",
		"rs_NoResultsTitle": "Aucun résultat pour cette recherche",
		"rs_countDisplayString": "Environ &lt;strong&gt;{0}&lt;/strong&gt; résultat(s)",
		"rs_submittedKeywords": " pour '&lt;strong&gt;{0}&lt;/strong&gt;'",
		"rs_SingleResultCount": "&lt;strong&gt;{0}&lt;/strong&gt; résultat",
		"rs_ResultCount": "&lt;strong&gt;{0}&lt;/strong&gt; résultats",
		"breadcrumbErrorMessage": "Impossible de déterminer la position dans la carte du site pour cette page. Vérifiez que le champ \"Site Map Position\" est bien rempli pour cette page ou que vous avez spécifié cette page en tant qu'URL cible d'un terme de navigation de la carte du site",
		"hp_Tooltip_Open": "Ouvrir ce résultat",
		"hp_Open": "Ouvrir",
		"hp_Edit": "Éditer",
		"hp_Tooltip_OpenInClient": "Ouvrir ce fichier",
		"hp_Post": "Poster dans Yammer",
		"hp_Tooltip_Post": "Discuter de ce document dans Yammer.",
		"hp_Tooltip_Follow": "Cliquez pour suivre ce résulat",
		"hp_Follow": "Suivre",
		"hp_Tooltip_Send": "Partager par email",
		"hp_Send": "Envoyer",
		"hp_Tooltip_ViewLibrary": "Ouvrir l'emplacement de ce résultat",
		"hp_ViewLibrary": "Voir la bibliothèque",
		"hp_Tooltip_ViewDuplicates": "Voir les doublons pour ce résultat",
		"hp_ViewDuplicates": "Voir les doublons",
		"hp_Views_Singular": "vue",
		"hp_Views_Plural": "vues",
		"hp_Tooltip_Views": "Ce résultat à été vu {0} fois.",
		"hp_Tooltip_Close": "Fermer l'aperçu",
		"hp_ChangedByAuthorDate": "Modifié par {0} le {1} {2}",
		"hp_LastModified": "Dernière modification",
		"hp_RecentlyEdited": "Contributeurs incluant",
		"hp_NoData": "Nous n'avons pas trouvé d'informations pour ce résultat.",
		"file_Access": "Microsoft Access",
		"file_Audio": "Musique / Audio",
		"file_CSS": "Fichier CSS",
		"file_Document": "Document",
		"file_Excel": "Microsoft Excel",
		"file_Help": "Fichier d'aide",
		"file_InfoPath": "Microsoft InfoPath",
		"file_Installer": "Fichier d'installation",
		"file_JavaScript": "JavaScript",
		"file_Log": "Fichier de log",
		"file_Mail": "Courriel",
		"file_OneNote": "Microsoft OneNote",
		"file_PDF": "Fichier PDF",
		"file_PowerPoint": "Microsoft PowerPoint",
		"file_Project": "Microsoft Project",
		"file_Publisher": "Microsoft Publisher",
		"file_RTF": "Rich Text File",
		"file_SPDesigner": "Microsoft SharePoint Designer",
		"file_Text": "Fichier texte",
		"file_Visio": "Microsoft Visio",
		"file_WebPage": "Page Web",
		"file_Word": "Microsoft Word",
		"file_XML": "Fichier XML",
		"file_XPS": "Microsoft XPS",
		"file_XSL": "Fichier XSL",
		"file_Zip": "Archive Zip",
		"workphone": "Travail",
		"mobilephone": "Cellulaire"
	};

/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = "<div id=\"navbar\" data-bind=\"css: {'spinner': wait }\">\r\n  <div class=\"navbar yamm clear\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n          <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\" class=\"navbar-toggle\">\r\n              <i class=\"ms-Icon ms-Icon--menu ms-font-xl\" aria-hidden=\"true\"></i>\r\n          </button>\r\n\r\n          <div id=\"call-to-action\" class=\"hidden-md hidden-lg hidden-sm\">\r\n\r\n            <div id=\"languageswitcher-mobile\">\r\n              <component-languageswitcher params='availableLanguages: [\"EN\",\"FR\"], languageFieldName:\"IntranetContentLanguage\", associationKeyFieldName:\"IntranetContentAssociationKey\"'></component-languageswitcher>\r\n            </div>\r\n              \r\n            <component-searchboxmobile></component-searchboxmobile>\r\n\r\n          </div>\r\n\r\n      </div>\r\n      <div id=\"navbar-collapse-1\" class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n            <!-- ko if: errorMessage  -->   \r\n              <li >\r\n                <a>\r\n                  <i class=\"ms-Icon ms-Icon--xCircle\"></i>\r\n                  <span data-bind=\"text: errorMessage\"></span>\r\n                </a>\r\n              </li>\r\n            <!-- /ko -->\r\n            <!-- ko foreach: nodes -->\r\n            <!-- ko ifnot: excludeFromGlobalNavigation() -->\r\n            <li data-bind=\"css: { dropdown: hasChildren(), right: $data.properties()['align'] === 'right' }\">\r\n              <a aria-expanded=\"true\" data-bind=\"attr: { href: url, 'data-toggle': dataToggle }, css: { 'dropdown-toggle': hasChildren }\">                          \r\n                    <span data-bind=\"text: title\"></span>\r\n                    <i class=\"ms-Icon ms-Icon--chevronDown\" data-bind=\"visible: hasChildren\"></i>\r\n              </a>\r\n              <!-- ko if: hasChildren -->\r\n              <ul class=\"dropdown-menu\">\r\n                <li>\r\n                  <!-- Content container to add padding -->\r\n                  <div class=\"yamm-content\">\r\n                    <div class=\"row\">\r\n                      <!-- ko foreach: children -->\r\n                        <!-- ko ifnot: excludeFromGlobalNavigation() -->\r\n                        <ul class=\"col-sm-3 list-unstyled\">\r\n                          <li class=\"level2\">\r\n                            <a data-bind=\"text: title, attr: { href: url }\"></a>\r\n                          </li>\r\n                          <!-- ko if: hasChildren -->\r\n                            <!-- ko foreach: children -->\r\n                              <!-- ko ifnot: excludeFromGlobalNavigation() -->\r\n                                  <li>\r\n                                    <a data-bind=\"text: title, attr: { href: url }\"></a>\r\n                                  </li>\r\n                              <!-- /ko -->\r\n                            <!-- /ko -->\r\n                          <!-- /ko -->\r\n                        </ul>\r\n                        <!-- /ko -->\r\n                      <!-- /ko -->\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <!-- /ko -->\r\n            </li>\r\n            <!-- /ko -->\r\n          <!-- /ko -->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ },
/* 235 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 236 */,
/* 237 */
/***/ function(module, exports) {

	module.exports = "<div id=\"contextualmenu\" data-bind=\"css: {'spinner': wait }\">\r\n    <ul class=\"nav nav-pills nav-stacked\">\r\n\r\n        <!-- ko with: parentSection -->\r\n        <li class=\"parent-section\">    \r\n            <i class=\"ms-Icon ms-Icon--sections\" aria-hidden=\"true\"></i>          \r\n            <a aria-expanded=\"true\" data-bind=\"attr: { href: Url ? Url : '#' }, text: Title\">           \r\n            </a>          \r\n        </li>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko foreach: nodes -->\r\n            <!-- ko ifnot: excludeFromCurrentNavigation() -->\r\n                <li data-toggle=\"collapse\" data-bind=\"attr: {'data-target': '#collapse' + $index() }, css: { 'is-selected': isCurrentNode }\">\r\n                    <a aria-expanded=\"true\" data-bind=\"attr: { href: url }, text: title\">                  \r\n                    </a>\r\n                    <i class=\"ms-Icon ms-Icon--chevronDown\" aria-hidden=\"true\" data-bind=\"visible: hasChildren\"></i>\r\n                </li>\r\n                <!-- ko if: hasChildren -->\r\n                    <div class=\"nav collapse\" data-bind=\"attr: { id: 'collapse' + $index() }\">\r\n                    <!-- ko foreach: children -->\r\n                        <!-- ko ifnot: excludeFromCurrentNavigation() -->\r\n                            <li class=\"is-child\" data-bind=\"css: { 'is-selected': isCurrentNode }\">\r\n                                <a data-bind=\"attr: { href: url }, text: title\">\r\n                                </a>\r\n                            </li>\r\n                        <!-- /ko -->\r\n                    <!-- /ko -->\r\n                    </div>\r\n                <!-- /ko -->\r\n            <!-- /ko -->\r\n        <!-- /ko -->\r\n    </ul>\r\n</div>"

/***/ },
/* 238 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 239 */,
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div id=\"breadcrumb\">\r\n    <!-- ko if: isEmptyNodes -->\r\n        <div class=\"ms-MessageBar warning-msg\">\r\n            <div class=\"ms-MessageBar-content\">\r\n                <div class=\"ms-MessageBar-icon\"><i class=\"ms-Icon ms-Icon--infoCircle\"></i></div>\r\n                <div class=\"ms-MessageBar-text\" data-bind=\"text: errorMessage\">              \r\n                </div>\r\n            </div>\r\n        </div>\r\n    <!-- /ko -->\r\n    <!-- ko if: nodes().length > 0 -->\r\n        <ul class=\"nav\">\r\n            <!-- ko foreach: nodes -->\r\n                <!-- ko if: hasParent -->\r\n                <li>\r\n                    <a href=\"#\" class=\"chevron\">\r\n                        <i class=\"ms-Icon ms-Icon--chevronRight\"></i>\r\n                    </a>\r\n                </li>\r\n                <!-- /ko -->  \r\n                <!-- ko ifnot: hasParent -->       \r\n                <li data-bind=\"css : { 'is-selected' : isCurrentNode }\">\r\n                    <a style=\"text-decoration: none;padding-left: 0px\" data-bind=\"attr: {href: $parent.siteServerRelativeUrl }\">\r\n                        <i class=\"ms-Icon ms-Icon--home\"></i>\r\n                    </a>  \r\n                </li> \r\n                <li>\r\n                    <a href=\"#\" class=\"chevron\">\r\n                        <i class=\"ms-Icon ms-Icon--chevronRight\"></i>\r\n                    </a>\r\n                </li>\r\n                <!-- /ko -->\r\n                <li data-bind=\"css : { 'is-selected' : isCurrentNode }\">  \r\n                    <a data-bind=\"text: title, attr: { href: url }\"></a>\r\n                </li>\r\n            <!-- /ko -->\r\n        </ul>\r\n    <!-- /ko -->\r\n</div>"

/***/ },
/* 241 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 242 */,
/* 243 */
/***/ function(module, exports) {

	module.exports = "<!-- Header component -->\r\n<div id=\"header\" class=\"hidden-xs\">\r\n    <div id=\"utilsZone\">\r\n        <div style=\"float:right\">\r\n            <component-languageswitcher params='availableLanguages: [\"EN\",\"FR\"], languageFieldName:\"IntranetContentLanguage\", associationKeyFieldName:\"IntranetContentAssociationKey\"'></component-languageswitcher>\r\n            <component-searchbox></component-searchbox>\r\n        </div>      \r\n        <div class=\"clear\">      \r\n            <component-headerlinks></component-headerlinks>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 244 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 245 */,
/* 246 */
/***/ function(module, exports) {

	module.exports = "<!-- Page Info component -->\r\n<div id=\"page-info\" class=\"ms-font-l\">\r\n    \r\n     <!-- ko with: pageItem -->\r\n\r\n        <div id=\"category\" data-bind=\"visible: IntranetContentCategory\">\r\n            <i class=\"ms-Icon ms-Icon--tag\" aria-hidden=\"true\"></i>\r\n            <span data-bind=\"text: IntranetContentCategory\"></span>\r\n        </div>\r\n\r\n         <div id=\"date\" data-bind=\"visible: IntranetContentPublishingDate\">\r\n            <i class=\"ms-Icon ms-Icon--event\" aria-hidden=\"true\"></i>\r\n            <span data-bind=\"formatDateField: IntranetContentPublishingDate\"></span>\r\n        </div>       \r\n\r\n        <!-- ko if: $data.hasOwnProperty('IntranetContentAuthor') -->\r\n            <div id=\"author\">\r\n                <i class=\"ms-Icon ms-Icon--person\" aria-hidden=\"true\"></i>\r\n                <span data-bind=\"text: IntranetContentAuthor.Title\"></span>\r\n            </div>\r\n         <!-- /ko -->\r\n\r\n     <!-- /ko -->\r\n    \r\n</div>"

/***/ },
/* 247 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 248 */,
/* 249 */
/***/ function(module, exports) {

	module.exports = "<div id=\"translation-control\">\r\n\r\n    <span class=\"ms-fontSize-m\" data-bind=\"text: translationComponentTitle\"></span>\r\n\r\n    <div id=\"selection-area\">\r\n        <label class=\"ms-Label\" data-bind=\"text: selectLanguageMessage\"></label>\r\n        <!-- ko foreach: availableLanguages -->\r\n            <input type=\"radio\" data-bind=\"attr: { value: $data }, checked: $parent.selectedLanguage\"/> \r\n            <label>\r\n                <span class=\"ms-Label\" data-bind=\"text: $data\"></span>\r\n            </label>    \r\n        <!-- /ko -->\r\n    </div>\r\n\r\n    <div id=\"action-area\">\r\n\r\n        <!-- ko if: wait -->\r\n        <div class=\"spinner\" style=\"width: 100%;height: 100px\">\r\n\r\n        </div>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko ifnot: wait -->\r\n            <!-- ko if: (isTranslationExist() || isError()) -->\r\n                <div class=\"ms-MessageBar\" data-bind=\"css: messageStatusClass\">\r\n                    <div class=\"ms-MessageBar-content\">\r\n                        <div class=\"ms-MessageBar-icon\"><i class=\"ms-Icon\" data-bind=\"css: messageStatusIcon\"></i></div>\r\n                        <div class=\"ms-MessageBar-text\">\r\n                            <span data-bind=\"text: infoMessage\"></span>\r\n                            <ul id=\"translation-list\">\r\n                            <!-- ko foreach: existingTranslations -->\r\n                                <li>\r\n                                    <i class=\"ms-Icon ms-Icon--document\" aria-hidden=\"true\"></i> \r\n                                    <a data-bind=\"attr: { href: $data.FileRef }, text: $data.FileLeafRef\" target=\"_blank\"></a>\r\n                                </li>\r\n                            <!-- /ko -->\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <!-- /ko -->\r\n\r\n            <!-- ko ifnot: (isTranslationExist() || isError())  -->\r\n\r\n                <span class=\"ms-Label\" data-bind=\"text: selectPageNameMessage\"></span>\r\n                <input id=\"pagename\" type=\"text\" data-bind=\"textInput: inputDestinationFileName, disable: isTranslationExist\"/>\r\n                <label class=\"ms-Label\">.aspx</label>\r\n\r\n                <div class=\"ms-fontColor-error ms-font-xs\" data-bind=\"visible: !isFileNameValid(), text: invalidFilenameMessage\"></div>\r\n                \r\n                <div>\r\n                    <button class=\"ms-Button ms-Button--command\" data-bind=\"click: createPageTranslation, disable: !isFileNameValid()\"> \r\n                        <span class=\"ms-Button-icon\"><i class=\"ms-Icon ms-Icon--plus\"></i></span>\r\n                        <span class=\"ms-Button-label\" data-bind=\"text: buttonLabel\"></span> \r\n                    </button>\r\n                </div>\r\n\r\n            <!-- /ko -->\r\n        <!-- /ko -->\r\n    </div>\r\n</div>"

/***/ },
/* 250 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 251 */,
/* 252 */
/***/ function(module, exports) {

	module.exports = "<div id=\"language-switcher\">\r\n\r\n    <!-- ko if: availableLanguages().length > 0 -->\r\n        <ul>\r\n        <!-- ko foreach: availableLanguages -->\r\n            <li>\r\n                <!-- ko if: isCurrentLanguage -->\r\n                    <span data-bind=\"text: label\" class=\"is-selected\"></span>\r\n                 <!-- /ko -->\r\n                 <!-- ko ifnot: isCurrentLanguage -->\r\n                    <!-- ko if: isValidTranslation -->\r\n                        <a data-bind=\"attr: { href:url }, text: label\"></a>\r\n                    <!-- /ko -->\r\n                    <!-- ko ifnot: isValidTranslation -->\r\n                        <span data-bind=\"text: label, attr: { title: $parent.noTranslationMessage }\"></span>    \r\n                        <i class=\"ms-Icon ms-Icon--alert2 ms-font-sPlus ms-fontColor-orangeLighter\" aria-hidden=\"true\" data-bind=\", attr: { title: $parent.noTranslationMessage }\"></i>   \r\n                    <!-- /ko -->\r\n                 <!-- /ko -->                 \r\n            </li>\r\n        <!-- /ko -->\r\n        </ul>\r\n    <!-- /ko -->\r\n\r\n</div>"

/***/ },
/* 253 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 254 */,
/* 255 */
/***/ function(module, exports) {

	module.exports = "<div id=\"searchbox\">\r\n    <form data-bind=\"submit: doSearch\">\r\n\r\n            <div id=\"search-input\">\r\n                <input  type=\"text\" \r\n                        class=\"search\" \r\n                        data-bind=\"textInput: inputQuery, \r\n                        attr: { placeholder: selectedCategory() ? (searchPlaceHolderLabel() + ' ' + selectedCategory().name ) : searchPlaceHolderLabel }, \r\n                        css : { 'error': isError() },\r\n                        event: { focusout: function(){isError(false)} }\">\r\n            </div>\r\n            <div id=\"search-categories\" class=\"btn-group\">\r\n\r\n                <!-- ko if: isError -->\r\n                    <button type=\"button\" class=\"error\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"ms-Icon ms-Icon--exclamation\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                <!-- /ko -->\r\n\r\n                <!-- ko ifnot: isError -->\r\n                    <button type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"category\">\r\n                        <i class=\"ms-Icon\" aria-hidden=\"true\" data-bind=\"css: selectedCategory().iconClass\"></i>\r\n                    </button>\r\n                    <ul class=\"dropdown-menu\">\r\n                    <!-- ko foreach: searchCategories -->\r\n                        <li>\r\n                            <a data-bind=\"text: name, click: $parent.selectCategory\"></a>\r\n                        </li>\r\n                    <!-- /ko -->\r\n                    </ul>\r\n                <!-- /ko -->\r\n\r\n            </div><!-- /btn-group -->\r\n         \r\n    </form>\r\n</div>"

/***/ },
/* 256 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 257 */,
/* 258 */
/***/ function(module, exports) {

	module.exports = "<div id=\"footer\" class=\"push\">\r\n    <footer>\r\n        <div class=\"container\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"https://github.com/OfficeDev/PnP\">PnP on GitHub</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://dev.office.com/\">Office Dev Center</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://www.linkedin.com/in/franckcornu\">About the author</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"http://thecollaborationcorner.com/\">The collaboration corner</a>\r\n                </li>\r\n                <li>\r\n                    <span>Copyright© 2016 - Your company</span>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </footer>\r\n</div>\r\n\r\n"

/***/ },
/* 259 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 260 */,
/* 261 */
/***/ function(module, exports) {

	module.exports = "<div id=\"header-links\" data-bind=\"css: {'spinner': wait }\">\r\n    <ul>\r\n        <!-- ko foreach: nodes -->\r\n        <li>\r\n            <i class=\"ms-Icon\" aria-hidden=\"true\" data-bind=\"visible: $data.properties()['iconClass'], css: $data.properties()['iconClass']\"></i>\r\n            <a data-bind=\"attr: { href: url }, text: title\">\r\n            </a>\r\n        </li>\r\n        <!-- /ko -->  \r\n    </ul>\r\n</div>"

/***/ },
/* 262 */
/***/ function(module, exports) {

	module.exports = "<div id=\"searchbox-mobile\">\r\n\r\n    <button type=\"button\" data-bind=\"click: toggleSearchBox, style: { float: displaySearchBox() ? 'right' : 'inherit' }\">\r\n        <i class=\"ms-Icon ms-font-xl\" aria-hidden=\"true\" data-bind=\"css: { 'ms-Icon--x': displaySearchBox,'ms-Icon--search': !displaySearchBox() }\"></i>\r\n    </button>\r\n\r\n    <!-- ko if: displaySearchBox -->\r\n\r\n        <!-- ko if: isError -->\r\n            <button type=\"button\" class=\"error\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"ms-Icon ms-font-l ms-Icon--exclamation\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko ifnot: isError -->\r\n            <button type=\"button\" data-bind=\"click: toggleCategory\">\r\n                <i class=\"ms-Icon ms-font-l\" aria-hidden=\"true\" data-bind=\"css: selectedCategory().iconClass\"></i>\r\n            </button>\r\n        <!-- /ko -->\r\n\r\n        <form data-bind=\"submit: doSearch\">\r\n            <input  type=\"text\" placeholder=\"Search\" data-bind=\"textInput: inputQuery, \r\n                                attr: { placeholder: selectedCategory() ? (searchPlaceHolderLabel() + ' ' + selectedCategory().name ) : searchPlaceHolderLabel }, \r\n                                css : { 'error': isError() },\r\n                                event: { focusout: function(){isError(false)} },\r\n                                inputFocus: displaySearchBox\">\r\n        </form>\r\n    <!-- /ko -->\r\n</div>"

/***/ },
/* 263 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 264 */,
/* 265 */
/***/ function(module, exports) {

	module.exports = "<div id=\"carousel\">\r\n    \r\n    <!-- Flickity HTML init -->\r\n    <div class=\"carousel\">\r\n        <!-- ko foreach: items -->\r\n        \r\n        <div class=\"carousel-cell\">\r\n        \r\n            <img data-bind=\"attr : {'data-flickity-lazyload': CarouselItemImage ? (CarouselItemImage.Url + '?width=850') : $component.siteLogoUrl }, css : {'no-image' : !CarouselItemImage }\" />\r\n        \r\n            <span class=\"carousel-label\">\r\n                <a data-bind=\"text: Title, attr: {href: CarouselItemURL ? CarouselItemURL.Url : '#' }\">\r\n                </a>\r\n            </span>\r\n            \r\n        </div>\r\n        <!-- /ko -->\r\n    </div>\r\n\r\n</div>"

/***/ },
/* 266 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 267 */,
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(218)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./flickity.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./flickity.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(216)();
	// imports


	// module
	exports.push([module.id, "/*! Flickity v2.0.5\nhttp://flickity.metafizzy.co\n---------------------------------------------- */\n\n.flickity-enabled {\n  position: relative;\n}\n\n.flickity-enabled:focus { outline: none; }\n\n.flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n\n.flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* draggable */\n\n.flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n          tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/* ---- previous/next buttons ---- */\n\n.flickity-prev-next-button {\n  position: absolute;\n  top: 50%;\n  width: 44px;\n  height: 44px;\n  border: none;\n  border-radius: 50%;\n  background: white;\n  background: hsla(0, 0%, 100%, 0.75);\n  cursor: pointer;\n  /* vertically center */\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.flickity-prev-next-button:hover { background: white; }\n\n.flickity-prev-next-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 5px #09F;\n}\n\n.flickity-prev-next-button:active {\n  opacity: 0.6;\n}\n\n.flickity-prev-next-button.previous { left: 10px; }\n.flickity-prev-next-button.next { right: 10px; }\n/* right to left */\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n\n.flickity-prev-next-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n}\n\n.flickity-prev-next-button svg {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n\n.flickity-prev-next-button .arrow {\n  fill: #333;\n}\n\n/* ---- page dots ---- */\n\n.flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n\n.flickity-rtl .flickity-page-dots { direction: rtl; }\n\n.flickity-page-dots .dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n\n.flickity-page-dots .dot.is-selected {\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ }
]);
//# sourceMappingURL=app.js.map