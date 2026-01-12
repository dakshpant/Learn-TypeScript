import React, { useState } from "react";

interface OrderFormProps {
  OnSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ OnSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cup, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    OnSubmit({name,cup})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Chai Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        name=""
        id=""
      />
      <label htmlFor="">Cups</label>
      <input
        type="number"
        value={cup}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
        name=""
        id=""
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
