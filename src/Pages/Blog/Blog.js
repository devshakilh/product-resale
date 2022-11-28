import React from 'react';

const Blog = () => {
    return (
        <div className='bg-white mx-2'>
            <div>
                <h1 className='text-4xl font-bold text-black'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl font-semibold text-black'><span className='items-center justify-center'>*</span> As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-black'> How does prototypical inheritance work?</h1>
                <p className='text-xl font-semibold text-black'><span className='items-center justify-center'>*</span> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-black'>What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl font-semibold text-black'><span className='items-center justify-center'>*</span> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly,</p>
            </div>
            <div>
                <h1 className='text-4xl font-bold text-black'>React vs. Angular vs. Vue?</h1>
                <p className='text-xl font-semibold text-black'><span className='items-center justify-center'>*</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;