type Props = {
  params: Promise<{
    id: string;
    slug: string;
  }>;
};


export default async function ShopPage({
  params,
}: Props) {

  const { id, slug } = await params;
  return (
    <div>
      <h1>
        shop id: {id}
      </h1>

      <h2>
        shop slug: {slug}
      </h2>
    </div>
  );
}