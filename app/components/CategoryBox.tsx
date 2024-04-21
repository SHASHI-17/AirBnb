"use client";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox = ({ icon: Icon, label, selected }: CategoryBoxProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};
    
    if (params) {
      currentQuery = qs.parse(params.toString());
    //   console.log("inside callback",currentQuery);
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };
    // console.log(updatedQuery);
    

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center p-3 gap-2 border-b-2 hover:text-neutral-800 transition
     cursor-pointer ${
       selected ? " border-b-neutral-800" : " border-transparent"
     } 
     ${selected ? "text-neutral-800" : " text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
