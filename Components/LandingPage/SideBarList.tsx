export default function SideBarList({openList} : {openList : boolean}) {
    return (
        <section className={`absolute w-3xs min-h-full top-0  ${openList ? 'right-0' : 'right-[-300]'}  `}>

        </section>
    )
}