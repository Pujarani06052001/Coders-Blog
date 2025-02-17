export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import { fetchCategories } from "@/http";
import { ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import { ICategory } from "@/types";
import Link from "next/link";

const Home = async () => {
  let categories: ICollectionResponse<ICategory[]> | null = null;

  try {
    // Fetch categories data directly in the async component
    const response: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
    categories = response.data; // Assuming response.data is the structure you want
  } catch (error) {
    console.error("Error fetching categories:", error);
    // Optionally handle the error by showing a message or fallback data
  }

  if (!categories) {
    return <p>Loading categories...</p>; // Loading or error message when categories are not fetched
  }

  return (
    <div className="my-8 flex items-center justify-between border-b-2 border-gray-100">
      <ul className="flex items-center">
        <li className="mr-6 pb-6 border-b-4 rounded-sm ">
          <Link href="#">Recent</Link>
        </li>
        {categories.data.map((category) => (
          <li className="mr-6 pb-6 border-b-4 rounded-sm" key={category.id}>
            <Link href={`/category/${category.Slug}`}>{category.Title}</Link>
          </li>
        ))}
      </ul>
      <h1 className="text-primary-dark">Welcome to coders blog!</h1>
    </div>
  );
};

export default Home;
