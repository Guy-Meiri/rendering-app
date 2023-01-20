import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  products: Product[];
}

interface Product {
  id: string;
  title: string;
}

export async function getStaticProps() {
  return {
    props: {
      products: [
        { id: "p1", title: "Product 1" },
        { id: "p1", title: "Product 2" },
        { id: "p3", title: "Product 3" },
      ],
    },
  };
}

export default function Home({ products }: Props) {
  return (
    <>
      {products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </>
  );
}
