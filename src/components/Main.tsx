import { ChildrenType } from "@/types/ChildrenType"


export const Main = ({ children }: ChildrenType)=> {

    return(
        <main className="mt-8 lg:mt-0">
            {children}
        </main>
    )

}