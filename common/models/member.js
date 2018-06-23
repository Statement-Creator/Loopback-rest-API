'use strict';

module.exports = function(Member) {
    //register a custom endpoint
    Member.remoteMethod('sayMyName',{
        accepts: {arg: 'firstName',type: 'string' ,description:'takes a name and chucks it',required:true},
        description:'takes a name and chucks it',
        http: {path:'/say-my-name/:myName', verb: 'get'},
        returns:{arg:'firstName',type:'object'}
    })
    //apply some custom logic to the endpoint
    Member.sayMyName =function(firstName,callback){
        callback(null, firstName);
    }

    Member.beforeRemote('sayMyName',function(context,unused,next){
        const firstName = context.args.firstName; //think of it as params
        console.log('first name is: '+ firstName);
        next();
    })
    Member.afterRemote('sayMyName',function(context,unused,next){
        context.result.firstName = "sally";
        context.result.lastName = "smith"
        next();
    })
};
