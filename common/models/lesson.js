'use strict';

module.exports = function(Lesson) {

    Lesson.afterRemote('findById',function(context,unused,next){
        context.result.cfURL = 'www.cfURL.com';
        next();
    })

};
