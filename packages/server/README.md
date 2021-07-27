# Crudel

A nextjs CRUD handler built on top of next connect.

## Getting started

### Installing

Frist, you need to install required packages

    npm install next-connect
    yarn add next-connect

Then, you can install the core crudel package

    npm install @crudel/server
    yarn add @crudel/server

### Usage

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
