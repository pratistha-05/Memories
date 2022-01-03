export default (posts = [],action) => {
    console.log(action.type);
switch(action.type)
{
    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [...posts,action.payload];//action.payload stores new post
    default:
        return posts;
}
};