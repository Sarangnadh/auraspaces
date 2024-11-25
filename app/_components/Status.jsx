"use client"

import CountUp from "react-countup"

const stats =[
    {
        num:520,
        text:"Happy Homes"
    },
    {
        num:500,
        text:"Projects Completed"
    },
    {
        num:60 ,
        text:"Cities"
    },
  
    {
        num:3,
        text:"Countries"
    }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 bg-slate-300 mt-3">
        <h1 className="text-3xl font-bold sm:text-4xl text-center  text-sky-600">Why Choose Us</h1>
<div className="container mx-auto mt-2">
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none"> 
        {stats.map((item,index)=>{
            return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                <CountUp 
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length<15 ?"max-w-[100px" :"max-w-[150px]"} leading-sung text-black `}>{item.text}</p>
            </div>
            
        })}
    </div>
</div>
    </section>
  )
}

export default Stats