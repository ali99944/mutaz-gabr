import KitchenDesigns from "./designs-container"

export default async function Page({ params }: {
  params: Promise<{ category: string }>
}) {
  return <KitchenDesigns sub_category={(await params).category} />
}