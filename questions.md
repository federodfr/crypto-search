1.  # What is the difference between Component and Pure Component? Give an example where it might break my app.
        Pure Component re-render it only if their props or state change, on the other hand Component re-render even
        if their props or statedoesn't change .
        Pure Component could break my app if i add a new value to an array. This error happens because array duplicates
        the refference of the original array and change the refference value, and keeps the original value inmutable,
        avoiding re-rendering of the component

2.  # Context + ShouldComponentUpdate might be dangerous. Why is that?
        The reason of context + souldComponentUpdate is dangerous in because context returns this updated data async,
        and if shouldComponentUpdate is solved when context is making a call and doesn't return the new value, the
        updated component resolves this values whit older data.

3.  # Describe 3 ways to pass information from a component to its PARENT.
        - Using a state controler(like redux): When you use redux the state of a value handlered by redux is
            available for all the componentes in the app.

        -   Usin setState:  Use setState on parent component and passing the setState function on child props. Example:
                parent.jsx:
                    const [data, setData] = useState({});
                    return <Child setData={setData()}>

4.  # Give 2 ways to prevent components from re-rendering.
        -   useCallback: The function is called only when one or more values assigned on the array argument of hook
            change. This behaviour prevents unnecessary re-render of the components inside the function. 
        -   useMemo: Similar to useCallback with the difference that useMemo change a value. In this case prevents
            unnecessary re-render of components that deppends of the value, because this is unmutable until the
            value is updated.

5.  # What is a fragment and why do we need it? Give an example where it might break my app.
        Fragment is a React component that allow wrap several components. The benefict of Fragment is that it doesn't add new tags on DOM, being usefull to perform the App.
        Fragment could breaks my App if i need add some styles to a group of components wrapped on this. In this case the style doesn't apply because the DOM doesn't generate a tag container on the HTML structure.

6.  # Give 3 examples of the HOC pattern.

7.  # What's the difference in handling exceptions in promises, callbacks and async...await?

8.  # How many arguments does setState take and why is it async.
        setState have two arguments, the first one is the value that we need to know and the other one is a funcion to change or set the value. This hook is async because the new value is setted in the new render cycle.

9.  # List the steps needed to migrate a Class to Function Component.
        A - Change the class line for an arrow function:
                class Component extends Components { ... }  TO  const Component = () => { ... }
        B - Move props constructor of class to args of const:
                constructor(props){
                    super(props)                            TO  const Component = (... props) => { ... }
                }
        C - Change render method for return:
            render (return <div> ... </div>)                TO  return <div> ... </div>
        D - Convert all methods of class on arrow functions:
                onEvent(args) {...}                         TO  const onEvent = (args) => {}
        E - Change this.state on constructor of class and replace for useState:
                constructor(props){
                    super(props),
                    this.state {                            TO  [value, setValue] = useState(0)
                        value: 0
                    }
                }
        F - Remove all lifecycle methods and replace it for useEffect:
                    componentDidMount() { ... }             TO  useEffect(() => { ... }, [])

10. # List a few ways styles can be used with components. 
        -   Inline-style: Assing styles inside of the component tag:
            <Component style={{ ... }}> 
        -   ClassName: add a className prop on the component, and assign on CSS file of the name used whit this structure:
            index.js
                <Component className="my-style">
            styles.css
                .my-style { ... } 
        -   Styled components: Library that allow create a component like a const and assign a HTML element or Component
            behaviour. Is mandatory create this one in a file .js:
                index.js
                    const Component = styled.div`...`

11. # How to render an HTML string coming from the server.
        To render an HTML string provided for the server is neccesary use innerHTML prop and assign th HTML string.
            <div innerHTML={data.HTMLString} />
