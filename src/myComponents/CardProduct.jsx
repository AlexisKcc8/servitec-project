import { ButtonLinkWhatsApp } from "./ButtonLinkWhatsApp";

export const CardProduct = (props) => {
  const { productData } = props;

  const { image, name, titleImg, description, price } = productData;

  const imageUrl = `${window.location.origin}/imgs/products/${titleImg}`; // URL de la imagen en la carpeta public

  let message = `Hola👋, me gustaria adquirir el producto: ${name} ${imageUrl} `;

  return (
    <article className="card-product hover:cursor-pointer hover:scale-[1.03] hover:ease-in ease-in duration-300 w-[18rem] h-[36rem] text-center p-0 flex flex-col snap-center flex-shrink-0 rounded-lg border border-servitect-700 overflow-hidden">
      <header className="w-[100%] h-[60%] overflow-hidden">
        <img className="w-[100%] h-full" src={image} alt={`image-${name}`} />
      </header>
      <section className="p-4 h-[40%] flex flex-col justify-between items-center">
        <h3 className="font-bold text-xl">{name}</h3>
        <h5 className="text-servitect-700 text-2xl font-bold">${price}.00</h5>
        <p className="my-4 text-gray-700 overflow-hidden max-w-[15rem] text-ellipsis whitespace-pre-line line-clamp-1">
          {description}
        </p>
        <ButtonLinkWhatsApp message={message} title="ADQUIRIR" />
      </section>
    </article>
  );
};
