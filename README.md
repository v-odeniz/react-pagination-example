## Pagination Example

A simple implementation of [Pagination](https://en.wikipedia.org/wiki/Pagination).


```javascript
function Pagination({ pageSize, children }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalChildren = React.Children.count(children);
  const totalPages = Math.ceil(totalChildren / pageSize);

  const childrenArray = _.chunk(React.Children.toArray(children), pageSize);

  return (
    <>
      {childrenArray[currentPage]}
      <Radio.Group defaultValue={0} size={totalPages}>
        {generateNButtons(totalPages, setCurrentPage)}
      </Radio.Group>
    </>
  );
}
```

👉 [Live Demo](https://codesandbox.io/s/github/denvash/react-pagination-example)

### Explanation

Refer to [React.Children](https://reactjs.org/docs/react-api.html#reactchildren) docs.

👉 `React.Children.count(children)`
> Returns the total number of components in children, equal to the number of times that a callback passed to map or forEach would be invoked.

👉 `React.Children.toArray(children)`
> Returns the children opaque data structure as a flat array with keys assigned to each child. Useful if you want to manipulate collections of children in your render methods, especially if you want to reorder or slice this.props.children before passing it down.

👉 lodash [Array/chunk](https://lodash.com/docs/4.17.11#chunk) method.

```javascript
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
```