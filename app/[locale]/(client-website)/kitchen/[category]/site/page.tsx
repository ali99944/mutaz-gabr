import KitchenSiteProjects from "./sites-container"

export default async function Page({ params }: {
  params: Promise<{ category: string }>
}) {
  return <KitchenSiteProjects sub_category={(await params).category} />
}