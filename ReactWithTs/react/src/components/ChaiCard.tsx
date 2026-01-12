
interface ChaiCardProp{
    name: string;
    price: number;
    isSpecial?: boolean;
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProp){
  return (
    <div>
      <article>
        <h2>
          {name}{isSpecial && <span>⭐</span>}
        </h2>
      </article>
      <p>${price}</p>
    </div>
  );
}
