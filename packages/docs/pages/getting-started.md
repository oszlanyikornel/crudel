---
title: Getting Statred
---

## Installing

Frist, you need to install some required packages

```
npm install react swr axios

yarn add react swr axios
```

Then, you can install the crudel package

```
npm install @crudel/client

yarn add @crudel/client
```

## Usage

You can get your data with the useCrudel hook

```jsx
import { useCrudel } from "@crudel/client"

export default Projects() => {
    const { data, error, loading, remove } = useCrudel("/api/projects");

    if (error) return <div>failed to load</div>
    if (loading) return <div>loading...</div>
    if (!data) return <div>no data</div>

    return (
    <div>
        <p>Projects: {data.map(p => `${p.name}, `)}</p>
        <button onClick={() => remove(data[0].id)}>Delete</button>
    </div>
    )
}
```

If you only want to modify data without fetching, you can use custom functions

```jsx
import { create } from "@crudel/client"

export default Projects() => {

    return (
    <div>
        <p>Projects</p>
        <button onClick={() => create("/api/projects", { name: "New Project" })}>
            Add Project
        </button>
    </div>
    )
}
```
