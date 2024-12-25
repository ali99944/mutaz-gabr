import Dao from "@/lib/prisma";
import AdminCategories from "./AdminCategories";

export default async function Page () {
    const categories = await Dao.instance.category.findMany()
    return <AdminCategories initialCategories={categories} />
}