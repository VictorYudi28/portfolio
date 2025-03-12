
import { ChildrenType } from "@/types/ChildrenType"

export const Container = ({ children }: ChildrenType)=> {

    return(
        <div className="container mx-auto min-h-screen px-6 xl:px-0">
            {children}
        </div>
    )

}