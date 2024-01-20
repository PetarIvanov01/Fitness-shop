import Card from "./components/Card";

export default function ItemsSection({ data }) {

    return (
        <section className="flex justify-center flex-wrap gap-6 pt-5 overflow-auto">

            {data?.map((products) => <Card key={products.product_id} {...products} />)}

        </section>
    );
};
