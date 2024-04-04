Typescripts adds type saftey on your javascript code.

Typescript helps you to catch & fix type related errors earlier which may result in complex structure to understand.

Typescript Essentials -

typescript does not run on the browser and javascript runs on the browser.

We will only use typescript during the development process with extra type saftey which will tell you about the potential errors.

npm install --save-dev typescript

To install typescript globally -

npx tsc

To install typescript in your system you must have the nodejs installed on your system to install dependencies or extra libraries using the npm command.

Working with the Type Inference and Explicit type annotation -

The typscript file contains the .ts extension which tell the ide that this file contains the typescript code.

When working with the typescript we will still write the javascript code but when working with the .ts file you get the extra feature available like type saftey.

Typescript wants us to avoid the type related errors.

Typescript inferred type of the variable using the value assigned to it and this is called Type Inference.

basic Primitive Types -

1. string
2. number
3. boolean
4. undefined
5. null
6. bigint
7. symbol

We can also assigned multiple types to an variable at the same time using the union | so that it can have multiple type of values.

const name:string|number|boolean;

name="mayank";
name=45;
name=true;

We can also add the object type to the variables.

The more specific the type is the more saftey we are assing to the variable.

And assigning an generic type like object will not add that much type saftey.

let user:objec;

It is far more better as the below type assignement is more strict and this is telling that the type of value user is going to store must have the following type of property with specified type ex - string , boolean , number.

let user : {
name:string;
age:number;
isAdmin:boolean;
id:string;
}

Working with array types -

We can assign Array<T> as an type =.

let user :Array<string>=["a","n"];

string[] and Array<string> are same.

let user : string[] | number[] | {}[];

Adding types to functions , parameters and return types.

const variables must be intialized when declared.

parameters are asigned type , function also assigned return type -

function fun(a:number,b:string):void
{
console.log(a,b);
}

defining the function types -

Since in js we can pass the function as an parameter to another function and thus there is need to define the type of the function. Assiging the type to the callback function.

function add( a : number , b : number , callbackFun:(a:number,b:number)=>number)
{
callbackFun(a,b);
}

To assign the type to the function we use the arrow function to tell the typescript about the type of function we are pasing as an parameter.

so we will always use the arrow function for assigning the type function.

We can also create the type aliases using the type keyword used for creating the custom type.

type AddObj = {
a:number;
b:number;
}

type AddFn=(a:number,b:number)=>number;

Assiging the object types using the interface -

We create interface using the interface keyword which is not the javascript feature.

interface Credentials {
username:String;
password:string;
}

Interfaces vs type -

In general always use the type keyword.

Interface are not used for defining the union types , primitive types.

Interface are only used for object types and function.

Any class can also use the interface by implementing it.

Any class implements the interface then it must define and intialize all the properties that interface have.

Interface are basically contracts that classes have to admit to.

One more advantage of interface that we can add more functionaloty to interface by re-defining it again and the new property will be added to the interface.

May be you want to define the library as an interface and then anyone can add the new voccabulary.

We can also merge different types using the union.

types A={

}

type B={

}

type C = A | B;

Being specific with Literal types -

let role : 'user' | 'admin' | 'client'; This is called literal types.

Now role is forced to have these values 'user' , 'admin' and 'client'.

typeof variableName === 'string' it returns the type of the variable and it is an feeature of javascript.

typeof is an type guard just like instanceof and property in Object.

we can use the typeof with only primitive types as the custom types does not exists after the compilation.

Generic type are the type that works with another type.

type DataStorage<T,U,M>={
storage : T[] ;

}

Always remember const variable must be initialized when used with typescript while defining.

creating the react with typescript project -

-> npm create vite@latest applicationName

Now vite build tool takes responsibility of converting the typescript code into the Javascript code.

It is an good practice to add extension while importing.

We can also store props types as custom types and interface.

Defining an type for props children.

If your component is self closed then the children prop will be undefined.

The type asigned to the children props is of type ReactNode imported from 'react' which is coming from the package @types/react package which contains extra types definintion used for assigning the react props , component.

Whenever you are importing the type from some library always add the type decorator ahead of it so that you can tell the build tool that it can be removed after the compilation.

There is one more alternative that PropsWithChildren imported from the react which can be assign directly to the type and then assigned to the props as an type.
import {type PropsWithChildren} from 'react';

type CourseWithProps = PropsWithChildren<{
title:string;
}>;

function Course (props:CourseWithProps){
return <>{props.title}</>;
}

PropsWithChildren is an generic type which takes other props types as an generic argument.

All the built in components and custom components can have the key prop which can be specified without using the type assignment to the key prop.

Another alternative of assinging the props type is when defining the functiional component using the arrow function.

Where we assign the type to the functional component as FC stands for Functional Component which is another type imported from the 'react' defined in the @types/react package.

FC<{title:string}> Now FC<> is also an generic type which takes the type as generic parameter which is used for defining the type of another props other than the children prop.

To run the vite project while development -> npm run dev

To make any object's property assign as an attribute to any component or element just pass this as an attribute {...objectName}. Now all the object property will be assigned as an attribute to the element or component.

Using useState with typescript -

Since , components are re-usable building blocks.

Typescript infered some variable as an never type when typescript consider the variable as of unkown type and you can never assign any value to the variable of never type.

useState is an generic function which takes the type as an generic parameter while defining useState<>() with typescript.

We can take input from the user using the useState() and two way binding i.e using the event.target.value and onChange attribute on the elements.

We can also use the in built class new FormData(event.currentTarget) . Now this is the form element using which we can extract the data from the form. But the thing is all the input elements must be assigned the name attribute which is further used for retrieving the form input elements values.

The form element has the onSubmit attribute which takes the function as an value and that function has the event as an parameter which is of type FormEvent which is another type imported from the 'react' which is coming from the @types/react package definition.

FormEvent<HTMLFormElement> is an generic type which takes the HTMLFormELement as an generic attribute.

<HTMLFormElement> type is coming from the dom libray which is defined inside the tsconfig.json file inside it the "lib" object array.

This lib types makes sure which base types will be available on the typescript in general.

event.target tells about the element from where the event was started.

event.currentTarget tells about the due to which elemenet the listener is triggered.

At last we can also use the ref , useRef imported from 'react' for extracting those input values.

useRef contains undefined as an default starting values and the ref props does not take the undefined as an value.

So while using the useRef() we must define the starting values as the null.

as ref prop does not takes the undefined as an value but it can take null as an value.

undefined means it does not have any value and null means for time being it is null but in future it may have a value.

useRef() returns the object which have the current property which is used for accessing the value of the element.

! mark is the non-null assertion operator.

useRef<HTMLInputElement> is also an generic type which takes the html element type as an generic parameter.

event of type FormEvent imported from 'react' coming from the @types/react package also have the property to reset the form input element values.

event.currentTarget.reset(). This method will erase all the input elements values.

Advance Component Types -

Building Dynamic and Flexible Components with Typescript.

Rendering different content based on the props.

Building the Wrapper Components.

Building Polymorphic Components.

Forwarding Refs and how you expose the components APIs.

If you are asiging any kind of jsx code to any variable then that variable will have the type ReactNode imported from the 'react'.

To make any property optional we can add the ? at the last of the property. Which means it is not sure that the property will exists or not.

We can merge two or multiple types using the & operator.

type type1 = {};

type type2 = {};

type mergeType = type1 & type2;

There are two type which we can import from the 'react' and those are ComponentPropsWithRef<''> and ComponentsPropsWithoutRef<''>.

Both the types are used for the condition where we are not knowing about what props we are going to get for an element and we are applying those props as an attribute to some element then we pass the element name as an generice type parameter which gives or set props to all the default attribute available to that element.

ComponentsPropsWithRef are used when you are setting or using the forwardRef() i. when you are forwarding the ref to child component then this type will include that ref type.

ComponentProps<'button'> means you are defining all the possible attribute with their types to tell typescript.

Working with Types Predicates and facing typescript limitation -

Type predicates is an function starting with isFunctionName() which takes parameters assigned with multiple types and returns an boolean true or false and based on the boolean value return we specify the type of the parameter passed i.e narrowing down the multiple type to one type using the parameterName is TypeName.

function isAnchor( props : AnchorType | ButtonType ) : props is AnchorType {

    return (expression);

}

Now if the expression will return the true value then it means that the props is of type AnchorType and typscript will understand the type of props.

But it has the limitation that wrapper component will validate all the attribute possible of all type and which is wrong.

To solve this issue we merge types and assign the never type to those attribute which we never want to have as an attribute.

Polymorphic Components -

it is an fancy way of saying that this is an polymorphic component which means it is an wrapper component where we don't know in advance which component it will wrap.

Instead polymorphic component is able to wrap any kind components.

polymorphic component recieve an another component as props which you return inside the same component.

Now if are passing the component as an props you must assign the type to the component which is passed as an props and that type is ElementType imported from the 'react'.

ElementType means any identifier that is evaluated to some component and used for returing as an JSX code.

However JSX code is of type ReactNode.

We use the as keyword in the props object as an property to recieve component.

Using the forwardRef with the typescript -

forwardRef are used for making the ref defined in parent component available in the child component. It's main purpose is to get the DOM node or element from the underlying child component using the forwardRef method imported from the 'react'.

We wrap the child functional component with the forwardRef() method and then in the parameter of functional component we are not only recieving the prop but also the ref as an parameter.

The type assigned to the ref parameter is ForwardRef<any> imported from the 'react'.

ForwardRef<> is also generic type which can take any type as an parameter.

Or instead we are using the method forwardRef<refType,propsType>() it is also an generic type where using which we can assign the type of ref we are using.

however we are using the forwardRef<T,U> it takes two generic type as an generic parameter the firest one is the ref type and second one is the props type.

To get the data from the form element -

const handleSubmit = (event : FormEvent<HTMLFormElement> ) => {

const formData = new FormData(event.currentTarget);

const data = Object.formEntries(formData);

}

<form onSubmit={handleSubmit}>
</form>

'as' is an keyword used for changing the type of an variable.

The object return by the useRef<HTMLFormElement>() also have the reset() method for clearing all the input fileds from the form.

form.current.reset().

useImperativeHandle() hook imprted from react is used for exposing an api from child component to parent component and useImperativeHandle() is used with the forwardRef<>() method.

We can use the useImperativeHandle() hook only inside that component which is wrapped by forwardRef<>() method.

useImperativeHandle(ref,()=>{
return {};
}) recieves two parameter the first one is the ref and second one is the function which returns the object.

Whatever you will return on the second function argument can be used on the parent component of current component.

React's Context API and useReducer() hook with TypeScript -

React Context API is used for maintainaing the state among multiple components.

1. First of all create the store folder and inside creat the random-context.tsx file.

2. Import createContext from 'react' for creating context and assign it to the
   export const RandomContext=createContext();

3. createContext() method contains the data that is needed in different part of the app though.

4. createContext() needed an initial value to manage among multiple components and createContext<genericType>(initialValue) when used with typescript is an generic method.

5. After all this we will create an function RandomContextProvider() which will be responsible for managing the state among all the components and making the RandomContext state available to all components.

6. The function RandomCOntextProvide({children}:RandomType) can recieve the children props for return and wrapping around while returning the JSX <RandomContext.Provider value={}>{children}</RandomContext.Provider>.

7. We must set the value attribute to the type of RandomContext.

8. We must export default RandomContextProvider() function so that we can use it inside any other component. we can wrap the jsx code inside those components with the <RandomContextProvider></RandomContextProvider> component function.

9. If we wrap the JSX code return inside the App.tsx code with this function then all the children component rendered inside the JSX code return by the App component can tap into the RandomContext.

10. To use the RandomContext inside the children component of App component we can use the useContext() hook which takes the exported RandomContext as an parameter and return all the state values we have defined inside the RandomContext state.

11. However instead of for using the RandomContext state in every component we are using the useContext() hook and then accessing the state , else we can create our own custom hook which is the mixture of several hooks and export it from the random-context.tsx file.

12. Custom hook must always start with the use keyword as prefix in thier name.

By adding the ! mark as an suffix to any property , function , variabel we are telling typescript that its value can never be null.

Getting started with the useReducer() hook -

Just like useState() useReducer() is also used for maintiang the state but useReducer() is used when you are having an complex state to manage and you have potentially multiple triggers which may change the state.

useReducer() takes two arguments the first one is the reducer function and second one is the initialState.

reducer function the first argument of the useReducer() hook is executed by react whenever we dispatch the action. We will be able to dispatch the action with the help of the return value of the useReducer() hook.

useReducer() returns the array having two elements. The first element is the current state and the second element is the dispatch function which can be called for changing the state. And whenever the state change then the the component function to which the useReducer() belong will be executed again and the new state will be made available with the first element of the array returned by the useReducer() hook.

reducer function which is the first argument of the useReducer() hook is responsible for generating the state.

The reducer(state,action) function takes two arguments state and the action.

action is the object have the type and payload property and based on the type property values the operation is performed on the state and new state is returned by the reducer function.

action is the object which you are sending to the reducer function using the dispatch(newAction) method and based on the action object recieved by the reducer function the operation is performed by on the state and new state is returned.

Inside the reducer function instead of manipulating the state directly we must always produce the new state and return it.

Side Effects and Data fetching using TypeScript -

using useEffect() with the typescript.

setInterval(()=>{

},milliseconds)

We can use ref also for storing an variable value which must remain constant throughout the re-render cycle of components.

The function returned by the useEffect() is executed when the component is removed from the dom.

Data Fetching -

We can also use the tanstack query library.

We will be creating the util folder inside the src folder and inside it we will be creating the http.ts file.

zod is an third party library which is used for validating the fetched data from the server and giving automatically type inference based on validation result.

When you do not sure about the type of variable then instead os assigning the any type we can assign unkown to it using the as keyword because unknown gives more type saftey as compared to the any type.

Using Redux with Typescript -

Redux is used for state management globally throughout the application.

Redux is used for more maintaing more complex state.

createPortal((JSX code returned inside the component),position of DOM using the document.getElementById('some-id')) is an method imported from the react-dom used for breaking the parent child relationship between two components and it helps in rendering the component where we want in the dom using the element id.

Redux Setup --

npm install @reduxjs/toolkit

We also need to install the react-redux package because that package will allow us to connect to the redux js store.

Creating the redux store and first slice.

The idea behind the redux is to have the single shared central Redux store that stores and manages the entire shared state.

From the component we dispatch the action and those action triggers reducer functions not created by the useReducer() hook instead managed by redux that will then update the state.

Components can read data from the store.

1. Creating the store folder and inside it we are creating the store.ts file. Inside this file the general redux store is setup.

2. we will import {configureStore} from '@reduxjs/toolkit'; This method is used for creating the redux store and it takes two objects and this ibject tells redux how that store is going to setup.
   configureStore({}) takes an object which internally contains mutiple reducer functions. Typescript will inferred the type of data it will manage from that reducer function.

3. Create another file inside the store folder cart-slice.ts. Because when working with redux , you will need slices.

4. You can think of store as an group of multiple state slices.

5. we will import createSlice method from the @reduxjs/toolkit inside the file cart-slice.ts for creating the slice and then export it , so that we can use it inside the store.ts file.

6. createSlice() takes an object as an argument where we can setup the initial state , name of the slice and the reducers property which contains the object where all the functions are defined using which we will manipulate the state.

7. All the functions defined inside the reducers: property object will have two parameters state and the action. However we have no need to assign the type to the state as it is already inferred by the typescript but talking about the action we can import te type PayloadAction from the @reduxjs/toolkit which we can assign as an type to the action parameter.

8. We only assign the type PayloadAction to the action parameter when only we want to have extra data in the action parameter other than the type property inside the action object.

9. PayloadAction<> is also an genric type which takes the type generic parameter which define the type of action extra data is going to passed.

10. You always have to make the store available to the components. We will import the Provider component from the react-redux package and wrap the return jsx code with the <Provider ></Provider> components.
    This Provider component takes the store prop as an attribute <Provider store={store}></Provider>.

11. We have to dispatch the action and use the useDispatch() hook.

12. @reduxjs/toolkit created the actions types and action object for you. These actions are stored inside the cartSlice.actions property where the name of function defined inside the reducers property inside the the object inside the createSlice method are same. You export them from the cart-slice.ts file and extract them like this

export const {addToCart , removeFromCart}=cartSlice.actions;

13. For dispatching the actions we can use the useDispatch() hook imported from the react-redux and ite returns the dispatch function.

14. But it is not recommended to use the useDispatch() hook directly inside the component instead for achieving extra type saftey we must create an extra file hook.ts inside the store folder.

15. You must create an extra type inside the store.ts named as an AppDispatch which must be exported so that it will be define which type of object is going to get dispatched in your application. And this type is assigned the typeof store.dispatch value i.e storing the type of the store.dispatch object into the AppDispatch type and at last exporting it.

16. Inside the hook.ts file we will be creating the custom hook which will directly return the useDispatch and the type of value the useDispatch is going to return is the AppDispatch.

17. To read the data from the store we will be using the useSelector() hook and as we are not using the useDispatch() directly inside the component. Similarly, we will be using the useSelector() hook inside the hook.ts file.

18. hook.ts file will be common for all the state slices. So while exporting the useCartSelector function we must assigned the type TypedUseSelector to the useCartSelector function which is imported from the react-redux and is an generic type.

19. The generic type it takes is the type we define inside the store.ts file and export it which is assigned the value of ReturnType<typeof store.getState> where ReturnType is the globally available object having generic type which returns the type of function passed to it as an generic parameter.
