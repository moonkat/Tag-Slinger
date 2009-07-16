/**
 * Tag Slinger
 * (with nothing but a slingshot and a tag you can spread the love around)
 * 
 * Assign a tag to another element and it's value from the calling element.
 * 
 * @example
 * <... remotetag="goto" remotetagval="step3" remotetagtarget="funnyButton">
 * Will result in the funnyButton element having: goto="step3" as one of it's properties.
 */

/* Necessary files: jquery.js
				jquery.livequery.js
*/


var tagSlingerSelector 		= '[remotetag]';
var tagSlingerTag 			= 'remotetag';
var tagSlingerValTag 		= 'remotetagval';
var remoteTagTargetTag 		= 'remotetagtarget';
$(tagSlingerSelector).livequery(function(){
	$(this).bind('click change',function(){
		try {
			var target = $(this).attr(remoteTagTargetTag), tag = $(this).attr(tagSlingerTag), val = $(this).attr(tagSlingerValTag);
			$('#'+target).attr(tag, val);
		} catch(err) {
			log(err);
			log('Thrown in Tag Slinger (remotetag=) trying to assign'+tag+'='+val+' to target:'+target);
		}
	});
});
