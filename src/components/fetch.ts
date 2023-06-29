type method = 'GET'|'POST'|'PUT'|'DELETE';
export interface fetchArgument {route:string,method:method,body?:any,headers?:any};
const defaultArgument:fetchArgument = {route:'',method:'GET',body:undefined,headers:undefined}

const fetchComponent = async<T>({route,method,body,headers}:fetchArgument = defaultArgument) => new Promise<T>( async(resolve,reject) => {

    const bundle:[string,any] = [route,{method,mode:'cors',body,headers}];

    await fetch(...bundle)
    .then( resp => resp.json() )
    .then(resolve)
    .catch(reject)
    
});

export default fetchComponent