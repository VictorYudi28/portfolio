import { ChildrenType } from "@/types/ChildrenType"


export const Header = ({ children }: ChildrenType)=> {

    return(
        <header className="min-h-20 flex items-center">
            {children}
        </header>
    )

}