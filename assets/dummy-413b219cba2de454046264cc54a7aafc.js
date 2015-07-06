define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,r,i){"use strict";var a;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]}),r["default"](a,i["default"].modulePrefix),e["default"]=a}),define("dummy/components/shrug-guy",["exports","ember-cli-shrug/components/shrug-guy"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,i=!1;e["default"]={name:"App Version",initialize:function(e,a){if(!i){var o=r(a.toString());n["default"].libraries.register(o,t["default"].APP.version),i=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";function r(e,r){var i=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[i]&&(window[i]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},render:function(e,t,n){var r=t.dom,i=t.hooks,a=i.content;r.detectNamespace(n);var o;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(o=this.build(r),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=r.cloneNode(this.cachedFragment,!0))):o=this.build(r);var u=r.createMorphAt(o,0,0,n),d=r.createMorphAt(o,2,2,n);return r.insertBoundary(o,0),a(t,u,e,"shrug-guy"),a(t,d,e,"outlet"),o}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(r));return{"default":i}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-cli-shrug",version:"0.1.0.532b6e9f"});