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

```

```
