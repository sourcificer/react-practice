# Documentation

## Hooks

```
const [hookVar, setHook] = useState("Default Value")
```

State: stored information accessible at a given instant of time
( by a user ) is called the state ( or application state )

```
{ arr.map(arrElement => (
<option key={arrElement} value={arrElement}>
{arrElement}
</option>
))}

```

every time the above iterator is executed
reactJS will think that the created a new
set of options and destroyed the previous
ones. As a result it will perform some
rudementary operations.
therefore, the key "parameter" acts as a
primary key, as a result whenever the above
function is executed it will know that the
values have not been destroyed/created they
just have been reodered ( if that ) becuase
for each element there can one and only one
parimary key.

### effects ( effectul code )

```
:x: React Hook useEffect contains a call to 'setState'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [setState, animal] as a second argument to the useEffect Hook.
```

The dependencies in the above prompt refers to the "parameters" that the hook useEffect depends on.
This is because the useEffect function is executed every time the page reRenders even if there is no
change in any of its parameter and thereby no change in the properties it is setting.
For Example:

```
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedStr = breeds.map(({ name }) => name);
      setBreeds(breedStr);
    }, console.error);
  }, [animal, setBreeds, setBreed]);
```

in the above snippet the useEffect function only depends on the animal property and the only other requirement being that teh useEffect executes on first render ( which I believe it does implicitly ). there we need to add the "dependencies"(properties on which useEffect depends on) as the second argument in form of list in the useEffect method call.
Now we do know that setBreeds and setBreed are not going to change as long as the useEffect() is not executed but we need to pass them as dependencies because useEffect in-a-way do depend on them as without the setBreed and/or setBreeds method ( and maybe without their individual hooks ) the useEffect method will not be able to execute some of its statements particularly the ones executing the given two dependant methods. In laymann terms, the setBreeds, setBreed and animal properties are used inside the useEffect() function and they are decalared outside the function thereby useEffect is dependant on them hence dependancies.

> To execute it once pass empty list ( `[]` ) as the second argument of useEffect
