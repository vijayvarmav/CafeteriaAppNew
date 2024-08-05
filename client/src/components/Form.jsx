<div>
<h1>Create User</h1>
<form onSubmit={handleSubmit}>
    <label>Name</label> <br />
    <input required
    type="text"
    value={name}
    onChange={(e)=>{
        setName(e.target.value)
    }}
    /><br />
    <label>Order</label><br />
    <input required
    type="text"
    value={order}
    onChange={(e)=>{
        setOrder(e.target.value)
    }}
    /><br />

    <button type="submit">Submit</button>
</form>
</div>