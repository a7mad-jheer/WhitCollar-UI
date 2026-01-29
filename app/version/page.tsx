import {HeroTitle} from "@/Components/global/page";

export const Version = () => {
    return (
        <section className="flex justify-center items-center h-80">
            <HeroTitle title="Published" description="Version 1.0" paragraph ={<p className="text-gray-500">initial Whitecollar Webflow Template Released!</p>}/>
        </section>
    )
}

export default Version;