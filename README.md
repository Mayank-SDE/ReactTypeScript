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
