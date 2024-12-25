import Dao from "@/lib/prisma"

export async function GET () {
    const categories = await Dao.instance.category.findMany()
    return new Response(JSON.stringify(categories))
}