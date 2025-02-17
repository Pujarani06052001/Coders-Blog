import { fetchCategories } from "@/http";
import { ICollectionResponse } from "@/types";
import { AxiosResponse } from "axios";
import { ICategory } from "@/types";
import Link from "next/link";
const Home = async () => {
  // Fetch categories data directly in the async component
  const response: AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  const categories = response.data;

  console.log('categories', categories);
  

  return (
    <div className="my-8 flex items-center justify-between border-b-2 border-gray-100">
      <ul className="flex items-center">
        <li className="mr-6 pb-6 border-b-4 rounded-sm ">
          <Link href='#'>Recent</Link>
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
