import { useEffect } from "react";
import { useAtom } from "jotai";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiPackage } from "react-icons/tfi";
import { BiCartDownload } from "react-icons/bi";
import { IoStarHalfOutline } from "react-icons/io5";
import { contentAtom } from "../../../atom/contentAtom";

export const DashboardSideBar = () => {

  const [contentAtomValue, setContentAtomValue] = useAtom(contentAtom);

  const sidebarData = [
    {
      icons: <LuLayoutDashboard className='w-6 h-6' />,
      name: "Dashboard",
    },
    {
      icons: <TfiPackage className='w-6 h-6' />,
      name: "Product",
    },
    {
      icons: <BiCartDownload className='w-6 h-6' />,
      name: "Orders",
    },
    {
      icons: <IoStarHalfOutline className='w-6 h-6' />,
      name: "Reviews",
    },
  ];

  useEffect(() => {
    setContentAtomValue(sidebarData[0].name);
  }, []);

  return (
    <nav className='w-full h-full flex'>
      <div className='flex flex-col items-center w-full'>
        <div className='mt-16 mb-16 flex flex-col gap-2 justify-center items-center w-full'>
          <div className='w-24 h-24 rounded-full bg-[#e8fdf4]'></div>
          <span className='text-md font-bold text-[#172539]'>Mark Fernando</span>
        </div>
        <div className='w-full ml-8'>
          {sidebarData.map((item, index) => (
            <button
              onClick={() => setContentAtomValue(item.name)}
              key={index}
              className={`w-full flex justify-start items-start gap-4 p-4 text-${contentAtomValue === item.name ? '[#63B38F]' : '[#c9c7c7]'} hover:text-[#63B38F] active:text-[#63B38F] focus:text-[#63B38F]`}
            >
              {item.icons}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
