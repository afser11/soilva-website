type Props = {
  productName: string;
};

export default function ProductCTA({ productName }: Props) {
  const whatsapp = encodeURIComponent(`Hello Soilva, I want information about ${productName}.`);
  const distributor = encodeURIComponent("Hello Soilva, I am interested in becoming a distributor.");

  return (
    <section className="pd-final-cta">
      <span>From Soil to Soul</span>
      <h2>Every great meal begins with ingredients people can trust.</h2>
      <p>Connect with Soilva for product information, retail availability or distributor opportunities.</p>
      <div>
        <a href={`https://wa.me/919891985126?text=${whatsapp}`} target="_blank" rel="noopener noreferrer">
          Product enquiry
        </a>
        <a href={`https://wa.me/919891985126?text=${distributor}`} target="_blank" rel="noopener noreferrer">
          Become a distributor
        </a>
      </div>
    </section>
  );
}
