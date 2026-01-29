export default function WidthWrapper({children} : {children: React.ReactNode}) {
    return (
        <div className= "xl:min-w-[1250px] w-full xl:py-30 py-15 px-15 h-full bg-amber-500 text-center mx-auto ">{children}</div>
    )
}