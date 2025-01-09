import { getConfig } from "@/lib/get_configs";
import NavbarComponent from "./NavbarComponent";

export default async function Page() {
  const {
    website_name
  } = await getConfig('website_name')

  return <NavbarComponent 
    website_name={website_name}
  />
}