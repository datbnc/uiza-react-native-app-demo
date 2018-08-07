Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);var _Base=require('./utils/Base64');var _Base2=_interopRequireDefault(_Base);var _Utils=require('./utils/Utils');var _Utils2=_interopRequireDefault(_Utils);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var API_VERSION='v3';var CDN_CONTROLLER_PRO='ucc.uiza.io';var CDN_CONTROLLER_STAG='stag-ucc.uiza.io';var CDN_CONTROLLER_DEV='dev-ucc.uizadev.io';exports.default={request:function request(url){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var callback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var opt,response,responseJson;return regeneratorRuntime.async(function request$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;opt=_extends({headers:{'Accept':'application/json','Content-Type':'application/json'}},options);_context.next=4;return regeneratorRuntime.awrap(fetch(url,opt));case 4:response=_context.sent;_context.next=7;return regeneratorRuntime.awrap(response.json());case 7:responseJson=_context.sent;if(!(typeof callback==='function')){_context.next=10;break;}return _context.abrupt('return',callback({responseJson:responseJson}));case 10:return _context.abrupt('return',responseJson);case 13:_context.prev=13;_context.t0=_context['catch'](0);_Utils.Logger.debug('error: ',_context.t0.message);if(!(typeof callback==='function')){_context.next=18;break;}return _context.abrupt('return',callback(null));case 18:return _context.abrupt('return',null);case 19:case'end':return _context.stop();}}},null,this,[[0,13]]);},getPlaybackToken:function getPlaybackToken(api,appId,entityId,callback){var url,options,res,playbackToken;return regeneratorRuntime.async(function getPlaybackToken$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:url=parseAPIUrl(api)+'/api/public/'+API_VERSION+'/media/entity/playback/token';options={method:'POST',body:JSON.stringify({entity_id:entityId,app_id:appId,content_type:'stream'})};_context2.next=4;return regeneratorRuntime.awrap(this.request(url,options));case 4:res=_context2.sent;_Utils.Logger.debug('getPlaybackToken: '+url,res);playbackToken=null;try{if(res.data.token){playbackToken=res.data.token;}}catch(e){}if(!(typeof callback==='function')){_context2.next=10;break;}return _context2.abrupt('return',callback(playbackToken));case 10:return _context2.abrupt('return',playbackToken);case 11:case'end':return _context2.stop();}}},null,this);},getCDNVod:function getCDNVod(env,playbackToken,appId,entityId,callback){var domainAPI,param,url,options,res;return regeneratorRuntime.async(function getCDNVod$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:domainAPI=CDN_CONTROLLER_PRO;if(env==='stag'){domainAPI=CDN_CONTROLLER_STAG;}else if(env==='dev'){domainAPI=CDN_CONTROLLER_DEV;}param={app_id:appId,entity_id:entityId,type_content:'stream'};url='https://'+domainAPI+'/api/private/v1/cdn/linkplay?'+_Utils2.default.queryParams(param);options={headers:{Authorization:playbackToken}};_context3.next=7;return regeneratorRuntime.awrap(this.request(url,options));case 7:res=_context3.sent;_Utils.Logger.debug('getCDNVod: '+url+', '+JSON.stringify(options)+', ',res);if(!(typeof callback==='function')){_context3.next=11;break;}return _context3.abrupt('return',callback(res));case 11:return _context3.abrupt('return',res);case 12:case'end':return _context3.stop();}}},null,this);},getCDNLive:function getCDNLive(env,playbackToken,appId,entityId,streamName,region,callback){var domainAPI,param,url,options,res;return regeneratorRuntime.async(function getCDNLive$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:domainAPI=CDN_CONTROLLER_PRO;if(env==='stag'){domainAPI=CDN_CONTROLLER_STAG;}else if(env==='dev'){domainAPI=CDN_CONTROLLER_DEV;}param={app_id:appId,entity_id:entityId,stream_name:streamName,region_type:region};url='https://'+domainAPI+'/api/private/v1/cdn/live/linkplay?'+_Utils2.default.queryParams(param);options={headers:{Authorization:playbackToken}};_context4.next=7;return regeneratorRuntime.awrap(this.request(url,options));case 7:res=_context4.sent;if(!(typeof callback==='function')){_context4.next=10;break;}return _context4.abrupt('return',callback(res));case 10:return _context4.abrupt('return',res);case 11:case'end':return _context4.stop();}}},null,this);},getLiveDetail:function getLiveDetail(api,token,entityId,feedId,callback){var param,url,options,res;return regeneratorRuntime.async(function getLiveDetail$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:param={entityId:entityId,feedId:feedId};url=parseAPIUrl(api)+'/api/private/'+API_VERSION+'/live/entity/tracking?'+_Utils2.default.queryParams(param);options={headers:{Authorization:token}};_context5.next=5;return regeneratorRuntime.awrap(this.request(url,options));case 5:res=_context5.sent;if(!(typeof callback==='function')){_context5.next=8;break;}return _context5.abrupt('return',callback(res));case 8:return _context5.abrupt('return',res);case 9:case'end':return _context5.stop();}}},null,this);},getLiveView:function getLiveView(api,token,entityId,callback){var param,url,options,res;return regeneratorRuntime.async(function getLiveView$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:param={id:entityId};url=parseAPIUrl(api)+'/api/private/'+API_VERSION+'/live/entity/tracking/current-view?'+_Utils2.default.queryParams(param);options={headers:{Authorization:token}};_context6.next=5;return regeneratorRuntime.awrap(this.request(url,options));case 5:res=_context6.sent;if(!(typeof callback==='function')){_context6.next=8;break;}return _context6.abrupt('return',callback(res));case 8:return _context6.abrupt('return',res);case 9:case'end':return _context6.stop();}}},null,this);},getEntityDetail:function getEntityDetail(api,token,entityId,callback){var url,options,res,entityDetail;return regeneratorRuntime.async(function getEntityDetail$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:url=parseAPIUrl(api)+'/api/public/'+API_VERSION+'/media/entity?id='+entityId;options={method:'GET',headers:{Authorization:token}};_context7.next=4;return regeneratorRuntime.awrap(this.request(url,options));case 4:res=_context7.sent;entityDetail=null;try{entityDetail=res.data;}catch(e){}if(!(typeof callback==='function')){_context7.next=9;break;}return _context7.abrupt('return',callback(entityDetail));case 9:return _context7.abrupt('return',entityDetail);case 10:case'end':return _context7.stop();}}},null,this);}};var parseAPIUrl=function parseAPIUrl(api){var url=_Base2.default.atob(api);return _Utils2.default.urlToHttps(url);};
//# sourceMappingURL=API.js.map