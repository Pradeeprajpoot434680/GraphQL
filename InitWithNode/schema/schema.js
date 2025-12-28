const { GraphQLSchema ,GraphQLObjectType , GraphQLString,GraphQLInt} = require('graphql');



//curtom object
const userType = new GraphQLObjectType({
    name:"User",
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
    }
})

/*
write query like this to fetch data
{
  user(id:"1"){
    age,
    name
  }
}
  */
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:userType,
            args:{ id :{ type: GraphQLString}},  
            resolve(parent,args){
                //db call
                const users = [
                    {name:"Pradeep",id:"1",age:20},
                    {name:"Rahul",id:"2",age:21},
                ];


                return users.find(user => user.id === args.id)
            }
        },
        hello:{
            type:GraphQLString, //return type
            resolve(){
                return 'Hello World'
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query:RootQuery
});