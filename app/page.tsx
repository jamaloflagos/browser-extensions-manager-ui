'use client'

import { useState } from "react";
import data from "../public/data.json";
import Card from './components/Card'
import Header from "./components/Header";

// interface ExtensionsType {
//   name: string;
//   description: string;
//   logo: string;
//   isActive: boolean;

// }
const Home = () => {
  
  const [filter, setfilter] = useState('all');
  const [extensions, setExtensions ] = useState([...data]);
  // const [filteredExtensions, setFilteredExtensions] = useState<ExtensionsType[]>([]);
  
  
  const filterExtensions = (filter: string) => {
    setfilter(filter);
  };

  const removeExtension = (index: number) => {
    setExtensions(
      (prevExtensions) => prevExtensions.filter((_, i) => i !== index)
    )
  };

  const toggleActive = (index: number) => {
    setExtensions(prevExtensions =>
      prevExtensions.map((ext) =>
        ext.id === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const filteredExtensions = extensions.filter(extension => {
    if (filter === 'all') return true;
    return filter === 'active' ? extension.isActive : !extension.isActive
  });
  

  // useEffect(() => {
  //   setFilteredExtensions(extensions);
  // }, [extensions]);

  // useEffect(() => {
  //   if (filter === 'All') {
  //     setFilteredExtensions([...extensions]);
  //   } else {
  //     setFilteredExtensions(
  //       extensions.filter((extension) => 
  //         filter === 'Active' ? extension.isActive : !extension.isActive
  //       )
  //     );
  //   }
  // }, [filter, extensions]);
  
  return (

<>
<Header />
<main>
<div className="flex flex-col items-center gap-6 mb-10 md:flex-row md:justify-between">
  <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">Extensions List</h1>
  <div className="flex gap-4">
  <button type="button" className={`px-4 py-2  rounded-full  text-xl cursor-pointer  ${filter === "all" ? "bg-red-700 text-white font-medium dark:bg-red-400 dark:text-neutral-900" : "border border-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-0 dark:border-neutral-600"}`} onClick={() => filterExtensions("all")}>All</button>
  <button className={`px-4 py-2  rounded-full  text-xl cursor-pointer  ${filter === "active" ? "bg-red-700 text-white font-medium dark:bg-red-400 dark:text-neutral-900" : "border border-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-0 dark:border-neutral-600"}`} onClick={() => filterExtensions("active")}>Active</button>
  <button className={`px-4 py-2  rounded-full  text-xl cursor-pointer  ${filter === "inactive" ? "bg-red-700 text-white font-medium dark:bg-red-400 dark:text-neutral-900" : "border border-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-0 dark:border-neutral-600"}`} onClick={() => filterExtensions("inactive")}>Inactive</button>
  </div>
</div>
<div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 ">
{filteredExtensions.map(({name, description, logo, isActive, id}) => (
        <Card 
          id={id}
          key={id}
          name={name}
          description={description}
          logo={logo}
          isActive={isActive}
          toggleActive={toggleActive}
          removeExtension={removeExtension}
        />
      ))}
</div>       
</main>
</>

  )
}

export default Home