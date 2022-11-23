export function Greeting() {
    
    // const married = true;
  
  
    return (
      <div>
        
      </div>
    );
  }

export function UserCard({name, amount, married, address, greet}){
  return <div>
    <h1>{name}</h1>
    <p>${amount}</p>
    <p>{married ? "married": "single"}</p>
    <ul>
      <li>city: {address.city}</li>
      <li>{address.street}</li>
    </ul>
    <p>{greet()}</p>
  </div>
}