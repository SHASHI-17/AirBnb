"use client";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const Map = dynamic(() => import("../Map"), { ssr: false });

interface ListingInfoProps {
  user?: SafeUser;
  category?: {
    icon: IconType;
    label: string;
    description: string;
  };
  description: string;
  roomcount: number;
  guestCount: number;
  bathroonmCount: number;
  locationValue: string;
}

export default ({user,category,description,roomcount,guestCount,bathroonmCount,locationValue}: ListingInfoProps) => {

  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Host by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomcount} rooms</div>
          <div>{bathroonmCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};
