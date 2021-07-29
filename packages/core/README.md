# Crudel

React CRUD hooks built on top of swr.

## Getting started

### Installing

Frist, you need to install some required packages

```
npm install react swr axios

yarn add react swr axios
```

Then, you can install the crudel package

```
npm install @crudel/core

yarn add @crudel/core
```

### Usage

```JavaScript
import {useCrudel} from "@crudel/core"

export default Home() => {
    const { data, error, loading, remove } = useCrudel("/api/projects");

    if (error) return <div>failed to load</div>
    if (loading) return <div>loading...</div>
    if (!data) return <div>no data</div>

    return (
    <div>
    <p>Current Project: {data.name}</p>
    <button onClick={() => remove(data.id)}>Delete</button>
    </div>
    )
}
```
